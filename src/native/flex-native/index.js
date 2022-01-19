/* eslint-disable */
// eslint-disable-next-line no-undef
import plainStyle from '@remax/one/esm/useWebPlaceholderStyle/plainStyle';

Component({
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
