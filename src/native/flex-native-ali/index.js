/* eslint-disable */
// eslint-disable-next-line no-undef
import plainStyle from '@remax/one/esm/useWebPlaceholderStyle/plainStyle';

Component({
  props: {
    id: String,
    style: String,
    className: String,
    content: String,
    visible: Boolean,
  },
  methods: {
    onTap(e) {
      this.triggerEvent('tap', e);
      this.props.onThis({
        setData: ({ style, ...data }) =>
          this.setData({
            ...data,
            style: typeof style === 'object' ? plainStyle(style) : style,
          }),
      });
    },
  },
  // onInit() {
  //   this.triggerEvent('this', this);
  // },
});
