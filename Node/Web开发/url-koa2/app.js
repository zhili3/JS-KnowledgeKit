const Koa = require("koa");

const bodyparse = require("koa-bodyparser");

const controller = require("./controller");

const app = new Koa();


//log reuquest url

app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.method}`);
    await next();
});

//parse body
app.use(bodyparse());

//add controller
app.use(controller());

app.listen(3000,function(){
    console.log("The server is running at http://127.0.0.1:3000");
});
