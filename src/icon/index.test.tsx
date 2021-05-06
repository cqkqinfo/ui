import React from 'react';
import Icon from './index';
import TestRenderer from 'react-test-renderer';

describe('图标', () => {
  it('渲染', () => {
    const tree = TestRenderer.create(<Icon name={'kq-add'} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
