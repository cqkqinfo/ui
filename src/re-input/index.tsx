import React from 'react';
import { Input } from 'remax/one';
import useInput, { UseInputOption } from './useInput';
import styles from './index.module.less';
import classNames from 'classnames';

export type Props = UseInputOption;

export default (props: UseInputOption) => {
  const newProps = useInput(props);
  return (
    <Input
      {...newProps}
      className={classNames(styles.web, newProps.className)}
      /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
      // @ts-ignore
      enterKeyHint={newProps.confirmType}
    />
  );
};
