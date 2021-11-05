import QrCode from './one';
import QrCodeProps from './one/common';
import React, { useRef } from 'react';
import Modal from './modal';
import { SheetInstance } from '../sheet';

export { default as QrCodeProps } from './one/common';

export default ({ showModal, modalTitle, onTap, ...props }: QrCodeProps) => {
  const ref = useRef<SheetInstance>(null);
  return (
    <>
      <QrCode
        {...props}
        onTap={e => {
          if (showModal) {
            ref.current?.setVisible(true);
          }
          onTap?.(e);
        }}
      />
      {showModal && (
        <Modal ref={ref} content={props.content} title={modalTitle} />
      )}
    </>
  );
};
