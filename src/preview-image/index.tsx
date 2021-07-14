import { Options } from './index.wechat';
import ReactDOM from 'react-dom';
import { PhotoSlider } from 'react-photo-view';
import 'react-photo-view/dist/index.css';
import React from 'react';
import './index.less';

export default ({ urls, current }: Options) => {
  const dom = document.createElement('div');
  ReactDOM.render(
    <PhotoSlider
      images={urls.map(item => ({ src: item }))}
      visible
      onClose={() => {
        ReactDOM.unmountComponentAtNode(dom);
      }}
    />,
    dom,
  );
};
