const fs = require("fs")
// fs.writeFile("test.txt", "今天是星期天", {
//   flag: "w",
//   encoding: "utf-8"
// }, function (err) {
//   if (!err) {
//     console.log("写入成功");
//   }
// })
//封装追加写入promise
function fsWrite(path, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, content, {
      flag: "a",
      encoding: "utf-8"
    }, function (err) {
      if (!err) {
        console.log("写入成功");
        resolve()
      } else {
        console.log(err);
        reject()
      }
    })
  })
}
async function writeChainFile() {
  await fsWrite("test.txt", "今晚吃什么？\n")
  await fsWrite("test.txt", "红烧狮子头\n")
  await fsWrite("test.txt", "红烧狮子头不好吃\n")
  await fsWrite("test.txt", "咱们今天吃鱼香茄子把\n")
}
// writeChainFile()
module.exports = {
  fsWrite
}