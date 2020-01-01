<template>
  <div class="recommend">
    <div v-for="(item,index) in recommend" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="ImageLoad">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RecommendViews',
    props: {
      recommend: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    methods: {
      ImageLoad() {
        this.$emit('recommendImageLoad');
      }
    }
  }
</script>

<style>
  .recommend {
    display: flex;
    text-align: center;
    font-size: 14px;
    margin-top: 20px;
    border-bottom: 10px solid #ccc;
  }
  .recommend-item {
    flex: 1;
  }
  .recommend-item img {
    width: 85px;
  }
  .recommend-item div {
    padding-top: 5px;
    padding-bottom: 25px;
  }
</style>