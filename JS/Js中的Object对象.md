# Js中的Object对象

## 对象方法

### assign()

资料列表:	
[MDN关于Object.assign()的介绍](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

可以用于复制其他对象的属性,或者大批量赋值

```js
//-- 复制对象
Object.assign(node1,node2);//node1和node2所有可遍历的属性和方法会一模一样
//-- 批量赋值
Object.assign(this.node,{
                x: 0,
                y: 0
            });
```