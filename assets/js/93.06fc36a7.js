(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{676:function(t,s,n){"use strict";n.r(s);var a=n(17),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("blockquote",[n("p",[n("a",{attrs:{href:"https://www.jetbrains.com/lp/mono/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JetBrains Mono"),n("OutboundLink")],1),t._v(" 是为开发者设计的一款"),n("strong",[t._v("开源")]),t._v("字体，通过对字体进行一些特殊的设计来提升开发者的使用感受。")])]),t._v(" "),n("p",[t._v("最近在折腾家里的电脑，发现 VSCode 看起来没公司的台式舒适，又不准备同步账号，所以决定把主题字体什么的再配置一遍。之前一直给 VSCode 配置使用了 JetBrains Mono，现在都给忘了，还是系统字体库才根据隐约记得的内容找到是 JetBrains Mono，所以就简单记录一下。")]),t._v(" "),n("h2",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),n("p",[t._v("JetBrains 的 IDEs 自 v2019.3 版本之后就自带了该字体，可以在 IDE 的设置中修改：Preferences/Settings → Editor → Font，然后从字体列表中选择 JetBrains Mono 即可。")]),t._v(" "),n("h3",{attrs:{id:"手动安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#手动安装"}},[t._v("#")]),t._v(" 手动安装")]),t._v(" "),n("p",[t._v("在其他地方比如 VSCode 中要使用就需要手动进行安装，简单描述 Windows 下的安装，其他操作系统可以参考"),n("a",{attrs:{href:"https://www.jetbrains.com/lp/mono/#how-to-install",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方安装说明"),n("OutboundLink")],1),t._v("。")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://s2.loli.net/2022/04/27/WSzsxwNjdEVohlJ.png",alt:"JetBrains Mono 安装说明.png"}})]),t._v(" "),n("ul",[n("li",[t._v("访问 "),n("a",{attrs:{href:"https://www.jetbrains.com/lp/mono/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方网站"),n("OutboundLink")],1),t._v("，点击 "),n("code",[t._v("Download font")]),t._v(" 下载完成后解压到任意目录都可")]),t._v(" "),n("li",[t._v("进入解压后文件夹，点击进入到 "),n("code",[t._v("fonts/ttf")]),t._v(" 文件夹，全选，鼠标右键，选择安装或者为所有用户安装"),n("img",{attrs:{src:"https://s2.loli.net/2022/04/27/AKbZuhoNY16aHdm.png",alt:"全选字体-右键安装.png"}})]),t._v(" "),n("li",[t._v("重启 VSCode 或其他编辑器")])]),t._v(" "),n("h2",{attrs:{id:"配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),n("p",[t._v("VSCode 要使用 JetBrains Mono 字体还需要进行一些配置，打开 VSCode 的设置界面或者打开 settings.json 文件修改配置")]),t._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// settings.json")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"editor.fontFamily"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"'JetBrains Mono', Consolas, 'Courier New', monospace\"")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 主要是加上'JetBrains Mono'")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"editor.fontLigatures"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否启用字体连字")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"editor.fontSize"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置字体大小")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"editor.fontWeight"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"400"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置字体粗细")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br")])]),n("p",[t._v("配置完成后就可以看到效果了。")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://s2.loli.net/2022/04/27/CRF4NQfAjLKkbqg.png",alt:"字体使用效果图.png"}})]),t._v(" "),n("h3",{attrs:{id:"连字效果"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#连字效果"}},[t._v("#")]),t._v(" 连字效果")]),t._v(" "),n("p",[t._v("开启连字效果\n"),n("img",{attrs:{src:"https://s2.loli.net/2022/04/27/HUPWtEVoZJ46jca.png",alt:"开启连字效果.png"}})]),t._v(" "),n("p",[t._v("关闭连字效果\n"),n("img",{attrs:{src:"https://s2.loli.net/2022/04/27/w1Xd7rWo5YF3Kjl.png",alt:"关闭连字效果.png"}})]),t._v(" "),n("p",[t._v("参考上述效果，如果不喜欢连字的效果，可以在配置中的 "),n("code",[t._v("editor.fontLigatures")]),t._v(" 设置为 false 即可。")])])}),[],!1,null,null,null);s.default=e.exports}}]);