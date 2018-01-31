import { Writable } from "stream";

var fs = require("fs");


/*
stream 是 Node.js 提供的一种仅在服务端可用的模块，目前支持的是“流”这种数据结构
1、标准输入流：stdin
2、标准输出流：stdout
3、流的特点是有序的，必须依次读取，依次写入。不能像数组一样随机。
4、在 Node中流也是一个对象，我们只需要响应流事件就可以了。
5、data事件表示流的数据已经可以读取了
6、end事件表示这个流已经到末尾了
7、error事件表示出错了
*/


//要注意，data事件可能会多次调用，每次传递的chunk是流的一部分数据
/*
var stream = fs.createReadStream("object.js","utf-8");

stream.on("data",function(chunk){
    console.log("DATA:");
    console.log(chunk);
});

stream.on("end",function(){
    console.log("END:");
});

stream.on("error",function(err){
    console.log("ERROR:" + err);
});

*/



//要以流的形式写入文件，只需不断调用 write() 方法，最后以 end() 结束
//所有可以读取数据的流都继承自 stream.Readable， 所有可以写入的流都继承自 stream.Writable
/*
var fileStream = fs.createWriteStream("object.js","utf-8");

fileStream.write("你看到的这些文字信息都是使用Stream 写入的文本数据...\n");
fileStream.write("END...");


fileStream.write(new Buffer("我是使用Stream写入的二进制数据内容","utf-8"));
fileStream.write(new Buffer("END...","utf-8"));

fileStream.end();

*/

/*
    在 Node.js 中，Readable 流有一个 pipe()方法，就是用来干这件事的
    用 pipe() 把一个文件流 和 另一个文件流串起来，这样的源文件的所有数据就自动写入到目标文件里了，所以这实际上是一个复制文件的程序
*/


var readStream = fs.createReadStream("output.txt","utf-8");
var writeStream = fs.createWriteStream("input.txt","utf-8");


readStream.pipe(writeStream);
//默认情况下，当 Readable 流的数据读取完毕， end 事件触发后，将自动关闭 writable 流。如果我们不希望自动关闭 writable 流，需要传入参数.

readStream.pipe(Writable,{end:false});