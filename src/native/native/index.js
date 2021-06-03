/* eslint-disable */
// eslint-disable-next-line no-undef
Component({
  data: {
    id: '',
    style: '',
    className: '',
    children: '',
    visible: true,
  },
  lifetimes: {
    ready: function() {
      this.triggerEvent('this', this);
    },
  },
});
