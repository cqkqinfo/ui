import React, {
  ReactElement,
  useEffect,
  useLayoutEffect,
  useRef,
  forwardRef,
  useState,
  useImperativeHandle,
} from 'react';
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
import { ViewProps } from 'remax/one';
import {
  RuleType,
  ValidatorRule,
  RuleRender,
  StoreValue,
  Meta,
  FormInstance,
  ValidateErrorEntity,
} from 'rc-field-form/es/interface';
import Space from '../space';
import getStorageSync from '../get-storage-sync';
import setStorageSync from '../set-storage-sync';
import removeStorageSync from '../remove-storage-sync';
const CircularJSON = require('circular-json');

export const FormStore = createContainer(initialState => {
  const [errorFields, setErrorFields] = useState<
    ValidateErrorEntity['errorFields']
  >([]);
  return {
    ...((initialState || {}) as any),
    errorFields,
    setErrorFields,
  } as Props<any> & {
    errorFields: ValidateErrorEntity['errorFields'];
    setErrorFields: (errorFields: ValidateErrorEntity['errorFields']) => void;
  };
});

interface BaseRule {
  enum?: StoreValue[];
  len?: number;
  max?: number;
  message?: string | ReactElement;
  min?: number;
  pattern?: RegExp;
  required?: boolean;
  transform?: (value: StoreValue) => StoreValue;
  type?: RuleType | 'phone' | 'idCard' | 'password';
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
  /**
   * children的对齐
   * @default right
   */
  childrenAlign?: Property.TextAlign;
  cell?: boolean;
  /**
   * 显示冒号
   */
  colon?: React.ReactNode;
  /**
   * 冒号的类名
   */
  colonCls?: string;
  /**
   * label的宽度，建议使用em单位
   */
  labelWidth?: number | string;
  /**
   * 渲染只读时的值
   */
  renderReadOnlyValue?: (value: any, values: any) => React.ReactNode;
  /**
   * 适老模式，开启后尺寸会变大
   */
  elderly?: boolean;
  /**
   * 校验状态，设为false后不会红框提示
   * @default true
   */
  verifyStatus?: boolean;
}

export interface ItemProps<Values = {}>
  extends Omit<FieldProps, 'rules' | 'children'>,
    BaseItemProps,
    ViewProps {
  children?:
    | React.ReactNode
    | ((
        control: any,
        meta: Meta,
        form: FormInstance<Values>,
      ) => React.ReactNode);
}

export interface Props<Values extends unknown = any>
  extends Pick<
      FormProps<Values>,
      | 'initialValues'
      | 'form'
      | 'onValuesChange'
      | 'onFinishFailed'
      | 'children'
      | 'onFinish'
    >,
    Omit<
      Pick<ItemProps<Values>, keyof BaseItemProps>,
      'strLabel' | 'label' | 'renderReadOnlyValue'
    > {
  /**
   * 子项的类名
   */
  itemCls?: string;
  /**
   * 子项的样式
   */
  itemStyle?: React.CSSProperties;
  /**
   * 子项children的样式
   */
  itemChildrenStyle?: React.CSSProperties;
  /**
   * 卡片模式
   * @default true
   */
  card?: boolean;
  /**
   * shadow组件的props
   */
  shadowProps?: Omit<ShadowProps, 'children'> | false;
  /**
   * 绑定的数据
   */
  values?: Values;
  /**
   * 支持嵌套表单统一管理
   * @default true
   */
  nestedForm?: boolean;
  /**
   * 设置后会自动缓存表单数据
   */
  autoCacheKey?: string;
}

const ReForm = ContainerUseWrap(
  FormStore,
  forwardRef(
    <Values extends {} = any>(
      {
        card,
        shadowProps,
        cell = false,
        colon = !cell,
        nestedForm = true,
        className,
        style,
        autoCacheKey,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        value,
        values = value ||
          (autoCacheKey ? getStorageSync(autoCacheKey) : undefined),
        ...props
      }: Props<Values>,
      ref: React.Ref<FormInstance | undefined>,
    ) => {
      const [myForm] = Form.useForm();
      const {
        setErrorFields,
        form = !nestedForm ? myForm : undefined,
      } = FormStore.useContainer();
      const preValues = useRef<Values>();
      useLayoutEffect(() => {
        if (
          values &&
          CircularJSON.stringify(preValues.current) !==
            CircularJSON.stringify(values)
        ) {
          preValues.current = { ...values };
          form && form.setFieldsValue(values);
        }
      }, [form, values]);
      useEffect(() => {
        if (!form) return;
        const old = form.resetFields;
        form.resetFields = (...arg) => {
          old(...arg);
          if (autoCacheKey) {
            setStorageSync(autoCacheKey, form.getFieldsValue());
          }
        };
      }, [autoCacheKey, form]);
      useEffect(() => {
        if (!form) return;
        const old = form.validateFields;
        form.validateFields = (...arg) => {
          return old(...arg).then((...arg) => {
            if (autoCacheKey) {
              removeStorageSync(autoCacheKey);
            }
            return Promise.resolve(...arg);
          });
        };
      }, [autoCacheKey, form]);
      useImperativeHandle(ref, () => form);
      return (
        <NeedWrap
          need={shadowProps !== false && (card === undefined ? cell : card)}
          wrap={Shadow as any}
          wrapProps={{ card: true, ...shadowProps }}
        >
          <Space
            style={style}
            className={className}
            alignSelf={'stretch'}
            vertical
          >
            <NeedWrap
              need={!!form}
              wrap={RcForm as any}
              wrapProps={{
                component: false,
                form,
                ...props,
                onValuesChange: (...arg: any) => {
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  props.onValuesChange?.(...arg);
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  props.onChange?.(arg[1]);
                  if (autoCacheKey) {
                    setStorageSync(autoCacheKey, arg[1]);
                  }
                },
                onFinish: (...arg: any) => {
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  props.onFinish?.(...arg);
                  if (autoCacheKey) {
                    removeStorageSync(autoCacheKey);
                  }
                },
                onFinishFailed: (e: any) => {
                  setErrorFields(e.errorFields);
                  if (e.errorFields?.length > 0) {
                    if (props.onFinishFailed) {
                      props.onFinishFailed(e);
                    } else {
                      showToast({
                        title: e.errorFields?.[0]?.errors?.[0],
                        icon: 'none',
                      });
                    }
                  } else {
                    props.onFinishFailed?.(e.values as any);
                  }
                },
              }}
            >
              <Space vertical>{props.children}</Space>
            </NeedWrap>
          </Space>
        </NeedWrap>
      );
    },
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
