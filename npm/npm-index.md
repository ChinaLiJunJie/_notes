### 替换淘宝镜像

#### 设置为镜像

npm config set registry https://registry.npm.taobao.org --global

npm config set disturl https://npm.taobao.org/dist --global

#### 取消镜像

* 编辑删除

npm config edit 

* 命令删除

npm config delete registry

npm config delete disturl