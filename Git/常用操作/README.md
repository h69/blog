# 常用操作

## 查看本地分支
```sh
git branch
```

## 查看本地分支和远程分支
```sh
git branch -a
```

## 根据当前的本地分支创建本地分支 
```sh
git checkout -b <branch> # git checkout -b dev
```

# 根据远程分支创建本地分支
```sh
git checkout -b <branch> <repository>/<remote_branch> # git checkout -b dev origin/master
```

## 删除分支
```sh
git branch -D <branch> # git branch -D dev
```