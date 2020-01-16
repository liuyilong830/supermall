import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'

export default {
  [ADD_COUNTER](state, payload) {
    payload.count ++;
  },
  [ADD_TO_CART](state, payload) {
    payload.check = true; //  给商品对象增加一个是否被选中的状态
    state.cartList.push(payload);
  }
}