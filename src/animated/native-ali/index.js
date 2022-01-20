/* eslint-disable @typescript-eslint/no-this-alias,no-undef */
/* eslint-disable no-var */
// eslint-disable-next-line no-undef
Component({
  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    animation: Object,
  },
  methods: {
    animationEnd: function(e) {
      console.log(this, 'animated-ali', e);
    },
  },
});
