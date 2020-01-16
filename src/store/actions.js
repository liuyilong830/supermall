import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'

export default {
  // 方法一：
  /* var oldProduct = null;
  for(var item of state.cartList) {
    if(item.id === obj.id) {
      oldProduct = item;
    }
  }
  if(oldProduct) {
    oldProduct.count ++;
  }else {
    obj.count = 1;
    state.cartList.push(obj);
  } */
  // 方法二：
  addToCart(context, obj) {
    return new Promise((resolve,reject) => {
      let oldProduct = context.state.cartList.find(item => item.id === obj.id);
      if(oldProduct) {
        // oldProduct.count ++;
        context.commit(ADD_COUNTER, oldProduct)
        resolve('商品数量 +1');
      }else {
        obj.count = 1;
        // context.state.cartList.push(obj);
        context.commit(ADD_TO_CART, obj)
        resolve('商品添加到购物车');
      }
    })
  }
}