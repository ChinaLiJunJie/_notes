[Angular 的格式](https://blog.csdn.net/peterxiaoq/article/details/76144288)

commitizen 帮助生成符合规范的 commit 的工具

``` bash
$ npm install -g commitizen
$ commitizen init cz-conventional-changelog --save --save-exact
```

只打印单行,方便快速查看信息

```bash
$ git log <last tag> HEAD --pretty=format:%s
```