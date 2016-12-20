# js运算符||和&&的妙用
例:

假设对成长速度显示规定如下:

成长速度为5显示1个箭头；

成长速度为10显示2个箭头；

成长速度为12显示3个箭头；

成长速度为15显示4个箭头；

其他都显示都显示0个箭头。 

用代码怎么实现？ 

```
//if else 实现
var add_level = 0; 
if(add_step == 5){ 
  add_level = 1; 
}else if(add_step == 10){ 
  add_level = 2; 
}else if(add_step == 12){ 
  add_level = 3; 
}else if(add_step == 15){ 
  add_level = 4; 
}else { 
  add_level = 0; 
} 
```

```
//也可以用switch实现
var add_level = 0; 
switch(add_step){ 
  case 5 : 
    add_level = 1; 
    break; 
  case 10 : 
    add_level = 2; 
      break; 
  case 12 : 
     add_level = 3; 
    break; 
  case 15 :
    add_level = 4; 
    break; 
  default : 
    add_level = 0; 
    break;
} 
```

但运用||和&&运算符,可以用一行代码实现这个效果

第一个需求:

```
//&& ||实现
var add_level = (add_step==5 && 1) || (add_step==10 && 2) || (add_step==12 && 3) || (add_step==15 && 4) || 0; 
```

&&相当于if,因为&&前的如果为假,不会执行后半部分,如果为真,则会执行后半部分.
||相当于else,因为||前为假,也会执行后面的部分,但一旦有一项为真,则不执行后面的部分.

```
//更优雅的方式
var add_level={'5':1,'10':2,'12':3,'15':4}[add_step] || 0; 
```

声明了一个对象{'5':1,'10':2,'12':3,'15':4},通过obj[type]的方式访问属性的值.

因为obj.'5'是报错的,所以只能通过obj[5]来访问.