## 说明

在工作中，我需要将 cpp 的代码转写成 ts 的代码，同时，为了与服务器进行交互，还需要保留每个数据的数据类型。

ts 中没有 cpp 那样精确的数据类型，固定长度的数组，虽然可以通过在接口的属性上写注释来记录，但是很不优雅。

我们可以通过接口和类型别名来处理

### 使用 ts 的类型别名来记录 cpp 中的具体数据类型

``` ts
type BYTE = number;
type WORD = number;
```

### 使用元组来模拟固定长度和类型的数组

```ts
interface CppArray<type,length extends number> extends Array<type> {
    length: length
}
```

### 例子

```ts
type BYTE = number;

const PLAYER_MAX = 4;

interface DataType1 {
    num: BYTE
    numArray: CppArray<BYTE, typeof PLAYER_MAX>
}
```