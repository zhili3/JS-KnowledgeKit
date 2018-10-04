/*
在函数式编程中，函数是一等公民。那么函数柯里化是怎样的呢？
函数柯里化指的是将能够接收多个参数的函数转化为接收单一参数的函数，并且返回接收余下参数且返回结果的新函数的技术。
函数柯里化的主要作用和特点就是参数复用、提前返回和延迟执行。
*/

// function countMoney(){
//   let money = 0
//   for(let i = 0; i < arguments.length; i++){
//     money += arguments[i]
//   }
//   return money
// }

// let records = [];
// records.push(1);
// records.push(2);
// records.push(3);
// records.push(4);
// records.push(5);

// // console.log("今年偷偷攒了" + countMoney(...records) + "RMB")


// const countMONEY = (function (){
//   let money = 0 
//   let args = []
//   console.log("1")
//   const res = function() {
//     console.log("2")
//     if(arguments.length === 0){
//       console.log("3")
//       for(let i = 0; i < args.length; i++){
//         money += args[i]
//       }
//       console.log("4")
//       return money
//     }else{
//       console.log("5")
//       args.push(...arguments)
//       console.log("6")
//       return res
//     }
//   }
//   console.log("7")
//   return res
// })()

// countMONEY(1)
// console.log(countMONEY(1))
// countMONEY()
// // countMONEY(2)
// // countMONEY(3)
// // countMONEY(4)
// // countMONEY(5)
// // console.log("今年偷偷攒了" + countMONEY() + "RMB")

// // console.log("今年偷偷攒了" + countMONEY(1)(2)(3)(4)(5)() + "RMB")


function caculMoney(){
  let moneys = 0;
  
  for (let index = 0; index < arguments.length; index++) {
    moneys += arguments[index];
  }
  return moneys;
}


let records = [];
records.push(1);
records.push(2);
records.push(3);
records.push(4);


console.log("偷偷摸摸攒了" + caculMoney(...records) + "RMB");


const countMoney = (function(){
  let args = [];
  let account = 0;
  var counter = function(){
    if(arguments.length === 0){
      for (let index = 0; index < args.length; index++) {
        account += args[index];
      }
      return account;
    }
    else{
      args.push(...arguments)
      return counter();
    }
  };
  return counter;
})()


console.log("今年偷偷摸摸攒了" + countMoney(...[2,3])+ "RMB")