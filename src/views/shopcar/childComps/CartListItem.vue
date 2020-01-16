<template>
  <div class='cartlist-item'>
    <div class='btn'>
      <check-button class='check-button' @click.native='ischecked' :flag='activeFlag'></check-button>
    </div>
    <div class='item-info'>
      <div class='info-image'>
        <img :src='product.image' />
      </div>
      <div class='info-others'>
        <div class='others-title'>{{product.title}}</div>
        <div class='others-desc'>{{product.desc}}</div>
        <div class='others-price-count'>
          <span class='price'>{{product.realPrice}}</span>
          <span class='count'>x {{product.count}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'
  export default {
    name: 'CartListItem',
    components: {
      CheckButton
    },
    data() {
      return {
        
      }
    },
    props: {
      product: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    computed: {
      activeFlag() {
        return this.product.check;
      }
    },
    methods: {
      ischecked() {
        this.product.check = !this.product.check;
        // console.log('1111');
      }
    }
  }
</script>

<style scoped>
  .cartlist-item {
    display: flex;
    border-bottom: 1px solid #ccc;
  }
  .btn {
    flex: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .item-info {
    flex: 90%;
    height: 130px;
    padding: 5px;
    display: flex;
  }
  .info-image {
    flex: 30%;
    box-sizing: border-box;
    /* padding: 5px 0; */
    overflow: hidden;
    border-radius: 6px;
  }
  .info-others {
    flex: 70%;
    padding: 0 8px;
  }
  .info-image img {
    width: 100%;
  }
  .others-title {
    width: 213px;
    height: 35px;
    font-size: 24px;
    color: #666;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .others-desc {
    width: 213px;
    height: 35px;
    margin: 10px 0;
    line-height: 35px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .others-price-count {
    display: flex;
    width: 213px;
    height: 30px;
    font-size: 19px;
  }
  .price , .count {
    flex: 1;
    padding-top: 10px;
  }
  .price {
    color: #ef7070;
  }
  .count {
    text-align: right;
  }
</style>