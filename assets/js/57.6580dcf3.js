(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{640:function(e,s,t){"use strict";t.r(s);var r=t(17),n=Object(r.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("今天安装了一个新的Ubuntu18的server，发现安装一个nodejs直接用apt居然没找到，以前都是有的，估计是安装源有问题，准备调整一下顺便换成国内的阿里云的软件源。安装软件的源是在"),t("code",[e._v("/etc/apt/sources.list")]),e._v("文件里面，我们要做的就是修改这个文件。")]),e._v(" "),t("h2",{attrs:{id:"备份"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#备份"}},[e._v("#")]),e._v(" 备份")]),e._v(" "),t("p",[e._v("这种改动前都先备份一下，没装好还能改回来。。。")]),e._v(" "),t("p",[t("code",[e._v("sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak")])]),e._v(" "),t("h2",{attrs:{id:"修改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改"}},[e._v("#")]),e._v(" 修改")]),e._v(" "),t("p",[e._v("打开sources.list文件，在后面加上定义的源")]),e._v(" "),t("p",[t("code",[e._v("sudo vi /etc/apt/sources.list")])]),e._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("deb http://mirrors.aliyun.com/ubuntu/ xenial main restricted universe multiverse\ndeb http://mirrors.aliyun.com/ubuntu/ xenial-security main restricted universe multiverse\ndeb http://mirrors.aliyun.com/ubuntu/ xenial-updates main restricted universe multiverse\ndeb http://mirrors.aliyun.com/ubuntu/ xenial-proposed main restricted universe multiverse\ndeb http://mirrors.aliyun.com/ubuntu/ xenial-backports main restricted universe multiverse\n\ndeb-src http://mirrors.aliyun.com/ubuntu/ xenial main restricted universe multiverse\ndeb-src http://mirrors.aliyun.com/ubuntu/ xenial-security main restricted universe multiverse\ndeb-src http://mirrors.aliyun.com/ubuntu/ xenial-updates main restricted universe multiverse\ndeb-src http://mirrors.aliyun.com/ubuntu/ xenial-proposed main restricted universe multiverse\ndeb-src http://mirrors.aliyun.com/ubuntu/ xenial-backports main restricted universe multiverse\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br")])]),t("h2",{attrs:{id:"更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新"}},[e._v("#")]),e._v(" 更新")]),e._v(" "),t("p",[e._v("使用"),t("code",[e._v("sudo apt-get update")]),e._v("更新一下")])])}),[],!1,null,null,null);s.default=n.exports}}]);