const fs = require("fs")
let ws = fs.createWriteStream("./test.txt",{flags: "w",encoding: "utf-8"})
//监听文件打开事件
ws.on('open',function() {
  console.log("打开文件...");
})
//监听文件写入准备
ws.on('ready',function() {
  console.log("文件已准备写入");
})
//监听文件写入完成
ws.on('close',function() {
  console.log("写入完成");
})
ws.write("hello world!",function(err){
  if(err) {
    console.log(err);
  }else {
    console.log('流入完成');
  }
})
ws.write("hello world2!", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('流入完成');
  }
})
ws.write("hello world3!", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('流入完成');
  }
})
ws.write("hello world4!", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('流入完成');
  }
})
ws.write("hello world5!", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('流入完成');
  }
})
ws.end(function(){console.log("关闭");})
