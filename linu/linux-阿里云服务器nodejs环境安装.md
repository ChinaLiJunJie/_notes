# 阿里云服务器配置及nodejs环境安装

## 参考资料
[sudu命令](http://book.51cto.com/art/201204/327510.htm)

[npm使用介绍](http://www.runoob.com/nodejs/nodejs-npm.html)

[在阿里云上安装和运行nodejs全攻略](https://bbs.aliyun.com/read/146189.html)

[怎么在阿里云服务器里使用nodejs环境](https://zhidao.baidu.com/question/683200627681288692.html)

[linux系统中如何进入退出vim编辑器，方法及区别](http://jingyan.baidu.com/article/495ba8410ff14d38b30ede01.html)

## 问题与解决

### 初次尝试安装nodejs

首先我是按照 `在阿里云上安装和运行nodejs全攻略` 的流程进行nodejs环境的配置,但是在总是在编译和安装时出现各种各样的错误,并且也找不到方案解决,在尝试了很多次之后放弃了

之后,我看到了`怎么在阿里云服务器里使用nodejs环境`,跟着他的流程对服务器进行若干配置之后,依旧无法成功编译.

之后发现可以安装阿里的低版本的nodejs,然后用npm来更新至最新版本.

用这个思路之后,成功安装了nodejs环境

## 成功流程整理

阿里云服务器的设置,按照[怎么在阿里云服务器里使用nodejs环境](https://zhidao.baidu.com/question/683200627681288692.html),进行配置

然后运行一次运行

`sudo yum install nodejs npm`

`sudo npm install npm -g`

`npm install -g n`

`n v6.10.2`

完成