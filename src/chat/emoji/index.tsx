import React, { useMemo } from 'react';
import Space from '../../space';
import { Text } from 'remax/one';
import styles from './index.module.less';

const emojis = [
  '😀',
  '😁',
  '😂',
  '😃',
  '😄',
  '😅',
  '😆',
  '😉',
  '😊',
  '😋',
  '😎',
  '😇',
  '😐',
  '😑',
  '😶',
  '😏',
  '😣',
  '😥',
  '😮',
  '😯',
  '😪',
  '😫',
  '😴',
  '😌',
  '😛',
  '😜',
  '😝',
  '😒',
  '😓',
  '😔',
  '😕',
  '😲',
  '😷',
  '😖',
  '😞',
  '😟',
  '😢',
  '😭',
  '😦',
  '😧',
  '😨',
  '😬',
  '😰',
  '😱',
  '😳',
  '😵',
  '💪',
  '👋',
  '👏',
  '👌',
  '👍',
];

export default ({ onChange }: { onChange: (value: string) => void }) => {
  const arr = useMemo(() => {
    const arr: string[][] = [];
    emojis.forEach((item, index) => {
      if (index % 8 === 0) {
        arr.push([...emojis].splice(index, 8));
      }
    });
    return arr;
  }, []);
  return (
    <Space vertical>
      {arr.map((item, index) => (
        <Space key={index} className={styles.row}>
          {item.map(i => (
            <Text className={styles.item} key={i} onTap={() => onChange(i)}>
              {i}
            </Text>
          ))}
        </Space>
      ))}
    </Space>
  );
};
