import React from 'react';
import { View } from 'remax/one';
import Form, { Field } from 'rc-field-form';
import styles from './index.less';
import { FormStore, ItemProps } from '../form';
import NeedWrap from '../need-wrap';
import Input from '../re-input';
import classNames from 'classnames';

export default ({
  label,
  name,
  strLabel = typeof label === 'string' ? label : name + '' || '',
  className,
  after,
  rules = [],
  vertical: outVertical,
  children = name ? <Input placeholder={`请输入${strLabel}`} /> : undefined,
  requiredMark: outRequiredMark = true,
  readOnly: outReadOnly,
  childrenCls: outChildrenCls,
  requiredMarkCls: outRequiredMarkCls,
  labelStyle: outLabelStyle,
  noStyle: outNoStyle,
  labelCls: outLabelCls,
  afterCls: outAfterCls,
  style: outStyle,
  labelJustify: outLabelJustify = 'right',
  ...props
}: ItemProps) => {
  const store = FormStore.useContainer();
  const {
    labelWidth,
    itemCls,
    colon = '：',
    childrenCls,
    afterCls,
    requiredMark = outRequiredMark,
    cell,
    requiredMarkCls,
    style = outStyle,
    vertical = outVertical,
    readOnly = outReadOnly,
    labelCls = outLabelCls,
    labelStyle = outLabelStyle,
    noStyle = outNoStyle,
    labelJustify = outLabelJustify,
  } = store || {};
  let required = false;
  rules?.forEach((item: any) => {
    if (item?.required && !item.message) {
      required = true;
      item.message = `${strLabel}是必填的`;
    }
  });
  const oldField = (
    <NeedWrap
      need={!!name || children instanceof Function}
      wrap={Field as any}
      wrapProps={{ rules, name, ...props }}
    >
      {React.isValidElement(children) ? children : <View>{children}</View>}
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
          style={{ ...style, ...outStyle }}
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
                  textAlign: labelJustify,
                  justifyContent:
                    labelJustify === 'right' ? 'flex-end' : 'flex-start',
                  ...labelStyle,
                }}
                className={classNames(styles.label, labelCls, outLabelCls)}
              >
                <View
                  className={styles.labelText}
                  style={{
                    textAlign: labelJustify,
                    flex: labelJustify === 'justify' ? 1 : undefined,
                  }}
                >
                  {label}
                </View>
                {colon}
              </View>
            </View>
          )}
          <View
            className={classNames(styles.children, childrenCls, outChildrenCls)}
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
