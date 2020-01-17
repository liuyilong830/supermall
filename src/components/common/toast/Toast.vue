<template>
  <div class='toast' v-show='isShow'>
    <div class='content'>
      {{message}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  /* props: {
    message: {
      type: String,
      defalut: ''
    },
    isShow: {
      type: Boolean,
      default: false
    }
  }, */
  methods: {
    show(message, time) {
      this.isShow = true;
      this.message = message;
      setTimeout(() => {
        this.isShow = false;
        this.message = '';
      }, time)
    }
  }
}
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 200px;
    text-align: center;
    background-color: rgba(0, 0, 0, .65);
    border-radius: 6px;
    color: #fff;
    transform: translate(-50% , -50%);
    z-index: 999;
  }
  .content {
    padding: 10px;
    line-height: 30px;
  }
</style>