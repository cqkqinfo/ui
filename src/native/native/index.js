/* eslint-disable */
// eslint-disable-next-line no-undef
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
      this.triggerEvent('this', this);
    },
  },
});
