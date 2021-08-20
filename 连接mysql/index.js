let mysql = require("mysql")
//配置mysql连接参数
const connection = mysql.createConnection({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "175947",
  database: "nodeMysql"
})
connection.connect((err) => {
  if (err) {
    console.log(err)
  }
});
// //查询表
// let queryStr = "select * from student1"
// connection.query(queryStr,(err,data,field) => {
//   console.log(data);
//   // console.log(field);
// })
//删除表
// let delStr = "drop table student1"
// connection.query(delStr,(err,data) => {
//   console.log(err);
//   console.log(data);
// })
//删除库
// let delAll = "drop database nodeMysql"
// connection.query(delAll,(err,data)=> {
//   console.log(err);
//   console.log(data);
// })
//新建库
// let creatStr = "create database nodeMysql1"
//   connection.query(creatStr,(err,data) => {
//     console.log(err);
//     console.log(data);
//   })
//新建表
// let createTableStr = `CREATE TABLE student3 (
// id  int DEFAULT NULL,
// name  varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
// age  int DEFAULT NULL,
// sex  varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
// habit  varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;`
// connection.query(createTableStr,(err,data) => {
//   console.log(err);
//   console.log(data);
// })
//插入数据
// let insertStr = "insert into student3 (id,name,age,sex,habit) values(1,'王五',18,'男','吃饭')"
// connection.query(insertStr,(err,data) => {
//   console.log(err);
//   console.log(data);
// })