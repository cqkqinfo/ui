import React from 'react';
import { View } from 'remax/one';
import Form, { Field } from 'rc-field-form';
import styles from './index.module.less';
import { FormStore, ItemProps } from '../form';
import NeedWrap from '../need-wrap';
import Input from '../re-input';
import classNames from 'classnames';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import IDCard from 'china-id-card';

export default ({
  label,
  name,
  strLabel = typeof label === 'string' ? label : name + '' || '',
  className,
  after,
  rules = [],
  vertical: outVertical,
  children = name ? <Input placeholder={`请输入${strLabel}`} /> : undefined,
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
    itemStyle,
    itemChildrenStyle,
  } = store || {};
  const labelJustify =
    store.labelJustify || labelWidth ? 'justify' : outLabelJustify;
  let required = outRequiredMark || false;
  rules = rules?.map(item => {
    if (item instanceof Function) return item;
    item = { ...item };
    if (item.required) {
      required = true;
      item.message = item.message || `${strLabel}是必填的`;
    }
    if (item.type === 'phone') {
      item.pattern = /^1[3-9][0-9]{9}$/;
      item.message = '请输入正确的手机号';
      delete item.type;
    }
    if (item.type === 'idCard') {
      item.validator = (_, value) => {
        return value
          ? value?.length === 18 && IDCard(value).isVerified
            ? Promise.resolve()
            : Promise.reject(new Error('请输入正确的身份证号码'))
          : Promise.reject(new Error('请输入身份证号码'));
      };
      delete item.type;
    }
    return item;
  });
  const oldField = (
    <NeedWrap
      need={!!name || children instanceof Function}
      wrap={Field as any}
      wrapProps={{ rules, name, ...props }}
    >
      {React.isValidElement(children) ? children : children}
    </NeedWrap>
  );
  return (
    <NeedWrap wrap={Form} wrapProps={{ component: false }} need={!store}>
      {noStyle ? (
        oldField
      ) : (
        <View
          className={classNames(styles.item, itemCls, className, {
            [styles.cell]: cell,
            [styles.vertical]: vertical,
          })}
          style={{ ...style, ...itemStyle }}
          {...props}
        >
          {label && (
            <View>
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
                className={classNames(styles.label, labelCls, outLabelCls)}
              >
                {typeof label === 'string'
                  ? [...label].map(i => <View key={i}>{i}</View>)
                  : label}
              </View>
              {colon === undefined && !cell ? '：' : colon}
            </View>
          )}
          <View
            className={classNames(styles.children, childrenCls, outChildrenCls)}
            style={{
              justifyContent: label ? 'flex-end' : 'flex-start',
              ...itemChildrenStyle,
            }}
          >
            {readOnly ? (
              <>
                <Field shouldUpdate>
                  {(_, __, { getFieldValue }) => name && getFieldValue(name)}
                </Field>
                <View
                  style={{
                    visibility: 'hidden',
                    position: 'absolute',
                    pointerEvents: 'none',
                  }}
                >
                  {oldField}
                </View>
              </>
            ) : (
              oldField
            )}
          </View>
          {after && (
            <View className={classNames(styles.after, afterCls, outAfterCls)}>
              {after}
            </View>
          )}
        </View>
      )}
    </NeedWrap>
  );
};

export { Field } from 'rc-field-form';
