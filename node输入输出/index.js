const readline = require("readline")
const {
  fsWrite
} = require("../文件写入/index")
const {
  rmDir
} = require("../删除文件目录/rmDir.js")
let f1 = readline.createInterface({
  output: process.stdout,
  input: process.stdin
})
// f1.question("你今年多大？",function(answer){
//   console.log("答复：",answer);
//   f1.close()
// })
function askQuestion(content) {
  return new Promise((resolve, reject) => {
    f1.question(content, function (answer) {
      resolve(answer)
    })
  })
}
async function askQuestions() {
  let q1 = await askQuestion("name:")
  let q2 = await askQuestion("version:")
  let q3 = await askQuestion("description:")
  let q4 = await askQuestion("main:")
  let content = `{
    "name": "${q1}",
    "version": "${q2}",
    "description": "${q3}",
    "main": "${q4}",
    "scripts": {
    },
    "author": "",
    "license": "ISC"
  }
  `
  await fsWrite("./package.json", content)
  f1.close()
}
rmDir("./package.json")

askQuestions()