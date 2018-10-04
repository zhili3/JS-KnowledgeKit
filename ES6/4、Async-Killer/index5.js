var sleep = function(time){
  return new Promise(function (resolve, reject){
    setTimeout(() => {
      resolve('ok')
    }, time)
  })
}

let 一到十 = [1,2,3,4,5,6,7,8,9,10];



// 错误示范

// var start = async function(){
//   一到十.forEach(function (v) {
//     console.log(`当前是第${v}次等待..`);
//     await sleep(1000); // 错误!! await只能在async函数中运行
//   }); 
// }




// 正确示范

var start = async function(){
  for(var v of 一到十) {
    console.log(`当前是第${v}次等待..`);
    await sleep(1000); // 正确, for循环的上下文还在async函数中
  } 
}

start()