<template>
  <div class="detial-recommend" v-if="Object.keys(goodsList).length !== 0">
    <div class="goods-list-item" v-for="(item,index) in goodsList" :key="index" @click="itemClick(item)">
      <div class="goods-item-first">
        <img :src="item.image" alt="">
      </div>
      <div class="goods-item-second">
        <p>{{item.title}}</p>
        <span class="price">{{item.price}}</span>
        <span class="cfav">{{item.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailRecommend',
  props: {
    goodsList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    itemClick(item) {
      this.$router.push('/detail/' + item.shop_id);
    }
  },
}
</script>

<style scoped>
  .detial-recommend {
    padding-top: 2px;
    box-shadow: 0px -2px 6px #6f67674f;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .goods-list-item {
    width: 48%;
    height: 310px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
  }
  .goods-item-first {
    border-radius: 6px;
  }
  .goods-item-second {
    text-align: center;
    overflow: hidden;
  }
  .goods-item-second p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .goods-list-item img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-item-second .price {
    color: var(--color-tint);
    margin-right: 20px;
  }
  .goods-item-second .cfav {
    position: relative;
  }
  .goods-item-second .cfav::before {
    content: "";
    width: 14px;
    position: absolute;
    /* top: -1px; */
    left: -15px;
    height: 14px;
    background: url('~assets/images/common/collect.svg') 0 0/14px 14px;
  }
</style>