//Koa 是 Express 的下一代基于 Node.js 的 web 框架，目前有 1.x 和 2.0 2个版本

/*
var express = require("express");
var app =  express();

app.get('/',function(req,res){
    res.send("Hello world!");
});


app.listen(3000,function(){
    console.log("The sever is running http://127.0.0.1:3000/");
});
*/

// 虽然 express 的 api 很简单，但是它基于 es6 的语法，要实现异步代码，只有一个办法：回调。 如果代码的嵌套层次过多，代码写起来就很难看。

var express  = require('express');
var fs = require("fs");
var app = express();

app.get("/test",function(req,res){
    fs.readFile('data.txt',function(err,data){
        if (err) {
            res.status(500).send("read file1 error");
        }

        fs.readFile("data.txt",function(err,data){
            if (err) {
                res.status(500).send("read file2 error");
            }
            res.type("text/plain");
            res.send(data);
            /*
            var json = {
                "name":"杭城小刘",
                "age":22
            };
            res.type("application/json");
            res.send(json);
            */
        });
    });

});


app.listen(3000,function(){
    console.log("The sever is running http://127.0.0.1:3000/");
});

//随着新版的 Node 支持 ES6 ，Express 团队又基于 ES6 的 generator 重新编写了下一代的web框架 koa，和 express 相比，Koa 1.0 使用 generator 实现异步。代码看起来是同步的。
