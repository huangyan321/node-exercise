const fs = require("fs");
//同步读取
// let contentSync = fs.readFileSync("hello.txt", {
//   flag: 'r',
//   encoding: "utf-8"
// });
// console.log(contentSync);
//异步读取
// let content = fs.readFile("hello.txt", {
//   flag: 'r',
//   encoding: "utf-8"
// }, function (err, data) {
//   console.log(data);
// });
//封装promise
function fsRead(url) {
  return new Promise((resolve, reject) => {
    fs.readFile(url, {
      flag: 'r',
      encoding: "utf-8"
    }, function (err, data) {
      if (err) {
        reject(err)
      } else {
        resolve(data)
        }
    });
  })
}
// fsRead("hello.txt").then(res => {
//   console.log(res);
// });
async function readChainFiles(path) {
  //同步方式处理异步
  let fs1 = await fsRead(path);
  let fs2 = await fsRead(fs1.trim() + ".txt");
  let fs3 = await fsRead(fs2.trim() + ".txt");
  console.log(fs3);
}
// readChainFiles("hello1.txt")
module.exports = {
  fsRead
}