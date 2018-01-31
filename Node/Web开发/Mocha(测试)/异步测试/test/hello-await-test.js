const assert = require("assert");

const hello = require("../hello");



describe("#async hello", () => {
    describe("#asyncCalculate()", () => {

        //异步测试写法1
        it("#async with denoe", (done) => {
            (async function() {
                try{
                    let r = await hello();
                    assert.strictEqual(r,15);
                    done();
                }catch(err){
                    done(err);
                }
            })();
        });

        //异步测试写法2
        it("#async function", async () => {
            let r = await hello();
            assert.strictEqual(r,15);
        });

        it("#async function", () => {
            assert(true);
        });

    });
});