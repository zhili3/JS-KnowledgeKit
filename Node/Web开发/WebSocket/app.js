//1、导入 WebSocket 模块
const WebSocket = require("ws");

const WebSocketServer = WebSocket.Server;

//2、引用 Server 类

const wss = new WebSocketServer({
    port:3000
});

//3、在 Connection 事件中，回调函数会传入一个 WebScokct 的实例。表示这个 WebSocket 连接。对于每个 WebScoket 连接，我们都要对它绑定事件方法来处理不同的时间，这里我们通过 响应 message 事件，在收到消息后返回一个 ECHO：XXX 的消息给客户端

wss.on("connection",function(ws){
    console.log(`[SERVER] connection()`);

    ws.on("message",function(message){
        console.log(`[SERVER] Received : ${message}`);

       setTimeout(() => {
        ws.send("What is your name?", (err) =>{
            if (err) {
                console.log(`[SERVER] error: ${err}`);
            }
        });   

       }, 1000);
    });
});


console.log("WS server started at http://127.0.0.1:3000");



let count = 0;

let ws = new WebSocket('ws://localhost:3000/ws/chat');

ws.on("open",function(){
    console.log(`[CLIENT] open()`);
    ws.send("Hello !");
});



ws.on("message",function(message){
    console.log(`[CLIENT] Received: ${message}`);

    count++;

    if (count > 3) {
        ws.send("GoodBye!");
        ws.close();
    }else{
        setTimeout(() => {
            ws.send(`Hello, I am Mr. No ${count}`);
        }, 1000);
    }
});
const Koa = require("koa");
const app = new Koa();


const controll = require("c")