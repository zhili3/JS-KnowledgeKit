const assert = require("assert");

const sum = require("../hello");


//这样写的缺点在于当一个断言失败后，后面的断言就不会执行
/*
assert.strictEqual(sum(),0);

assert.strictEqual(sum(1),1);

assert.strictEqual(sum(1,2),3);

assert.strictEqual(sum(1,2,3),6);
*/



//这里我们使用 mocha 默认的 BDD-style 测试， describe 可以任意潜逃，以便把相关测试看成一组测试
//每组  it("", () => { }); 都代表一个测试，也就是一个case


describe("#hello.js", () => {
    describe("#sum()", () => {

        before(function(){
            console.log("before:");
        });


        after(function(){
            console.log("after:");
        });


        beforeEach(function(){
            console.log("beforeEach:");
        });


        afterEach(function(){
            console.log("afterEach:");
        });

        it("sum() should return 0", () => {
            assert.strictEqual(sum(),0);
        });

        it("sum() should return 1", () => {
            assert.strictEqual(sum(1),1);
        });

        it("sum() should return 3", () => {
            assert.strictEqual(sum(1,2),3);
        });

        it("sum() should return 6", () => {
            assert.strictEqual(sum(1,2,3),6);
        });


    });
});




