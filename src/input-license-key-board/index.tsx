import React, {
  forwardRef,
  useState,
  useRef,
  useImperativeHandle,
} from 'react';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
import { usePropsValue } from 'antd-mobile/es/utils/use-props-value';
import {
  NativeProps,
  withNativeProps,
} from 'antd-mobile/es/utils/native-props';
import { useIsomorphicLayoutEffect } from 'ahooks';
import { LicenseKeyBoard, Icon } from '@kqinfo/ui';
import { LicenseKeyBoardProps } from '../license-key-board';
import classnames from 'classnames';
import styles from './index.module.less';

type NativeInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type InputLicenseKeyBoardProps = Pick<
  NativeInputProps,
  | 'autoComplete'
  | 'pattern'
  | 'inputMode'
  | 'type'
  | 'onFocus'
  | 'onBlur'
  | 'autoCapitalize'
  | 'autoCorrect'
  | 'onKeyDown'
  | 'onKeyUp'
  | 'onCompositionStart'
  | 'onCompositionEnd'
> & {
  value?: string;
  defaultValue?: string;
  onChange?: (val: string) => void;
  placeholder?: string;
  disabled?: boolean;
  clearable?: boolean;
  onClear?: () => void;
  id?: string;
  onEnterPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  enterKeyHint?:
    | 'enter'
    | 'done'
    | 'go'
    | 'next'
    | 'previous'
    | 'search'
    | 'send';
} & LicenseKeyBoardProps &
  NativeProps<
    '--font-size' | '--color' | '--placeholder-color' | '--text-align'
  >;

const defaultProps = {
  defaultValue: '',
};

export type InputLicenseKeyBoardRef = {
  clear: () => void;
  focus: () => void;
  blur: () => void;
};

const InputLicenseKeyBoard = forwardRef<
  InputLicenseKeyBoardRef,
  InputLicenseKeyBoardProps
>((p, ref) => {
  const props = mergeProps(defaultProps, p);
  const [value, setValue] = usePropsValue(props);
  const [hasFocus, setHasFocus] = useState(false);
  const nativeInputRef = useRef<HTMLInputElement>(null);
  const [visible, setVisible] = useState<boolean>(false);
  useImperativeHandle(ref, () => ({
    clear: () => {
      setValue('');
    },
    focus: () => {
      nativeInputRef.current?.focus();
    },
    blur: () => {
      nativeInputRef.current?.blur();
    },
  }));

  useIsomorphicLayoutEffect(() => {
    if (!props.enterKeyHint) return;
    nativeInputRef.current?.setAttribute('enterkeyhint', props.enterKeyHint);
    return () => {
      nativeInputRef.current?.removeAttribute('enterkeyhint');
    };
  }, [props.enterKeyHint]);

  const onClose = () => {
    setVisible(false);
  };
  const onInput = (v: string) => {
    setValue(value + v);
  };

  const onDelete = () => {
    setValue(value.slice(0, value.length - 1));
  };

  return withNativeProps(
    props,
    <div
      className={classnames(
        styles.inputLicenseKeyBoard,
        props.disabled && styles.inputLicenseKeyBoardDisabled,
        props.className,
      )}
      onClick={() => !props.disabled && setVisible(true)}
    >
      <input
        ref={nativeInputRef}
        className={`-element`}
        value={value}
        onChange={e => {
          setValue(e.target.value);
        }}
        onFocus={e => {
          setHasFocus(true);
          props.onFocus?.(e);
        }}
        onBlur={e => {
          setHasFocus(false);
          props.onBlur?.(e);
        }}
        id={props.id}
        placeholder={props.placeholder}
        disabled={props.disabled}
        autoComplete={props.autoComplete}
        pattern={props.pattern}
        inputMode={props.inputMode}
        autoCapitalize={props.autoCapitalize}
        autoCorrect={props.autoCorrect}
        onKeyUp={props.onKeyUp}
        onCompositionStart={props.onCompositionStart}
        onCompositionEnd={props.onCompositionEnd}
        readOnly={true}
      />
      {props.clearable && !!value && (
        <div
          className={styles.inputLicenseKeyBoardClear}
          onMouseDown={e => {
            e.preventDefault();
          }}
          onClick={e => {
            e.stopPropagation();
            setValue('');
            props.onClear?.();
          }}
        >
          <Icon name={'kq-clear2'} size={34} color={'#ccc'} />
        </div>
      )}
      <LicenseKeyBoard
        visible={visible}
        value={value}
        title={props.title}
        confirmText={props.confirmText}
        safeArea={props.safeArea}
        onClose={onClose}
        onInput={onInput}
        onDelete={onDelete}
      />
    </div>,
  );
});

export default InputLicenseKeyBoard;
