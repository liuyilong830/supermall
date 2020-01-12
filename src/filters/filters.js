export function filterDate(time) {
  var dt = new Date(time * 1000);
  var year,month,date
  year = change(dt.getFullYear())
  month = change(dt.getMonth() + 1)
  date = change(dt.getDate())
  function change(dt){
    if (dt < 10) {
      return '0' + dt
    }
    return dt
  }
  return `${year}-${month}-${date}`
}