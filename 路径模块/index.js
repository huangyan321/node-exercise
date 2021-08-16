const path = require('path')
let pathStr = 'd0aaf0ec87ac5ee2ee6847a225db5b09a9e20f10.jpg@257w_145h_1c_100q.webp'
//获取扩展名
console.log(path.extname(pathStr));
let arr = ["你好","我叫","hgyn"];
let info1 = path.resolve(...arr)
console.log(info1);
//获取当前执行文件的路径
console.log(__dirname);
let info2 = path.join(__dirname, "你好", "我叫", "hgyn")
console.log(info2);
