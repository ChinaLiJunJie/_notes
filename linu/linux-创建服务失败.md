# 创建服务失败

## 参考资料

[解决运行nodejs代码Error: listen EADDRINUSE](http://blog.sina.com.cn/s/blog_96f94f710101cqas.html)

## 问题解决

创建1212端口的游戏路径监听服务一直失败, EADDRINUSE

防火墙端口开启了,而 `netstat anp` 也看不到端口在占用 `ps a`也没有看到有重复开启的进程

后来看到了资料,成功开启了服务

## 流程

`sudo fuser -n tcp 80` 查看占用端口的进程

`sudo kill -9 pid` 杀掉进程

成功