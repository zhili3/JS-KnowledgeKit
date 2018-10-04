/*
  循环多个 await
  await看起来就像是同步代码，所以可以理所当然的写在for循环里，不必担心以往需要闭包才能解决的问题。
  值得注意的是，await必须在async函数的上下文中的。
*/

var sleep = function(time){
  return new Promise(function (resolve, reject){
    setTimeout(() => {
      resolve('ok')
    }, time)
  })
}

var start = async function(){
  for (let i = 0; i < 10; i++){
     await sleep(1000);
  }  
}


start()

