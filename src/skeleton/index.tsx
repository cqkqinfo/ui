import React, { useEffect, useMemo, useState } from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import './index.module.less';

export interface SkeletonParagraphProps {
  rows?: number;
  width?: number | string | number[] | string[];
}

export interface SkeletonProps {
  title?: boolean;
  titleColor?: string;
  backgroundColor?: string;
  active?: boolean;
  avatar?: boolean;
  loading?: boolean;
  image?: boolean;
  fade?: boolean;
  paragraph?: SkeletonParagraphProps;
  repetitions?: number;
  space?: number;
  customize?: React.ReactNode;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export default (props: SkeletonProps) => {
  const {
    title = true,
    titleColor,
    backgroundColor,
    active,
    avatar = false,
    loading = true,
    image = false,
    paragraph = { rows: 3, width: [80, 'auto', 200] },
    repetitions = 1,
    space,
    customize,
    fade,
    style,
    children,
  } = props;
  const [loadingEnd, setLoadingEnd] = useState<boolean>(false);
  const [renderStart, setRenderStart] = useState<boolean>(false);
  useEffect(() => {
    if (fade) {
      if (!loading) {
        setTimeout(() => {
          setLoadingEnd(true);
        }, 300);
      }
      if (loading) {
        setLoadingEnd(false);
        setRenderStart(false);
      }
    }
  }, [loading]);

  useEffect(() => {
    if (fade) {
      if (loadingEnd) {
        setTimeout(() => {
          setRenderStart(true);
        }, 100);
      }
    }
  }, [loadingEnd]);

  const rows = useMemo(
    () => (paragraph.rows ? [...new Array(paragraph.rows).keys()] : []),
    [paragraph],
  );
  const rowsWidth = useMemo(() => {
    if (typeof paragraph.width === 'number') {
      return [...new Array(rows.length).fill(`${paragraph.width}px`)];
    }
    if (typeof paragraph.width === 'string') {
      return [...new Array(rows.length).fill(paragraph.width)];
    }
    if (Array.isArray(paragraph.width)) {
      return (paragraph.width as any[])?.map((i: any) => {
        if (typeof i === 'number') {
          return `${i}px`;
        } else if (typeof i === 'string') {
          return i;
        } else {
          return 'auto';
        }
      });
    }
  }, [paragraph]);

  const prefixCls = 'kq-skeleton';

  const renderImage = (visible: any) => {
    return visible ? (
      <View
        className={classNames({
          [`${prefixCls}-image`]: true,
          [`${prefixCls}-active`]: active,
        })}
      />
    ) : null;
  };

  const renderAvatar = (visible: any) => {
    return visible ? (
      <View
        className={classNames({
          [`${prefixCls}-avatar`]: true,
          [`${prefixCls}-active`]: active,
        })}
      />
    ) : null;
  };

  const renderTitle = (visible: any) => {
    return visible ? (
      <View
        className={classNames({
          [`${prefixCls}-title`]: true,
          [`${prefixCls}-active`]: active,
        })}
        style={{ backgroundColor: titleColor }}
      />
    ) : null;
  };

  const renderParagraph = () => {
    return rows.map((item, index) => (
      <View
        key={item}
        className={classNames({
          [`${prefixCls}-row`]: true,
          [`${prefixCls}-active`]: active,
        })}
        style={{
          width: rowsWidth?.[index],
        }}
      />
    ));
  };

  const renderSkeleton = () => {
    const skeleton = [...new Array(repetitions).keys()];
    return (
      <>
        {skeleton?.map((i, index) => (
          <View
            key={i}
            className={`${prefixCls}-item`}
            style={{ marginBottom: index !== skeleton.length - 1 ? space : 0 }}
          >
            {customize ? (
              customize
            ) : (
              <>
                {renderImage(image)}
                {renderAvatar(avatar)}
                {renderTitle(title)}
                {renderParagraph()}
              </>
            )}
          </View>
        ))}
      </>
    );
  };

  if (fade) {
    return (
      <View className={prefixCls}>
        {!loadingEnd ? (
          <View
            className={classNames(`${prefixCls}-placeholder`, {
              [`${prefixCls}-hidden`]: !loading,
            })}
            style={{ backgroundColor, ...style }}
          >
            {renderSkeleton()}
          </View>
        ) : (
          <View
            className={classNames({
              [`${prefixCls}-container`]: true,
              [`${prefixCls}-container-active`]: renderStart,
            })}
          >
            {children}
          </View>
        )}
      </View>
    );
  }

  return (
    <View className={prefixCls}>
      {loading ? (
        <View
          className={`${prefixCls}-placeholder`}
          style={{ backgroundColor, ...style }}
        >
          {renderSkeleton()}
        </View>
      ) : (
        <View
          className={classNames({
            [`${prefixCls}-container`]: true,
            [`${prefixCls}-container-active`]: true,
          })}
        >
          {children}
        </View>
      )}
    </View>
  );
};
