[环境配置文档](https://docs.cocos.com/creator/manual/zh/publish/setup-native-development.html)
[发布原生平台文档](https://docs.cocos.com/creator/manual/zh/publish/publish-native.html)

### 操作步骤

1. 按照 [环境配置文档](https://docs.cocos.com/creator/manual/zh/publish/setup-native-development.html) 安装环境

    1. 安装 JavaSE （ JavaSE 是 Java 标准开发者环境）。注意安装版本为 8 。

        执行 `java -version` 来验证安装是否成功。

        需要配置 `JAVA_HOME` 的环境变量, 指向如`C:\Program Files\Java\jdk1.8.0_241`的地址。
        
    2. 安装 android studio。
    3. studio 中安装 API Level，cocos 推荐 23 26 28。
    4. 在 Android SDK Build-Tools 里，选择最新的 build tools 版本。
    5. studio 中安装 Android SDK Platform-Tools，Android SDK Tools（这个我没找到，但似乎没有用上？没装也没有影响什么）。
    6. studio 中安装 NDK，建议使用的版本为 r17 - r19。
    8. 安装 python 2.7.5+
    9. 安装 vsstudio ,需要c++桌面开发和c++游戏开发模块
    10. cocos-creator 偏好设置中配置使用的环境。(分别是 studio 的下载根目录，和下面的 ndk 的子目录，文件夹名是版本号的，选择需要用的版本)

2. 按照 [发布原生平台文档](https://docs.cocos.com/creator/manual/zh/publish/publish-native.html) 打包。

3. 使用 android studio 打开 *frameworks/runtime-src/proj.android-studio* 文件夹，首次打开会自动安装许多工具包，需要等待一会。

4. 进行 usb 调试

    1. 拿出安卓手机，开启开发者模式，打开 usb 调试（手机型号不同，开启方式不同，具体百度）。一般是 设置 -> 关于手机 -> 点击版本号若干次 -> 隐藏的开发者模式会被开启 -> 在开发者模式中打开 usb 调试。

    2. 连接电脑，点击右上方的运行按钮。选择调试的手机连接（如果没有连接上可以点击教程），安装 apk，运行。

5. 大功告成，真的好麻烦。。。


## 附记

### 200305

第一次在 win10 上弄，踩了几个坑。

首先是 ndk 的目录，在 cocos 里配置的位置是父目录，没有选对应某个版本的子目录，导致编译一直不过。

然后是 studio ，可能是由于缓存，之前没有配置对位置，修改配置后 studio 的编译按钮点了一直没有反应，删除了目录后，用 studio 再打开那个目录，自动弹出的移除后。cocos 重新构建，studio 打开，才正确编译完成。

然后是用手机 usb 调试，一直连接不上。也没有做什么特别的修改，一直重复尝试，最后莫名其妙成功了？