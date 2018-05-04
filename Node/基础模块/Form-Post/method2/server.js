var http = require("http");
var fs = require("fs");
var formidable = require("formidable");
var util = require("util");
var path = require("path");
var datetime = require("silly-datetime");



var server = http.createServer(function(request,response){
    
    if (request.url == "/dopost" && request.method.toLocaleLowerCase() == "post") {

        //创建一个新的表单上传对象
        var form = new formidable.IncomingForm();

        form.uploadDir = "./upload";

        form.parse(request,function(err,fields,files){

            //进入此回调代表着表单所有的上传都结束了

            if (err) {
                console.log(err);
            }
            //打印调试信息
            console.log(util.inspect({files:files,fields:fields}));

            //更改上传文件的文件名
            var oldpath = __dirname + "/" + files.upload.path;
            
            var time = datetime.format(new Date(), "YYYYMMDDHHmmss");
            var random = parseInt(Math.random()*89999+10000);
            var extname = path.extname(files.upload.name);

            var newpath = __dirname + "/upload/" + time + random + extname;

            fs.rename(oldpath,newpath,function(err){
                if (err) {
                    console.log(err);
                }
                response.writeHead(200,{"Content-Type":"text/html;Charset=UTF-8"});
                response.end("OK");
            });

            console.log("fields" + fields);
            console.log("files" + files);
        });
        
    }else{
        fs.readFile("../form.html",function(err,data){
            if (err) {
                console.log(err);
            }
            response.writeHead(200,{"Content-Type":"text/html;Charset=UTF-8"});
            response.end(data);
        })
    }

}).listen(3000,"127.0.0.1",function(){
    console.log("The server is runing at http://127.0.0.1:3000");
});