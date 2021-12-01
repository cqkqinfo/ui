import { Options } from './index';
import ReactDOM from 'react-dom';
import { PhotoSlider } from 'react-photo-view';
import 'react-photo-view/dist/index.css';
import React from 'react';
import './index.less';
import { useEffectState } from 'parsec-hooks';

const Component = ({ urls, current, dom }: Options & { dom: HTMLElement }) => {
  const [index, setIndex] = useEffectState(
    current ? urls.findIndex(i => i === current) : 0,
  );
  return (
    <PhotoSlider
      images={urls.map(item => ({ src: item }))}
      visible
      onIndexChange={setIndex}
      index={index}
      onClose={() => {
        ReactDOM.unmountComponentAtNode(dom);
      }}
    />
  );
};

export default (options: Options) => {
  const dom = document.createElement('div');
  ReactDOM.render(<Component {...options} dom={dom} />, dom);
};
