# Hellow World
## 显示出Hellow World
脚本名字必须和脚本中的类名相同。
```
using UnityEngine;
using System.Collections;

public class HellowWorld : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
	void OnGUI(){
		GUI.skin.label.fontSize = 100;
		GUI.Label( new Rect(10,10,Screen.width,Screen.height),"Hello World");
	}
}
```
将这个脚本拖给摄像机，开始游戏后就可以在屏幕上显示出Hellow World。

## 调试代码
U3D中，所有错误都会在Console窗体中显示。
在脚本中使用以下代码，就可以将信息显示在Console窗体中。其中，Log显示白色，LogError显示红色。
```
Debug.Log("XXX");
Debug.LogError("XXX");
```
在MonoDevelop中，F9为设置断点。