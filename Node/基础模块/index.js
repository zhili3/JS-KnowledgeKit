var s = 'Hello';

function greet(name){
    console.log(s + ", " + name + "!");
}

var lbp = {
    "name":"杭城小刘",
    "age":22,
    "hobby":"乒乓球、动漫、科技",
    "city":"杭州"
};

module.exports.greet = greet;
module.exports.lbp = lbp;