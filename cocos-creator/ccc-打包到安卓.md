[环境配置文档](https://docs.cocos.com/creator/manual/zh/publish/setup-native-development.html)
[发布原生平台文档](https://docs.cocos.com/creator/manual/zh/publish/publish-native.html)

### 操作步骤

1. 按照 [环境配置文档](https://docs.cocos.com/creator/manual/zh/publish/setup-native-development.html) 安装环境

    1. 安装 JavaSE （ JavaSE 是 Java 标准开发者环境）。
    2. 安装 android studio。
    3. studio 中安装 android SDK （使用需要使用的版本，如果不知道就是用推荐的版本）。
    4. studio 中安装 Android SDK Platform-Tools，Android SDK Tools。
    5. studio 中安装 Android Support Repository （文档上写的是 Android Support Library，但是这个也可以用）。
    6. 安装 NDK （安装器里只有高版本的，且没有版本选择，我这里是先安装的高版本的，然后官网下载的 r16 ，解压覆盖）。
    7. cocos-creator 偏好设置中配置使用的环境。

2. 按照 [发布原生平台文档](https://docs.cocos.com/creator/manual/zh/publish/publish-native.html) 打包。

3. 使用 android studio 打开 *frameworks/runtime-src/proj.android-studio* 文件夹，首次打开会自动安装许多工具包，需要等待一会。

4. 进行 usb 调试

    1. 拿出安卓手机，开启开发者模式，打开 usb 调试（手机型号不同，开启方式不同，具体百度）。一般是 设置 -> 关于手机 -> 点击版本号若干次 -> 隐藏的开发者模式会被开启 -> 在开发者模式中打开 usb 调试。

    2. 连接电脑，点击右上方的运行按钮。选择调试的手机连接（如果没有连接上可以点击教程），安装 apk，运行。

5. 大功告成，真的好麻烦。。。