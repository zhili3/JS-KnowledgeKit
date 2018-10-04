/*
  捕捉错误
  既然 .then(...) 不用写，那么 .catch(...) 也可以不用写
  可以直接用标准的try catch语法捕捉错误。
*/


var sleep = function (time) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      // resolve()
      reject('Oops, something goes wrong')
    }, time)
  })
}


var start = async function () {
  try {
    console.log('start')
    await sleep(3000) //这里返回一个错误
    //下述代码不会执行
    console.log('end')
  } catch (error) {
    console.log(error)
  }
}


start()