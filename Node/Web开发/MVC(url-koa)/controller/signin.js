
module.exports = {
    "POST /signin" : async (ctx, next) => {
        var email = ctx.request.body.email || "",
            password = ctx.request.body.password || "";
        if (email === "704568245@qq.com" && password === "123456") {
            console.log("singin ok");
            ctx.render("sign-ok.html",{
                title:"Sign In ok!",
                name:"杭城小刘"
            });
        }else{
            console.log("singin failed");
            ctx.render("signin-failed.html",{
                title:"Sign In Failed!"
            });
        }

    }
};