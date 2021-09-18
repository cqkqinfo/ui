import React, { useState } from 'react';
import FormItem from './index';
import Form from '../form';
import Radio from '../radio';
import Space from '../space';
import { sleep } from '../_utils';
import { fireEvent, render } from '@testing-library/react';
import { RuleType } from 'rc-field-form/es/interface';

const validator = async ({
  type,
  label,
  value,
}: {
  type: RuleType | 'phone' | 'idCard';
  label: string;
  value: string;
}) => {
  const App = () => {
    const [form] = Form.useForm();
    const [isFinish, setIsFinish] = useState(false);
    return (
      <Space>
        {isFinish ? 'finished' : ''}
        <Form form={form} cell onFinish={() => setIsFinish(true)}>
          <FormItem
            label={label}
            name={'idCard'}
            rules={[
              {
                type,
              },
              {
                required: true,
                message: `请输入${label}`,
              },
            ]}
          >
            <input placeholder={`请输入${label}`} />
          </FormItem>
        </Form>
        <div onClick={() => form.submit()}>提交</div>
      </Space>
    );
  };
  const { getByText, getByPlaceholderText } = render(<App />);
  const btn = getByText('提交');
  const input = getByPlaceholderText(`请输入${label}`);

  btn.click();
  await sleep();
  expect(getByText(`请输入${label}`));

  fireEvent.change(input, {
    target: { value: '23' },
  });
  btn.click();
  await sleep();
  expect(getByText(`请输入正确的${label}`));

  fireEvent.change(input, {
    target: { value },
  });
  btn.click();
  await sleep();
  expect(getByText('finished'));
};

describe('表单项', () => {
  it('渲染', () => {
    const { baseElement } = render(
      <Form cell onFinish={console.log}>
        <FormItem label={'号码类型'} name={'type'} initialValue={1}>
          <Radio.Group>
            <Radio value={1}>身份证</Radio>
            <Radio value={2}>手机号</Radio>
          </Radio.Group>
        </FormItem>
        <FormItem noStyle shouldUpdate>
          {(_, __, { getFieldValue }) => (
            <FormItem
              label={getFieldValue('type') === 1 ? '身份证号' : '手机号'}
              name={'number'}
              rules={[
                {
                  type: getFieldValue('type') === 1 ? 'idCard' : 'phone',
                  required: true,
                },
              ]}
            />
          )}
        </FormItem>
      </Form>,
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('身份证验证', () =>
    validator({
      type: 'idCard',
      value: '511602199808247696',
      label: '身份证号码',
    }));

  it('手机号验证', () =>
    validator({
      type: 'phone',
      value: '18580027047',
      label: '手机号',
    }));
});
