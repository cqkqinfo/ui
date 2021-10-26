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
    password: Boolean,
    confirmType: String,
    placeholderClassName: String,
    type: String,
    confirmHold: Boolean,
    showConfirmBar: Boolean,
  },
  observers: {
    value: function(value) {
      if (this.data.changed || value) {
        this.setData({ changed: true });
        throttle(
          this.data.myId,
          () => {
            this.triggerEvent('change', value);
          },
          500,
        );
      }
    },
  },
  lifetimes: {
    ready() {
      this.setData({ myId: Math.random() });
    },
  },
  methods: {
    onBlur(e) {
      this.triggerEvent('blur', e);
    },
    onFocus(e) {
      this.triggerEvent('focus', e);
    },
    onConfirm(e) {
      this.triggerEvent('confirm', e);
    },
  },
});
