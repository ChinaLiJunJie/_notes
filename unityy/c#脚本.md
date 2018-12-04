# C#脚本
## 创建脚本

```
using UnityEngine;
using System.Collections;

public class TitlleSceen : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
```
这就是一个新创建的C#脚本，在第一行public class TitlleSceen : MonoBehaviour 中，==TitlleSceen== 是类名，必须和脚本的名字相同。==MonoBehaviour== 是它继承的类，只有继承自MonoBehaviour的类才能作为Unity的脚本组件使用。

在第一行之后，void Start之前，可以用来申明一些变量，如果用public申明可以直接在外部的脚本组件中改写。

void Start调用于游戏对象被初始化之后，第一个Update被调用之前。

void Update写在这个函数里的内容==每一帧==都会被调用一次。

除了上2种函数外还有3中最为常见的函数：

void Awake，在脚本被创建时就会被调用，==比Start执行还要早==。

void FixedUpdate，每个固定的物理时间间隔调用一次，与==物理状态==相关的更新都要写在这个下面。

void LateUpdate，同样是每帧调用一次，但会在==UpDate调用完之后==。一般用于更新场景和状态，以及和相机相关的更新。

## 响应事件

总结几个常用的响应事件
事件响应函数 | 说明
---|---
OnMouseEnter | 鼠标移入GUI控件或者碰撞体时调用
OnMouseOver | 鼠标停留在GUI控件或者碰撞体时调用
OnMouseExit | 鼠标移出GUI控件或者碰撞体时调用
OnMouseDown | 鼠标在GUI控件或者碰撞体上按下时调用
OnMouseUp | 鼠标按钮释放时调用
OnTriggerEnter | 当其他碰撞体进入触发器时调用
OnTriggerExit | 当其他碰撞体离开触发器时调用
OnTriggerStay | 当其他碰撞体停留触发器时调用
OnCollisionEnter | 当碰撞体或者刚体与其他碰撞体或者刚体接触时调用
OnCollisionExit | 当碰撞体或者刚体与其他碰撞体或者刚体停止接触时调用
OnCollisionStay | 当碰撞体或者刚体与其他碰撞体或者刚体保持接触时调用
OnEnable | 对象启用或者激活时调用
OnDisable | 对象禁用或者取消激活时调用
OnDestroy | 脚本销毁时调用


## GUI
UI相关的部分都写在==OnGUI==函数下。

写一个简单的例子。

```
	void OnGUI()
	{
		GUI.skin.label.fontSize = 48;
		GUI.skin.label.alignment = TextAnchor.LowerCenter;
		GUI.Label(new Rect(0,30,Screen.width,100),"太空大战");
		if (GUI.Button (new Rect (Screen.width * 0.5f - 100, Screen.height * 0.7f, 200, 30), "开始游戏")) {
			Application.LoadLevel("level1");
		}
	}
```
![image](http://note.youdao.com/yws/api/personal/file/63B6BF0DED2A47D39A9648EF26BB0C99?method=download&shareKey=5d4447f8da522f652c016559195ca7a4)

fontsize表示字体大小，alignment表示字体的对齐方式。
GUI.Label表示创建一个label框体，大小就是Rect中框定的范围，四个参数依次代表框体的左上角X轴坐标、Y轴坐标，右下角X轴坐标、Y轴坐标。（后面的GUI.Button同）

Application.LoadLevel代表场景跳转，括号写场景名，注意参与跳转的场景必须在【File】-【Buid Settings】中被加入。

## 控制
飞机大战中控制主角的代码如下：

```
	void Update () {
		float movev = 0;
		float moveh = 0;
		if (Input.GetKey (KeyCode.UpArrow)) {
			movev -= m_speed * Time.deltaTime;
		}
		if (Input.GetKey (KeyCode.DownArrow)) {
			movev += m_speed * Time.deltaTime;
		}
		if (Input.GetKey (KeyCode.LeftArrow)) {
			moveh += m_speed * Time.deltaTime;
		}
		if (Input.GetKey (KeyCode.RightArrow)) {
			moveh -= m_speed * Time.deltaTime;
		}
		m_transform.Translate (new Vector3 (moveh, 0, movev));

		m_rocketrate -= Time.deltaTime;
		if (m_rocketrate <= 0) {
			m_rocketrate = 0.1f;
				if (Input.GetKey (KeyCode.Space) || Input.GetMouseButton (0)) {
				Instantiate (m_rocket, m_transform.position, m_transform.rotation);
				m_audio.PlayOneShot (m_shootClip);
			}
		}

	}
```
其中m_transform在Start中被申明为this.transform，代表这个物体本身的transform控件。Translate方法表示移动物体多少==距离和方向==。Instantiate是一个创建预置资源的方法，三个参数分别是==预置资源，产生位置，产生角度==。

## 全局管理器（GameManager）
首先需要申明如下代码：

```
public static GameManager Instance;
	void Awake()
	{
		Instance = this;
	}
```
之后就可以在别的脚本中使用GameManager.Instance.方法名  来调用GameManager中的方法。

## 获取对象
可以通过GameObject类中封装的几个方法来获得对象。如下
```
player=GameObject.Find（"XXX"）;
player=GameObject.FindWithTag（"XXX"）;
players=GameObject.FindGameObjectsWithTag("xxx");
```
访问组件则可以通过

```
m_Audio = this.GetComponent<AudioSource>();
```
这些方法都比较耗时，应该避免在Update中使用，在初始化时就应该保存在变量中。