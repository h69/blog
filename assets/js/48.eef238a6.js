(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{395:function(t,a,s){"use strict";s.r(a);var r=s(26),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"垃圾回收机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收机制"}},[t._v("#")]),t._v(" 垃圾回收机制")]),t._v(" "),s("h2",{attrs:{id:"垃圾标记算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#垃圾标记算法"}},[t._v("#")]),t._v(" 垃圾标记算法")]),t._v(" "),s("h3",{attrs:{id:"引用计数算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引用计数算法"}},[t._v("#")]),t._v(" 引用计数算法")]),t._v(" "),s("p",[t._v("给对象添加一个计数器，每当有一个地方引用它时，计数器加 1；当去除引用时，计数器减 1；当计数器为 0 时，则把此对象标记为垃圾。")]),t._v(" "),s("h3",{attrs:{id:"可达性分析算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可达性分析算法"}},[t._v("#")]),t._v(" 可达性分析算法")]),t._v(" "),s("p",[t._v("从 GC Root 的对象开始向下搜索，所走过的路径称为引用链，当一个对象到 GC Root 没有任何引用链时，则把此对象标记为垃圾。")]),t._v(" "),s("h2",{attrs:{id:"垃圾回收算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收算法"}},[t._v("#")]),t._v(" 垃圾回收算法")]),t._v(" "),s("h3",{attrs:{id:"标记-清除算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标记-清除算法"}},[t._v("#")]),t._v(" 标记-清除算法")]),t._v(" "),s("p",[t._v("标记出所有需要回收的对象，然后直接进行回收。")]),t._v(" "),s("h3",{attrs:{id:"标记-整理算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标记-整理算法"}},[t._v("#")]),t._v(" 标记-整理算法")]),t._v(" "),s("p",[t._v("标记出所有需要回收的对象，然后把所有存活的对象都向内存的一端移动，最后直接清理掉端边界以外的区域。")]),t._v(" "),s("h3",{attrs:{id:"复制算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#复制算法"}},[t._v("#")]),t._v(" 复制算法")]),t._v(" "),s("p",[t._v("将可用内存划分为大小相等的两块，每次只使用一块，当一块用完了，就将还存活的对象复制到另外一块上，然后把已使用的内存空间清理掉。")]),t._v(" "),s("h3",{attrs:{id:"分代收集算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分代收集算法"}},[t._v("#")]),t._v(" 分代收集算法")]),t._v(" "),s("p",[t._v("把内存中的对象按生命周期分为新生代、老年代和永久代。新生代一般采用复制算法，老年代一般采用标记-整理算法。")])])}),[],!1,null,null,null);a.default=e.exports}}]);