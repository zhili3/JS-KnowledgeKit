
const nunjucks = require("nunjucks");

function createEnv(path, opts) {
    var autoescape = opts.autoescape === undefined ? true : opts.autoescape,
        noCache = opts.noCache || false,
        watch = opts.watch || false,
        throwOnUndefined = opts.throwOnUndefined || false,
        env = new nunjucks.Environment(
            new nunjucks.FileSystemLoader("view", {
                noCache: noCache,
                watch: watch,
            }), {
                autoescape: autoescape,
                throwOnUndefined: throwOnUndefined
            });
    if (opts.filters) {
        for (var f in opts.filters) {
            env.addFilter(f, opts.filters[f]);
        }
    }
    return env;
}

var env = createEnv("views", {
    watch: true,
    filters: {
        hex: function (n) {
            return '0x' + n.toString(16);
        }
    }
});

/*
var s = env.render("hello.html",{
    name:"<Nunjucks>",
    fruits:['Apple','banana','Pear'],
    count:12000
});
console.log(s);
*/

/*
var s = env.render("base.html");
console.log(s);
*/

var s = env.render("extend.html",{
    header:"I am header",
    body:"I am body",
    "footer":"I am  footer"
});
console.log(s);