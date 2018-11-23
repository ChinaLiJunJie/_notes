# 保持进程在后台运行

## 参考资料

[nodejs 断开SSH 服务就退出了 怎么让它一直运行啊？](http://cnodejs.org/topic/51a0323e776b2e7f03255782)

## 解决方案

`nohup node start.js > /home/ljj/node/logs/nodesever.txt 2>&1 &`

为从根目录起计算的位置