import React, {
  ReactElement,
  useEffect,
  useLayoutEffect,
  useRef,
  forwardRef,
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
  FieldData,
} from 'rc-field-form/es/interface';
import Space from '../space';
import getStorageSync from '../get-storage-sync';
import setStorageSync from '../set-storage-sync';
import removeStorageSync from '../remove-storage-sync';
const CircularJSON = require('circular-json');

export const FormStore = createContainer(initialState => {
  const formItemNatives = useRef<FormItemNativeInstance[]>([]);
  return {
    ...((initialState || {}) as any),
    formItemNatives,
  } as Props<any> & {
    formItemNatives: React.MutableRefObject<FormItemNativeInstance[]>;
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

type FormItemNativeInstance = {
  setFieldData: (data: Partial<FieldData>) => void;
  name?: string;
  id: string;
};

interface BaseItemProps {
  style?: React.CSSProperties;
  /**
   * ????????????
   */
  rules?: Rule[];
  label?: React.ReactNode;
  /**
   * ???????????????
   */
  after?: React.ReactNode;
  className?: string;
  /**
   * ????????????
   */
  vertical?: boolean;
  /**
   * ????????????*???
   * @default true
   */
  requiredMark?: boolean;
  /**
   * ????????????
   */
  readOnly?: boolean;
  /**
   * ???????????????
   */
  noStyle?: boolean;
  /**
   * label??????
   */
  labelCls?: string;
  /**
   * label??????
   */
  labelStyle?: React.CSSProperties;
  /**
   * children??????
   */
  childrenStyle?: React.CSSProperties;
  /**
   * ???????????????
   */
  childrenCls?: string;
  /**
   * ??????????????????
   */
  requiredMarkCls?: string;
  afterCls?: string;
  /**
   * ????????????label???????????????
   * @default label
   */
  strLabel?: string;
  /**
   * label?????????
   * @default right
   */
  labelJustify?: Property.TextAlign;
  /**
   * children?????????
   * @default right
   */
  childrenAlign?: Property.TextAlign;
  cell?: boolean;
  /**
   * ????????????
   */
  colon?: React.ReactNode;
  /**
   * ???????????????
   */
  colonCls?: string;
  /**
   * label????????????????????????em??????
   */
  labelWidth?: number | string;
  /**
   * ?????????????????????
   */
  renderReadOnlyValue?: (value: any, values: any) => React.ReactNode;
  /**
   * ???????????????????????????????????????
   */
  elderly?: boolean;
  /**
   * ?????????????????????false?????????????????????
   * @default true
   */
  verifyStatus?: boolean;
  /**
   * nativeRef????????????
   */
  nativeRef?: React.Ref<FormItemNativeInstance>;
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
   * ???????????????
   */
  itemCls?: string;
  /**
   * ???????????????
   */
  itemStyle?: React.CSSProperties;
  /**
   * ??????children?????????
   */
  itemChildrenStyle?: React.CSSProperties;
  /**
   * ????????????
   * @default true
   */
  card?: boolean;
  /**
   * shadow?????????props
   */
  shadowProps?: Omit<ShadowProps, 'children'> | false;
  /**
   * ???????????????
   */
  values?: Values;
  /**
   * ??????????????????????????????
   * @default true
   */
  nestedForm?: boolean;
  /**
   * ????????????????????????????????????
   */
  autoCacheKey?: string;
  /**
   * ???????????????????????????
   * @default true
   */
  autoClearCache?: boolean;
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
        autoClearCache = true,
        ...props
      }: Props<Values>,
      ref: React.Ref<FormInstance | undefined>,
    ) => {
      const [myForm] = Form.useForm();
      const {
        form = !nestedForm ? myForm : undefined,
        formItemNatives,
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
          Object.entries(values).forEach(([key, value], index) => {
            formItemNatives.current[index]?.setFieldData?.({ value });
          });
        }
      }, [form, formItemNatives, values]);
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
            if (autoCacheKey && autoClearCache) {
              removeStorageSync(autoCacheKey);
            }
            return Promise.resolve(...arg);
          });
        };
      }, [autoCacheKey, autoClearCache, form]);
      useImperativeHandle(ref, () => form);
      const preFields = useRef([]);
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
                onFieldsChange: (...arg: any) => {
                  const fields = arg[1];
                  fields.forEach((item: any, index: number) => {
                    if (
                      JSON.stringify(item) !==
                      JSON.stringify(preFields.current[index])
                    ) {
                      formItemNatives.current
                        .filter(({ name }) => name === item.name[0])
                        .forEach(({ setFieldData }) =>
                          setFieldData({
                            ...item,
                            errors: index ? [] : item.errors,
                          }),
                        );
                    }
                  });
                  preFields.current = fields;
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  props.onFieldsChange?.(...arg);
                },
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
                  if (autoCacheKey && autoClearCache) {
                    removeStorageSync(autoCacheKey);
                  }
                },
                onFinishFailed: (e: any) => {
                  if (e.errorFields?.length > 0) {
                    const {
                      name: [name],
                      errors,
                    } = e.errorFields[0] || {};
                    formItemNatives.current
                      .find(({ name: n }) => n === name)
                      ?.setFieldData({
                        errors,
                      });
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
