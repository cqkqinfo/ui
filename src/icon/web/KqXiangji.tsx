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

const KqXiangji: FunctionComponent<Props> = ({
  size,
  color,
  style: _style,
  ...rest
}) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg
      viewBox="0 0 1024 1024"
      width={size + 'px'}
      height={size + 'px'}
      style={style}
      {...rest}
    >
      <path
        d="M996.94835126 196.55654917h-76.70061396v-25.56163434c0-14.06125553-11.51608972-25.56163436-25.56163436-25.56163435h-51.13897957c-14.06125553 0-25.56163436 11.51608972-25.56163436 25.56163435v25.56163434h-51.13897961l-102.26224829-102.2622483H357.76609438l-102.26224829 102.2622483H25.38629334c-14.06125553 0-25.56163436 11.51608972-25.56163434 25.56163435v664.75960211c0 14.06125553 11.51608972 25.56163436 25.56163434 25.56163437h971.56205792c14.06125553 0 25.56163436-11.51608972 25.56163434-25.56163437V222.13389443c0.01571091-14.06125553-11.50037883-25.57734525-25.56163434-25.57734526z m-485.78102896 613.62062252c-141.24099126 0-255.67918709-114.42248492-255.67918711-255.6791871s114.42248492-255.67918709 255.67918711-255.67918713c141.24099126 0 255.67918709 114.42248492 255.6791871 255.67918713s-114.43819583 255.67918709-255.6791871 255.6791871z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M402.69141302 662.98646257a153.40122789 153.40122789 0 1 0 216.93924982-216.94553419 153.40122789 153.40122789 0 1 0-216.93924982 216.94553419z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

KqXiangji.defaultProps = {
  size: 18,
};

export default KqXiangji;
