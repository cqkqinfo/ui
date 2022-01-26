import React from 'react';
import Picker from './index';
import data from '../address-options';
import { render, fireEvent } from '@testing-library/react';
import dayjs from 'dayjs';

describe('picker选择器', () => {
  it('渲染', () => {
    const { baseElement } = render(
      <Picker cols={3} data={data}>
        显示
      </Picker>,
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('城市选择', async () => {
    const { getByText, baseElement } = render(
      <Picker
        cols={3}
        data={data}
        onChange={v => {
          // expect(v).toEqual(['11', '1101', '110101']);
        }}
      >
        <div>显示</div>
      </Picker>,
    );
    const children = getByText('显示');
    fireEvent.click(children);
    fireEvent.click(getByText('确定'));
    expect(baseElement).toMatchSnapshot();
  });

  it('日期选择', async () => {
    const { getByText } = render(
      <Picker mode={'date'}>
        <div>显示</div>
      </Picker>,
    );
    const children = getByText('显示');
    fireEvent.click(children);
    fireEvent.click(getByText('确定'));
    expect(getByText(dayjs().format('YYYY-MM-DD')));
  });

  it('时间选择', async () => {
    const time = dayjs().format('HH:mm');
    const { getByText } = render(
      <Picker mode={'time'}>
        <div>显示</div>
      </Picker>,
    );
    const children = getByText('显示');
    fireEvent.click(children);
    fireEvent.click(getByText('确定'));
    // expect(getByText(time));
  });
});
