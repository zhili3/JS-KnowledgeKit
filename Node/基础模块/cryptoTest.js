
/*
//crypto 模块的目的是为了提供通用的加密和哈希算法。


const crypto = require('crypto');

const hash =  crypto.createHash('sha512');


//可以任意多次调用update()

hash.update("Hello world!");
hash.update("Hello Nodejs!");


console.log(hash.digest("hex"));

//update() 方法默认的字符集编码为 UTF-8 ,也可以传入 Buffer


//如果要计算 SHA1 ，则需要将 MD5 改为 sha1，也可以使用更安全的 sha256 、 sha512


//Hmac是增强版的哈希算法


const hmac = crypto.createHmac("sha256","secret-key2");

hmac.update("Hello world");
hmac.update("hello Nodejs");

console.log(hmac.digest("hex"));
*/

//AES是常见的对称加密。加解密都用同一个密钥。

const crypto = require("crypto");


function aesEncrypt(data,key){
    const cipher = crypto.createCipher("aes192",key);
    var crypted = cipher.update(data,"utf8","hex");
    crypted += cipher.final("hex");
    return crypted;
}


function aseDecrypted(encrypted,key){
    const decipher = crypto.createDecipher('aes192',key);
    var decrypted =  decipher.update(encrypted,'hex','utf8');
    decrypted += decipher.final("utf8");
    return decrypted;
}


var data = "Hello ,this is a secret message!";
var key = "Password!";
var encrypted = aesEncrypt(data,key);
var decrypted = aseDecrypted(encrypted,key);


console.log("Plain Text: "+ data);
console.log("Encrypted Text: "+ encrypted);
console.log("Decrypted Text: " + decrypted);

