<template>
  <div class="detail-evaluate" v-if="Object.keys(evaluate).length !== 0">
    <div class="evaluate-top">
      <span>用户评价</span>
      <a href="">更多</a>
    </div>
    <div class="evaluate-user">
      <img :src="evaluate.userImg" alt="">
      <span class="user-username">{{evaluate.username}}</span>
    </div>
    <div class="evaluate-content">{{evaluate.content}}</div>
    <div class="evaluate-others">
      <span class="others-time">{{evaluate.time | filterDate}}</span>
      <span class="others-style">{{evaluate.style}}</span>
    </div>
    <div class="evaluate-img" v-if="evaluate.images !== undefined">
      <img :src="item" alt="" v-for="(item,index) in evaluate.images" :key="index">
    </div>
  </div>
</template>

<script>
  import {formatDate} from 'common/utils'
  export default {
    name: 'DetailEvaluate',
    props: {
      evaluate: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    filters: {
      filterDate(time) {
        const date = new Date(time*1000);
        return formatDate(date , 'yyyy-MM-dd');
      }
    }
  }
</script>

<style scoped>
  .detail-evaluate {
    padding: 0 10px 20px;
    box-shadow: 0 -2px 6px #d6c7c74f;
    border-bottom: 4px solid #d6c7c74f;
    margin-bottom: 5px;
  }
  .evaluate-top {
    height: 35px;
    font-size: 14px;
    color: #666;
    border-bottom: 1px solid #aba2a236;
    padding: 0 10px;
    margin-bottom: 10px;
    line-height: 35px;
  }
  .evaluate-top a {
    float: right;
  }
  .evaluate-user img {
    width: 40px;
    border-radius: 50%;
    vertical-align: middle;
  }
  .evaluate-user .user-username {
    padding-left: 12px;
  }
  .evaluate-content ,.evaluate-others {
    padding: 5px;
    font-size: 14px;
    color: #666666ad;
  }
  .evaluate-others .others-style {
    padding-left: 5px;
  }
  .evaluate-img img {
    width: 25%;
    vertical-align: bottom;
  }
</style>