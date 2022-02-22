import React, { useRef, useState } from 'react';
import { Space, Native, PartTitle } from '@kqinfo/ui';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { NativeInstance } from '@kqinfo/ui/es/native';
import styles from './index.module.less';
import classnames from 'classnames';

const limit = 100;

const listData = new Array(limit).fill(0).map((_, index) => ({
  index,
  list: new Array(limit)
    .fill(0)
    .map((_, index2) => ({ index: index * limit + index2 })),
}));

const Demo1 = () => {
  const [current, setCurrent] = useState(0);
  const [rightCurrent, setRightCurrent] = useState(0);
  return (
    <Space className={styles.wrap}>
      <Space vertical className={styles.left}>
        {listData.map(({ index }) => (
          <Space
            key={index}
            className={classnames(
              styles.item,
              current === index && styles.active,
            )}
            onTap={() => setCurrent(index)}
          >
            {index}
          </Space>
        ))}
      </Space>
      <Space
        flexWrap={'wrap'}
        flex={1}
        ignoreNum={5}
        className={styles.right}
        size={10}
      >
        {listData[current].list.map(({ index }) => (
          <Space
            className={classnames(
              styles.item,
              rightCurrent === index && styles.active,
            )}
            key={index}
            onTap={() => {
              setRightCurrent(index);
            }}
          >
            {index}
          </Space>
        ))}
      </Space>
    </Space>
  );
};

const Demo2 = () => {
  const [current, setCurrent] = useState(0);
  const leftRefs = useRef<(NativeInstance | null)[]>([]);
  leftRefs.current = [];
  const [rightCurrent, setRightCurrent] = useState(0);
  const rightRefs = useRef<(NativeInstance | null)[]>([]);
  rightRefs.current = [];
  return (
    <Space className={styles.wrap}>
      <Space vertical className={styles.left}>
        {listData.map(({ index }) => {
          const getCls = (current: number) =>
            classnames(styles.item, current === index && styles.active);
          return (
            <Native
              key={index}
              ref={ref => (leftRefs.current[index] = ref)}
              initData={{ className: getCls(current) }}
              onTap={() => {
                // 取消原来的active状态
                leftRefs.current[current]?.setData({
                  className: getCls(current),
                });
                // 设置新的的active状态
                leftRefs.current[index]?.setData({ className: getCls(index) });
                setCurrent(index);
              }}
            >
              {index}
            </Native>
          );
        })}
      </Space>
      <Space
        flexWrap={'wrap'}
        flex={1}
        ignoreNum={5}
        className={styles.right}
        size={10}
      >
        {listData[current].list.map(({ index }) => {
          const getCls = (rightCurrent: number) =>
            classnames(styles.item, rightCurrent === index && styles.active);
          return (
            <Space
              key={index}
              onTap={() => {
                // 取消原来的active状态
                rightRefs.current[rightCurrent]?.setData({
                  className: getCls(rightCurrent),
                });
                // 设置新的的active状态
                rightRefs.current[index]?.setData({ className: getCls(index) });
                setRightCurrent(index);
              }}
            >
              <Native
                ref={ref => (rightRefs.current[index] = ref)}
                initData={{ className: getCls(rightCurrent) }}
              >
                {index}
              </Native>
            </Space>
          );
        })}
      </Space>
    </Space>
  );
};

export default () => {
  return (
    <Space vertical size={'10px'}>
      <PartTitle>传统的写法</PartTitle>
      <Demo1 />
      <PartTitle>优化后的写法</PartTitle>
      <Demo2 />
    </Space>
  );
};
