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

const KqZhengque: FunctionComponent<Props> = ({
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
        d="M766.93504 445.24805688L487.89731555 716.27582578c0 0.02423467-0.02423467 0.02423467-0.0485831 0.02423466L485.05742222 719.01866666l-0.31550577-0.26703644c-11.40815645 9.68476445-25.53480533 14.70919111-39.78274134 14.660608-15.55876978 0.04858311-31.11742578-5.655552-42.93825422-17.16076089l-150.19884089-145.902592c-23.61719467-22.88901689-23.61719467-60.050432 0-82.96368355 23.56872533-22.88901689 61.82229333-22.88901689 85.41525333 0l107.721728 104.63914666 236.56072534-229.81290666c23.59296-22.88901689 61.87087645-22.84054755 85.41525333 0C790.55223467 385.17339022 790.55223467 422.33480533 766.93504 445.24805688zM505.93188978 994.53690311c268.11505778 0 485.45188978-217.336832 485.45188977-485.45188978s-217.336832-485.45188978-485.45188977-485.45188978-485.45188978 217.336832-485.45188978 485.45188978S237.816832 994.53690311 505.93188978 994.53690311z"
        fill={getIconColor(color, 0, '#515151')}
      />
    </svg>
  );
};

KqZhengque.defaultProps = {
  size: 18,
};

export default KqZhengque;
