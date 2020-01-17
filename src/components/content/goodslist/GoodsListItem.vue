<template>
  <div class="goods-list-item" @click="itemClick">
    <div class="goods-item-first">
    <img @load="itemImgLoad" v-lazy="showImage" :key="showImage" alt="">
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
        /*  
          由于在 home 和 detail 中都要发送事件总线，这个时候就会有问题，比如在 detail中触发的是 home 中的事件接收，出于简单考虑，
          可以发送两个事件，名字不同即可；出于方便的话，我们可以在 home 和 detail 组件中在组件出于非活跃状态的时候关闭总线，但是
          detail中不能这么做，因为detail是不被 keep-alice 包裹的，所以非活跃状态函数不会起效果，则可以使用在销毁的时候关闭事件
        */
        // 方法一：
        /* if(this.$route.path.indexOf('/home')) {
          this.$bus.$emit('itemImgLoad');
        }else {
          this.$bus.$emit('detailItemImgLoad');
        } */
        // 方法二：
        this.$bus.$emit('itemImgLoad');
      },
      itemClick() {
        var id = this.item.iid || this.item.shop_id;
        this.$router.push('/detail/' + id);
      }
    },
    computed: {
    	showImage() {
    		return this.item.img || this.item.image || this.item.show.img
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