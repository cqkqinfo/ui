import * as React from 'react';
import { PopupProps } from 'antd-mobile/es/components/popup';
import {
  NativeProps,
  withNativeProps,
} from 'antd-mobile/es/utils/native-props';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
import { useMemo, useRef, TouchEvent, MouseEvent } from 'react';
import { useMemoizedFn } from 'ahooks';
import { Popup, SafeArea } from 'antd-mobile';
import { Icon, Rotate } from '@kqinfo/ui';
import classNames from 'classnames';
import './index.module.less';

export type LicenseKeyBoardProps = {
  visible?: boolean;
  title?: string;
  value?: string;
  confirmText?: string | null;
  showCloseButton?: boolean;
  onInput?: (v: string) => void;
  onDelete?: () => void;
  onClose?: () => void;
  onConfirm?: () => void;
  afterShow?: () => void;
  afterClose?: () => void;
  closeOnConfirm?: boolean;
  safeArea?: boolean;
} & Pick<PopupProps, 'stopPropagation'> &
  NativeProps;

const defaultProps = {
  defaultVisible: false,
  showCloseButton: true,
  confirmText: null,
  closeOnConfirm: true,
  safeArea: true,
  value: '',
};

const classPrefix = 'kq-license-keyboard';

const LicenseKeyBoard: React.FC<LicenseKeyBoardProps> = p => {
  const props = mergeProps(defaultProps, p);
  const {
    visible,
    title,
    value,
    confirmText,
    showCloseButton,
    onInput,
  } = props;

  const keyboardRef = useRef<HTMLDivElement | null>(null);

  const keys = useMemo(() => {
    const defaultKeys = '京沪粤津浙苏湘渝云豫皖陕桂新青琼闽蒙辽宁鲁晋吉冀黑甘鄂赣贵川藏民使领警学港澳'.split(
      '',
    );
    defaultKeys.push('BACKSPACE');
    return defaultKeys;
  }, []);

  const smallVehicleNewEnergy = '1234567890';
  const newEnergyLetter = 'ABCDEFGHJK';
  const newEnergyLetterReg = new RegExp(`[${newEnergyLetter}]`);
  /**
   新能源车牌号规则：
   https://zh.wikipedia.org/wiki/中华人民共和国民用机动车号牌#新能源汽车号牌
   */
  const isNewEnergyPlate = (plate: string): false | string => {
    if (isNewEnergyBigVehicle(plate)) {
      return newEnergyLetter;
    } else if (isNewEnergySmallVehicle(plate)) {
      return smallVehicleNewEnergy;
    }
    return false;
  };

  const isNewEnergySmallVehicle = (plate: string) =>
    newEnergyLetterReg.test(plate[2]) && /^[0-9]+$/.test(plate.slice(4, 7));

  const isNewEnergyBigVehicle = (plate: string) =>
    /^[0-9]+$/.test(plate.slice(2, 7));

  const numberKeys = smallVehicleNewEnergy.split('');
  const letterKeys = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('');
  letterKeys.push('OK');
  const specialKeys = '港澳警领应学挂'.split('');
  specialKeys.push('BACKSPACE');

  const timeoutRef = useRef(-1);
  const intervalRef = useRef(-1);

  const onDelete = useMemoizedFn(() => {
    props.onDelete?.();
  });
  const onBackspacePressStart = () => {
    timeoutRef.current = window.setTimeout(() => {
      onDelete();
      intervalRef.current = window.setInterval(onDelete, 150);
    }, 700);
  };
  const onBackspacePressEnd = () => {
    clearTimeout(timeoutRef.current);
    clearInterval(intervalRef.current);
  };

  // 点击键盘按键
  const onKeyPress = (
    e: TouchEvent<HTMLDivElement> | MouseEvent<HTMLDivElement>,
    key: string,
  ) => {
    e.preventDefault();

    switch (key) {
      case 'BACKSPACE':
        onDelete?.();
        break;
      case 'OK':
        props.onConfirm?.();
        if (props.closeOnConfirm) {
          props.onClose?.();
        }
        break;
      default:
        if (key !== '') onInput?.(key);
        break;
    }
  };

  // 渲染 title 和 close button
  const renderHeader = () => {
    if (!showCloseButton && !title) return null;
    return (
      <div
        className={classNames(`${classPrefix}-header`, {
          'with-title': !!title,
        })}
      >
        {title && <div className={`${classPrefix}-title`}>{title}</div>}
        {showCloseButton && (
          <span
            className={`${classPrefix}-header-close-button`}
            onClick={() => {
              props.onClose?.();
            }}
            role="button"
            title="CLOSE"
          >
            <Rotate angle={90}>
              <Icon name={'kq-right'} size={32} color={'#999999'} />
            </Rotate>
          </span>
        )}
      </div>
    );
  };

  // 渲染基础键盘按键
  const renderKey = (key: string) => {
    const isNumberKey = /^\d$/.test(key);
    const isSpecialCharacters = /[港澳警领应学挂]/.test(key);
    const isDisabledKey = /^(I|O)$/.test(key);
    const className = classNames(`${classPrefix}-key`, {
      'number-key': isNumberKey,
      'sign-key': !isNumberKey && key,
      'a-key': key === 'A',
      'l-key': key === 'L',
      'z-key': key === 'Z',
      'm-key': key === 'M',
      'ok-key': key === 'OK',
      'del-key': key === 'BACKSPACE',
      'disabled-key':
        (value.length < 2 && (isNumberKey || isSpecialCharacters)) ||
        isDisabledKey ||
        ((isNewEnergyPlate(value) ? value.length >= 8 : value.length >= 7) &&
          key !== 'OK' &&
          key !== 'BACKSPACE'),
    });

    return (
      <div
        key={key}
        className={className}
        onTouchStart={() => {
          if (key === 'BACKSPACE') {
            onBackspacePressStart();
          }
        }}
        onTouchEnd={e => {
          onKeyPress(e, key);
          if (key === 'BACKSPACE') {
            onBackspacePressEnd();
          }
        }}
        onMouseUp={e => {
          if (
            (value.length < 2 && (isNumberKey || isSpecialCharacters)) ||
            isDisabledKey ||
            ((isNewEnergyPlate(value)
              ? value.length >= 8
              : value.length >= 7) &&
              key !== 'OK' &&
              key !== 'BACKSPACE')
          )
            return;
          onKeyPress(e, key);
        }}
        title={key}
        role="button"
      >
        {key === 'BACKSPACE' ? (
          <Icon name={'kq-shanchu'} size={36} />
        ) : key === 'OK' ? (
          confirmText ? (
            confirmText
          ) : (
            key
          )
        ) : (
          key
        )}
      </div>
    );
  };

  return (
    <Popup
      visible={visible}
      mask={false}
      afterClose={props.afterClose}
      afterShow={props.afterShow}
      className={`${classPrefix}-popup`}
      stopPropagation={props.stopPropagation}
    >
      {withNativeProps(
        props,
        <div
          ref={keyboardRef}
          className={classPrefix}
          onMouseDown={e => {
            e.preventDefault();
          }}
        >
          {renderHeader()}
          <div className={`${classPrefix}-wrapper`}>
            {value.length === 0 ? (
              <div
                className={classNames(`${classPrefix}-main`, {
                  'confirmed-style': !!confirmText,
                })}
              >
                {keys.map(renderKey)}
              </div>
            ) : (
              <div
                className={classNames(`${classPrefix}-main`, {
                  'confirmed-style': !!confirmText,
                })}
              >
                {numberKeys.map(renderKey)}
                {letterKeys.map(renderKey)}
                {specialKeys.map(renderKey)}
              </div>
            )}
          </div>
          {props.safeArea && (
            <div className={`${classPrefix}-footer`}>
              <SafeArea position="bottom" />
            </div>
          )}
        </div>,
      )}
    </Popup>
  );
};

export default LicenseKeyBoard;
