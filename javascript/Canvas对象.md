# Canavas对象
## getContext()方法
### 定义和用法
getContext() 方法返回一个用于在画布上绘图的环境。
### 语法
```
Canvas.getContext(contextID)
```
### 参数
参数 contextID 指定了您想要在画布上绘制的类型。当前唯一的合法值是 "2d"，它指定了二维绘图，并且导致这个方法返回一个环境对象，该对象导出一个二维绘图 API。

### 返回值
一个 CanvasRenderingContext2D 对象，使用它可以绘制到 Canvas 元素中。

### 描述
返回一个表示用来绘制的环境类型的环境。其本意是要为不同的绘制类型（2 维、3 维）提供不同的环境。当前，唯一支持的是 "2d"，它返回一个 CanvasRenderingContext2D 对象，该对象实现了一个画布所使用的大多数方法。

## drawlmage()方法
drawImage() 方法在画布上绘制图像、画布或视频。

drawImage() 方法也能够绘制图像的某些部分，以及/或者增加或减少图像的尺寸。
### 语法
作用|语法
---|---
在画布上定位图像|context.drawImage(img,x,y);
在画布上定位图像，并规定图像的宽度和高度|context.drawImage(img,x,y,width,height);
剪切图像，并在画布上定位被剪切的部分|context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
### 参数值
参数|描述
---|---
img|规定要使用的图像、画布或视频。	 
sx|可选。开始剪切的 x 坐标位置。
sy|可选。开始剪切的 y 坐标位置。
swidth|可选。被剪切图像的宽度。
sheight|可选。被剪切图像的高度。
x|在画布上放置图像的 x 坐标位置。
y|在画布上放置图像的 y 坐标位置。
width|可选。要使用的图像的宽度（伸展或缩小图像）。
height|可选。要使用的图像的高度（伸展或缩小图像）。