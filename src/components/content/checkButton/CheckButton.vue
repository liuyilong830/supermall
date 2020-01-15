<template>
  <div class='check-button' :style='active'>
    <i class='iconfont icon-check'></i>
  </div>
</template>

<script>
  export default {
    name: 'CheckButton',
    data() {
      return {
        
      }
    },
    props: {
      activeColor: {
        type: String,
        default: 'red'
      },
      flag: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      active() {
        return this.flag ? {backgroundColor: this.activeColor} : {};
      }
    }
  }
</script>

<style scoped>
  @import 'http://at.alicdn.com/t/font_1612509_uh7rl7wbnzj.css';
  .check-button {
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background-color: pink;
  }
  .iconfont {
    font-size: 23px;
    color: #fff;
  }
  .check {
    background-color: red;
  }
</style>