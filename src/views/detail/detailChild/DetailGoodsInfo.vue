<template>
  <div class="detail-goods-info" v-if="Object.keys(detailData).length !== 0">
    <div class="detail-desc">
      <div class="border-top"></div>
      <div class="detail-desc-text">{{detailData.desc}}</div>
      <div class="border-bottom"></div>
    </div>
    <div class="detail-images">
      <img v-for="(item,index) in detailData.detailImage[0].list" :key="index" :src="item" alt="" @load="imageLoad">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailGoodsInfo',
    props: {
      detailData: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    data() {
      return {
        count: 0,
        imagesLength: 0
      }
    },
    methods: {
      imageLoad() {
        // if(++this.count === this.imagesLength) {
          this.$emit('detailInfo');
        // }
      }
    },
    watch: {
      imageWatch() {
        this.imagesLength = this.detailData.detailImage[0].list.length;
      }
    }
  }
</script>

<style scoped>
  .detail-goods-info {
    padding-bottom: 20px;
    border-bottom: 5px solid #ccc;
  }
  .detail-desc {
    padding: 0 10px 20px;
  }
  .border-top , .border-bottom{
    width: 33%;
    height: 1px;
    border: 1px solid #000;
  }
  .border-bottom {
    float: right;
  }
  .detail-desc-text {
    padding: 5px;
    font-size: 14px;
  }
  .detail-images img{
    width: 100%;
  }
</style>