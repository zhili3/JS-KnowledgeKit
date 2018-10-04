var http = require("http");
var url = require("url");

var server = http.createServer(function(request,response){
    
    var pathname = url.parse(request.url).pathname;
    //第二个参数为true，则返回一个对象
    var params = url.parse(request.url,true).query;
    var name = params.name;
    var age = params.age;
    var job = params.job;

    response.writeHead(200,{"Content-Type":"text/plain;Charset=utf-8"})
    response.end("name: " + name + " age:" + age + " job:" + job)
});

server.listen(3000,"127.0.0.1", function(){
    console.log('app is listening on 127.0.0.1:3000')
});