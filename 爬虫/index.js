const cheerio = require("cheerio")
const fs = require("fs")
//获取html文档内容  
const iconv = require("iconv-lite")
const axios = require("axios")
const { resolve } = require("path")

let httpUrl = "https://pvp.qq.com/web201605/herolist.shtml"
axios.get(httpUrl, {
  responseType: 'arraybuffer'
}).then(res => {
  const str = transCoding(res.data, 'gbk')
  let $ = cheerio.load(str, {
    decodeEntities: false
  })
  console.log("开始爬取网页内容...");
  $(".herolist li a").each(async (index, element) => {
    let heroDetailUrl = "https://pvp.qq.com/web201605/" +
      $(element).attr("href")
    let $_ = cheerio.load(element, {
      decodeEntities: false
    })
    let heroName = $_("img").attr('alt')
    await sleep();
      parseImg({
      heroDetailUrl,
      heroName
    })
  })
})
async function parseImg({
  heroDetailUrl,
  heroName
}) {
  let {
    data
  } = await axios.get(heroDetailUrl, {
    responseType: 'arraybuffer'
  });
  let $ = cheerio.load(transCoding(data, 'gbk'), {
    decodeEntities: false
  })
  let downloadUrl = $(".wrapper .zk-con1").attr("style")

  let res = /background\:url\('(.*?)'\) center 0/igs.exec(downloadUrl)[1]
  fs.mkdir(`./img/${heroName}`, function (err) {
    if (!err) {
      $(".pic-pf ul").each((index, element) => {
        let imgName = $(element).attr("data-imgname")
        let arr = imgName.split("&")
        arr.pop();
        let lastArr = arr.map(item => {
          let index = item.indexOf("|")
          if (index !== -1) {
            return item.slice(index + 1)
          }
          return item
        })
        for (let i = 0; i < lastArr.length; i++) {
          imgDownload({
            imgUrl: doHandleUrl("https:" + res, i + 1),
            skinName: lastArr[i],
            heroName
          })
        }

        function doHandleUrl(url, number) {
          let lastIndex = url.lastIndexOf('.')
          if (lastIndex !== -1) {
            return url.substr(0, lastIndex - 1) + number + url.substr(lastIndex)
          }
        }
      })
    }
  })
}

async function imgDownload({
  imgUrl,
  skinName,
  heroName
}) {
  console.log(skinName);
  let {
    data: imgRes
  } = await axios.get(imgUrl, {
    responseType: 'stream'
  })
  let ws = fs.createWriteStream(`./img/${heroName}/${skinName}.jpg`, {
    flags: "w",

  })
  imgRes.pipe(ws)
}

function transCoding(content, format) {
  return iconv.decode(Buffer.from(content), format)
}
function sleep() {
  return new Promise((resolve,reject)=> {
    setTimeout(resolve, 2000);
  })
}