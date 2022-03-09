import React from 'react';
import { navigateTo } from 'remax/one';
import { Props } from './index';

export default ({
  // appId = getAccountInfoSync().miniProgram.appId,
  path,
  onLaunch,
  children,
  style,
  ...props
}: Props) => {
  return children
    ? React.cloneElement(children, {
        ...children.props,
        ...props,
        style: {
          ...children.props?.style,
          ...style,
        },
        onTap: (e: any) => {
          children.props.onTap?.(e);
          if (path) {
            // if (appId === getAccountInfoSync().miniProgram.appId) {
            navigateTo({ url: path }).then(onLaunch);
            // } else {
            //   navigateToMiniProgram({
            //     appId,
            //     path,
            //   }).then(onLaunch);
            // }
          }
        },
      })
    : children;
};
