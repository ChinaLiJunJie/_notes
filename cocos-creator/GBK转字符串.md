# GBK转字符串

在项目中,客户端是web的,服务端是c++的,并且字符串是用的gbk,在服务端没有做特殊处理的情况下,服务端直接读取内存并通过websocket推送给js的字符串,转成的2进制流也是用gbk解码的,这样js就很难处理.

最后是这样解决的,首先是判断是否存在 TextDecoder 对象 如果存在,则使用此对象处理,由于浏览器支持的不同,有可能并不支持此对象,则使用全局进入的字典来手动解码,处理代码如下:

```ts
/** gbk格式编码转字符串 */
GBKToString: function (arr) {
    // c++服务端数组第一个0删除
    if (arr[arr.length - 1] === 0) {
        arr.splice(arr.length - 1, 1);
    }
    for (let i = 0; i < arr.length; i++) {
        if ( arr[i] === 0 && arr[i+1] === 0 && arr[i+2] === 0) {
            arr.splice(i);
        }
    }
    let str = '';
    if (typeof TextDecoder != 'undefined') {
        let aindex = this.ArrayToBuffer(arr);
        str =  new TextDecoder('gbk').decode(aindex);
    }
    else if (typeof GBKTable != 'undefined') {
        var returnstr = '';
        var readcount = 0;
        var length = arr.length;
        while (readcount < length) {
            let strnum = 0;
            let num = arr[readcount];
            if (num >= 0 && num <= 127) {
                strnum = num;
                readcount++;
            } else if (num >= 129 && num <= 254) {
                strnum = this.ByteToWord(arr[readcount + 1], arr[readcount]);
                readcount += 2;
            }
            var UniCode = GBKTable[strnum];
            if (typeof UniCode != 'undefined') {
                returnstr += String.fromCharCode(UniCode);
            }
        }
        str =  returnstr;
    }else{
        throw "GBk解码未做适配"; 
    }
    return str;
}
```

字典看项目