const cheerio = require("cheerio")
const {
  fsRead,
  fsWrite
} = require("./rwFs")
const fs = require("fs")
//获取html文档内容  
const iconv = require("iconv-lite")
const axios = require("axios")

let httpUrl = "https://pvp.qq.com/web201605/herolist.shtml"
axios.get(httpUrl, {
  responseType: 'arraybuffer'
}).then(res => {
  const str = transCoding(res.data, 'gbk')
  let $ = cheerio.load(str, {
    decodeEntities: false
  })
  $(".herolist li a").each((index, element) => {
    parseImg("https://pvp.qq.com/web201605/" +
      $(element).attr("href"),$(element).attr("alt"))
  })
})
async function parseImg(imgUrl, heroName) {
  let {
    data
  } = await axios.get(imgUrl, {
    responseType: 'arraybuffer'
  });
  let $ = cheerio.load(transCoding(data, 'gbk'), {
    decodeEntities: false
  })
  let downloadUrl = $(".wrapper .zk-con1").attr("style")
  let res = /background\:url\('(.*?)'\) center 0/igs.exec(downloadUrl)[1]
  downLoadImg("https:" + res, heroName)
}

async function downLoadImg(url, heroName) {
  
  let ws = fs.createWriteStream(`./img/${heroName}.jpg`, {
    flags: "w",
  })
  let res = await axios.get(url, {
    responseType: 'stream'
  })
 res.data.pipe(ws)
  // res.data.pipe(ws)
}

function transCoding(content, format) {
  return iconv.decode(Buffer.from(content), format)
}