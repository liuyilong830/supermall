import {request} from './request'

export function getDetail(id) {
  return request({
    url: '/detail',
    params: {
      iid:id
    }
  })
}

export function getRecommend() {
  return request({
    url: '/recommend'
  })
}

export class Goods {
  constructor(itemInfo,columns,services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.realPrice = itemInfo.lowNowPrice;
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}

export class ItemParams {
  constructor(info,rule) {
    this.images = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}

export class ItemEvaluate {
  constructor(rate) {
    this.username = rate.list[0].user.uname;
    this.userImg = rate.list[0].user.avatar;
    this.content = rate.list[0].content;
    this.time = rate.list[0].created;
    this.style = rate.list[0].style;
  }
}