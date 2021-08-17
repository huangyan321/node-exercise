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
module.exports = {
  fsWrite,
  fsRead
}