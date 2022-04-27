import React from 'react';
import Space from '../space';
import Button from '../button';
import styles from './index.module.less';
import classnames from 'classnames';

interface Props {
  /**
   * 当前页码
   */
  current: number;
  /**
   * 总页数
   */
  total: number;
  /**
   * 改变事件
   */
  onChange: (page: number) => void;
  className?: string;
  /**
   * 数字类名
   */
  numberCls?: string;
  /**
   * 按钮类名
   */
  buttonCls?: string;
  /**
   * 按钮禁用时的类名
   */
  buttonDisabledCls?: string;
  style?: React.CSSProperties;
}

export default ({
  total,
  current,
  onChange,
  className,
  buttonCls,
  buttonDisabledCls,
  style,
}: Props) => {
  const renderNumber = (page: number) => {
    if (page > total) return null;
    return (
      <Space
        className={classnames(styles.number, current === page && styles.active)}
        onTap={() => onChange(page)}
        key={page}
      >
        {page}
      </Space>
    );
  };
  const max = 5;
  const preDisabled = current <= 1;
  const nextDisabled = current >= total;
  const showLeft = current > max;
  const showRight =
    total > max &&
    current <= total - (total % max) &&
    (!!(total % max) || current < total - max + 1);
  return (
    <Space size={23} alignItems={'center'} className={className} style={style}>
      <Button
        type={'attract'}
        block={false}
        size={'action'}
        disabled={preDisabled}
        onTap={() => onChange(current - 1)}
        className={classnames(buttonCls, preDisabled && buttonDisabledCls)}
      >
        上一页
      </Button>
      {showLeft && (
        <Space size={10} alignItems={'center'}>
          {renderNumber(1)}
          <Space
            className={styles.number}
            onTap={() => {
              const newCurrent = current - max;
              onChange(newCurrent < 1 ? 1 : newCurrent);
            }}
          >
            {'<<'}
          </Space>
        </Space>
      )}
      {Array.from({ length: max }, (_, index) =>
        renderNumber(index + 1 + Math.floor((current - 1) / max) * max),
      )}
      {showRight && (
        <Space size={10} alignItems={'center'}>
          <Space
            className={styles.number}
            onTap={() => {
              const newCurrent = current + max;
              onChange(newCurrent > total ? total : newCurrent);
            }}
          >
            {'>>'}
          </Space>
          {renderNumber(total)}
        </Space>
      )}
      <Button
        disabled={nextDisabled}
        type={'attract'}
        block={false}
        size={'action'}
        className={classnames(buttonCls, nextDisabled && buttonDisabledCls)}
        onTap={() => onChange(current + 1)}
      >
        下一页
      </Button>
    </Space>
  );
};
