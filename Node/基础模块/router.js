var http = require("http");
var url = require("url");

var server = http.createServer(function(request,response){
    
    

    response.writeHead(200,{"Content-Type":"text/html;Charset=utf-8"})
    userUrl = request.url;
    if (userUrl.substr(0,9) == "/student/") {
        var studentId = userUrl.substr(9);
        if(/^\d{10}$/.test(studentId)){
            response.end("你要查询的学生信息，id为：" + studentId);
        }else {
            response.end("学生id有误");
        }
    } else if(userUrl.substr(0,9) == "/teacher/"){
        var techerId = userUrl.substr(9);
        if(/^\d{10}$/.test(techerId)){
            response.end("你要查询的教师信息，id为：" + techerId);
        }else {
            response.end("教师id有误");
        }
    }else{
        response.end("学生也不查，教师也不查，不知道你要闹哪样");
    }
    
   
});

server.listen(3000,"127.0.0.1");