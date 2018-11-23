### opts

<!-- 选项:
-V，——版本输出版本号
-A， --async-only强制所有测试使用回调(async)或返回一个承诺
-c， -颜色强制启用颜色
-C， -无色强制禁用颜色
-G， -growl支持growl通知
-o,reporter-options < k = v,k2 = v2,…> reporter-specific选项
-R，——reporter <name>指定要使用的reporter(默认:“spec”)
-S， -排序测试文件
-b， -在第一次测试失败后保释
-d，—debug启用node的调试器，node的同义词—debug
-g， -grep <pattern>只运行匹配<pattern>的测试
fgrep <string>只运行包含<string>的测试
-gc， -expose-gc公开gc扩展
-- -反相反相-grep和-fgrep匹配
-r，——require <name>要求给定模块(默认:[])
-s，——slow <ms>以毫秒为单位指定“慢”测试阈值(默认:75)
-t，——timeout <ms>指定以毫秒为单位的测试超时阈值(默认值:2000)
-u，——ui <name>指定用户界面(bdd|tdd|qunit|导出)(默认:“bdd”)
-w，——查看当前工作目录中用于更改的文件
检查泄漏检查全局变量泄漏
-显示完整的堆栈跟踪
——编译器< ext >:<模块>,……使用给定的模块编译文件(默认为[])
-debug-brk使node的调试器在第一行中断
——globals <names>允许以逗号分隔的全局[names](默认:[])
——es_staging启用了所有分段的特性
——和谐< _classes _generators,…>所有节点——和谐*标志可用
在解析和缓存模块时，preserve-symlinks指示模块加载器保存符号链接
——ICU -data-dir包含ICU数据
-内联-扩散显示实际/预期的差异内联在每个字符串
失败时不要表现出失败
-检查激活devtools在chrome
3 . inspect-brk在chrome激活devtools，在第一行中断
——接口输出提供接口并退出
——禁止使用、沉默、警告
——退出强制关闭测试运行后的事件循环:mocha将调用process.exit
-no-timeouts禁用超时，隐式使用-debug/- inspect
-无警告使所有节点进程警告保持沉默
——opts <path>指定opts path(默认:“test/mocha.opts”)
——perf basic-prof启用perf linux分析器(基本支持)
- NAPI模块支持实验性的NAPI模块
——prof log统计分析信息
——日志时间事件——时间事件，包括外部回调
——递归包含子目录
——记者输出提供记者退出
——重试<times>指定重试失败测试用例的次数(默认:0)
——抛出-弃用——在使用弃用函数时抛出异常
跟踪跟踪函数调用
跟踪-弃用显示弃用的堆栈跟踪
——跟踪警告显示节点进程警告上的堆栈跟踪
——use_strict模式
——watch-extensions < ext >,……指定要监视的扩展——watch(默认:["js"])
——异步套件定义的延迟等待
允许未捕获的错误传播
仅禁止导致测试标记为“只失败”的套件
——禁止挂起导致挂起测试和用skip标记的测试失败
——文件<文件>添加文件在套件执行前加载(默认:[])
排除<file>添加文件或glob模式以忽略(默认:[])
-h， -帮助输出使用信息

命令:
init <path>在<path>初始化一个客户端mocha设置 -->

### 基本规则

以 `#` 开头为注释

一行为一条命令

### --opts < filename >

指定使用的配置选项的文件位置

### -t < time >

设置异步测试的最大等待时间

### --inspect-brk

启动 dubug 调试，之后可以使用 vscode 的调试器监听 debug 端口进行调试