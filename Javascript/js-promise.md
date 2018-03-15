# promise

### 如何链式写回调函数

案列

```js
function aaa() {
  return new promise((reject,resolve)=>{
    // dosomething
    reject();
  });
}
function bbb() {
  return new promise((reject,resolve)=>{
    // dosomething
    reject();
  });
}
function ccc() {
  return new promise((reject,resolve)=>{
    // dosomething
    reject();
  });
}

// 链式调用
aaa()
  .then(()=>{
    return bbb();
  })
  .then(()=>{
    return ccc();
  })

```

* 想要链式调用式写法,只需要在前一个`then`里返回方法生成的promise实例,下个then就会等待其`reject`之后再调用