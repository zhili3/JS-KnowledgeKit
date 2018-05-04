

/*
强制要求参数。
ES6 提供了默认参数机制，允许你为参数设置默认值，防止在函数被调用时没有传入这些参数。
我们写了1个 requires() 函数，作为参数的默认值，这意味着如果 a 或 b 其中有一个参数没有在调用的时候传值，会默认 required() 函数，然后我们可以在这个函数值做处理，抛出错误。
*/

const required = () => {
    throw new  Error("Missing parameter");
};

const add = (a = required(), b = required()) => a+b;

console.log("add(1,2) = " + add(1,2));


console.log("add(1) = " + add(1));
