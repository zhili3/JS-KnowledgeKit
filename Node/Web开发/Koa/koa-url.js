const Koa = require("koa");
//require("koa-router")() 返回的是函数
const router = require("koa-router")();

const app = new Koa();


app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`);
    await next();
});


router.get("/Hello/:name",async (ctx, next) =>{
    var name = ctx.params.name;
    ctx.response.type = "text/html"
    ctx.response.body = `<h2>Hello, ${name} !</h2>`;
});

router.get("/", async (ctx, next) => {
    ctx.response.type = "text/html"
    ctx.response.body = "<h2>Index</h2>";
});



app.use(router.routes());

app.listen(3000,function(){
    console.log("the server is running at http://127.0.0.1:3000");
});