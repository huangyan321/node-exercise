const myServer = require("./server")
const service = new myServer()
service.on("/", function (req, res) {
  res.setHeader("content-type", "text/html;charset=utf-8")
  res.end("<h1>电影网首页</h1><img src='./anonymous/rml.jpg' />")
})
service.on("/movie", function (req, res) {
  res.setHeader("content-type", "text/html;charset=utf-8")
if (req.pathObj.base === "index") {
  res.end("<h1/>电影网首页<h1/>")
} else {
  res.end("<h1/>电影网其他页面<h1/>")
}
})
service.on("/food", function (req, res) {
  res.setHeader("content-type", "text/html;charset=utf-8")
  res.end("<h1/>我爱吃饭<h1/>")
})
service.on("/hero",function (req,res) {
  let heroArr = [
    {
      heroName: "马超",
      location: "战士",
      history: "马超是一名冷静利落的战士。他本是西凉少寨主之一。他的父亲卷进武都战略、挑起同族相残。少寨主们本共同立誓维护西凉和平，却最终纷纷倒在刀尖之下，马超也被父亲关押。在族中长老帮助下，他连夜逃出，带着牺牲兄弟的遗物——四把冷晖枪，流落异乡。"
    },
    {
      heroName: "西施",
      location: "法师",
      history: "无主之地并非无忧童年的乐土，西施自小学会了各种谋生的小把戏。但她童年首次倒卖捡来的宝贝，就意外欠下了一大笔债务。在躲避追赶时，她闯进了女神的古祠堂，并带出来一条富有魔力的轻纱。"
    }
  ];
  let index = req.pathObj.base;
  console.log(index);
  res.render(heroArr[index], "./template/index.html")
})
service.run(8080, function () {
  console.log("8080端口服务已打开");
})