import rpxToPx from './index';

describe('rpx转px', () => {
  it('web平台', () => {
    expect(rpxToPx(710)).toEqual(355);
  });

  it('wechat平台', () => {
    process.env.REMAX_PLATFORM = 'wechat';
    expect(rpxToPx(710)).toEqual(710);
    process.env.REMAX_PLATFORM = 'web';
  });
});
