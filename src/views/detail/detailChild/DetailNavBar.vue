<template>
  <div>
    <nav-bar>
      <div slot="left" class="back">
        <img src="~assets/images/common/back.svg" alt="" @click="backClick">
      </div>
      <div slot="center" class="titles">
        <div v-for="(item,index) in titles"
             :key="index"
             class="title-item"
             :class="{active: currentIndex === index}"
             @click="titleClick(index)">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: 'DetailNavBar',
    components: {
      NavBar
    },
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      titleClick(index) {
        this.currentIndex = index;
        this.$emit('detailThemeTopY',index);
      },
      backClick() {
        this.$router.back();
      }
    }
  }
</script>

<style scoped>
  .titles {
    display: flex;
    text-align: center;
    font-size: 14px;
  }
  .title-item {
    flex: 1;
  }
  .active {
    color: var(--color-tint)
  }
  .back img {
    vertical-align: middle;
    margin-left: 16px;
  }
</style>
