# 开启端口

## 参考资料

[Linux设置开放一个端口](http://blog.csdn.net/witsmakemen/article/details/19326539)

[LINUX 如何开放端口和关闭端口](https://zhidao.baidu.com/question/347704438.html)

[
iptables配置(/etc/sysconfig/iptables)操作方法](http://www.jb51.net/article/101387.htm)

---

[CentOS7使用firewalld打开关闭防火墙与端口](http://www.cnblogs.com/moxiaoan/p/5683743.html)

[nodejs 80端口监听失败及NODE_PATH不起作用的问题](http://www.cnblogs.com/hz-blog/p/5092226.html)

## 问题解决

在nodejs服务端进程开启后,通过公网始终不能正确获取到页面,在百度之后,发现是端口未开启的原因

之前用nodejs在本地开启公网时,就遇到过这个问题,需要登录路由器,开启端口映射,才能从公网访问,远程服务器也是同理

在资料和尝试的帮助下,成功实现了功能

---

80窗口一直监听不到,运行nodejs服务报错

在阿里环境下,默认80窗口打开的是一个提示页面

在尝试了很多方法无用之后,重装了没有任何环境的centos7.4系统

重新安装所有的环境

nodejs监听80窗口依旧错误

百度百度百度

最后发现是两个问题

1. 监听1024以下端口,需要用管理员权限开启进程

2. 7.4系统不再用iptables做防火墙,而是使用firewall


## 正确流程

`netstat -anp` 查看端口开启情况

`vim /etc/sysconfig/iptables` 打开设置文件

复制端口号的一行命令,将数字改为希望开启的端口

保存退出

`sudo service iptables restart`重启防火墙,使新文件运行

---

`sudo firewall-cmd --zone=public --list-ports`查看开放端口

`sudo firewall-cmd --zone=public --add-port=80/tcp --permanent`添加80端口

`sudo firewall-cmd --reload`更新规则

`sudo firewall-cmd --zone=public --list-ports`查看开放端口

`sudo node xxx.js`开启服务