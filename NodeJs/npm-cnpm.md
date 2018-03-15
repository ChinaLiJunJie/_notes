# cnpm

# 方法一(不好用)

由于小水管,可以使用cnpm来代替npm,帮助快速下载包文件

淘宝镜像为npm的网站的纯镜像,会尽量与npm保持一致

安装cnpm

```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

cnpm可以使用除publish之外所有的功能

[官方站](http://npm.taobao.org/)

***

不好用 cnpm中,使用npm的很多参数都无效

# 方法二

改npm仓库地址

```bash
npm config set registry https://registry.npm.taobao.org
```

测试是否成功

```bash
npm config get registry 
npm info express
```
