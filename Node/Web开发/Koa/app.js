//导入 Koa， 和 Koa 1.x 不同的是 在 Koa2 中，我们导入的是一个 Class ，因此需要大写
const Koa = require("Koa");
//创建一个 Koa 对象 表示 web app 本身
const app = new Koa();
//对于任何请求， koa 豆浆调用该异步函数处理请求
app.use(async (ctx, next) => {
    //ctx 是由  koa 封装了 request 和 response 的变量，我们可以通过它访问 req 和 res
    //next 是 koa 传入的将要处理的下一个异步函数
    //async 标记的函数为异步函数，。在异步函数中用 await 调用另一个异步函数
    await next();

    ctx.response.type = "text/html";

    ctx.response.body = "<h1>Hello , Koa 2!</h1>";

});

app.listen(3000);
console.log("app started at port 3000...");