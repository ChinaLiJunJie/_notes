```ts
let player = {score: 1, name: 'Jeff'};

let newPlayer = Object.assign({}, player, {score: 2});

// Now player is unchanged, but newPlayer is {score: 2, name: 'Jeff'}

// 或者使用最新的对象分隔符语法，你可以这么写：
// var newPlayer = {...player, score: 2};

```