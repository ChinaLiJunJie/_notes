### Readonly< T >

例：

``` ts
// 这样可以使对象的属性对象只读，并且属性的对象的属性也都是只读的
class example {

    readonly constant: {
        param1: string
        param2: string
    } as Readonly<typeof constant>

}
```