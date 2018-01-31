const request = require("supertest");
const app = require("../app");


describe("#test koa app", () => {
    let server = app.listen(9000);
    describe("#test server", () => {
        it("#test GET/", async () => {
            let res = await request(server).get("/").expect("Content-Type",/text\/html/).expect(200,'<h1>Hello, 杭城小刘!</h1>');
        });


        it("#test GET /path?name=Lbp", async () => {
            let res = await request(server).get('/path?name=Lbp').exptect("Content-Type",/text\/html/).expect(200,'<h1>Hello, Lbp!</h1>');
        });
    });


    
});