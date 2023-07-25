(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{326:function(v,_,t){v.exports=t.p+"assets/img/01.f3abb9dd.png"},375:function(v,_,t){"use strict";t.r(_);var a=t(26),r=Object(a.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h1",{attrs:{id:"线程与进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程与进程"}},[v._v("#")]),v._v(" 线程与进程")]),v._v(" "),a("h2",{attrs:{id:"基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[v._v("#")]),v._v(" 基本概念")]),v._v(" "),a("p",[v._v("线程是 CPU 调度的最小单位，进程是资源分配的最小单位。")]),v._v(" "),a("h2",{attrs:{id:"线程同步-线程安全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程同步-线程安全"}},[v._v("#")]),v._v(" 线程同步（线程安全）")]),v._v(" "),a("ul",[a("li",[v._v("互斥锁")]),v._v(" "),a("li",[v._v("条件变量")]),v._v(" "),a("li",[v._v("读写锁")]),v._v(" "),a("li",[v._v("信号量")]),v._v(" "),a("li",[v._v("自旋锁")]),v._v(" "),a("li",[v._v("屏障")]),v._v(" "),a("li",[v._v("原子操作")]),v._v(" "),a("li",[v._v("IPC")])]),v._v(" "),a("h2",{attrs:{id:"进程间通信-ipc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程间通信-ipc"}},[v._v("#")]),v._v(" 进程间通信（IPC）")]),v._v(" "),a("ul",[a("li",[v._v("管道")]),v._v(" "),a("li",[v._v("有名管道")]),v._v(" "),a("li",[v._v("信号")]),v._v(" "),a("li",[v._v("消息队列")]),v._v(" "),a("li",[v._v("共享内存")]),v._v(" "),a("li",[v._v("信号量")]),v._v(" "),a("li",[v._v("套接字（socket）")])]),v._v(" "),a("h2",{attrs:{id:"线程的生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程的生命周期"}},[v._v("#")]),v._v(" 线程的生命周期")]),v._v(" "),a("p",[a("img",{attrs:{src:t(326),alt:"线程的生命周期"}})]),v._v(" "),a("h2",{attrs:{id:"多线程与多进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多线程与多进程"}},[v._v("#")]),v._v(" 多线程与多进程")]),v._v(" "),a("table",[a("thead",[a("tr",[a("th",[v._v("维度")]),v._v(" "),a("th",[v._v("多线程")]),v._v(" "),a("th",[v._v("多进程")]),v._v(" "),a("th",[v._v("优势")])])]),v._v(" "),a("tbody",[a("tr",[a("td",[v._v("数据共享（读）")]),v._v(" "),a("td",[v._v("数据共享简单")]),v._v(" "),a("td",[v._v("数据共享复杂（IPC）")]),v._v(" "),a("td",[v._v("多线程")])]),v._v(" "),a("tr",[a("td",[v._v("数据同步（写）")]),v._v(" "),a("td",[v._v("数据同步复杂")]),v._v(" "),a("td",[v._v("数据同步简单")]),v._v(" "),a("td",[v._v("多进程")])]),v._v(" "),a("tr",[a("td",[v._v("内存")]),v._v(" "),a("td",[v._v("占用内存少")]),v._v(" "),a("td",[v._v("占用内存多")]),v._v(" "),a("td",[v._v("多线程")])]),v._v(" "),a("tr",[a("td",[v._v("CPU（大量计算）")]),v._v(" "),a("td",[v._v("切换快，CPU 利用率高")]),v._v(" "),a("td",[v._v("切换慢，CPU 利用率低")]),v._v(" "),a("td",[v._v("多线程")])]),v._v(" "),a("tr",[a("td",[v._v("创建销毁切换")]),v._v(" "),a("td",[v._v("创建销毁切换简单，速度快")]),v._v(" "),a("td",[v._v("创建销毁切换复杂，速度慢")]),v._v(" "),a("td",[v._v("多线程")])]),v._v(" "),a("tr",[a("td",[v._v("编程")]),v._v(" "),a("td",[v._v("编程复杂")]),v._v(" "),a("td",[v._v("编程简单")]),v._v(" "),a("td",[v._v("多进程")])]),v._v(" "),a("tr",[a("td",[v._v("可靠性")]),v._v(" "),a("td",[v._v("一个线程挂掉将导致整个进程挂掉")]),v._v(" "),a("td",[v._v("进程间不会相互影响")]),v._v(" "),a("td",[v._v("多进程")])]),v._v(" "),a("tr",[a("td",[v._v("分布式")]),v._v(" "),a("td",[v._v("更适合于多核分布式")]),v._v(" "),a("td",[v._v("更适合于多机分布式")]),v._v(" "),a("td",[v._v("多进程")])])])]),v._v(" "),a("h2",{attrs:{id:"线程与处理器-cpu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程与处理器-cpu"}},[v._v("#")]),v._v(" 线程与处理器（CPU）")]),v._v(" "),a("p",[v._v("多核处理器是指在一枚处理器中集成两个或多个完整的计算引擎（内核），即多个物理核心。")]),v._v(" "),a("p",[v._v("单核处理器即一个物理核心。")]),v._v(" "),a("p",[v._v("此外，还有逻辑核心的概念，一般一个物理核心对应一个逻辑核心（现在也有一个物理核心对应两个逻辑核心的处理器，但性能肯定比不上两个物理核心），一个逻辑核心可以处理一个线程。")]),v._v(" "),a("p",[v._v("在多线程程序中，若线程数量大于逻辑核心，那么操作系统会根据调度算法来决定线程的切换运行。")])])}),[],!1,null,null,null);_.default=r.exports}}]);