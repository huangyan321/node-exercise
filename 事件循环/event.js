const eventloop = {
  list : [], //定义一个事件数组
  loop() {  
    while (this.list.length){     //监听是否存在事件
      var callback = this.list.shift();   //如果存在，处理
      callback();
    };
    setTimeout(this.loop.bind(this),1000);   //异步 定时检查是否存在事件
  },
  add(callback){      //添加事件函数
    this.list.push(callback);   
  }
} 
eventloop.loop();   //执行循环
setTimeout(()=>{    //异步添加一个事件
  eventloop.add(function(){
    console.log("1");
  })
},1000);        //等待一秒
setTimeout(()=>{    //异步添加一个事件
  eventloop.add(function(){   
    console.log("2");
  })
},1000);  //等待两秒
setTimeout(()=>{    //异步添加一个事件
  eventloop.add(function(){   
    console.log("3");
  })
},1000);  //等待两秒
setTimeout(()=>{    //异步添加一个事件
  eventloop.add(function(){   
    console.log("4");
  })
},1000);  //等待两秒
setTimeout(()=>{    //异步添加一个事件
  eventloop.add(function(){   
    console.log("5");
  })
},1000);  //等待两秒
setTimeout(()=>{    //异步添加一个事件
  eventloop.add(function(){   
    console.log("6");
  })
},1000);  //等待两秒
setTimeout(()=>{    //异步添加一个事件
  eventloop.add(function(){   
    console.log("7");
  })
},1000);  //等待两秒
setTimeout(()=>{    //异步添加一个事件
  eventloop.add(function(){   
    console.log("8");
  })
},1000);  //等待两秒