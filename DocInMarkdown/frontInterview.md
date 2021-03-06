---
title: 前端面试总结
date: 2018-03-10 13:38:35
tags: 面试
---

## 前言

### Q：什么情况下会碰到跨域问题？有哪些解决方法？

*   跨域问题是这是浏览器为了安全实施的同源策略导致的，同源策略限制了来自不同源的`document`、`脚本`，同源的意思就是**两个URL的域名、协议、端口要完全相同。**
*   script标签jsonp跨域、nginx反向代理、node.js中间件代理跨域、后端在头部信息设置安全域名、后端在服务器上设置cors。

* * *

### Q：如何判断一个变量是对象还是数组？

判断数组和对象分别都有好几种方法，其中用`prototype.toString.call()`兼容性最好。

```
function isObjArr(variable){
     if (Object.prototype.toString.call(value) === "[object Array]") {
            console.log('value是数组');
       }else if(Object.prototype.toString.call(value)==='[object Object]'){//这个方法兼容性好一点
            console.log('value是对象');
      }else{
          console.log('value不是数组也不是对象')
      }
}

```

ps：**千万不能使用typeof来判断对象和数组**，因为这两种类型都会返回"object"。

* * *

### Q：定时器的执行顺序或机制。

这个问题还是挺经常被问到的，有一些会直接问定时器的机制，有一些是通过笔试题的方式问执行顺序然后问我为什么是这样。

长话短说，我们需要记住的是：**因为js是单线程的，浏览器遇到`setTimeout`或者`setInterval`会先执行完当前的代码块，在此之前会把定时器推入浏览器的待执行事件队列里面，等到浏览器执行完当前代码之后会看一下事件队列里面有没有任务，有的话才执行定时器的代码。** 所以即使把定时器的时间设置为0还是会先执行当前的一些代码。

* * *

### Q：html中title属性和alt属性的区别？

这个问题被问了一次，当时我只记得，alt属性是用于img标签的，当图片失效的时候会出现alt属性里面的内容，title用来标记页面的title，当时面试官问我还有没有其他的区别。我。。。

然后我就找了一篇文章来看，涨了点姿势：

```
1.<img src="#" alt="alt信息" />
//1.当图片不输出信息的时候，会显示alt信息 鼠标放上去没有信息，当图片正常读取，不会出现alt信息
2.<img src="#" alt="alt信息" title="title信息" />
// 2.当图片不输出信息的时候，会显示alt信息 鼠标放上去会出现title信息
//当图片正常输出的时候，不会出现alt信息，鼠标放上去会出现title信息

```

另外还有一些关于title属性的知识：

```
title属性可以用在除了base，basefont，head，html，meta，param，script和title之外的所有标签
title属性的功能是提示。额外的说明信息和非本质的信息请使用title属性。title属性值可以比alt属性值设置的更长
title属性有一个很好的用途，即为链接添加描述性文字，特别是当连接本身并不是十分清楚的表达了链接的目的。

```

* * *

### Q：标准盒子模型与IE怪异盒子模型

这个问题主要会出现在笔试题上面，比如：

```
<div style="width:100px;height="100px;border:10px;padding:10px;"></div>

```

这个盒子在w3c标准盒子模型和IE的怪异盒子模型下面它的宽度分别是多少？

```
标准盒子模型：总宽度=content100px+border 10px*2+padding 10px*2 //140px
怪异盒子模型: 总宽度=content60px+ border 10px*2+padding 10px*2 //100px

```

ps：

```
box-sizing： content-box || border-box；//css3 box-sizing设置为border-box将使用怪异盒子模型
当怪异盒子的宽度小于border+padding的宽度的时候，content width将变为0，盒子的宽度会被border和padding的总宽度撑开

```

* * *

### ES5的继承和ES6的继承有什么区别？

ES5的继承时通过prototype或构造函数机制来实现。**ES5的继承实质上是先创建子类的实例对象，然后再将父类的方法添加到this上**（Parent.apply(this)）。

ES6的继承机制完全不同，**实质上是先创建父类的实例对象this（所以必须先调用父类的super()方法），然后再用子类的构造函数修改this**。

具体的：ES6通过class关键字定义类，里面有构造方法，类之间通过extends关键字实现继承。子类必须在constructor方法中调用super方法，否则新建实例报错。因为子类没有自己的this对象，而是继承了父类的this对象，然后对其进行加工。如果不调用super方法，子类得不到this对象。

ps：super关键字指代父类的实例，即父类的this对象。在子类构造函数中，调用super后，才可使用this关键字，否则报错。

* * *

### Q：CSS3有哪些新增的属性？

```
这里可以分为边框、背景，渐变，阴影、2D转换 3D转换等之类的来说。
比如：边框(border-radius、border-shadow、border-image)之类的 。

```

