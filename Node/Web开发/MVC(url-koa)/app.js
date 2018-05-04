const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const controller = require('./controller');

const templating = require('./templating');

const app = new Koa();

const isProduction = process.env.NODE_ENV === 'production';

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    var
        start = new Date().getTime(),
        execTime;
    await next();
    execTime = new Date().getTime() - start;
    ctx.response.set('X-Response-Time', `${execTime}ms`);
});

// static file support:
if (! isProduction) {
    let staticFiles = require('./static-file');
    app.use(staticFiles('/static/', __dirname + '/static/bootstrap-3.3.7-dist/'));
}

// parse request body:
app.use(bodyParser());

// add nunjucks as view:
app.use(templating('view', {
    noCache: !isProduction,
    watch: !isProduction
}));

// add controller:
app.use(controller());

app.listen(3000,function(){
    console.log("The server is running at http://127.0.0.1:3000");
});
