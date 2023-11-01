Component({
  properties: {
    // API 应用_api-app | vip_vip-one | 上一步_back | 下一步_next | 书籍-打开_book-open | 删除_delete | 删除5_delete-five | 剪切板_clipboard | 升序排序_sort-amount-up | 图片上传_upload-picture | 复制_copy-one | 复制_copy | 天平_balance-two | 导出_export | 应用菜单_application-menu | 截屏_screenshot | 报错_caution | 搜查_find-one | 搜索_search | 播放_play-one | 星星_star | 查找_find | 添加_add-four | 清除_clear | 点_dot | 用户_user | 筛选_filter | 继续_go-on | 设置_setting-two | 返回_return | 进度2_pie-two | 降序排序_sort-amount-down | 首页_home
    name: {
      type: String,
    },
    // string | string[]
    color: {
      type: null,
      observer: function(color) {
        this.setData({
          colors: this.fixColor(),
          isStr: typeof color === 'string',
        });
      }
    },
    size: {
      type: Number,
      value: 18,
      observer: function(size) {
        this.setData({
          svgSize: size / 750 * wx.getSystemInfoSync().windowWidth,
        });
      },
    },
  },
  data: {
    colors: '',
    svgSize: 18 / 750 * wx.getSystemInfoSync().windowWidth,
    quot: '"',
    isStr: true,
  },
  methods: {
    fixColor: function() {
      var color = this.data.color;
      var hex2rgb = this.hex2rgb;

      if (typeof color === 'string') {
        return color.indexOf('#') === 0 ? hex2rgb(color) : color;
      }

      return color.map(function (item) {
        return item.indexOf('#') === 0 ? hex2rgb(item) : item;
      });
    },
    hex2rgb: function(hex) {
      var rgb = [];

      hex = hex.substr(1);

      if (hex.length === 3) {
        hex = hex.replace(/(.)/g, '$1$1');
      }

      hex.replace(/../g, function(color) {
        rgb.push(parseInt(color, 0x10));
        return color;
      });

      return 'rgb(' + rgb.join(',') + ')';
    }
  }
});
