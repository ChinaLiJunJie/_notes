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

// 这样写的支持抽象类
function getComponent<T>(com: { prototype: T }) {}
// 这样写的不支持抽象类，只能是可以实例化的类
function getComponent<T>(com: new => T) {}
```