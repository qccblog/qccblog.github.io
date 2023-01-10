(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{642:function(r,e,t){"use strict";t.r(e);var o=t(17),a=Object(o.a)({},(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h2",{attrs:{id:"electron是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#electron是什么"}},[r._v("#")]),r._v(" Electron是什么")]),r._v(" "),t("p",[t("a",{attrs:{href:"https://electronjs.org/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Electron"),t("OutboundLink")],1),r._v("是由Github开发，用HTML，CSS和JavaScript来构建跨平台桌面应用程序的一个开源库。 Electron通过将"),t("a",{attrs:{href:"https://www.chromium.org/Home",target:"_blank",rel:"noopener noreferrer"}},[r._v("Chromium"),t("OutboundLink")],1),r._v("和"),t("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Node.js"),t("OutboundLink")],1),r._v("合并到同一个运行时环境中，并将其打包为Mac，Windows和Linux系统下的应用来实现这一目的。")]),r._v(" "),t("h2",{attrs:{id:"有什么用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#有什么用"}},[r._v("#")]),r._v(" 有什么用")]),r._v(" "),t("p",[r._v("Electron可以让你用Javascript、HTML、CSS来编写运行于Windows、macOS、Linux系统之上的桌面应用的库。Chromium让我们在编写页面的时候可以放心的使用各种新特性，Nodejs所有的API在Electron中都可以用，所以操作文件、获取系统信息等底层操作毫无压力。")]),r._v(" "),t("p",[r._v("Electron于2013年作为构建Github上可编程的文本编辑器"),t("a",{attrs:{href:"https://atom.io/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Atom"),t("OutboundLink")],1),r._v("的框架而被开发出来。现在人气很高的vs code也是基于这个做的。在使用vs code的过程中完全感受不到和原生的桌面应用程序有什么区别，各种功能和性能比起其他编辑器也毫不逊色，由此可见Electron构建桌面应用很强大。在"),t("a",{attrs:{href:"https://electronjs.org/apps",target:"_blank",rel:"noopener noreferrer"}},[r._v("官网"),t("OutboundLink")],1),r._v("列出了很多基于Electron的应用。")]),r._v(" "),t("p",[r._v("Electron的组成决定了它适合一些偏业务的应用，对性能没有很多要求，主要是业务逻辑和UI展示，比较轻量级的应用。还有一点就是打出来的包相对比较大。")]),r._v(" "),t("h2",{attrs:{id:"怎么用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#怎么用"}},[r._v("#")]),r._v(" 怎么用")]),r._v(" "),t("p",[r._v("Electron最主要的就是主进程和渲染进程。主进程连接着操作系统和渲染进程，可以把她看做页面和计算机沟通的桥梁。渲染进程就是我们所熟悉前端环境了。")]),r._v(" "),t("p",[r._v("Electron运行"),t("code",[r._v("package.json")]),r._v("的main脚本的进程被称为"),t("strong",[r._v("主进程")]),r._v("。 在主进程中运行的脚本通过创建web页面来展示用户界面。 一个Electron应用总是有且只有一个主进程。")]),r._v(" "),t("p",[r._v("主进程使用BrowserWindow实例创建页面。 每个BrowserWindow实例都在自己的渲染进程里运行页面。 当一个BrowserWindow实例被销毁后，相应的渲染进程也会被终止。我们可以创建多个BrowserWindow实例，主进程管理所有的web页面和它们对应的渲染进程。 每个渲染进程都是独立的，它只关心它所运行的web页面。")]),r._v(" "),t("p",[r._v("一般情况下，我们在主进程中管理渲染进程以及调用与GUI相关的原生API，渲染进程就相当于是一个拥有node环境的web页面，可以调用nodejs的API。具体有哪些接口可以看看"),t("a",{attrs:{href:"https://electronjs.org/docs",target:"_blank",rel:"noopener noreferrer"}},[r._v("API文档"),t("OutboundLink")],1),r._v("或者"),t("a",{attrs:{href:"https://github.com/fuchao2012/zh-cn-Electron-API-Demos",target:"_blank",rel:"noopener noreferrer"}},[r._v("中文API的Demo"),t("OutboundLink")],1),r._v("，非常详细的介绍了相关的API以及开发测试常用的工具，实际的使用基本上是和正常开发web页面差不多。")]),r._v(" "),t("p",[r._v("所有Electron的API都被指派给一种进程类型。 许多API只能被用于主进程中，有些API又只能被用于渲染进程，又有一些主进程和渲染进程中都可以使用。因为进程之间的通信是被允许的, 所以渲染进程可以调用主进程来执行任务。 Electron通过remote模块暴露一些通常只能在主进程中获取到的API，还可以通过ipcMain和ipcRenderer实现主进程和渲染进程之间通信。")]),r._v(" "),t("h2",{attrs:{id:"应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用"}},[r._v("#")]),r._v(" 应用")]),r._v(" "),t("h3",{attrs:{id:"loadurl包装web页面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#loadurl包装web页面"}},[r._v("#")]),r._v(" loadUrl包装web页面")]),r._v(" "),t("p",[r._v("最简单的应用方式就是使用一个web页面，然后打包成一个应用程序。应用程序都是使用Chromium浏览器，完全不需要考虑不同浏览器之间的兼容问题，还能无压力使用各种新特性。几行代码就能伪造一个百度的客户端。")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[r._v("mainWindow = new BrowserWindow({width: 800, height: 600})\nmainWindow.loadUrl('https://www.baidu.com/');\n")])])]),t("h3",{attrs:{id:"使用w3c的新特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用w3c的新特性"}},[r._v("#")]),r._v(" 使用w3c的新特性")]),r._v(" "),t("p",[r._v("html5中新增许多特性，但是在平时的web开发中，我们使用起来却不怎么方便，比如使用geolocation来获取位置或者getUserMedia来使用多媒体功能的时候，不是要考虑浏览器的兼容就是要考虑授权的时候用户不授权咋整。在Electron中基本上是不需要考虑这些，默认情况下，Electron将自动批准所有的许可请求，我们需要考虑的就是怎么把这些新特性用好，以及做好安全工作，防止引入的资源造成安全问题。")]),r._v(" "),t("h3",{attrs:{id:"使用nodejs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用nodejs"}},[r._v("#")]),r._v(" 使用nodejs")]),r._v(" "),t("p",[r._v("nodejs把js带入了一个新时代，在Electron中可以使用全部的nodejs的API，所以操作文件或者是和操作系统交互都很简单，npm上的库也是基本上都能直接使用。我们可以在页面上直接打开某个文件、编辑然后保存，差不多就是一个记事本的雏形了；可以把对文件进行预处理，比如文件压缩后再上传；可以监听文件系统的改变，然后做处对应的响应，比如监控日志文件的大小，超过一定大小选择直接发个原生通知或者是发个html5的notification。nodejs丰富的API和npm库带来了无限的可能。")]),r._v(" "),t("h3",{attrs:{id:"悬浮窗口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#悬浮窗口"}},[r._v("#")]),r._v(" 悬浮窗口")]),r._v(" "),t("p",[r._v("我们使用迅雷或者百度网盘等工具的时候，发现有个悬浮的窗口能够实时的显示一些状态，就是应用程序最小化也显示在最上层。我们可以通过Electron实现类似的功能。")]),r._v(" "),t("h3",{attrs:{id:"截图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#截图"}},[r._v("#")]),r._v(" 截图")]),r._v(" "),t("p",[r._v("用惯了微信的截图，偶尔发现没登录微信截个图还真不方便。用Electron就能手撸一个截图工具，定义一个全局快捷键想用就用，还能加上你自己想要的个性化。")]),r._v(" "),t("p",[r._v("Electron对系统托盘、touchBar、调用dll等各种功能都是相当不错，不过有一个地方需要注意的就是，在不同平台下，表现形式会略微有所区别，还有很多API只对特定的平台生效，在使用的过程中需要根据情况进行调整。")])])}),[],!1,null,null,null);e.default=a.exports}}]);