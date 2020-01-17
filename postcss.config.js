module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375,   //  视窗的宽度，对应的是我们设计稿的宽度
      viewportHeight: 667,  //  视窗的高度，对应的是我们设计稿的高度
      unitPrecision: 5,     //  指定‘px’转换为视窗单位值的小数位数
      viewportUnit: 'vw',   //  指定需要转换为视窗的单位，使用最多的是 vw
      selectorBlackList: ['tabbar','tabbar_item'],  //  指定不需要转换的类，包含其子元素的类
      minPixelValue: 1,     //  小于或等于 1px 不转换为视窗单位
      mediaQuery: false,    //  允许在媒体查询中转换 px
      // exclude: [/tabBar/]  //  不包含的文件，属性值可以是正则也可以是数组，若是数组则数组中的值为正则
    }
  }
}