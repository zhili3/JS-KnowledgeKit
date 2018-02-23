/*
//例子1
var name = "刘斌鹏";
var age = 23;

function sayHi(){
    console.log("我叫" + name + ",我今年" + age);
}

module.exports.name = name;

*/


module.exports.showIndex = function(request,response){
    response.writeHead(404,{"Content-Type":"text/html;charset=UTF-8"});
    response.end("我是Index页面");
};


module.exports.show404 = function(request,response){
    response.writeHead(404,{"Content-Type":"text/html;charset=UTF-8"});
    response.end("404");
};

module.exports.showStudent = function(request,response){
    response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
    var studentId = request.url.substr(9);
    response.end("我是学生:" + studentId);
};

