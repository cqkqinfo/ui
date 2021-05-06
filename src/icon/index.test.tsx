import React from 'react';
import Icon from './index';
import { render } from '@testing-library/react';

describe('图标', () => {
  it('渲染', () => {
    const { baseElement } = render(<Icon name={'kq-add'} />);

    expect(baseElement).toMatchSnapshot();
  });
});
