### 如何在声明文件外注入声明
需求:

在使用cocoscreator中,由于creator.d.ts文件不全,或者有错误,我就需要手动修改

但是,由于creaotr.d.ts会随着版本更新而逐渐添加和修改,如果我直接在此文件内改,每次更新我都要手动同步新旧文件,很麻烦,所以想在另一个文件中修改creator.d.ts,而原文件只要自动更新就行了

### 对象的类型只会抓取第一个声明的,不会重写或覆盖

```typescript
export class A {
  a(): void
  b(): void
}

class A2 extends A {
  c: any
}

export var ssw: A
export var ssw: A2
// ssw有A的类型提示,没有A2的

export var ssw: A2
export var ssw: A
// ssw有A2的提示
```

### 使用`interface`或`namespace`来注入

```typescript
export class A {
  a(): void
  b(): void
}

interface A {
  c: any
}

export var ssw: A
// 存在属性c
```