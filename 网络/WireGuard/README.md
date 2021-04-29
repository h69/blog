# WireGuard

![](./01.png)

[WireGuard](https://github.com/pirate/wireguard-docs) 是一个易于配置、快速且安全的开源 VPN，它利用了最新的加密技术 —— ECDH 算法，提供一种更快、更简单、更安全的通用 VPN，WireGuard 被视为下一代 VPN 协议，用来替代 OpenVPN、IPSec 等，并且它可以轻松地在树莓派这类低端设备到高端服务器上部署，当前已经被吸收进了 Linux 5.6+ 的内核中，总共只有不到四千行代码。

WireGuard 最初是为 Linux 开发的，但现在可用于 Windows、macOS、iOS 和 Android 等平台上。

## 性能对比

![](./02.jpg)

## 工作原理

### 连接过程

![](./03.png)

正常情况下，WireGuard 只需要 1 个 RTT 的握手就会建立连接状态，然后就开始传输数据了。在握手的过程中交换了对称密钥，一个用来发送，一个用来接收，并且在路由表中生成了对方的地址。

> 在负载较重的时候，WireGuard 会要求 2 个 RTT 的握手。

一、握手请求报文：

- unencrypted_ephemeral：发送方为这次握手临时生成的公钥（未加密，用于 ECDH）
- encrypted_static：用对方的公钥和临时生成的私钥 ECDH 出的临时密钥 key1 对称加密对方的公钥
- encrypted_timestamp：用对方的公钥和自己的私钥 ECDH 出 key2，key2 混淆进 key1，来加密当前的时间戳
- mac1：对方的公钥加上整个报文内容后的哈希

二、握手回复报文：

- unencrypted_ephemeral：接收方为这次握手临时生成的公钥（未加密，用于 ECDH）
- mac1：对方的公钥加上整个报文内容后的哈希

这样两端都有对方的临时生成的公钥，加上自己临时生成的私钥，就可以 ECDH + HKDF（一种把 DH 结果转成对称加密密钥的方法）得到这次握手的两个方向的对称加密的密钥。

### 传输过程

![](./04.png)

WireGuard 以 UDP 实现，但是运行在第三层 —— IP 层（网络层）。每个 WireGuard Peer（节点） 都会生成一个 `wg0` 虚拟网卡。应用程序的包发送到内核以后，如果地址是虚拟专用网内部的，那么就会交给 `wg0` 设备，WireGuard 就会把这个 IP 包封装成 WireGuard 的包，然后在 UDP 中发送出去，对方的 Peer 的内核收到这个 UDP 包后再反向操作，解包成为 IP 包，然后交给对应的应用程序。

## 配置方法

![](./05.jpeg)

### 公私钥

```
# 每一个节点都需要生成一对公私钥
wg genkey | tee private | wg pubkey > public
```

### 服务端

```conf
# /etc/wireguard/wg0.conf

[Interface]
# 服务端私钥
PrivateKey =
Address = 10.10.10.1
SaveConfig = true
ListenPort = 51820
PostUp   = iptables -A FORWARD -i %i -j ACCEPT; iptables -A FORWARD -o %i -j ACCEPT; iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
PostDown = iptables -D FORWARD -i %i -j ACCEPT; iptables -D FORWARD -o %i -j ACCEPT; iptables -t nat -D POSTROUTING -o eth0 -j MASQUERADE


# 配置客户端的 IP（多个客户端连接用多个 Peer 来配置）
[Peer]
# 客户端公钥
PublicKey =
# 表示只代理该 IP 过来的流量（支持网段）
AllowedIPs = 10.10.10.2/32
# 表示代理所有流量
# AllowedIPs = 0.0.0.0/0
```

### 客户端

```conf
[Interface]
# 客户端私钥
PrivateKey =
Address = 10.10.10.2/32
DNS = 8.8.8.8

[Peer]
# 服务端公钥
PublicKey =
# 服务端公网地址
Endpoint = 149.28.171.194:51820
# 表示只劫持该 IP 的流量（支持网段）
AllowedIPs = 10.100.0.0/16,172.17.0.11/20
# 表示劫持所有流量
# AllowedIPs = 0.0.0.0/0
```
