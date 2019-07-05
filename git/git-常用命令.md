# git常用命令

* 设置用户名密码

  git config --global user.name [username]
  git config --global user.email [email]

* 将本地仓库与远程仓库关联

  git remote add origin https://github.com/lijjLyb/liwork.git

* 推送本地仓库

  git push -u origin master

  `-u`参数 Git会把本地的master分支内容推送的远程新的master分支，还会把本地的master分支和远程的master分支关联起来，在以后的推送或者拉取时就可以简化命令

* 查看仓库状态
  git status

* 查看远程仓库
  git remote -v

* 将本地库关联的远程库的commitid更新到最新
  git fetch [仓库] [分支]

* 将本地库更新到远程库的最新版本
  git pull [仓库] [分支]

* 合并峰值
  git merge [仓库] [分支]

* 版本回退,只会将版本指针移到指定版本

  git reset <HEAD>

* 版本回退，会创建新的提交

  git revert <HEAD>

* 回退指定的文件到指定的版本

  [csdn](https://blog.csdn.net/developer_biao/article/details/43971037)

### 资料

[从主仓库更新代码至fork的仓库](https://blog.csdn.net/yaya1943/article/details/54582530)