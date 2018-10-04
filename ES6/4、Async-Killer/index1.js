//例子1 Async/Await 是目前最简单的异步方案，首先来看个例子。
//这里我们要实现一个暂停功能，输入N毫秒，则停顿N毫秒后才继续往下执行。
var sleep = function (time){
  return new Promise(function(resolve,reject) {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

var start = async function(){
  console.log('start')
   await sleep(3000)
  console.log("end")
}

start()


