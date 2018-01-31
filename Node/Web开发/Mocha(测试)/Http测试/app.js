const Koa = require("koa");

const app = new Koa();


app.use(async (ctx,next) => {

    const start = Date.time();
    
    await next();

    const ms = Date.time() - start;

    ctx.response.set("X-Response-Time",`${ms}ms`);

});

app.use(async (ctx,next) => {
    var name = ctx.request.query.name || "杭城小刘";
    ctx.response.type = "text/html";
    ctx.response.body = `Hello, ${name}`;

});


module.exports = app;