import React, { ReactElement } from 'react';
import RcForm, {
  FormProps,
  useForm,
  FormProvider,
  Field,
  List,
} from 'rc-field-form';
import ContainerUseWrap from 'parsec-hooks/lib/ContainerUseWrap';
import createContainer from 'parsec-hooks/lib/createContainer';
import showToast from '../show-toast';
import Shadow, { Props as ShadowProps } from '../shadow';
import NeedWrap from '../need-wrap';
import { FieldProps } from 'rc-field-form/es/Field';
import { Property } from 'csstype';
import { View } from 'remax/one';
import {
  RuleType,
  ValidatorRule,
  RuleRender,
  StoreValue,
} from 'rc-field-form/es/interface';

export const FormStore = createContainer(
  initialState => ((initialState || {}) as any) as Props<any>,
);

interface BaseRule {
  enum?: StoreValue[];
  len?: number;
  max?: number;
  message?: string | ReactElement;
  min?: number;
  pattern?: RegExp;
  required?: boolean;
  transform?: (value: StoreValue) => StoreValue;
  type?: RuleType | 'phone' | 'idCard';
  whitespace?: boolean;
  /** Customize rule level `validateTrigger`. Must be subset of Field `validateTrigger` */
  validateTrigger?: string | string[];
}
type AggregationRule = BaseRule & Partial<ValidatorRule>;
interface ArrayRule extends Omit<AggregationRule, 'type'> {
  type: 'array';
  defaultField?: RuleObject;
}
export type RuleObject = AggregationRule | ArrayRule;
export type Rule = RuleObject | RuleRender;

interface BaseItemProps {
  style?: React.CSSProperties;
  /**
   * 校验规则
   */
  rules?: Rule[];
  label?: React.ReactNode;
  /**
   * 后面的节点
   */
  after?: React.ReactNode;
  className?: string;
  /**
   * 是否垂直
   */
  vertical?: boolean;
  /**
   * 显示必填*号
   * @default true
   */
  requiredMark?: boolean;
  /**
   * 只读模式
   */
  readOnly?: boolean;
  /**
   * 不需要样式
   */
  noStyle?: boolean;
  /**
   * label类名
   */
  labelCls?: string;
  /**
   * label样式
   */
  labelStyle?: React.CSSProperties;
  /**
   * 子元素类别
   */
  childrenCls?: string;
  /**
   * 必填标记类名
   */
  requiredMarkCls?: string;
  afterCls?: string;
  /**
   * 字符串的label，用于提示
   * @default label
   */
  strLabel?: string;
  /**
   * label的对齐
   * @default right
   */
  labelJustify?: Property.TextAlign;
  cell?: boolean;
  /**
   * 显示冒号
   */
  colon?: React.ReactNode;
  /**
   * label的宽度，建议使用em单位
   */
  labelWidth?: number | string;
}

export interface ItemProps extends Omit<FieldProps, 'rules'>, BaseItemProps {}

export interface Props<Values = {}>
  extends Omit<FormProps<Values>, 'className'>,
    Omit<Pick<ItemProps, keyof BaseItemProps>, 'strLabel' | 'label'> {
  /**
   * 子项的类名
   */
  itemCls?: string;
  /**
   * 卡片模式
   * @default true
   */
  card?: boolean;
  /**
   * shadow组件的props
   */
  shadowProps?: ShadowProps;
}

const ReForm = ContainerUseWrap(
  FormStore,
  <Values extends unknown>({
    card,
    shadowProps,
    cell = false,
    colon = !cell,
    className,
    style,
    ...props
  }: Props<Values>) => (
    <RcForm<Values>
      component={props => (
        <NeedWrap
          need={card === undefined ? cell : card}
          wrap={Shadow as any}
          wrapProps={{ card: true, ...shadowProps }}
        >
          <View style={style} className={className} {...props} />
        </NeedWrap>
      )}
      onFinishFailed={(e: any) => {
        showToast({ title: e.errorFields?.[0].errors?.[0], icon: 'none' });
      }}
      {...props}
    />
  ),
);

const Form: typeof ReForm & {
  useForm: typeof useForm;
  FormProvider: typeof FormProvider;
  Field: typeof Field;
  List: typeof List;
} = ReForm as any;

export default Form;

Form.useForm = RcForm.useForm;
Form.FormProvider = FormProvider;
Form.List = List;
Form.Field = Field;
