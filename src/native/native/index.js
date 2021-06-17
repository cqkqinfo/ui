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
      console.log(33333333, this);
      this.triggerEvent('this', this);
    },
  },
});
