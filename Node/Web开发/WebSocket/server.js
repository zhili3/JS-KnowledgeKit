const WebScoket = require("ws").Server;

const WebSocketServer = new WebScoket({
    port:3000
});


let count = 0;

WebSocketServer.on("connection", function(ws){
    console.log(`[SERVER] connection()`);
    ws.on("message",function(message){
        console.log(message);
        count++;
        ws.send(`Hello, I am Mr. Liu ${count}`);
    });
});