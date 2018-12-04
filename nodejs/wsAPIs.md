# wsAPIs

所有的API以`ws`源码中为准.

同时关注ws包内的readme.md.

## 大类

```js
//-- 连接对象
WebSocket
//-- ws服务对象类
WebSocketServer
//-- 未知
Receiver
//-- 未知
Sender
```
### WebSocket

资料列表:	
nodejs-ws源码		
只搬运了公有方法

```js
//-- 构造函数

//-- 暂停
ws.pause();

//-- 继续
ws.resume();

//-- 关闭
  /**
   * Start a closing handshake.
   *
   * @param {Number} code Status code explaining why the connection is closing
   * @param {String} data A string explaining why the connection is closing
   * @public
   */
   
ws.close(code,data);

//-- 发送一个ping消息
  /**
   * Send a ping message.
   *
   * @param {*} data The message to send
   * @param {Boolean} mask Indicates whether or not to mask `data`
   * @param {Boolean} failSilently Indicates whether or not to throw if `readyState` isn't `OPEN`
   * @public
   */
   
ws.ping (data, mask, failSilently);

//-- 发送一个pong消息
  /**
   * Send a pong message.
   *
   * @param {*} data The message to send
   * @param {Boolean} mask Indicates whether or not to mask `data`
   * @param {Boolean} failSilently Indicates whether or not to throw if `readyState` isn't `OPEN`
   * @public
   */
   
ws.pong (data, mask, failSilently);

//-- 发送一个消息
  /**
   * Send a data message.
   *
   * @param {*} data The message to send
   * @param {Object} options Options object
   * @param {Boolean} options.compress Specifies whether or not to compress `data`
   * @param {Boolean} options.binary Specifies whether `data` is binary or text
   * @param {Boolean} options.fin Specifies whether the fragment is the last one
   * @param {Boolean} options.mask Specifies whether or not to mask `data`
   * @param {Function} cb Callback which is executed when data is written out
   * @public
   */

ws.send (data, options, cb);

//-- 半封闭套接字发送一个鳍包
  /**
   * Half-close the socket sending a FIN packet.
   *
   * @public
   */
   
ws.terminate();
```

### WebSocketServer

资料列表:	
nodejs-ws源码		
只搬运了公有方法

```js
//-- 构造函数
/**
   * Create a `WebSocketServer` instance.
   *
   * @param {Object} options Configuration options
   * @param {String} options.host The hostname where to bind the server
   * @param {Number} options.port The port where to bind the server
   * @param {http.Server} options.server A pre-created HTTP/S server to use
   * @param {Function} options.verifyClient An hook to reject connections
   * @param {Function} options.handleProtocols An hook to handle protocols
   * @param {String} options.path Accept only connections matching this path
   * @param {Boolean} options.noServer Enable no server mode
   * @param {Boolean} options.clientTracking Specifies whether or not to track clients
   * @param {(Boolean|Object)} options.perMessageDeflate Enable/disable permessage-deflate
   * @param {Number} options.maxPayload The maximum allowed message size
   * @param {Function} callback A listener for the `listening` event
   */
   
var ws = WebsocketServer(options,callback);

//-- 关闭服务
/**
   * Close the server.
   *
   * @param {Function} cb Callback
   * @public
   */
   
ws.close(cb);

//-- 判断请求是否由服务器处理
/**
   * See if a given request should be handled by this server instance.
   *
   * @param {http.IncomingMessage} req Request object to inspect
   * @return {Boolean} `true` if the request is valid, else `false`
   * @public
   */
   
var ans = ws.shouldHandle(req);

//-- 处理一个HTTP升级请求
/**
   * Handle a HTTP Upgrade request.
   *
   * @param {http.IncomingMessage} req The request object
   * @param {net.Socket} socket The network socket between the server and client
   * @param {Buffer} head The first packet of the upgraded stream
   * @param {Function} cb Callback
   * @public
   */

var ret = ws.handleUpgrade(req, socket, head, cb);

//-- 发送事件

'listening': 未知
'error': 发生错误时
'connection': 连接时

```