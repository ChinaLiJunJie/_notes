书签
===

[【 MySQL 】](https://www.mysql.com/)

[【 sequelpro 轻量客户端 】](https://sequelpro.com/)

[【 菜鸟教程 】](http://www.runoob.com/mysql/mysql-tutorial.html)


## win10

### 安装

[【 官方下载地址 】](https://dev.mysql.com/downloads/mysql/)

1. 下载解压
2. [未测试] 可以在目录下创建  *my.ini* 配置文件
3. 打开 powershell，目录下执行 *./mysqld --initialize --consile*
4. 保存输出中默认密码
5. 管理员在目录内执行 *./mysqld.exe install*
6. 执行 *net start mysql*
7. 完成

### Navicat 连接 Mysql 报 1251 错误

[Navicat连接Mysql8.0.11出现1251错误](https://blog.csdn.net/qq_36068954/article/details/80175755)

出现这个原因是mysql8 之前的版本中加密规则是mysql_native_password,而在mysql8之后,加密规则是caching_sha2_password

解决问题方法有两种,一种是升级navicat驱动,一种是把mysql用户登录密码加密规则还原成mysql_native_password

```
ALTER USER '【用户名】'@'【主机地址(localhost)】' IDENTIFIED WITH mysql_native_password BY '【密码】'; #以  mysql_native_password 加密修改密码

ALTER USER '【用户名】'@'【主机地址(localhost)】' IDENTIFIED BY '【密码】' PASSWORD EXPIRE NEVER; #更新一下用户的密码 

FLUSH PRIVILEGES; #刷新权限
```

### 命令行连接

powershell 在 bin 目录下执行 ./mysql.exe -h 主机名端口(本地可忽略) -u 用户名 -p 密码(空可忽略，或稍后提示输入)