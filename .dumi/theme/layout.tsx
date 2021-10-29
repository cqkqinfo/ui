import React from 'react';
import Layout from 'dumi-theme-mobile/src/layouts';
import './layout.less';
import { CopyrightCircleOutlined } from '@ant-design/icons';
import Generate from './generate';

export default ({ children, ...props }: any) => (
  <Layout
    {...props}
    children={
      <>
        {props.location.pathname.includes('/generate') ? (
          <Generate />
        ) : (
          children
        )}
        <div
          style={{
            color: 'rgba(0,0,0,.45)',
            width: '100%',
            textAlign: 'center',
            marginTop: 100,
          }}
        >
          Copyright <CopyrightCircleOutlined /> 凯桥前端部
        </div>
      </>
    }
  />
);
