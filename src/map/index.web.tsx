import { useId, useImportCDN } from 'parsec-hooks';
import React, { useEffect, useRef, useState } from 'react';
import { MapProps } from 'remax/wechat';
import { View } from 'remax/one';
import { getWH } from '../use-view-size';

export default ({
  latitude,
  longitude,
  id = useId(),
  markers,
  style,
  onMarkerClick,
  ...props
}: Omit<MapProps, 'markers'> & {
  markers: {
    id?: any;
    iconPath?: any;
    label?: any;
    latitude?: any;
    longitude?: any;
    width?: any;
    height?: any;
  }[];
}) => {
  const [map, setMap] = useState<any>(null);
  const [tMap, settMap] = useState<any>(null);
  useImportCDN(
    'https://map.qq.com/api/gljs?v=1.exp&key=UNDBZ-L4V3I-AU7GW-573FE-LOENF-YZBLI',
    'TMap',
    tMap => {
      settMap(tMap);
    },
  );
  useEffect(() => {
    if (map || !tMap || !latitude) return;
    const center = new tMap.LatLng(latitude, longitude);
    //初始化地图
    setMap(
      new tMap.Map(id, {
        zoom: 12, //设置地图缩放级别
        center, //设置地图中心点坐标
      }),
    );
  }, [id, latitude, longitude, map, tMap]);
  const markersRef = useRef<any>();
  useEffect(() => {
    if (!map || JSON.stringify(markersRef.current) === JSON.stringify(markers))
      return;
    markersRef.current = markers;
    const styles: any = {};
    markers.forEach(({ width, height, iconPath, id }) => {
      styles[id] = new tMap.MarkerStyle({
        width: +(width?.toFixed(0) || 0), // 点标记样式宽度（像素）
        height: +(height?.toFixed(0) || 0), // 点标记样式高度（像素）
        src: iconPath, //图片路径
        //焦点在图片中的像素位置，一般大头针类似形式的图片以针尖位置做为焦点，圆形点以圆心位置为焦点
        anchor: { x: 16, y: 32 },
      });
    });
    const marker = new tMap.MultiMarker({
      map, //指定地图容器
      //样式定义
      styles,
      //点标记数据数组
      geometries: markers?.map(({ id, latitude, longitude, label }) => ({
        styleId: id,
        id, //点标记唯一标识，后续如果有删除、修改位置等操作，都需要此id
        position: new tMap.LatLng(latitude, longitude), //点标记坐标位置
      })),
    });
    new tMap.MultiLabel({
      map: map,
      styles: {
        label: new tMap.LabelStyle({
          color: '#333', //颜色属性
          size: 16, //文字大小属性
          offset: {
            x: (markers?.[0].width || 0) / 6,
            y:
              (markers?.[0].height || 0) / 2 +
              (markers?.[0].label.anchorY || 0),
          }, //文字偏移属性单位为像素
          angle: 0, //文字旋转属性
          alignment: 'center', //文字水平对齐属性
          verticalAlignment: 'middle', //文字垂直对齐属性
        }),
      },
      geometries: markers?.map(
        ({ label: { content } = {}, id, latitude, longitude }) => ({
          id, //点图形数据的标志信息
          position: new tMap.LatLng(latitude, longitude),
          styleId: 'label', //样式id
          content: content, //标注文本
        }),
      ),
    });
    marker.on('click', (e: any) =>
      onMarkerClick?.({ detail: { markerId: e.geometry.id } } as any),
    );
  }, [map, markers, onMarkerClick, tMap]);
  const [height, setHeight] = useState<number>();
  useEffect(() => {
    getWH(id).then(({ height }) => {
      setHeight(height);
    });
  }, [id]);
  return (
    <View
      id={id}
      {...(props as any)}
      style={{ ...style, maxHeight: height || style?.height }}
    />
  );
};
