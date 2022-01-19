import plainStyle from '@remax/one/esm/useWebPlaceholderStyle/plainStyle';
/* eslint-disable */
// eslint-disable-next-line no-undef
Component({
  options: {
    styleIsolation: 'apply-shared',
  },
  properties: {
    id: String,
    style: String,
    className: String,
    content: String,
    visible: Boolean,
  },
  lifetimes: {
    ready: function() {
      this.triggerEvent('this', {
        setData: ({ style, ...data }) => {
          this.setData({
            ...data,
            style: typeof style === 'object' ? plainStyle(style) : style,
          });
        },
      });
    },
  },
  methods: {
    onTap(e) {
      this.triggerEvent('tap', e);
    },
  },
});
