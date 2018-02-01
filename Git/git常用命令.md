# git常用命令

* 将本地仓库与远程仓库关联

  git remote add origin https://github.com/lijjLyb/liwork.git

* 同步本地仓库

  git push -u origin master

  `-u`参数 Git会把本地的master分支内容推送的远程新的master分支，还会把本地的master分支和远程的master分支关联起来，在以后的推送或者拉取时就可以简化命令

* 查看仓库状态
  git status