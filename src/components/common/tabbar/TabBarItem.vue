<template>
  <div class="tabbar_item" @click="toggerClick">
    <div v-if="!isActive"><slot name="tabbar_icon"></slot></div>
    <div v-else><slot name="tabbar_icon_active"></slot></div>
    <div :style="activeStyle"><slot name="tabbar_text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    link: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      // isActive: false
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.link) !== -1;
    },
    activeStyle() {
      return this.isActive? {color: this.activeColor} : {};
    }
  },
  methods: {
    toggerClick() {
      this.$router.replace(this.link);
    }
  }
}
</script>

<style>
  .tabbar_item{
    height: 49px;
    text-align: center;
    flex: 1;
  }
  .tabbar_item img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin: 2px 0 1px 0;
  }
  .active{
    color: red;
  }
</style>