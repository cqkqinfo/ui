import React, { useMemo, useRef } from 'react';
import { View, ViewProps } from 'remax/one';
import Form, { Field } from 'rc-field-form';
import styles from './index.module.less';
import { FormStore, ItemProps } from '../form';
import NeedWrap from '../need-wrap';
import Input from '../re-input';
import classNames from 'classnames';
import Icon from '../icon';
import formRules from '../form-rules';
import platform from '../get-platform';
import { useEffectState } from 'parsec-hooks';

const LazyUpdate = (props: React.PropsWithChildren<ViewProps>) => {
  const [myProps] = useEffectState(props, {
    wait: 0,
  });
  return (
    <View
      {...myProps}
      children={platform === 'web' ? props.children : myProps.children}
    />
  );
};

export default ({
  label,
  name,
  strLabel = typeof label === 'string' ? label : name + '' || '',
  className,
  after,
  rules = [],
  vertical: outVertical,
  children,
  requiredMark: outRequiredMark,
  readOnly: outReadOnly,
  requiredMarkCls: outRequiredMarkCls,
  labelStyle: outLabelStyle,
  noStyle: outNoStyle,
  labelCls: outLabelCls,
  afterCls: outAfterCls,
  cell: outCell,
  colon: outColon,
  childrenCls: outChildrenCls,
  labelWidth: outLabelWidth,
  style,
  labelJustify: outLabelJustify = 'right',
  childrenAlign: outChildrenAlign = 'right',
  renderReadOnlyValue,
  ...props
}: ItemProps) => {
  const store = FormStore.useContainer();
  const {
    labelWidth = outLabelWidth,
    itemCls,
    childrenCls = outChildrenCls,
    colon = outColon,
    cell = outCell,
    afterCls = outAfterCls,
    requiredMark = outRequiredMark === undefined ? true : outRequiredMark,
    requiredMarkCls = outRequiredMarkCls,
    vertical = outVertical,
    readOnly = outReadOnly,
    labelCls = outLabelCls,
    labelStyle = outLabelStyle,
    noStyle = outNoStyle,
    childrenAlign = outChildrenAlign,
    card,
    itemStyle,
    itemChildrenStyle,
    values,
    errorFields,
  } = store || {};
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
  children = useMemo(
    () =>
      children === undefined ? (
        name ? (
          <Input placeholder={`请输入${strLabel}`} />
        ) : (
          <View />
        )
      ) : (
        children
      ),
    [children, name, strLabel],
  );
  const renderField = (node = children) => (
    <NeedWrap
      need={!!name || node instanceof Function}
      wrap={Field as any}
      wrapProps={{ rules, name, ...props }}
    >
      {node}
    </NeedWrap>
  );
  return (
    <NeedWrap wrap={Form} wrapProps={{ component: false }} need={!store}>
      {noStyle
        ? renderField()
        : renderField((control, meta, form) => {
            const showError =
              !!meta.errors.length &&
              (!errorFields.length ||
                errorFields[0]?.name.includes(name as any)) &&
              !inputFocus.current;
            const childNode =
              typeof children === 'function' ? (
                children(control, meta, form)
              ) : React.isValidElement(children) ? (
                React.cloneElement(children as React.ReactElement, {
                  ...control,
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
                })
              ) : (
                <View>{children}</View>
              );
            const errIcon = (
              <LazyUpdate
                className={classNames(styles.after, afterCls, outAfterCls)}
                style={{ display: after || showError ? undefined : 'none' }}
              >
                {showError ? (
                  <Icon size={32} name={'kq-tip'} color={'#ED4E56'} />
                ) : (
                  after
                )}
              </LazyUpdate>
            );
            return (
              <LazyUpdate
                className={classNames(
                  styles.item,
                  itemCls,
                  showError && styles.error,
                  className,
                  {
                    [styles.cell]: cell,
                    [styles.card]: card,
                    [styles.vertical]: vertical,
                  },
                )}
                style={{ ...style, ...itemStyle }}
                {...props}
              >
                {label && (
                  <View className={styles.labelWrap}>
                    {requiredMark && (!vertical || required) && (
                      <View
                        className={classNames(
                          styles.mark,
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
                        minWidth: labelWidth,
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
                        labelCls,
                        outLabelCls,
                      )}
                    >
                      {typeof label === 'string'
                        ? [...label].map((item, index) => (
                            <View key={index}>{item}</View>
                          ))
                        : label}
                    </View>
                    {(colon === undefined ? (
                      !cell
                    ) : (
                      colon === true
                    )) ? (
                      <View className={styles.colon}>:</View>
                    ) : (
                      colon
                    )}
                    {vertical && errIcon}
                  </View>
                )}
                <View
                  className={classNames(
                    styles.children,
                    childrenAlign === 'left' && styles.left,
                    childrenCls,
                    outChildrenCls,
                  )}
                  style={{
                    justifyContent:
                      label && childrenAlign !== 'left'
                        ? 'flex-end'
                        : 'flex-start',
                    ...itemChildrenStyle,
                  }}
                >
                  {readOnly ? (
                    <>
                      <Field shouldUpdate>
                        {(_, __, { getFieldValue, getFieldsValue }) =>
                          (name &&
                            (renderReadOnlyValue
                              ? renderReadOnlyValue(
                                  getFieldValue(name),
                                  getFieldsValue(),
                                )
                              : getFieldValue(name) || values?.[name + ''])) ||
                          children
                        }
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
              </LazyUpdate>
            );
          })}
    </NeedWrap>
  );
};

export { Field } from 'rc-field-form';
