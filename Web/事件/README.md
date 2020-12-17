# 事件

## 事件三要素

- 事件源
- 事件
- 事件处理程序

```javascript
事件源.事件 = function () {
  事件处理程序;
};
```

```javascript
事件源.addEventListener(事件, function () {
  事件处理程序;
});
```

## 事件绑定

### DOM 0 级事件

- 以 `on` 开头的，如 `.onclick`。

该事件会在事件流的 `冒泡阶段` 被处理。

> 冒泡阶段：子节点 -> 父节点

### DOM 2 级事件

- 标准：`.addEventListener` 和 `.removeEventListener`。
- IE：`.attachEvent` 和 `.detachEvent`。

该事件可在事件流的 `捕获阶段` 或 `冒泡阶段` 被处理。

> 捕获阶段：父节点 -> 子节点

## 事件委托

利用事件冒泡阶段，只制定一个事件处理程序来管理某一类型的所有事件，从而实现性能优化。

```html
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <ul id="ul">
      <li id="li1">li 1</li>
      <li id="li2">li 2</li>
      <li id="li3">li 3</li>
    </ul>

    <script>
      function addEventListener(element, event, onEventListener) {
        if (element.addEventListener) {
          element.addEventListener(event, onEventListener, false);
        } else if (element.attachEvent) {
          element.attachEvent("on" + event, onEventListener);
        } else {
          element["on" + event] = onEventListener;
        }
      }

      function removeEventListener(element, event, onEventListener) {
        if (element.removeEventListener) {
          element.removeEventListener(event, onEventListener, false);
        } else if (element.detachEvent) {
          element.detachEvent("on" + event, onEventListener);
        } else {
          element["on" + event] = null;
        }
      }

      function onEventListener(event) {
        event = event ? event : window.event;
        var target = event.target || event.srcElement;
        switch (target.id) {
          case "li1":
            console.log("li 1");
            break;
          case "li2":
            console.log("li 2");
            break;
          case "li3":
            console.log("li 3");
            break;
        }
      }

      var ul = document.getElementById("ul");

      addEventListener(ul, "click", onEventListener);

      removeEventListener(ul, "click", onEventListener);
    </script>
  </body>
</html>
```
