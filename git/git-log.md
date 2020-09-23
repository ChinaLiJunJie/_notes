[git log](http://www.cnblogs.com/gbyukg/archive/2011/12/12/2285419.html)

[git log --grep 搜索提交注释](https://blog.csdn.net/icbm/article/details/73381346)

#### 打印最近3天的，以 feat 或 fix 开头的提交日志

```bash
$ git log --pretty=format:"%s" --grep "^(feat|fix):" -E --after=3,day
```

#### 只打印单行 commit msg

```bash
$ git log --pretty=format:%s
```