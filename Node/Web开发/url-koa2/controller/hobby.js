var fn_hobby =  async (ctx, next) => {
    var hobby = ctx.params.hobby;
    console.log(`My hobby is ${hobby}`);
    ctx.response.body = `My hobby is ${hobby}`;
};


module.exports = {
    "GET /Hobby/:hobby" : fn_hobby
};