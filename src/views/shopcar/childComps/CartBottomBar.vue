<template>
  <div class='button-bar-btn'>
    <div class='check-all'>
      <check-button 
        class='check-button' 
        :flag='isCheckAll'
        @click.native='checkClick'></check-button>
      <span>全选</span>
    </div>
    <div class='price'>
      合计:￥{{addAll}}
      <span></span>
    </div>
    <div class='computed'>
      <div class='calculate' @click='calculateClick'>去计算:{{calculate}}</div>
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'
  export default {
    name: 'CartBottomBar',
    data() {
      return {}
    },
    components: {
      CheckButton
    },
    computed: {
      addAll() {
        return this.$store.state.cartList.filter((item) => {
          return item.check;
        }).reduce((oldPrice, item) => {
          return oldPrice + item.realPrice * item.count;
        }, 0).toFixed(2)
      },
      calculate() {
        return this.$store.state.cartList.filter(item => item.check).reduce((oldCount, item) => {
          return oldCount + item.count;
        },0)
      },
      isCheckAll() {
        if(this.$store.state.cartList.length === 0) return false;
        return this.$store.state.cartList.every(item => item.check)
      }
    },
    methods: {
      checkClick() {
        if(this.isCheckAll) { //  全选了
          this.$store.state.cartList.forEach(item => { item.check = false });
        }else { //  部分或者全不选中
          this.$store.state.cartList.forEach(item => { item.check = true });
        }
      },
      calculateClick() {
        if(this.$store.state.cartList.every(item => !item.check)) {
          this.$toast.show('请至少选择一件需要购买的商品',1000);
        }else {
          console.log('--------')
        }
      }
    }
  }
</script>

<style scoped>
  .button-bar-btn {
    height: 40px;
    background-color: #d0c5c591;
    position: relative;
    z-index: 9;
    padding-left: 10px;
    display: flex;
    align-items: center;
    font-weight: 700;
  }
  .check-all {
    display: flex;
    align-items: center;
    flex: 30%;
  }
  .check-all span {
    padding-left: 10px;
  }
  .price {
    flex: 40%;
  }
  .computed {
    flex: 30%;
    overflow: hidden;
    height: 40px;
    color: #fff;
  }
  .computed .calculate {
    background-color: orange;
    float: right;
    width: 100%;
    height: 100%;
    line-height: 40px;
    text-align: center;
  }
</style>
