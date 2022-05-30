import React from 'react';
import { VideoProps } from '@remax/wechat/esm/hostComponents/Video';

export default ({ autoplay, ...props }: VideoProps) => {
  return (
    <video
      controls
      {...(props as any)}
      autoPlay={autoplay}
      webkit-playsinline="true"
      x-webkit-airplay="true"
      playsInline
      x5-video-player-type="h5"
      // x5-video-player-fullscreen="true"
    />
  );
};
