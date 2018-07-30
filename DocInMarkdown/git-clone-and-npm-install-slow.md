---
title: 解决 git clone与npm install 太慢的问题
date: 2018-03-02 21:03:03
tags: npm git
---
## npm install 

使用–registry参数指定镜像服务器地址，为了避免每次安装都需要--registry参数，可以使用如下命令进行永久设置：
> npm config set registry http://registry.npm.taobao.org

## git clone 

有人说git clone用的是另一个域名来下载的：[http://global-ssl.fastly.Net](https://link.zhihu.com/?target=http%3A//global-ssl.fastly.Net)，难怪我在hosts里面加了github.com的dns还是没解决问题。在hosts文件末尾添加两行,重启电脑，让hosts文件生效。
> 151.101.72.249 http://global-ssl.fastly.Net  
> 192.30.253.112 http://github.com 
