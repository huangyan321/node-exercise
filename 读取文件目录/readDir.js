const fs = require('fs')
const {
  fsWrite,
  fsRead
} = require("./index")
fs.readdir("../文件读取",function(err,files){
  if(err) {
    console.log("读取错误");
  } else {
    files.forEach(async (fileName)=> {
      let contents = await fsRead("../文件读取/"+fileName)
      await fsWrite("./dir/all.txt", contents)
    })
  }
})
