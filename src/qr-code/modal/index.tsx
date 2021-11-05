import { Button, QrCode, Sheet, showTabBar, Space } from '@kqinfo/ui';
import styles from './index.module.less';
import React, { forwardRef } from 'react';
import { SheetInstance } from '../../sheet';

export default forwardRef<
  SheetInstance,
  { title?: React.ReactNode; content: string }
>(({ title, content }, ref) => {
  return (
    <Sheet ref={ref} center>
      <Space vertical size={20} className={styles.modal} alignItems={'center'}>
        {title}
        <QrCode content={content} className={styles.modalImg} />
        <Space alignSelf={'stretch'}>
          <Button
            ghost
            type={'primary'}
            onTap={() => {
              (ref as any).current?.setVisible(false);
              showTabBar();
            }}
          >
            关闭
          </Button>
        </Space>
      </Space>
    </Sheet>
  );
});
