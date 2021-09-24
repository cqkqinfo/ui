import React from 'react';
import Layout from 'dumi-theme-mobile/src/layouts';
import './layout.less';
import { CopyrightCircleOutlined } from '@ant-design/icons';

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
          Copyright <CopyrightCircleOutlined /> 重庆凯桥信息技术有限公司
        </div>
      </>
    }
  />
);
