/* eslint-disable */
// eslint-disable-next-line no-undef
Component({
  options: {
    styleIsolation: 'apply-shared',
  },
  props: {
    id: String,
    style: String,
    className: String,
    content: String,
    visible: Boolean,
  },
  onInit() {
    console.log(111);
    this.triggerEvent('this', this);
  },
  didMount() {
    console.log(2222);
    this.triggerEvent('this', this);
  },
});
