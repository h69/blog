# 同源策略

**协议**、**域名**、**端口**相同。

> 协议://域名:端口/路径

```
http://www.qq.com:80/index.html
```

- 保护自身的 `Cookie`、`LocalStorage`、`SessionStorage`、`IndexedDB` 等数据不被其他网站存取。
- 保护自身的 DOM 和 JavaScript 对象不被其他网站获得。
- 保护自身的数据不被其他网站的 AJAX 请求得到。

## 具体说明

对 `http://www.qq.com:80/index.html` 进行同源检测，
| Cookie | 同源 |
| --------------------------------- | ---- |
| http://www.qq.com:80/index.html | √ |
| http://www.qq.com:80/about.html | √ |
| http://www.qq.com:80 | √ |
| http://www.qq.com:8080/index.html | × |
| http://im.qq.com:80/index.html | × |
| https://www.qq.com:80/index.html | × |