具体的可以参见菜鸟教程：[链接](https://link.juejin.im?target=http%3A%2F%2Fwww.runoob.com%2Fcss3%2Fcss3-tutorial.html)。类似的镜像问题还有HTML5的新增属性，可以自己谷歌一下。

* * *

### Q：你知道哪些http状态码？

```
1xx：1开头的是信息状态码
2xx：2开头的是请求成功
3xx：3开头的是重定向
4xx：4开头的是客户端错误
5xx：5开头的是服务器错误

```

这个问题并不难，在笔试面试都有碰到过，巧的是之前我就总结过一篇类似的[文章](https://link.juejin.im?target=https%3A%2F%2Fjuejin.im%2Fpost%2F590082e6a22b9d0065be1a5c)。

* * *

### Q:如何对一个数组去重？

这个问题出现了好几次，而且很多面试官不满足你只给出一两种方法。

1、**Set结构去重**。

这是ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

```
let unique= [...new Set(array)];
//es6 Set数据结构类似于数组，成员值是唯一的，有重复的值会自动去重。
//Set内部使用===来判断是否相等，类似'1'和1会两个都保存，NaN和NaN只会保存一个

```

2、遍历，将值添加到新数组，**用indexOf()判断值是否存在，已存在就不添加**，达到去重效果。

```
    let a = ['1','2','3',1,NaN,NaN,undefined,undefined,null,null, 'a','b','b'];
    let unique= arr =>{
         let newA=[];
        arr.forEach(key => {
           if( newA.indexOf(key)<0 ){ //遍历newA是否存在key，如果存在key会大于0就跳过push的那一步
             newA.push(key);
           }
        });
        return newA;
    }
    console.log(unique(a)) ;//["1", "2", "3", 1, NaN, NaN, undefined, null, "a", "b"]
//ps:这个方法不能分辨NaN,会出现两个NaN。是有问题的，下面那个方法好一点。

```

3、遍历，将数组的值添加到一个对象的属性名里，并给属性赋值，**对象不能添加相同属性名，以这个为依据可以实现数组去重**，然后用`Object.keys(对象)`返回这个对象可枚举属性组成的数组，这个数组就是去重后的数组。

```
    let a = ['1', '2', '3', 1,NaN,NaN,undefined,undefined,null,null, 'a', 'b', 'b'];
    const unique = arr => {
        var obj = {}
        arr.forEach(value => {
            obj[value] = 0;//这步新添加一个属性，并赋值，如果不赋值的话，属性会添加不上去
        })
        return Object.keys(obj);//`Object.keys(对象)`返回这个对象可枚举属性组成的数组，这个数组就是去重后的数组
    }
    console.log(unique(a));//["1", "2", "3", "NaN", "undefined", "null", "a", "b"]

```

### 注意：

这个方法会将 number,NaN,undefined,null，**变为字符串形式，因为对象的属性名就是一个字符串**，根据需求来吧，想想还是Set去重最简单也最有效。

* * *

### Q：垂直居中有哪些方法？

*   单行文本的话可以使用`height和line-height`设置同一高度。
*   `position+margin`：设置父元素:`position: relative;`，子元素`height: 100px; position:absolute;top: 50%; margin: -50px 0 0 0;`（定高）
*   `position+transform`：设置父元素`position:relative`,子元素：`position: absolute;top: 50%;transform: translate(0, -50%);`（不定高）
*   百搭flex布局(ie10+)，设置父元素`display:flex;align-items: center;`（不定高）

类似的还有很多，实际应用中，可能就会使用一两种方法，有兴趣的可以看下这篇[文章](https://link.juejin.im?target=https%3A%2F%2Fwww.cnblogs.com%2Fzhouhuan%2Fp%2Fvertical_center.html)

* * *

### Q：翻转一个字符串

这个问题主要在笔试题碰到的多，思路就是先将字符串转成一个数组，然后用数组的`reverse()+join()`方法。

```
let a="hello word";
let b=[...str].reverse().join("");//drow olleh

```

* * *

## 小结

我想说的是：在找工作期间，肯定有自己发挥不好，或者不会的问题，一定要在晚上的时候自己再学习总结一下，在一个问题上面尽量不要栽倒两次，学到了的才是自己的。

以上就是近期面试遇到的一些问题记录总结，实际上还是有一些问题没有写出来，许久没有写文章了，写的很慢，有点累。先给自己立一个flag，下周再写一篇出来。希望各位大佬看了本文，能有所收获，感谢阅读。

### 参考链接：

[title与alt的区别](https://link.juejin.im/?target=https%3A%2F%2Fwww.cnblogs.com%2Fyoyo24456%2Farchive%2F2014%2F07%2F04%2F3823728.html)

[CSS-标准盒模型 & 怪异盒模型](https://link.juejin.im/?target=http%3A%2F%2Fblog.csdn.net%2Fdong_pt%2Farticle%2Fdetails%2F51281372)

[常见的js算法面试题收集，es6实现](https://link.juejin.im/?target=https%3A%2F%2Fjuejin.im%2Fpost%2F5a7aaf745188257a5a4c9a39)

[CSS垂直居中的11种实现方式](https://link.juejin.im/?target=https%3A%2F%2Fwww.cnblogs.com%2Fzhouhuan%2Fp%2Fvertical_center.html)


作者：OBKoro1
链接：https://juejin.im/post/5aad40e4f265da237f1e12ed
