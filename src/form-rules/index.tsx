// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import IDCard from 'china-id-card';
import PasswordValidator from 'password-validator';

const baseSchema = (item: PasswordValidator) =>
  item
    .is()
    .min(8)
    .is()
    .max(20)
    .has()
    .not()
    .spaces();

const passwordSchemas = [
  baseSchema(new PasswordValidator())
    .has()
    .digits()
    .has()
    .symbols(),
  baseSchema(new PasswordValidator())
    .has()
    .symbols()
    .has()
    .letters(),
  baseSchema(new PasswordValidator())
    .has()
    .digits()
    .has()
    .letters(),
  baseSchema(new PasswordValidator())
    .has()
    .digits()
    .has()
    .letters()
    .has()
    .symbols(),
];

export default {
  idCard: (rule: any, value: any) => {
    return value
      ? value?.length === 18 && IDCard(value.toUpperCase()).isVerified
        ? Promise.resolve()
        : Promise.reject(new Error('请输入正确的身份证号码'))
      : rule.required
      ? Promise.reject(new Error('请输入身份证号码'))
      : Promise.resolve();
  },
  phone: (rule: any, value: any) => {
    return value
      ? /^1[3-9][0-9]{9}$/.test(value)
        ? Promise.resolve()
        : Promise.reject(new Error('请输入正确的手机号码'))
      : rule.required
      ? Promise.reject(new Error('请输入手机号码'))
      : Promise.resolve();
  },
  password: (rule: any, value: any) => {
    return value
      ? passwordSchemas.some(schema => schema.validate(value))
        ? Promise.resolve()
        : Promise.reject(
            new Error(
              '请设置8- 20位密码，至少包含数字、字母、特殊符号中2种，不能有空格',
            ),
          )
      : rule.required
      ? Promise.reject(new Error('请输入密码'))
      : Promise.resolve();
  },
};
