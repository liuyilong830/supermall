<template>
  <div class="goods-list-item" @click="itemClick">
    <div class="goods-item-first">
      <!-- <a :href="item.link">
        <img :src="item.show.img" alt="" @load="itemImgLoad">
      </a> -->
      <img :src="item.show.img" alt="" @load="itemImgLoad">
    </div>
    <div class="goods-item-second">
      <p>{{item.title}}</p>
      <span class="price">{{item.price}}</span>
      <span class="cfav">{{item.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodsListItem',
    props: {
      item: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    methods: {
      itemImgLoad() {
        // 在事件总线中发送了一个 itemImgLoad 的事件
        this.$bus.$emit('itemImgLoad');
      },
      itemClick() {
        this.$router.push('/detail/' + this.item.iid);
      }
    }
  }
</script>

<style>
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