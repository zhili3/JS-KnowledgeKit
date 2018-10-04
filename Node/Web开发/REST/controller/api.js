const LBPEncode = require('./DataManager');
var products = [
    {name:"iPhone","price":6999},
    {"name":"kindler","price":999}
];

var data = {
    code : 200,
    message : "success",
    data : {
        name : "@杭城小刘",
        year : LBPEncode("1995"),
        month : LBPEncode("02"),
        day : LBPEncode("20"),
    }
}

module.exports = {
    "GET /api/products" : async (ctx, next) => {
        ctx.response.type = "application/json";
        ctx.response.body = {
            products:products
        };
        console.log("products-> " + products);
    },

    "GET /api/solution1" : async (ctx, next) => {
        ctx.set("Access-Control-Allow-Origin", "*");
        ctx.response.type = "application/json";
        ctx.response.body = {
            data: data
        };
        console.log("encodeData-> " + LBPEncode("1995"));
    },

    "POST /api/products" : async (ctx, next) => {
        var p = {
            name:ctx.request.body.name,
            price:ctx.request.body.price
        };
        products.push(p);
        ctx.response.type = "application/json";
        ctx.response.body = p;
    }
};
