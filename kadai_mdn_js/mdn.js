const today = new Date() ;
const [year, month,day]= [
  today.getFullYear(),
  today.getMonth() + 1,
  today.getDate(),
]

const formattedDate = year + '年' + month + '月' + day + '日';
console.log(formattedDate);

