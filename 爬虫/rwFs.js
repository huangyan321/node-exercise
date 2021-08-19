const fs = require("fs")
/**
 * 写入文件
 * @param {String} path 
 * @param {*}} content 
 * @returns 
 */
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
/**
 * 读取文件内容
 * @param {Sting} url 
 * @returns 
 */
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
/**
 * 判断文件是否存在
 * @param {String} path 
 * @returns
 */
function isFileExisted(path) {
  return new Promise((resolve, reject) => {
    fs.access(path, (err) => {
      if (err) {
        console.log("文件不存在");
        resolve(false)
      } else {
        resolve(true)
      }
    })
  })
}
/**
 * 删除指定路径下的目录文件夹
 * @param {String} path 
 * @returns 
 */
function rmDir(path) {
  return new Promise((resolve, reject) => {
    fs.rmdir(path, {
      recursive: true
    }, (err) => {
      if (err) {
        reject(err)
      } else {
        console.log("正在删除");
        resolve()
      }
    })
  })
}
/**
 * 在指定路径下创建目录
 * @param {String} path 
 * @returns 
 */
function mkDir(path) {
  return new Promise((resolve, reject) => {
    fs.mkdir(path, (err) => {
      if (err) {
        reject(err)
      } else {
        console.log("正在创建目录");
        resolve()
      }
    })
  })
}
/**
 * 重新创建对应路径下文件夹
 * @param {String} path 
 */
async function rmAndMkdir(path) {
  try {
    var isExist = await isFileExisted(path)
    if (isExist) {
      await rmDir(path);
      await mkDir(path);
    } else {
      await mkDir(path);
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  fsWrite,
  fsRead,
  isFileExisted,
  rmDir,
  mkDir,
  rmAndMkdir
}