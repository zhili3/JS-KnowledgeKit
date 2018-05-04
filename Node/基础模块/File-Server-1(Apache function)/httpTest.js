//1、开发http服务器程序，从头开发 TCP 链接显然是不现实的。这些工作由 Node.js 自带的 Http 模块完成了， request 对象封装了 HTTP 请求， response 对象封装了 HTTP 响应。

//用Node.js 实现一个 HTTP 服务器非常简单。功能：对于所有请求，都返回 Hello world！.


var http = require("http");
var fs = require("fs");

//创建 http server，并传入回调函数
var server =  http.createServer(function(request,response){
    console.log("method-> " + request.method + " ,url-> " + request.url);
    if (request.url == "/a") {
        response.writeHead(200,{'Content-Type':'text/html'});
        response.end("<h1 style='color:red;'>Hello a!</h1>");
    }
    else if(request.url == "/index.html"){
            fs.readFile("index.html","utf-8",function(err,data){
                if (!err) {
                    response.writeHead(200,{'Content-Type':"text/html"});
                    response.end(data);
                }
            });
    }else if(request.url == "/1.png"){
        fs.readFile("1.png",function(err,data){
            if (!err) {
                response.writeHead(200,{"Content-Type":"image/jpg"});
                response.end(data);
            }
        });
    }
    else {
       response.writeHead(200,{'Content-Type':'text/html'});
       response.end("<h1 style='color:red;'>Hello others!</h1>");
    }
   
    
});

server.listen(8080);

console.log("Server is running at http://127.0.0.1:8080/");




