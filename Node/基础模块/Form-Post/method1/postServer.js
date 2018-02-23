var http = require("http");
var fs = require("fs");
var queryString = require("querystring");

var server = http.createServer(function(request,response){
    
    if (request.url == "/dopost" && request.method.toLocaleLowerCase() == "post") {
        
        var allData = "";

        //下面是 post 请求接受的一个公式
        //Node 为了追求极致、它是一小段小段接收数据的
        //为了防止大规模数据提交阻塞，拆成多段数据进行提交

        request.addListener("data",function(chunk){
            allData += chunk;
        });

        request.addListener("end",function(){
            var dataString = allData.toString();
            var dataObject = queryString.parse(dataString);

            response.writeHead(200,{"Content-Type":"text/html;Charset=UTF-8"});
            var hobby = "";
            var hobbys = dataObject.hobby;
            hobbys.forEach(function(element){
                hobby += element;
            });
            response.end("姓名：" + dataObject.name + ",性别：" + dataObject.sex + "，爱好：" + hobby);
            
        });
        
    }

}).listen(3000,"127.0.0.1",function(){
    console.log("The server is runing at http://127.0.0.1:3000");
});