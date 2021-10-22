/* tslint:disable */
/* eslint-disable */

import React, { CSSProperties, SVGAttributes, FunctionComponent } from 'react';
import { getIconColor } from './helper';

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
  size?: number;
  color?: string | string[];
}

const DEFAULT_STYLE: CSSProperties = {
  display: 'block',
};

const KqZan1: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M300.251429 365.714286c23.917714 0 46.08-13.092571 59.026285-34.596572L490.861714 51.931429C509.001143 17.188571 541.403429 0 573.732571 0c33.792 0 67.510857 18.797714 84.992 55.954286 27.794286 59.465143 29.257143 129.097143 3.657143 189.732571L626.395429 365.714286h318.171428c50.834286 0 88.502857 50.614857 77.531429 103.936l-113.298286 487.643428c-8.045714 38.985143-40.228571 66.706286-77.531429 66.706286h-532.48V365.714286h1.462858z m-220.891429 0C35.620571 365.714286 0 422.473143 0 469.650286v487.643428c0 47.104 35.547429 66.706286 79.433143 66.706286h119.076571V365.714286H79.433143z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

KqZan1.defaultProps = {
  size: 18,
};

export default KqZan1;
