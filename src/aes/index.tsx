import * as aesjs from 'aes-js';
import Base64 from 'base64-js';

let aes: aesjs.ModeOfOperation.ModeOfOperationECB;

/**
 *
 * @param key 更换Key 重新生成aes实例
 * @returns
 */
const create = (key: string) => {
  aes = new aesjs.ModeOfOperation.ecb(aesjs.utils.utf8.toBytes(key));
  return aes;
};
create('3afb44a7f4110ac9');

const Decrypt = (word: string) => {
  const unit8 = Base64.toByteArray(word);
  const str = Uint8Array2HexString(unit8);
  const hex = aesjs.utils.hex.toBytes(str);
  const dec = aes.decrypt(hex);
  const pkc = aesjs.padding.pkcs7.strip(dec);
  const utf8Str = aesjs.utils.utf8.fromBytes(pkc);
  return utf8Str;
};

const Encrypt = (word: string) => {
  const utf8Byte = aesjs.utils.utf8.toBytes(word);
  const pkc = aesjs.padding.pkcs7.pad(utf8Byte);
  const enc = aes.encrypt(pkc);
  const hex = aesjs.utils.hex.fromBytes(enc);
  const unit8 = HexString2Uint8Array(hex);
  const str = Base64.fromByteArray(unit8);
  return str;
};

/**
 *
 * @param array d169101cda1a7eef830ec730e307767e
 * @returns [119, 231, 240, 75, 175, 198, 87, 169, 33, 174, 140, 215, 163, 42, 83, 112]
 */
const HexString2Uint8Array = (hexString: string) => {
  const hexArray =
    hexString.match(/[a-zA-Z0-9]{2}/g)?.map(x => parseInt(x, 16)) || []; // 两位分割
  return new Uint8Array(hexArray);
};

/**
 *
 * @param array [119, 231, 240, 75, 175, 198, 87, 169, 33, 174, 140, 215, 163, 42, 83, 112]
 * @returns 'd169101cda1a7eef830ec730e307767e'
 */
const Uint8Array2HexString = (array: Uint8Array) => {
  const temp: string[] = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const str = element.toString(16);
    temp.push(str.length === 1 ? '0' + str : str); // 小于10时需要补0
  }
  return temp.join('');
};

const AES = {
  Decrypt,
  Encrypt,
  HexString2Uint8Array,
  Uint8Array2HexString,
  create,
};

export default AES;
