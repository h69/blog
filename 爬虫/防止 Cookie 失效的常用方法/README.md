# 防止 Cookie 失效的常用方法

在爬虫的时候，有时候需要用到 Cookie 去网站爬取一些数据，Cookie 不失效当然是最开心的，但常常会遇到 Cookie 失效导致爬取失败，大概有以下常用方法可供参考：

- **直接用帐号密码登录获取最新 Cookie。** 有一些网站的 Cookie 每隔一段时间必定失效，这时候通常只能通过帐号密码获取最新 Cookie，但是一般都会遇到验证码，所以破解验证码也是需要考虑的。

- **对 Cookie 进行改造。** 有一些网站的 Cookie 里包含了有效期字段，那么可以把有效期字段删除或更改到无限长，则可以让 Cookie 不过期。此外，一般 Cookie 也只会与几个关键字段有关，所以可以只留下关键字段，把无关字段删除，也是不会影响 Cookie 的有效期的。

- **采用心跳包机制。** 有一些网站刷新了页面可以让 Cookie 不失效，实质是刷新了 Cookie 的过期时间，所以，可以每隔一段时间发起一下请求，激活一下，这样就可以不断刷新 Cookie 的过期时间。

- **发起某些能返回最新 Cookie 的请求。** 有一些网站刷新了页面也可以让 Cookie 不失效，但它与心跳包机制不同，它是在 Cookie 失效的时候会发起一系列请求来刷新 Cookie，这时候通常会返回最新的 Cookie 回来，所以，可以通过浏览器的 F12 或者抓包工具来找到这些请求，在需要最新 Cookie 的时候发起这些请求来获取。

- **使用无头浏览器。** 使用传统的模拟请求的方法可能会存在可维护性低的问题，所以可以直接用无头浏览器（PhantomJS、Nightmare）来模拟真实用户行为暴力解决。

- **使用真实浏览器。** 如果连无头浏览器都无法解决的话，那么可以直接使用真实浏览器（Google Chrome Extensions）来巧妙解决。
