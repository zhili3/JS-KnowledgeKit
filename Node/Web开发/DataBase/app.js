const Sequelize = require("sequelize");

const config = require("./config");

//1、创建一个 sequelize 对象实例
var sequelize = new Sequelize(config.database,config.username,config.password,{
    host:config.host,
    dialect:"mysql",
    pool:{
        max:5,
        min:0,
        idle:30000
    }
});

//2、定义模型 Pet ，告诉 Sequelize 如何映射数据库表

var Pet = sequelize.define("pet",{
    id:{
        type:Sequelize.STRING(50),
        primaryKey:true
    },
    name:Sequelize.STRING(100),
    gender:Sequelize.BOOLEAN,
    birth:Sequelize.STRING(10),
    createdAt:Sequelize.BIGINT,
    updatedAt:Sequelize.BIGINT,
    version:Sequelize.BIGINT
},{
    timestamps:false
});


//3、插入数据

var now = Date.now();


Pet.create({
    id:'l-' + now,
    name:"Rabbit",
    gender:false,
    birth:"2007-07-07",
    create: now,
    updatedAt: now,
    version: 0
}).then(function(p){
    console.log("created." + JSON.stringify(p));
}).catch(function(err){
    console.log("failed:" + err);
});