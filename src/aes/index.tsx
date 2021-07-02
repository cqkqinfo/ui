import CryptoJS from 'crypto-js';
import { Base64 } from 'js-base64';

const key = CryptoJS.enc.Utf8.parse('3afb44a7f4110ac9'); // 十六位十六进制数作为密钥
// const iv = CryptoJS.enc.Utf8.parse(''); // 十六位十六进制数作为密钥偏移量 /

export const Decrypt = (word: string) => {
  const encryptedHexStr = CryptoJS.enc.Hex.parse(
    Uint8Array2HexString(Base64.toUint8Array(word)),
  );
  const srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  const decrypt = CryptoJS.AES.decrypt(srcs, AES.key, {
    iv: AES.key, // iv为空时使用key代替
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();
};

export const Encrypt = (word: string) => {
  const encrypted = CryptoJS.AES.encrypt(word, AES.key, {
    iv: AES.key, // iv为空时使用key代替
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return Base64.fromUint8Array(
    HexString2Uint8Array(encrypted.ciphertext.toString()),
  );
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
  key,
};

export default AES;
