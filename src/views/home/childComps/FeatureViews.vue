<template>
  <div class="feature-views">
    <a href="http://act.mogujie.com/zzlx67">
      <img src="~assets/images/home/recommend_bg.jpg" alt="" @load="imageLoad">
    </a>
  </div>
</template>

<script>
  export default {
    name: 'FeatureViews',
    methods: {
      imageLoad() {
        this.$emit('featureImageLoad')
      }
    }
  }
</script>

<style>
  .feature-views img {
    width: 100%;
  }
</style>