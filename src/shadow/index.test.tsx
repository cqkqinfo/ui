import React from 'react';
import Shadow from './index';
import { render } from '@testing-library/react';
import { View } from 'remax/one';

describe('阴影', () => {
  it('渲染', () => {
    const { baseElement } = render(
      <Shadow>
        <View>233</View>
      </Shadow>,
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('卡片模式', () => {
    const { baseElement } = render(
      <Shadow card>
        <View>233</View>
      </Shadow>,
    );

    expect(baseElement).toMatchSnapshot();
  });
});
