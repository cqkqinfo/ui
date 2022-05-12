/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Interpreter } from 'eval5';
// @ts-ignore
import webpackCaller from './webpackCaller';
import react from 'react';
import importOnlineCss from '../import-online-css';
import axios from '../axios';
import context from './context';

const toSelectors = (name: string) => {
  const names = name.split(' ');
  return names.map(function(name) {
    name = name.trim();
    return (
      name.replace(/([^a-z0-9])([a-z0-9])?/gi, function(v, c, l) {
        if (l)
          return c === ',' || c === ' ' ? l.toLowerCase() : l.toUpperCase();
        return '';
      }) + 'Class'
    );
  });
};

export default async ({
  host,
  path,
  css = true,
}: {
  host: string;
  path: string;
  css?: boolean;
}) => {
  let cssObj: any = {};
  if (css) {
    cssObj = await importOnlineCss({ host, path });
  }
  // console.log(cssObj);
  const reactModule = {
    ...react,
    default: react,
    // @ts-ignore
    createElement: (...arg) => {
      arg.forEach(item => {
        const cls = item?.className && toSelectors(item?.className);
        if (cls) {
          cls.forEach((name: any) => {
            item.style = item.style || {};
            item.style = {
              ...item.style,
              ...cssObj[name],
            };
          });
        }
      });
      // console.log('arg', arg);
      // @ts-ignore
      return react.createElement(...arg);
    },
  };
  const flatWebpackJson = (webpackJsonp: any) => {
    let result = {};
    webpackJsonp.forEach((arr: any) => {
      arr.forEach((item: any) => {
        if (typeof item === 'object' && !(item instanceof Array)) {
          result = {
            ...result,
            ...item,
          };
        }
      });
    });
    return result;
  };
  const window: any = {
    Object,
    Date,
    String,
    Number,
    Array,
    Math,
    console,
    webpackJsonp: context.webpackJsonp,
    parentWebpackJsonp: flatWebpackJson(context.webpackJsonp),
    react: reactModule,
    clearTimeout,
    clearInterval,
    setInterval,
    setTimeout,
  };
  const interpreter = new Interpreter({
    window,
    ...window,
    wx: context,
    my: context,
    getCurrentPages,
  });
  return axios(`${host}${path}.js`, {
    responseType: 'text',
  }).then(({ data: code }) => {
    // console.log(code);
    code = code.replace(
      /require\((["'])\.\/\.\.\/\.\.\/(runtime|remax-vendors|remax-styles)\.js(["'])\)([,;])/g,
      '',
    );
    interpreter.evaluate(code);
    interpreter.evaluate(`
      window.webpackCaller = ${webpackCaller.toString()}
    `);
    return window.webpackCaller(
      flatWebpackJson(window.webpackJsonp),
      `./src${path}.tsx`,
    );
  });
};
