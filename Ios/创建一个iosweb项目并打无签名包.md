# 创建一个iosweb项目并打无签名包
## 新建一个ios项目
每个新的ios包中含有3个重要组件
* AppDelegate.swift //
* ViewController.swift //视图控制
* Main.storyboard //可视化视图

1. 在Main.storyboard中加入一个webview空间
2. 在脚本中声明webview

```swift
import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var web: UIWebView!//声明控件
    
    //这个方法将会在ios加载完成后调用
    override func viewDidLoad() {
        super.viewDidLoad() //应该是父构造函数
        
        // 1.设置访问资源 -
        let url = URL(string: "http://125.62.17.140:8090/CqDataAnalysisMT/login");
        // 2.建立网络请求
        let request = URLRequest(url: url!);
        // 3.加载网络请求
        web.loadRequest(request)
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}
```

## 在真机中测试
1. 在xcode偏好设置中登录ios账号并获取免费开发者权限
2. 连接手机编译运行

## 无签名打包
1. scheme-edit scheme中,把run中改成release
2. 编译到手机
3. 找到xcode目录下生成的app包
4. 方法一:将app包拖入资料库,然后在finder中打开,得到ipa包
5. 方法二:新建“Payload”文件夹，注意名字要一字不差;将.app包放到Payload中，注意app的名字不做任何更改;在Payload文件夹上右键压缩成zip，然后将生成的.zip文件后缀改成.ipa即可

参考资料:

[ios打包ipa的四种实用方法](http://www.cnblogs.com/wengzilin/p/4601684.html)

[Xcode打包ipa的基本步骤](http://www.jianshu.com/p/a19d2d0747ee)