/*
  基本规则
  async 表示一个 async 函数，  awawit 只能用在这个函数里面。
  await 表示在这里等待promise返回结果了，再继续执行。
  await 后面跟着的应该是一个promise对象（当然，其他返回值也没关系，只是会立即执行，不过那样就没有意义了…）
  */

  // awawit 虽然等待的是 promis 对象，但是不必写 .then(...) 可以直接得到返回值
var sleep = function(time){
  return new Promise(function (resolve, reject){
    setTimeout(() => {
      resolve('ok')
    }, time)
  })
}

var start = async function(){
  var result = await sleep(3000)
  console.log(result)
}

start()