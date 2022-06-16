import React, { useEffect, useMemo, useRef } from 'react';
import { View } from 'remax/one';
import Form, { Field } from 'rc-field-form';
import styles from './index.module.less';
import { FormStore, ItemProps } from '../form';
import NeedWrap from '../need-wrap';
import Input from '../re-input';
import classNames from 'classnames';
import Icon from '../icon';
import formRules from '../form-rules';
import { useId } from 'parsec-hooks';
import { useConfig } from '../config-provider';
import Space from '../space';
import Native, { NativeInstance } from '../native';

export interface FormItemChildrenNative {
  setValue: (value: any) => void;
}

export default (outProps: ItemProps) => {
  const store = FormStore.useContainer();
  const {
    itemCls,
    card,
    itemStyle,
    itemChildrenStyle,
    formItemNatives,
    values,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    elderly: outElderly = useConfig().elderly,
    vertical: outVertical,
    requiredMark: outRequiredMark,
    readOnly: outReadOnly,
    requiredMarkCls: outRequiredMarkCls,
    labelStyle: outLabelStyle,
    noStyle: outNoStyle,
    labelCls: outLabelCls,
    afterCls: outAfterCls,
    cell: outCell,
    colon: outColon = outElderly,
    childrenCls: outChildrenCls,
    colonCls: outColonCls,
    labelWidth: outLabelWidth,
    verifyStatus: outVerifyStatus = true,
    labelJustify: outLabelJustify = outElderly ? 'left' : 'right',
    childrenAlign: outChildrenAlign,
  } = store || {};
  const {
    labelWidth = outLabelWidth,
    verifyStatus = outVerifyStatus,
    childrenCls = outChildrenCls,
    colon = outColon,
    colonCls = outColonCls,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    cell = outCell,
    afterCls = outAfterCls,
    requiredMark = outRequiredMark === undefined ? true : outRequiredMark,
    requiredMarkCls = outRequiredMarkCls,
    vertical = outVertical,
    readOnly = outReadOnly,
    labelCls = outLabelCls,
    labelStyle = outLabelStyle,
    childrenStyle = itemChildrenStyle,
    elderly = outElderly,
    noStyle = outNoStyle,
    childrenAlign = cell ? outChildrenAlign || 'right' : 'left',
    label,
    name,
    strLabel = typeof label === 'string' ? label : name + '' || '',
    className,
    after,
    style,
    renderReadOnlyValue,
    children: _children,
    rules: _rules,
    ...props
  } = outProps;
  let { rules = [], children } = outProps;
  const labelJustify =
    store.labelJustify || labelWidth ? 'justify' : outLabelJustify;
  let required = outRequiredMark || false;
  rules = rules?.map(item => {
    if (item instanceof Function) return item;
    item = { ...item };
    if (item.type && (formRules as any)[item.type]) {
      item.validator = (formRules as any)[item.type];
      delete item.type;
    }
    if (item.required) {
      required = true;
      if (!item.validator) {
        item.message = item.message || `${strLabel}是必填的`;
      }
    }
    return item;
  });
  const inputFocus = useRef(false);
  const isUndefinedChildren = children === undefined;
  children = useMemo(
    () =>
      isUndefinedChildren ? (
        name !== undefined ? (
          readOnly ? (
            children
          ) : (
            <Input placeholder={`请输入${strLabel}`} />
          )
        ) : (
          <View />
        )
      ) : (
        children
      ),
    [children, isUndefinedChildren, name, readOnly, strLabel],
  );
  const renderField = (node = children) => (
    <NeedWrap
      need={!!name || node instanceof Function}
      wrap={Field as any}
      wrapProps={{ rules, name, ...props }}
    >
      {node instanceof Function
        ? (...arg: any) => {
            const result = (node as any)(...arg);
            return React.isValidElement(result)
              ? React.cloneElement(result, {
                  ...(result as any).props,
                  ...props,
                  nativeRef,
                })
              : result;
          }
        : React.isValidElement(node)
        ? React.cloneElement(node, {
            ...node.props,
            nativeRef,
          })
        : node}
    </NeedWrap>
  );
  const leftChildrenAlign = childrenAlign === 'left';
  const nativeRef = useRef<FormItemChildrenNative>(null);
  const errorIconNative = useRef<NativeInstance>(null);
  const itemNative = useRef<NativeInstance>(null);
  const nativeId = useId();
  if (
    formItemNatives.current &&
    !formItemNatives?.current?.find(({ id }) => id === nativeId)
  ) {
    formItemNatives.current.push({
      setFieldData: ({ value, errors = [] }) => {
        nativeRef.current?.setValue(value);
        const showError =
          verifyStatus && !!errors.length && !inputFocus.current;
        errorIconNative.current?.setData({
          visible: showError,
        });
        itemNative.current?.setData({
          className: showError ? styles.error : '',
        });
      },
      name: name ? name + '' : undefined,
      id: nativeId,
    });
  }
  useEffect(() => {
    return () => {
      formItemNatives?.current.splice(
        // eslint-disable-next-line react-hooks/exhaustive-deps
        formItemNatives?.current?.findIndex(({ id }) => id === nativeId),
        1,
      );
    };
  }, [formItemNatives, nativeId]);
  return (
    <NeedWrap wrap={Form} wrapProps={{ component: false }} need={!store}>
      {noStyle
        ? renderField()
        : renderField((control, meta, form) => {
            const childNode =
              typeof children === 'function' ? (
                children(control, meta, form)
              ) : React.isValidElement(children) ? (
                React.cloneElement(children as React.ReactElement, {
                  ...control,
                  style: {
                    ...children.props?.style,
                    ...(leftChildrenAlign ? { textAlign: 'left' } : {}),
                  },
                  placeholderStyle: {
                    ...children.props?.placeholderStyle,
                    ...(leftChildrenAlign ? { textAlign: 'left' } : {}),
                  },
                  onFocus: (...e: any) => {
                    inputFocus.current = true;
                    React.isValidElement(children) &&
                      children.props.onFocus?.(...e);
                  },
                  onBlur: (...e: any) => {
                    inputFocus.current = false;
                    React.isValidElement(children) &&
                      children.props.onBlur?.(...e);
                  },
                  onChange: (...arg: any) => {
                    control.onChange(...arg);
                    if (React.isValidElement(children)) {
                      children.props.onChange?.(...arg);
                    }
                  },
                  nativeRef,
                })
              ) : (
                <View>{children}</View>
              );
            const errIcon = (
              <Space
                size={10}
                alignItems={'center'}
                className={classNames(styles.after, afterCls, outAfterCls)}
              >
                <Native
                  ref={errorIconNative}
                  initData={{
                    visible: false,
                    style: {
                      display: 'flex',
                    },
                  }}
                >
                  <Icon size={32} name={'kq-tip'} color={'#ED4E56'} />
                </Native>
                {after}
              </Space>
            );
            const labelArr =
              typeof label === 'string' && labelWidth ? [...label] : undefined;
            return (
              <Native
                // initData={{ style: { display: 'flex' } }}
                ref={itemNative}
              >
                <View
                  className={classNames(
                    styles.item,
                    itemCls,
                    // showError && styles.error,
                    elderly && styles.elderly,
                    className,
                    cell && styles.cell,
                    card && styles.card,
                    vertical && styles.vertical,
                  )}
                  style={{
                    borderBottomWidth: (props as any)['data-is-last'] ? 0 : 1,
                    ...itemStyle,
                    ...style,
                  }}
                  {...props}
                >
                  {label && (
                    <View className={styles.labelWrap}>
                      {requiredMark && (!vertical || required) && (
                        <View
                          className={classNames(
                            styles.mark,
                            cell && styles['cell-mark'],
                            requiredMarkCls,
                            outRequiredMarkCls,
                          )}
                          style={{ opacity: +(required && requiredMark) }}
                        >
                          *
                        </View>
                      )}
                      <View
                        style={{
                          [labelArr &&
                          (labelWidth + '').includes('em') &&
                          labelArr.length <=
                            +((labelWidth + '').match(/\d+/) as any)[0]
                            ? 'width'
                            : 'minWidth']: labelWidth,
                          justifyContent:
                            labelJustify === 'right'
                              ? 'flex-end'
                              : labelJustify === 'justify'
                              ? 'space-between'
                              : 'flex-start',
                          ...labelStyle,
                        }}
                        className={classNames(
                          styles.label,
                          cell && styles['cell-label'],
                          labelCls,
                          outLabelCls,
                        )}
                      >
                        {labelArr
                          ? labelArr.map((item, index) => (
                              <View key={index} style={{ width: '1em' }}>
                                {item}
                              </View>
                            ))
                          : label}
                      </View>
                      {(colon === undefined ? (
                        !cell
                      ) : (
                        colon === true
                      )) ? (
                        <View className={classNames(styles.colon, colonCls)}>
                          :
                        </View>
                      ) : (
                        colon
                      )}
                      {vertical && errIcon}
                    </View>
                  )}
                  <View
                    className={classNames(
                      styles.children,
                      cell && styles['cell-children'],
                      leftChildrenAlign && styles['cell-children-left'],
                      childrenCls,
                      outChildrenCls,
                    )}
                    style={{
                      justifyContent:
                        label && !leftChildrenAlign ? 'flex-end' : 'flex-start',
                      ...childrenStyle,
                    }}
                  >
                    {readOnly ? (
                      <>
                        <Field shouldUpdate>
                          {(_, __, { getFieldValue, getFieldsValue }) => (
                            <View>
                              {(name !== undefined &&
                                (renderReadOnlyValue
                                  ? renderReadOnlyValue(
                                      getFieldValue(name),
                                      getFieldsValue(),
                                    )
                                  : getFieldValue(name) ||
                                    values?.[name + ''])) ||
                                children}
                            </View>
                          )}
                        </Field>
                        <View
                          style={{
                            visibility: 'hidden',
                            position: 'absolute',
                            pointerEvents: 'none',
                          }}
                        >
                          {childNode}
                        </View>
                      </>
                    ) : (
                      childNode
                    )}
                  </View>
                  {!vertical && errIcon}
                </View>
              </Native>
            );
          })}
    </NeedWrap>
  );
};

export { Field } from 'rc-field-form';
