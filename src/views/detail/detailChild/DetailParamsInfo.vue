<template>
  <div class="params-info" v-if="Object.keys(paramsInfo).length !== 0">
    <div class="info-sizes" v-for="(item,index) in paramsInfo.sizes[0]" :key="index" :class="{last: index === paramsInfo.sizes[0].length-1}">
      <div class="sizes-text">{{item[0]}}</div>
      <div class="sizes-size">
        <span v-for="i in item.length-1" :key="i">{{item[i]}}</span>
      </div>
    </div>
    <div class="info-infos" v-for="(item,index) in paramsInfo.infos" :key="index+item" :class="{last: index === paramsInfo.infos.length-1}">
      <div class="infos-key">{{item.key}}</div>
      <div class="infos-value">{{item.value}}</div>
    </div>
    <div class="info-img" v-if="paramsInfo.images.length !== 0">
      <img :src="paramsInfo.images" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailParamsInfo',
  props: {
    paramsInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
}
</script>

<style scoped>
  .params-info {
    padding: 20px 10px;
    font-size: 14px;
    color: #666;
  }
  .info-sizes , .info-infos{
    display: flex;
    height: 34px;
    border-bottom: 2px solid #dacfcf4d;
    line-height: 34px;
  }
  .last {
    border-bottom: 4px solid #dacfcf4d;
  }
  .sizes-text {
    flex: 20%;
  }
  .sizes-size {
    flex: 80%;
    display: flex;
    text-align: center;
  }
  .infos-key {
    flex: 20%;
  }
  .infos-value {
    flex: 80%;
    white-space: nowrap;
    overflow: hidden;
    color: var(--color-tint);
  }
  .sizes-size span {
    flex: 1;
  }
</style>