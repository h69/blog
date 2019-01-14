# 前端工程化
前端工程化是指使用软件工程的技术和方法来进行前端项目的开发、维护和管理。

软件工程关注的是性能、稳定性、可用性、可维护性、可访问性等方面，一切以这些为目标的工作就是「前端工程化」。

而实现这些方面的思想或方法主要有模块化、组件化、规范化、自动化等。

---

## 模块化
模块化主要体现在文件层面上，因为模块通常是用文件来表示。

模块化，解决的是依赖顺序（先引入 a 模块后引入 b 模块和先引入 b 模块后引入 a 模块的结果是一样的）和全局变量（b 模块的全局变量不会直接影响覆盖 a 模块的全局变量）的问题，如果没解决这两个问题，那就不能说是模块化而只能说是「文件化」罢了。

#### # JS 模块化
由于原来的 JavaScript (ES5) 不支持模块化，所以当前是通过 AMD/CMD/UMD/CommonJS/ES6 等规范进行实现。

> AMD：define + require  
> CMD：define + require  
> UMD：AMD + CommonJS  
> CommonJS：exports + require  
> ES6：export + import   

- require.js
- sea.js
- browserify
- webpack
- parcel

#### # CSS 模块化
虽然 CSS 本身就提供了 `@import` 关键字，但并不能说 CSS 具备了真正意义上的模块化的能力，因为它并没有解决全局变量被污染的问题（后引入的会直接覆盖前引入的）。

> LESS、SASS(SCSS) 等只是扩充了 CSS 的功能，并没有实现所谓的模块化。

- Shadow DOM
- CSS in JS
- CSS Modules

## 组件化
组件化主要体现在视图层面上，比如把一些公共的视图抽象成一个个组件。

## 规范化
规范化是对工程进行统一的规范。

- 编程语言：JavaScript / TypeScript
- 服务：Node.js
- 包管理：NPM
- 编码规范：ESLint
- 版本管理：Git
- Git Commit Log：Angular 规范（feat、fix、docs、style、refactor、test、chore）
- 网络协议：HTTP / HTTPS
- 数据协议：JSON
- 接口风格：RESTful
- 项目结构：脚手架（cli）
- 系统架构：前后端分离（前端、接入层、服务层）

## 自动化
自动化是把一些能让机器完成的工作都交给机器去完成。

- 自动重启服务：nodemon
- 自动化构建（打包）：grunt / gulp / webpack / parcel

---

到这里，你也许觉得「前端工程化」很复杂，需要借助各种工具混合着使用，但其实现在有许多类库或框架整合了各种工具，它们能够直接上手开发并轻易实现「前端工程化」，如 Vue、React、Angular 等。