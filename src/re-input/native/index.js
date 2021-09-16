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
      this.triggerEvent('change', value);
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
