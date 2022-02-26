import { View, Text, Image } from '@remax/one';
import classNames from 'classnames';
import React, { useState } from 'react';
import styles from './index.module.less';
import { selectFiles, useRefState, useStateRef } from 'parsec-hooks';
import Icon from '../icon';
import previewImage from '../preview-image';
import getPlatform from '../get-platform';

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
  /**
   * 自定义添加按钮
   */
  addBtn?: React.ReactElement;
  /**
   * 样式
   */
  style?: React.CSSProperties;
  /**
   * 没有数据时的提示
   */
  tip?: React.ReactNode;
  /**
   * 上传项类名
   */
  itemCls?: string;
  /**
   * 类名
   */
  className?: string;
  /**
   * 自定义删除图标
   */
  delIcon?: React.ReactNode;
  /**
   * 删除图标类名
   */
  delIconCls?: string;
  /**
   * 只有小程序支持，选择图片的来源
   */
  sourceType?: Array<'album' | 'camera'>;
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
  addBtn,
  style,
  delIcon = <Icon name="kq-clear2" color="#EA5328" />,
  sourceType = ['album', 'camera'],
  tip = (
    <View className={classNames(styles.promptText)}>
      <Text className={classNames(styles.promptText1)}>添加图片</Text>
      <Text className={classNames(styles.promptText2)}>
        请上传高清原图，最多上传{length}张
      </Text>
    </View>
  ),
  className,
  delIconCls,
  itemCls,
}: Props) => {
  const [loadingArr, setLoadingArr, loadingArrRef] = useRefState<string[]>([]);
  const valueRef = useStateRef(value);
  return (
    <View className={classNames(styles.uploadImg, className)} style={style}>
      {[...value, ...loadingArr].map((item, index) => {
        const loading = loadingArr.includes(item);
        return (
          <View
            className={classNames(styles.uploadImgItem, itemCls)}
            key={index}
          >
            <Image
              className={classNames(styles.uploadImgItemImage)}
              src={item}
              onTap={() => {
                previewImage({ urls: value, current: item });
              }}
            />
            {loading ? (
              <View className={styles.loading}>
                <Icon name={'kq-loading'} color={'#fff'} />
              </View>
            ) : (
              <View
                className={classNames(styles.uploadImgItemDelete, delIconCls)}
                onTap={() => {
                  const temp = [...value];
                  temp.splice(index, 1);
                  onChange && onChange([...temp]);
                }}
              >
                {delIcon}
              </View>
            )}
          </View>
        );
      })}
      {value.length + loadingArr.length < length && (
        <View
          onTap={() => {
            if (valueRef.current.length >= length) {
              return;
            }
            selectFiles({
              multiple,
              accept: 'image/*',
              sourceType,
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
                  const fileUrl: any =
                    getPlatform === 'web' && tempFile instanceof File
                      ? URL.createObjectURL(tempFile)
                      : tempFile;
                  setLoadingArr([...loadingArrRef.current, fileUrl]);

                  await uploadFn(tempFile)
                    .then(url => {
                      loadingArrRef.current.splice(
                        loadingArrRef.current.findIndex(i => i === fileUrl),
                        1,
                      );
                      setLoadingArr([...loadingArrRef.current]);
                      tempData.push(url);
                    })
                    .catch(onError);
                } catch (e) {
                  console.log(e);
                  onError && onError('beforeUpload');
                }
              }

              const temp = [...valueRef.current, ...tempData].slice(0, length);
              onChange && onChange([...temp]);
            });
          }}
        >
          {addBtn || (
            <View className={classNames(styles.uploadImgIcon)}>
              <Icon
                className={classNames(styles.uploadImgIconAdd)}
                name="kq-add"
                color="#999999"
              />
            </View>
          )}
        </View>
      )}
      {!(value?.length + loadingArr.length) && tip}
    </View>
  );
};
