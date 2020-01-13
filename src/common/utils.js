/*  
  ** 该函数的功能是时间戳转换成时间格式化字符串
  ** 需要传递两个参数
      * date: new Date() 的时间
      * fmt:  规则，如： 'yyyy-MM-dd' 'yy-M-dd hh:mm:ss'等。
*/
export function formatDate(date , fmt) {
  if(/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4-RegExp.$1.length));
  }
  let o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds()
  }
  for(let k in o) {
    if(new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1 , (RegExp.$1.length === 1)? str : padLeftZero(str));
    }
  }
  return fmt;
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}

/*  
  ** 防抖函数
  ** 需要传递两个参数：
      * func： 传入一个函数，也就是需要防抖的函数
      * delay：延迟时间（毫秒）
*/
export function debounce(func , delay) {
  let timer = null;
  return function(...args) {
    if(timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this , args);
      // func(args);
    } , delay);
  }
}