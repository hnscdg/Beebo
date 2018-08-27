# element VS node, children VS childNodes

Node(节点)是DOM层次结构中的任何类型的对象的通用名称，Node有很多类型，如元素节点，属性节点，文本节点，注释节点等，通过NodeType区分，常见的有：

 节点类型 | NodeType
 --- | ---
 element | 1
 attr | 2
 text | 3
 comments | 8
 document | 9

> **Element继承了Node类，也就是说Element是Node多种类型中的一种，即当NodeType为1时Node即为ElementNode，另外Element扩展了Node，Element拥有id、class、children等属性**

以上就是Element跟Node的区别。

　　那么用document.getElementById("xxx")取到的是Node还是Element呢？我们来测试一下：

``` html

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Demo</title>
</head>
<body>
    <div id="test">
        <p>One</p>
        <P>Two</p>
    </div>
    <script>
        var oDiv=document.getElementById("test");
        console.log(oDiv instanceof Node);        //true
        console.log(oDiv instanceof Element);    //true
    </script>
</body>
</html>

```

我们可以看到用document.getElementById("xxx")取到的既是Element也是Node。

　　children是Element的属性，childNodes是Node的属性，我们再来测试一下：

``` html

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Demo</title>
</head>
<body>
    <div id="test">
        <p>One</p>
        <P>Two</p>
    </div>
    <script>
        var oDiv=document.getElementById("test");
        console.log(oDiv.children[0] instanceof Node);        //true
        console.log(oDiv.children[0] instanceof Element);    //true

        console.log(oDiv.childNodes[0] instanceof Node);    //true
        console.log(oDiv.childNodes[0] instanceof Element);    //false

        console.log(typeof oDiv.childNodes[0].children);    //undefined
        console.log(typeof oDiv.childNodes[0].childNodes);    //object
    </script>
</body>
</html>

```

通过上面的代码我们可以看到，Element的children[0]仍为Element，是Node和Element的实例，Node的childNdoes[0]为Node，只是Node的实例，不是Element的实例。

　　同时，Node的children属性为为undefined。