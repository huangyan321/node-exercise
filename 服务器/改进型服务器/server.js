const http = require("http")
const path = require("path");
const fs = require("fs");
class myServer {
  constructor() {
    this.service = http.createServer();
    this.reqEvent = {}; //创建服务器每个url地址对应执行的动作
    //自定义静态文件目录（提高安全性）
    this.staticDir = "/anonymous"
    this.service.on("request", (req, res) => {
      res.setHeader("content-type", "text/html;charset=utf-8")
      let pathObj = path.parse(req.url)
      console.log(pathObj);
      if (pathObj.dir in this.reqEvent) {
        res.render = render;
        req.pathObj = pathObj
        this.reqEvent[pathObj.dir](req, res)
      } else if (pathObj.dir === this.staticDir) {
        //静态服务器实现(返回静态文件)
        res.setHeader("content-type", this.getContentType(pathObj.ext))
        let rs = fs.createReadStream('./static/' + pathObj.base)
        rs.pipe(res);
      } else {
        res.setHeader("content-type", "text/html;charset=utf-8")
        res.end("<h1>404<h1/>")
      }
    })
  }
  /**
   * 
   * @param {String} url 
   * @param {Function} 回调 
   */
  on(url, fn) {
    this.reqEvent[url] = fn
  }
  /**
   * 
   * @param {Number} 端口号 
   * @param {Function} 回调 
   */
  run(port, fn) {
    this.service.listen(port, fn)
  }
  getContentType(extName) {
    switch (extName) {
      case ".jpg":
        return "image/jpg";
      case ".html":
        return "text/html;charset=utf-8";
      case ".js":
        return "text/javascript;charset=utf-8";
      case ".json":
        return "text/json;charset=utf-8";
      case ".gif":
        return "image/gif";
      case ".css":
        return "text/css"
    }
  }
}
function render(options, path) {
  fs.readFile(path, {encoding: "utf-8",flag: "r"},(err, data) => {
    if (err) {
      console.log(err);
    } else {
      let reg = /\{\{(.*?)\}\}/igs;
      let result;
      while (result = reg.exec(data)) {
        let resStr = result[1].trim()
        console.log(options[resStr]);
        data = data.replace(result[0], options[resStr])
      }
      this.end(data)
    }
  })
}
module.exports = myServer