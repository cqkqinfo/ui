const obj = {};
const throttle = (id, fn, delay) => {
  const { valid = true } = obj[id] || {};
  if (!obj[id]) {
    obj[id] = {};
  }
  obj[id].fn = fn;
  if (!valid) return;
  obj[id].valid = false;
  setTimeout(() => {
    obj[id].fn();
    obj[id].valid = true;
  }, delay);
};

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
    value: String,
    placeholder: String,
    placeholderStyle: String,
    focus: Boolean,
    autoHeight: Boolean,
    adjustPosition: Boolean,
    disableDefaultPadding: Boolean,
    cursorSpacing: Number,
    defaultValue: String,
    disabled: Boolean,
    maxLength: Number,
    delay: Number,
    password: Boolean,
    confirmType: String,
    placeholderClassName: String,
    type: String,
    confirmHold: Boolean,
    showConfirmBar: Boolean,
  },
  data: {
    myValue: undefined,
    isFocus: false,
    myId: Math.random(),
  },
  deriveDataFromProps(nextProps) {
    if (this.data.value !== nextProps.value) {
      if (!this.data.isFocus || !nextProps.value) {
        this.setData({ myValue: nextProps.value });
      }
    }
  },
  methods: {
    onBlur(e) {
      this.setData({ isFocus: false });
      this.props.onBlur && this.props.onBlur(e);
    },
    onFocus(e) {
      this.setData({ isFocus: true });
      this.props.onFocus && this.props.onFocus(e);
    },
    onInput(e) {
      const value = e.detail.value;
      if ((this.data.changed || value) && value !== this.data.value) {
        this.setData({ changed: true });
        throttle(
          this.data.myId,
          () => {
            this.props.onChange && this.props.onChange(e);
          },
          this.data.delay || 500,
        );
      }
    },
    onConfirm(e) {
      this.props.onConfirm && this.props.onConfirm(e);
    },
  },
});
