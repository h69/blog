# 常用操作

## 查看本地分支

```sh
git branch
```

## 查看本地分支和远程分支

```sh
git branch -a
```

## 切换本地分支

```sh
git checkout <branch> # git checkout dev
```

## 根据当前的本地分支创建本地分支，并进行切换

```sh
git checkout -b <branch> # git checkout -b dev
```

## 根据远程分支创建本地分支，并进行切换

```sh
git checkout -b <branch> <repository>/<remote_branch> # git checkout -b dev origin/master
```

## 删除本地分支

```sh
git branch -D <branch> # git branch -D dev
```

## 更名本地分支

```sh
git branch -m <old_branch> <new_branch> # git branch -m dev1 dev2
```
