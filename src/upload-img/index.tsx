import { View, Text, Image } from '@remax/one';
import classNames from 'classnames';
import React from 'react';
import styles from './index.module.less';
import { selectFiles } from 'parsec-hooks';
import Icon from '../icon';
import previewImage from '../preview-image';

interface Props {
  /**
   * 图片数量
   * @default 1
   */
  length?: number;
  /**
   * 是否可以多选
   * @default false
   */
  multiple?: boolean;
  /**
   * 上传方法
   */
  uploadFn: (file: File) => Promise<string>;
  /**
   * 上传文件最大大小
   * 计算方式 MB * 1024 * 1024 如：1M 写做：1 * 1024 * 1024
   */
  maxSize?: number;
  /**
   * 上传文件过大报错
   */
  onMaxError?: () => void;
  /**
   * 上传文件之前
   */
  beforeUpload?: (file: File) => boolean | Promise<File>;
  /**
   * 上传上传报错
   */
  onError?: (value: string) => void;
  /**
   * value值
   */
  value?: string[];
  /**
   * onChange事件
   */
  onChange?: (value?: string[]) => void;
}

export default ({
  length = 1,
  multiple = false,
  uploadFn,
  maxSize,
  onMaxError,
  onError,
  beforeUpload = () => true,
  value = [],
  onChange,
}: Props) => {
  return (
    <View className={classNames(styles.uploadImg)}>
      {value.map((item, index) => (
        <View className={classNames(styles.uploadImgItem)} key={index}>
          <Image
            className={classNames(styles.uploadImgItemImage)}
            src={item}
            onTap={() => {
              previewImage({ urls: [item] });
            }}
          />
          <Icon
            className={classNames(styles.uploadImgItemDelete)}
            name="kq-clear2"
            color="#EA5328"
            onTap={() => {
              const temp = [...value];
              temp.splice(index, 1);
              onChange && onChange([...temp]);
            }}
          />
        </View>
      ))}
      {value.length < length && (
        <View
          className={classNames(styles.uploadImgIcon)}
          onTap={() => {
            if (value.length >= length) {
              return;
            }
            selectFiles({
              multiple,
              accept: 'image/*',
            }).then(async data => {
              const tempData: string[] = [];
              for (const file of data) {
                const maxErrFn = () => maxSize && file.size > maxSize;
                try {
                  if (await maxErrFn()) {
                    if (onMaxError) {
                      onMaxError();
                    }
                    onError && onError('beforeUpload');
                    return;
                  }
                  const result = await beforeUpload(file);
                  let tempFile = file;

                  if (typeof result === 'boolean') {
                    if (!result) {
                      return;
                    }
                  } else {
                    tempFile = result;
                  }

                  await uploadFn(tempFile)
                    .then(url => {
                      tempData.push(url);
                    })
                    .catch(onError);
                } catch (e) {
                  onError && onError('beforeUpload');
                }
              }

              const temp = [...value, ...tempData].slice(0, length);
              onChange && onChange([...temp]);
            });
          }}
        >
          <Icon
            className={classNames(styles.uploadImgIconAdd)}
            name="kq-add"
            color="#999999"
          />
        </View>
      )}
      {!value?.length && (
        <View className={classNames(styles.promptText)}>
          <Text className={classNames(styles.promptText1)}>添加图片</Text>
          <Text className={classNames(styles.promptText2)}>
            请上传高清原图，最多上传{length}张
          </Text>
        </View>
      )}
    </View>
  );
};
