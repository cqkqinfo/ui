import React from 'react';
import Radio from './index';
import { render } from '@testing-library/react';

describe('radio', () => {
  it('渲染', () => {
    const { baseElement } = render(
      <Radio.Group>
        {[
          { value: '1', label: '西瓜' },
          { value: '2', label: '香蕉' },
          { value: '3', label: '苹果' },
          { value: '4', label: '桔子' },
          { value: '5', label: '芒果' },
          { value: '6', label: '甘蔗' },
          { value: '7', label: '火龙果' },
        ].map(item => (
          <Radio value={item.value} key={item.value}>
            {item.label}
          </Radio>
        ))}
      </Radio.Group>,
    );

    expect(baseElement).toMatchSnapshot();
  });
});
