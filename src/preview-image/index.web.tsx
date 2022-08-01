import { Options } from './index';
import ReactDOM from 'react-dom';
import { PhotoSlider } from 'react-photo-view';
import 'react-photo-view/dist/index.css';
import React from 'react';
import './index.less';
import { useEffectState } from 'parsec-hooks';

function dataURItoBlob(dataURI: string) {
  const mimeString = dataURI
    .split(',')[0]
    .split(':')[1]
    .split(';')[0]; // mime类型
  const byteString = atob(dataURI.split(',')[1]); //base64 解码
  const arrayBuffer = new ArrayBuffer(byteString.length); //创建缓冲数组
  const intArray = new Uint8Array(arrayBuffer); //创建视图

  for (let i = 0; i < byteString.length; i++) {
    intArray[i] = byteString.charCodeAt(i);
  }
  return new Blob([intArray], { type: mimeString });
}

const Component = ({ urls, current, dom }: Options & { dom: HTMLElement }) => {
  const [index, setIndex] = useEffectState(
    current ? urls.findIndex(i => i === current) : 0,
  );
  urls.forEach((url, index) => {
    if (!/^(http)/.test(url)) {
      urls[index] = URL.createObjectURL(dataURItoBlob(url));
    }
  });
  return (
    <PhotoSlider
      images={urls.map(item => ({ src: item }))}
      visible
      onIndexChange={setIndex}
      index={index}
      onClose={e => {
        e?.stopPropagation();
        ReactDOM.unmountComponentAtNode(dom);
      }}
    />
  );
};

export default (options: Options) => {
  const dom = document.createElement('div');
  ReactDOM.render(<Component {...options} dom={dom} />, dom);
};
