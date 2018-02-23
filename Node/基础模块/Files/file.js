



var fs = require('fs');

/*
fs.readFile("object.jt","utf-8",function(err,data){
    if (err) {
        console.log("fail: " + err);
    } else {
        console.log("success: " + data);
    }
});
*/


/*
var data =  fs.readFileSync("object.js",'utf-8');
console.log(data);
*/

/*
try {
    var data = fs.readFileSync("object.js","utf-8");
    console.log("同步读取成功->" +data);
} catch (error) {
    console.log("同步读取失败->" + error);
}
*/

/*
var data = "我是Node写入的文件数据";
fs.writeFile("object.js",data,function(err){
    if (err) {
        console.log("文件写入失败->" + err);
    } else {
        console.log("文件写入成功");

        fs.readFile("object.js",function(err,data){
                if (err) {
                    console.log("文件写入后读取文件失败->" + err);
                } else {
                    console.log("文件写入后读取文件成功 ->" + data);
                }
        });
    }
});
*/


/*
//异步写入文件
var data = "我是Node写入的文件数据";
fs.writeFileSync("object.js",data);
*/


//如果我们需要获取文件大小，创建时间等信息，可以使用 fs.stat() 。

fs.stat("object.js",function(err,stats){
    if (err) {
        console.log("文件信息获取失败->" + err);
    } else {
        console.log("文件信息获取成功->" + stats);
        console.log("isFile: " + stats.isFile());
        console.log("isDirectory: " + stats.isDirectory());
        if (stats.isFile()) {
            console.log("size:" + stats.size);
            console.log("birth time : " + stats.birthtime);
            console.log("modified time:"  + stats.mtime);
        }
    }
});


//同步方式读取文件信息
/*
var fileInfo =  fs.statSync("object.js");
console.log(fileInfo);
*/