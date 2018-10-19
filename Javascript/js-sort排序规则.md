#### 例:

```js
var arr = [0,1,2,3,4,5,6];
// 从小到大
arr.sort((a,b)=>{
    return a - b;
});
// 从大到小
arr.sort((a,b)=>{
    return b - a;
});
```

* 如果返回值伪为负则 a 在 b 前

* 如果返回值为 0 则不变

* 如果返回值为正,则 b 在 a 前