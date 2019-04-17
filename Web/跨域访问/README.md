# 跨域访问

违反[同源策略](../同源策略/README.md)的访问。

## 方法

### # CORS（跨域资源共享）
服务端在 HTTP 请求的响应头部设置 `Access-Control-Allow-Origin` 字段。

### # 代理
服务端实现一个代理服务器进行请求转发。

### # JSONP
通过 `script` 标签进行实现，仅支持 `GET` 请求。

### # iframe 
支持 `GET`、`POST` 请求。

- iframe + document.domain
- iframe + location.hash
- iframe + window.name

### # postMessage
HTML5 XMLHttpRequest Level 2 API。

### # WebSocket
HTML5 协议。


