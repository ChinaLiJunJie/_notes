# websorket的初步使用

范本:

```js
        const _this = this;
        window.game = {};
        window.game.ws = new WebSocket("ws://localhost:8181");
        const ws = window.game.ws;
        ws.onopen = function (event) {
            console.log("Send Text WS was opened.");
        };
        ws.onmessage = function (event) {
            console.log("response text msg: " + event.data);
        };
        ws.onerror = function (event) {
            console.log("Send Text fired an error");
        };
        ws.onclose = function (event) {
            console.log("WebSocket instance closed.");
            _this.getline();
        };
        setInterval(function () {
            if (ws.readyState === WebSocket.OPEN) {
                ws.send("4444");
            }
            else {
                console.log("WebSocket instance wasn't ready...");
            }
        }, 2000);
```

* 所有websorket的执行都是异步的,注意逻辑