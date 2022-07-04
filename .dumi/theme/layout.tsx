import React from 'react';
import Layout from 'dumi-theme-mobile/src/layouts';
import './layout.less';
import 'antd-mobile/es/global';

export default ({ children, ...props }: any) => (
  <Layout
    {...props}
    children={
      <>
        {children}
        <div
          style={{
            color: 'rgba(0,0,0,.45)',
            width: '100%',
            textAlign: 'center',
            marginTop: 100,
          }}
        >
          Copyright ©️ 凯桥前端部
        </div>
      </>
    }
  />
);
