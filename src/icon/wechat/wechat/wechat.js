Component({
  properties: {
    // kq-shijian | kq-zhuanlan | kq-zhizhen | kq-time | kq-bukanjian | kq-kanjian | kq-jiankang | kq-rili | kq-zhibo | kq-chuangzuo | kq-yisheng | kq-weixin | kq-eye | kq-zan | kq-shoucang | kq-shuaxin | kq-tongzhi | kq-home | kq-yiyuan | kq-keshi | kq-mobile | kq-left | kq-filter | kq-jia | kq-album | kq-biaoqing | kq-voice | kq-xiangji | kq-xingxing | kq-tip | kq-jianshao | kq-zengjia | kq-right | kq-home-solid | kq-monitor | kq-notice | kq-add | kq-clear | kq-clear2 | kq-yes | kq-search | kq-down | kq-loading2 | kq-loading
    name: {
      type: String,
    },
    // string | string[]
    color: {
      type: null,
      observer: function(color) {
        this.setData({
          colors: this.fixColor(),
          isStr: typeof color === 'string',
        });
      },
    },
    size: {
      type: Number,
      value: 18,
      observer: function(size) {
        this.setData({
          svgSize: size,
        });
      },
    },
  },
  data: {
    colors: '',
    svgSize: 18,
    quot: '"',
    isStr: true,
  },
  methods: {
    fixColor: function() {
      var color = this.data.color;
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
