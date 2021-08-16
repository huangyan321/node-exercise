const fs = require("fs")
// fs.rm("./dir/all.txt",function(err) {
//   if(!err) {
//     console.log("删除成功");
//   }
// })
function rmDir(path){
  return new Promise((resolve,reject) => {
    fs.rm(path, function (err) {
      if (!err) {
        resolve()
      } else {
        reject()
      }
    })
  })
}
module.exports = {
  rmDir
}