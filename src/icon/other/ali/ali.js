Component({
  props: {
    // kq-sousuo | kq-zhengque | kq-fenge | kq-tag | kq-shouye | kq-caidan | kq-zanting | kq-bofang | kq-zhibozhong | kq-shoucang1 | kq-zan1 | kq-shijian | kq-zhuanlan | kq-zhizhen | kq-time | kq-bukanjian | kq-kanjian | kq-jiankang | kq-rili | kq-zhibo | kq-chuangzuo | kq-yisheng | kq-weixin | kq-eye | kq-zan | kq-shoucang | kq-shuaxin | kq-tongzhi | kq-home | kq-yiyuan | kq-keshi | kq-mobile | kq-left | kq-filter | kq-jia | kq-album | kq-biaoqing | kq-voice | kq-xiangji | kq-xingxing | kq-tip | kq-jianshao | kq-zengjia | kq-right | kq-home-solid | kq-monitor | kq-notice | kq-add | kq-clear | kq-clear2 | kq-yes | kq-search | kq-down | kq-loading2 | kq-loading
    name: null,
    // string | string[]
    color: '',
    size: 18,
  },
  data: {
    colors: '',
    quot: '"',
    svgSize: 18,
    isStr: true,
  },
  didMount() {
    const size = this.props.size;
    const color = this.props.color;

    this.setData({
      colors: this.fixColor(color),
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
        colors: this.fixColor(color),
        isStr: typeof color === 'string',
      });
    }

    if (size !== prevProps.size) {
      this.setData({
        svgSize: size,
      });
    }
  },
  methods: {
    fixColor: function() {
      var color = this.props.color;
      var hex2rgb = this.hex2rgb;

      if (typeof color === 'string') {
        return color.indexOf('#') === 0 ? hex2rgb(color) : color;
      }

      return color.map(function(item) {
        return item.indexOf('#') === 0 ? hex2rgb(item) : item;
      });
    },
    hex2rgb: function(hex) {
      var rgb = [];

      hex = hex.substr(1);

      if (hex.length === 3) {
        hex = hex.replace(/(.)/g, '$1$1');
      }

      hex.replace(/../g, function(color) {
        rgb.push(parseInt(color, 0x10));
        return color;
      });

      return 'rgb(' + rgb.join(',') + ')';
    },
  },
});
