import plainStyle from '@remax/one/esm/useWebPlaceholderStyle/plainStyle';

/* eslint-disable */
// eslint-disable-next-line no-undef
Component({
  options: {
    styleIsolation: 'apply-shared',
  },
  props: {
    id: '',
    onThis: data => {
      console.log(data);
    },
    style: '',
    className: '',
    content: '',
    visible: false,
  },
  data: {
    visible: false,
    className: '',
    style: '',
    content: '',
  },
  didMount() {
    const { onThis, ...props } = this.props;
    this.setData(props);
    this.props.onThis({
      setData: ({ style, ...data }) =>
        this.setData({
          ...data,
          style: typeof style === 'object' ? plainStyle(style) : style,
        }),
    });
  },
  methods: {
    onTap(e) {
      if (this.props.onTap) {
        this.props.onTap(e);
      }
    },
  },
});
