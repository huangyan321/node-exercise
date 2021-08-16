const fs = require("fs")
let rs = fs.createReadStream("./1k60fps.mp4", {
  flags: "r",
})
let ws = fs.createWriteStream("./dir/bbb.mp4", {
  flags: "w",
})
rs.on('open', function () {
  console.log("文件打开");
})
rs.on('ready', function () {
  console.log('准备读取');
})
rs.on('close', function () {
  ws.end()
  console.log('关闭');
})
// rs.on('data', function (chunk) {
//   console.log("正在流入单批数据");
//   console.log(chunk);
//   ws.write(chunk,function(){
//     console.log("单批数据流入完成");
//   })
// })

//管道流
rs.pipe(ws)