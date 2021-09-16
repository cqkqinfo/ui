import React from 'react';
import Form from './index';
import FormItem from '../form-item';
import { render } from '@testing-library/react';

describe('表单', () => {
  it('渲染', () => {
    const { baseElement } = render(
      <Form>
        <FormItem name={'a'} label={'姓名'} />
        <FormItem
          name={'b'}
          rules={[{ required: true, type: 'phone' }]}
          label={'手机号'}
        />
      </Form>,
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('cell模式', () => {
    const { baseElement } = render(
      <Form cell>
        <FormItem name={'a'} label={'姓名'} />
        <FormItem
          name={'b'}
          rules={[{ required: true, type: 'phone' }]}
          label={'手机号'}
        />
      </Form>,
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('card模式', () => {
    const { baseElement } = render(
      <Form card>
        <FormItem name={'a'} label={'姓名'} />
        <FormItem
          name={'b'}
          rules={[{ required: true, type: 'phone' }]}
          label={'手机号'}
        />
      </Form>,
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('两端对齐', () => {
    const { baseElement } = render(
      <Form labelWidth={'3em'}>
        <FormItem name={'a'} label={'姓名'} />
        <FormItem
          name={'b'}
          rules={[{ required: true, type: 'phone' }]}
          label={'手机号'}
        />
      </Form>,
    );

    expect(baseElement).toMatchSnapshot();
  });
});
