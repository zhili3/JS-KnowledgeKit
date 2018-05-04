var http = require("http");
var fs = require("fs");
var url = require("url");
var path = require("path");

var server = http.createServer(function(request,response){
    
    var pathname = url.parse(request.url).pathname;
    var extname = path.extname(pathname);

    console.log("请求方法 " + request.method + " ，请求url " + request.url);

    if (request.url == "/") {
        pathname = "index.html";
    }
    if (request.url == "/favicon.ico") {
        console.log("hhaha");
    }


    

    console.log(pathname);
    fs.readFile("./static/" + pathname,function(err,data){
        
        if (err) {    
            response.writeHead(404,{"Content-Type":"text/html;Charset=UTF-8"});

            fs.readFile("./static/404.html",function(err,data){
                response.end(data);
            });
            return ;
        }

        var mimeType = getMIMEType(extname);
        response.writeHead(200,{"Content-Type":mimeType});
        response.end(data);

    });

    

}).listen(3000,"127.0.0.1");


function getMIMEType(extname){
    switch (extname) {
        case ".html":
            return "text/html";
            break;
        case ".jpg":
            return "image/jpg";
            break;
        case ".css":
            return "text/css";
            break;
        case ".png":
            return "image/png";
            break;
        case ".js":
            return "text/javascript";
            break;
        case ".json":
            return "application/json";
            break;
        default:
            return "text/html";
            break;
    }
}