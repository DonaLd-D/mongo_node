const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost/runoob";
MongoClient.connect(url).then((conn) => {
    console.log("数据库已连接");
    var dbase = conn.db("runoob");
    dbase.createCollection("site2").then((res) => {
        console.log("已创建集合");
    }).catch((err) => {
        console.log("数据库操作错误");
    }).finally(() => {
        conn.close();
    });
}).catch((err) => {
    console.log("数据库连接失败");
});