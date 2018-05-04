/*
//例子1
var name = require("./module");
console.log(name);

*/


var main = require("./module.js");
var http = require("http");

var server = http.createServer(function(request,response){
    console.log(request.url);
    if (request.url == "/") {
        main.showIndex(request,response);
    } else if(request.url.substr(0,9) == "/student/"){
        main.showStudent(request,response);
    }else{
        main.show404(request,response);
    }


}).listen(3000,"127.0.0.1");
