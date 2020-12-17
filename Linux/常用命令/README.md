# 常用命令

## curl

模拟请求。

## df

查看磁盘。

## free

查看内存。

## netstat

查看网络（端口）。

## ping

查看网络连通性。

## ps

查看进程。

## ssh

连接远程主机（密文，默认端口号 `22`）。

```sh
ssh [user@]<host> # ssh root@127.0.0.1
```

## telnet

连接远程主机（明文，默认端口号 `23`）。

```sh
telnet [host [post]] # telent 127.0.0.1 23
```

## wget

下载文件。

## |

管道符号，比如 `command1` | `command2`，它可以把 `command1` 的输出作为 `command2` 的输入。
