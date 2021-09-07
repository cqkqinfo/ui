Component({
  props: {
    // kq-zhengque | kq-fenge | kq-tag | kq-shouye | kq-caidan | kq-zanting | kq-bofang | kq-zhibozhong | kq-shoucang1 | kq-zan1 | kq-shijian | kq-zhuanlan | kq-zhizhen | kq-time | kq-bukanjian | kq-kanjian | kq-jiankang | kq-rili | kq-zhibo | kq-chuangzuo | kq-yisheng | kq-weixin | kq-eye | kq-zan | kq-shoucang | kq-shuaxin | kq-tongzhi | kq-home | kq-yiyuan | kq-keshi | kq-mobile | kq-left | kq-filter | kq-jia | kq-album | kq-biaoqing | kq-voice | kq-xiangji | kq-xingxing | kq-tip | kq-jianshao | kq-zengjia | kq-right | kq-home-solid | kq-monitor | kq-notice | kq-add | kq-clear | kq-clear2 | kq-yes | kq-search | kq-down | kq-loading2 | kq-loading
    name: null,
    // string | string[]
    color: '',
    size: 18,
  },
  data: {
    quot: '"',
    svgSize: 18,
    isStr: true,
  },
  didMount() {
    const size = this.props.size;
    const color = this.props.color;

    this.setData({
      isStr: typeof color === 'string',
    });

    if (size !== this.data.svgSize) {
      this.setData({
        svgSize: size,
      });
    }
  },
  disUpdate(prevProps) {
    const size = this.props.size;
    const color = this.props.color;

    if (color !== prevProps.color) {
      this.setData({
        isStr: typeof color === 'string',
      });
    }

    if (size !== prevProps.size) {
      this.setData({
        svgSize: size,
      });
    }
  },
});
