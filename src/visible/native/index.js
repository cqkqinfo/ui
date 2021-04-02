/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable no-var */
var idCount = 0;

// eslint-disable-next-line no-undef
Component({
  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    className: String,
  },
  data: {
    id: '',
  },
  isShow: false,
  lifetimes: {
    ready: function() {
      this.setData({
        id: `visible${idCount++}`,
        className: this.properties.className,
      });
      var offsetY = 0;
      var that = this;
      // eslint-disable-next-line no-undef
      wx.createIntersectionObserver(this)
        .relativeToViewport({
          top: this.isShow ? -offsetY : offsetY,
          bottom: this.isShow ? -offsetY : offsetY,
        })
        .observe(`#${this.data.id}`, function({
          intersectionRect: { height },
        }) {
          var isShow = height > 0;
          that.isShow = isShow;
          if (isShow) {
            that.triggerEvent('visible');
          } else {
            that.triggerEvent('hidden');
          }
        });
    },
  },
});
