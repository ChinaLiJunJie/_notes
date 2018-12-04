[Angular 的格式](https://blog.csdn.net/peterxiaoq/article/details/76144288)

#### 前缀一览

* feat：新功能（feature）

* fix：修补bug

* docs：文档（documentation）

* style：格式（不影响代码运行的变动）

* refactor：重构（即不是新增功能，也不是修改bug的代码变动）

* test：增加测试

* chore：构建过程或辅助工具的变动

#### commitizen 帮助生成符合规范的 commit 的工具

``` bash
$ npm install -g commitizen
$ commitizen init cz-conventional-changelog --save --save-exact
```

#### 只打印单行,方便快速查看信息

```bash
$ git log <last tag> HEAD --pretty=format:%s
```