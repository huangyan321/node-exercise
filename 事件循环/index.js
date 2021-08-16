const events = require('events')
const fs = require('fs')
const {
  fsRead
} = require("../文件读取/index")
let ee = new events.EventEmitter()
ee.on("emitSuccess", function () {
  console.log("吃饭");
})
ee.on("emitSuccess", function () {
  console.log("睡觉");
})
ee.on("emitSuccess", function () {
  console.log("打豆豆");
})
// fs.readFile('./test.txt',{flag:'r',encoding: 'utf-8'},function(err,data) {
//   if(err) {
//     console.log(err);
//   }else {
//     console.log(data);
//   }
// })
fsRead('./test.txt').then((res) => {
  console.log(res);
  ee.emit("emitSuccess", res)
})
async function readChainFiles(path) {
  //同步方式处理异步
  let fs1 = await fsRead(path);
  console.log(fs1);
  ee.emit("emitSuccess", fs1)
}
readChainFiles('./test.txt')