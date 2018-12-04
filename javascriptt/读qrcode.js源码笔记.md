# 读qrcode.js源码笔记

## 参考资料

[HTML5 <canvas> 参考手册](http://www.runoob.com/tags/ref-canvas.html)
[二维码的生成细节和原理](http://developer.51cto.com/art/201310/414082_all.htm)
[将HTML5 Canvas的内容保存为图片借助toDataURL实现](http://www.jb51.net/html5/83401.html)

## 大概思路

* 将需要保存的数据,按照生成二维码的要求解析
* 用canvas绘制二维码图像
* 将canvas导出成png
* img节点的src设置成cavas导出的png