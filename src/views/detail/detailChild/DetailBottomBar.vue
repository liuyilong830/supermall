<template>
  <div class="bottom-bar">
    <div class="icon">
      <div class="icon-public">
        <i class="iconfont icon-kefu"></i>
        <span>客服</span>
      </div>
      <div class="icon-public">
        <i class="iconfont icon-dianpu"></i>
        <span>店铺</span>
      </div>
      <div class="icon-public">
        <i class="iconfont icon-collection"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="add-shop-car" @click="addToCar">加入购物车</div>
    <div class="pay">购买</div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  methods: {
    addToCar() {
      this.$emit('addToCar');
    }
  },
}
</script>

<style scoped>
  @import 'http://at.alicdn.com/t/font_1612509_qw7nspjla9q.css';
  .bottom-bar {
    height: 49px;
    background-color: #fff;
    position: relative;
    /* bottom: 49px; */
    display: flex;
    box-shadow: 0 1px 6px #ccc;
  }
  .icon {
    flex: 50%;
    display: flex;
  }
  .icon-public {
    flex: 1;
    display: flex;
    font-size: 14px;
    text-align: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .icon-public i {
    font-size: 23px;
    padding-top: 4px;
  }
  .add-shop-car , .pay {
    flex: 25%;
    text-align: center;
    line-height: 49px;
  }
  .add-shop-car {
    background-color: yellow;
  }
  .pay {
    background-color: pink;
  }
</style>