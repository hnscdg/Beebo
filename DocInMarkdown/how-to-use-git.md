---
title: 如何通过git把文件提交到github
date: 2018-03-05 22:49:35
tags: git命令
---

# 提交至git

## 工作流介绍

### 你的本地工作由git维护的三棵树组成。

1，工作目录，指实际持有的文件；
2，缓存区index（stage），缓存区域，临时保存你的改动；
3，HEAD区，指最近提交后的结果；
![image](http://upload-images.jianshu.io/upload_images/5204957-7618a4a89b1bcfc6..png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# 提交至本地仓库

##  在working dir中创建的文件如何添加进index区中。

方法：使用add命令；
例子：在git中创建本地库.git后，在.git中touch a1文件，然后用命令git add a1，可以将文件添加进index区。

![image](http://upload-images.jianshu.io/upload_images/5204957-6f920c521f09db40..png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##  提交历史至HEAD并记录。（可提交多次并进行存档。）

方法：使用commit命令；
例子：将a1添加进了index区后，使用命令git commit a1可进行提交，询问身份的话用git config 名字和邮箱 提交。提交后会进入vi编辑器（此编辑器可进行文件内容的修改），修改完后保存退出就提交成功。

**简单git操作可以分以下五部（提交到master，不是分支）**

```
git add . ->将修改添加至本地缓存
git commit -m 'msg' ->将本地缓存保存到本地仓库中
git push ->将本地仓库推送至服务器
git pull ->将服务器的代码更新到本地仓库中

```

查看文件是否被git接管，用git status -s（或者--short）命令查看，红色名字或是红色开头就是未接管，绿色则为已接管；（用git add README.md使README.md让git接管。）
ps：git status命令是查看所有信息，git status -s（--short）查看短信息。

# 反悔功能（重置）

## 查看修改的过程（git log）

![image](http://upload-images.jianshu.io/upload_images/5204957-1f9d0707403e110d?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 返回某一步过程（git reset "前六位过程码"，这是让HEAD回溯过程）

![image](http://upload-images.jianshu.io/upload_images/5204957-ee3445b01ba34180?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## git reset --hard "前六位过程码"（让硬盘也做修改，慎用）

![image](http://upload-images.jianshu.io/upload_images/5204957-f5734ba449b5af22?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# 遇到的问题：

在git commit 时出现了vim的编辑器无法退出的情况（本人没有过vim），在此也记录一下解决方案，后续有问题会持续更新

Please enter a commit message to explain why this merge is necessary.

![image](http://upload-images.jianshu.io/upload_images/5204957-c0ed333677e8233f..jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

git 在pull或者合并分支的时候有时会遇到这个界面。可以不管(直接下面3,4步)，如果要输入解释的话就需要:

1. 按键盘字母 i 进入insert模式

2. 修改最上面那行黄色合并信息,可以不修改

3. 按键盘左上角"Esc"

4. 输入":wq",注意是冒号+wq,按回车键即可
