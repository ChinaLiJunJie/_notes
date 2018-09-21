### mobx

这是一个js库,用于进行数据绑定

### 例子

[mobx 中文文档](https://cn.mobx.js.org/)
[cocos-mobx-demo ( fork 自 oyb81076)](https://github.com/lijjLyb/cocos-mobx-demo)

mobx 只是提供了一个数据绑定的运行框架,部分内容需要自己定义后使用

mobx 使用 ts 的装饰器语法来进行工作

###

* @observable
  
  声明一个可观察的属性

* @computed

  声明一个可观察的运算结果,例子中声明的是仅有 get 的访问器

* @action

  用来包裹修改可观察属性的值的方法,在调用此方法修改值的话,会触发绑定函数

* autorun

  传入的函数会在任何可观察属性改变时调用

* reaction

  需要传入两个函数,如果第一个函数的返回值改变,会自动调用第二个函数

* IReactionDisposer

  此方法会在 autorun 或 reaction 等方法中返回, 调用此方法会干掉绑定