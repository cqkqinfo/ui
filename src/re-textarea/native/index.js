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
  },
  observers: {
    value: function(value) {
      this.triggerEvent('change', value);
    },
  },
  onBlur(e) {
    this.triggerEvent('blur', e);
  },
  onFocus(e) {
    this.triggerEvent('focus', e);
  },
  onConfirm(e) {
    this.triggerEvent('confirm', e);
  },
});
