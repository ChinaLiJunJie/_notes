### 如何从服务端2进制文件中获取数据

#### 坑们

* 不做任何处理,请求回来的是一串字符串,用`charcodeat`解码,解出来长度与数据都会有出入

* 通过设置属性`responseType`为`blob`或者`arraybuffer`,从`responseText`获取不到

#### 正确姿势

* 请求前设置`responseType`为`arraybuffer`

* 通过`response`获取响应体