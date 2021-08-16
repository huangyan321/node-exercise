var str = "Hello World"
let buffer = Buffer.from(str)
console.log(buffer);
console.log(buffer.toString());
//开辟一个新的缓存区
//开辟1个字节的缓存区
let buf = Buffer.alloc(1)
console.log(buf);