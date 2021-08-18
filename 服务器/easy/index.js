const http = require("http");
let service = http.createServer();
service.on('request',(request,response) => {
  if (request.url === "/hello") {
    response.end("<h1>Hello World!!<h1/>")
  } else if(request.url === "/hi"){
    response.end("<h1>How are you!!<h1/>")
  } else {
    response.end("<h1>404<h1/>")
  }
})
service.listen(8089,function() {
  console.log("服务器8089请求成功");
})