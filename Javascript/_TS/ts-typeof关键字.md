### typeof

#### 推断基本类型

```ts
function log(val: string | number) {
  if (typeof val === "string") {

  }
  else {

  }
}
```

#### 获取字面量对象的类型

```ts
const pics = {
  pic1: "./pic/pic1",
  pic2: "./pic/pic2"
}

const pics2 = {
  pic1: "./pic2/pic1",
  pic2: "./pic2/pic2"
}

const pics3 = {
  bg: "./pics3/pic1",
  bg1: "./pics3/pic2"
}

function getRes(pic: typeof pics) {
}

// true
getRes(pics2);
// false
getRes(pics3);
```