import webScreenWidth from './index';
import wechatScreenWidth from './index.wechat';

describe('屏幕宽度', () => {
  it('web平台', () => {
    expect(webScreenWidth).toEqual(375);
  });

  it('wechat平台', () => {
    expect(wechatScreenWidth).toEqual(750);
  });
});
