var fs = require('fs');

try {
    var data = fs.readFileSync("appearance1.ttf","utf-8");    
    fs.writeFileSync("test",data);
    
} catch (error) {
    console.log("同步读取失败->" + error);
}

