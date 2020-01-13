<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: 'BScroll',
    data() {
      return {
        scroll: null
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper,{
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
        click: true
      })

      this.scroll.on('scroll',(position) => {
        // console.log(position);
        this.$emit('scroll' , position);
      })
      this.scroll.on('pullingUp',() => {
        /* console.log('上拉加载更多');
        setTimeout(() => {
          this.scroll.finishPullUp();
        } , 2000); */
        this.$emit('pullingUp',this.scroll);
      })
    },
    methods: {
      scrollTo(x, y , time=300) {
        // console.log(time);
        this.scroll && this.scroll.scrollTo(x , y , time);
      },
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp();
      },
      refresh() {
        // console.log(111);
        this.scroll && this.scroll.refresh();
      },
      getScrollY() {
        return this.scroll? this.scroll.y : 0;
      }
    }
  }
</script>

<style scope>
  .content {
    /* 这里的设置是为了让 伪tab-control组件的 offsetTop 的值不包括 nav-bar的高度 */
    position: relative;
  }
</style>