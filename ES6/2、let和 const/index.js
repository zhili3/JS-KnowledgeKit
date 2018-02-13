//1、let 命令
/*
{
    let a  = 10;
    var b = 1;
}

console.log(a);
console.log(b);
*/

/*
for(let i = 0; i<10; i++){
    console.log(i);
}
console.log(i);*/

/*
var a = [];
for(var i = 0;i<10;i++){
    a[i] = function(){
        console.log(i);
    }
}
a[6]();
*/


/*
var a = [];
for(let i = 0; i<10;i++){
    a[i] = function(){
        console.log(i);
    }
}

a[6]();
*/


//2、块级作用域
/*
//块级作用域。 内部的作用域无法读取外部作用域的变量
//ES6 允许块级作用域重复嵌套
{{
    {let age = 22;}
    console.log(age);
}}
*/

//内层作用域可以与外层作用域定义同名的变量。
/*
{{
    {
        let age = 22;
        console.log(age);
    }
    let age = 23;
    console.log(age);
}}
*/


//块级作用域的出现，实际上使得广泛使用的立即执行函数表达式(IIFE)不再需要了
/*
//写法1
(function(){
    console.log("Hello ES6!");
})();

//写法2
(function(){
    console.log("Hello 杭城小刘");
}());

//块级作用域的写法
{
    let person = {
        name:"杭城小刘",
        age:23
    }
    console.log(`I am ${person.name}, I am ${person.age} years old!`);
}
*/

//块级作用域与函数声明
/*
if (true) {
    (function show(){
        console.log("show me your baby");
    })();
}
*/

/*
function f(){
    console.log("I am outside");
}

(function(){
    if (false) {
        function f(){
            console.log("I am inside");
        }
    }
    f();
})();
*/
//在 ES5 中会得到 I am inside 。因为在块内声明的函数会被提升到顶部
//在 ES6 中报错。为什么呢？
/* 原因：如果改变了块级作用域内的声明的函数的处理规则，显然会对老的代码产生较大影响。
ES6 在附录B 里面规定，浏览器的实现可以不遵守上面的规定。
1、允许在块级作用域内声明函数
2、函数的声明类似于 var ，即会提升到全局作用域或函数作用域的头部
3、同时，函数声明还会提升到所在块级作用域的头部
*/

/* 代码1
function f(){
    console.log("I am outside!");
}
(function(){
    if (false) {
       function f(){
           console.log("I am inside!");
       } 
    }
    f();
})();
*/



/* 代码2
function f(){
    console.log("I am outside");
}

(function(){
    var f = undefined;
    if (false) {
       function f(){
            console.log("I am inside!");
        }
    }
    f();
})();
*/
//代码1 在 ES6 的浏览器中会变为 代码2

//考虑到环境导致的行为差异极大，应该避免在块级作用域内声明函数，如果需要也应该写成函数表达式，而不是函数声明语句
/*
{
    let a = "secret";
    function f(){
        return a;
    }
}


{
    let name = "杭城小刘";
    var f = function(){
        return name;
    };
}
*/


//另外，ES6 的块级作用域允许生命函数的规则，只在使用大括号的情况下成立，没有使用打括号则报错
/*
'use strict';

if (true) {
    function f(){ console.log("我是块内的函数声明");}
}

if (true) 
    function f(){ console.log("我是省略块的大括号的函数"); }

*/

//3、const 命令
/*const 命令
1、const 声明的变量不得改变值，也就是说一旦声明变量，必须立即初始化，不能留到以后赋值。
2、const 作用域与 let 一样，在声明所在的块级作用域内有效。
3、必须先声明，再使用
*/

/*
const PI = 3.141596;
console.log(PI);

// PI = 3; 
console.log(PI);

//const foo;


if (true) {
    const MAX = 5;
}
console.log(MAX);



if (true) {
    console.log(MAX);
    const MAX = 10;
}
*/

/*
var message = "Hello";
let age = 22;

const message = "Goodbye";
const age = 30;
*/

//const 实际上保证的并不少变量的值不得改动，而是变量指向的内存地址不得改动。对于简单的数据类型（数值、字符串、布尔值），值就保存在变量指向的那个内存地址。对于复合类型的数据（数组、对象）
//变量指向的只是内存地址（一个指针）。const 只保证指针地址固定，至于它指向的数据结构是不是可变的，就不用在意了

/*
const foo = {};
foo.prop = "123";
console.log(foo.prop);
foo = {};
*/

/* 不可变的指针
const  a = [];
a.push("Hello");
console.log(a);

a.length = 0;
a = ['Dave'];
*/


/* 可变指针
var a = [];
a.push("Hello");
console.log(a);

a.length = 0;
console.log(a);

a = ['David'];
console.log(a);
*/


//将对象冻结。 Object.freeze({}) 常量 foo 指向一个冻结的对象，所以添加新属性不起作用，严格模式还会报错
/*
'use strict';
const foo = Object.freeze({});
foo.prop = 123;
console.log(foo);
*/


//除了对象本身冻结外，对象的属性也应该被冻结。下面是将一个对象彻底冻结的函数
/*
var constantize = (obj) => {
    Object.freeze(obj);
    Object.keys(obj).forEach((key,i) => {
        if (typeof obj[key] === "object") {
            constantize(obj[key]);
        }
    });
};
*/


/*
    ES5 声明变量只有2种方法： var 命令和 function 命令。ES6 除了添加 let 和 const 命令，还有 import 和 class 命令。所以 ES6 共6种方法声明变量
*/



//4、顶层对象的属性
//顶层对象。在浏览器环境指的是  window 对象，在 Node 指的是 global 对象。ES5 中顶层对象的属性与全局变量是等价的

window.a = 1;
console.log(a);     //1

a = 2;
console.log(window.a);      //2

