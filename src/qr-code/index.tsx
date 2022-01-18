import QrCode from './one';
import QrCodeProps from './one/common';
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import Modal from './modal';
import { SheetInstance } from '../sheet';

export { default as QrCodeProps } from './one/common';

export default forwardRef(
  ({ showModal, modalTitle, onTap, ...props }: QrCodeProps, ref) => {
    const innerRef = useRef<SheetInstance>(null);
    useImperativeHandle(ref, () => innerRef.current, [innerRef]);
    return (
      <>
        <QrCode
          {...props}
          onTap={e => {
            if (showModal) {
              innerRef.current?.setVisible(true);
            }
            onTap?.(e);
          }}
        />
        {showModal && (
          <Modal ref={innerRef} content={props.content} title={modalTitle} />
        )}
      </>
    );
  },
);
