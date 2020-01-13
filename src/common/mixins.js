import {debounce} from 'common/utils'

export const itemListListenerMixIn = {
  data() {
    return {
      itemImgLoadFunc: null,
      refresh: null
    }
  },
  mounted() {
    // 1.防抖函数
    this.refresh = debounce(this.$refs.scroll.refresh , 500);

    // 在这里接收 GoodListItem 向事件总线发送的事件 itemImgLoad
    this.itemImgLoadFunc = () => {
      // console.log('-----------');
      // 当图片加载完之后我们调用 scroll.refresh() 这个方法将重新刷新 scroll对象中的scrollerHeight属性值
      this.refresh();
    }
    this.$bus.$on('itemImgLoad', this.itemImgLoadFunc)
  },
}