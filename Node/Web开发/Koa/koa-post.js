const Koa = require("koa");

const bodyParser = require("koa-bodyparser");

const router = require("koa-router")();

//由于 middleware 的顺序很重要，这个 koa-bodyparser 必须在 router 之前被注册到 app 上

const app = new Koa();

app.use(async (ctx, next) => {
    console.log(`process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// parse request body
app.use(bodyParser());

// add url-route:

router.get("/hello/:name",async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});



router.get("/", async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p> Name: <input name="name" value="koa" /></p>
            <p>Password: <input name="password" type="password" /></p>
            <p> <input type="submit" value="Submit" /></p>
        </form>
        `;
});


router.post("/signin", async (ctx,next) => {
    var name = ctx.request.body.name || "";
    var password = ctx.request.body.password || "";

    console.log(`Signin with name ${name}, password: ${password}`);

    if (name === 'koa' && password === "123456") {
        ctx.response.body = `<h1>Weclome , ${name} !</h1>`;
    }else{
        ctx.response.body = `<h1>Login failed!</h1>
                            <p><a href="/">Try again!</a></p>`;
    }
});


app.use(router.routes());
app.listen(3000,function(){
    console.log("The serve is running at http://127.0.0.1:3000");
});



/*
var Koa = require("koa");

const router = require("koa-router")();

const bodyparser = require("koa-bodyparser");

var app = new Koa();


app.use(bodyparser());


router.get("/Hello/:age", (ctx, next) => {
    var age = ctx.params.age || 22;
    console.log(`I am ${age} years old!`);
    ctx.response.body = `I am ${age} years old!`;
});


router.get("/", (ctx,next) => {
    ctx.response.body = `<h1>Index</h1>
        <form action="/Signin" method="post">
            <p> Name: <input name="name" value="koa" /></p>
            <p>Password: <input name="password" type="password" /></p>
         <p> <input type="submit" value="Submit" /></p>
        </form>
    `;
});


router.post("/Signin", (ctx,next) => {
    var name = ctx.request.body.name;
    var password = ctx.request.body.password;
    console.log(`Login with name: ${name} password:${password} !`);

    if (name === "koa" && password === "123456") {
        ctx.response.body = `<h1>Weclome,${name}</h1>`;
    }else{
        ctx.response.body = `<h1>Login faied!</h1>
            <p><a href="/">Try again!</a></p>`;
    }
});


app.use(router.routes());

app.listen(3003,function(){
    console.log("The server is runing at http://127.0.0.1:3003");
});
*/