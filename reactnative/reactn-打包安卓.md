[官方文档](https://reactnative.cn/docs/getting-started/)

1. 安装 node （8.3 以上）

    brew install node

2. 安装 watchman

    brew install watchman

3. 安装 react-native-cli

    yarn global add react-native-cli

4. 安装 JDK （Java Development Kit）

    只支持 1.8 版本 （javac -version 查看版本）

    [下载地址](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)


5. 安装 Android Studio

    [官网下载地址](https://developer.android.google.cn/studio/)，并下载以下环境

    * Android SDK (Android 8.1 (Oreo))
    * Android SDK Platform
    * Performance (Intel ® HAXM)
    * Android Virtual Device
    * Intel x86 Atom_64 System Image（官方模拟器镜像文件，使用非官方模拟器不需要安装此组件）
    * Android SDK Build-Tools(27.0.3)

6. 配置环境

    ~表示用户目录，即/Users/你的用户名/，而小数点开头的文件在 Finder 中是隐藏的，并且这个文件有可能并不存在。可在终端下使用vi ~/.bash_profile命令创建或编辑。如不熟悉 vi 操作，请点击[这里](http://www.eepw.com.cn/article/48018.htm)学习。

    ```
    # 如果你不是通过Android Studio安装的sdk，则其路径可能不同，请自行确定清楚。
    export ANDROID_HOME=$HOME/Library/Android/sdk
    export PATH=$PATH:$ANDROID_HOME/tools
    export PATH=$PATH:$ANDROID_HOME/tools/bin
    export PATH=$PATH:$ANDROID_HOME/platform-tools
    export PATH=$PATH:$ANDROID_HOME/emulator
    ```

    使用 source $HOME/.bash_profile 使修改的配置立即生效。

    可以使用 echo $ANDROID_HOME 检查此变量是否已正确设置。

7. 创建 react-native 项目

    react-native init AwesomeProject

8. （可跳过）使用 Android Studio 打开项目下的"android"目录（需要一些时间安装环境包）

9. 通过 usb 调试模式连接真机

    手机要开启 usb 调试模式

    运行 adb devices，可查看连接的列表

10. 开两个命令行窗口，都进入项目目录,分别执行下面两个命令

    yarn run start

    react-native run-android

    这里文档上写执行 react-native run-android 就可以进行调试，但是我尝试后发现会红屏报错，找了一会不知道是什么原因，但看报错内容像是代码没有编译。

    执行 yarn run start ，再执行 react-native run-android，果然成功了。

11. 大功告成

