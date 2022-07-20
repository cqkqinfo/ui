import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Input from './native-ali';
import useInput, { UseInputOption } from '../re-input/useInput';
import plainStyle from '@remax/one/esm/useWebPlaceholderStyle/plainStyle';

export type Props = UseInputOption;

export default (props: UseInputOption) => {
  const {
    style,
    placeholderStyle,
    value,
    className,
    placeholder,
    focus,
    onBlur,
    onInput,
    onFocus,
    autoHeight,
    adjustPosition,
    disableDefaultPadding,
    cursorSpacing,
    defaultValue,
    disabled,
    maxLength,
    password,
    confirmType,
    confirmHold,
    showConfirmBar,
    type,
    placeholderClassName,
    delay,
    onConfirm,
  } = useInput(props);
  return (
    <Input
      style={plainStyle(style)}
      value={value}
      onChange={onInput}
      onFocus={onFocus}
      onBlur={onBlur}
      onConfirm={onConfirm}
      className={className}
      delay={delay}
      placeholder={placeholder}
      focus={focus}
      placeholderStyle={plainStyle(placeholderStyle)}
      autoHeight={autoHeight}
      adjustPosition={adjustPosition}
      disableDefaultPadding={disableDefaultPadding}
      cursorSpacing={cursorSpacing}
      defaultValue={defaultValue}
      placeholderClassName={placeholderClassName}
      disabled={disabled}
      maxLength={maxLength}
      password={password}
      confirmType={confirmType}
      confirmHold={confirmHold}
      showConfirmBar={showConfirmBar}
      type={type}
    />
  );
};
