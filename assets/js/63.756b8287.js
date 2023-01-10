(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{646:function(s,a,t){"use strict";t.r(a);var e=t(17),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"为什么要配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么要配置"}},[s._v("#")]),s._v(" 为什么要配置")]),s._v(" "),t("ol",[t("li",[s._v("加快下载速度。直接访问npmjs很慢，使用taobao镜像会快很多，不过如果是本地的局域网那么自然会更快")]),s._v(" "),t("li",[s._v("一些私有包的部署。我们可能会有一些公共的组件库团队之间需要使用，但是又不方便放到公网环境，这时候一个本地的npm库就很有用。")])]),s._v(" "),t("h2",{attrs:{id:"怎么配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#怎么配置"}},[s._v("#")]),s._v(" 怎么配置")]),s._v(" "),t("p",[s._v("直接搜索的话不少是推荐"),t("a",{attrs:{href:"https://github.com/rlidwka/sinopia",target:"_blank",rel:"noopener noreferrer"}},[s._v("sinopia"),t("OutboundLink")],1),s._v("，不过这个库已经不维护了，在它的"),t("a",{attrs:{href:"https://hub.docker.com/r/keyvanfatehi/sinopia/",target:"_blank",rel:"noopener noreferrer"}},[s._v("docker"),t("OutboundLink")],1),s._v("页面上推荐了"),t("a",{attrs:{href:"https://github.com/verdaccio/verdaccio",target:"_blank",rel:"noopener noreferrer"}},[s._v("verdaccio/verdaccio"),t("OutboundLink")],1),s._v("，后面搜索发现，原因基本上就是由于sinopia不维护了，如果要用的话需要自己改源码有不少坑点。verdaccio在使用上体验也还是很不错的。如果需要更加深入的定制，"),t("a",{attrs:{href:"https://github.com/cnpm/cnpmjs.org",target:"_blank",rel:"noopener noreferrer"}},[s._v("cnpmjs.org"),t("OutboundLink")],1),s._v("也许会比较适合你。")]),s._v(" "),t("h3",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g verdaccio\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[s._v("#")]),s._v(" 运行")]),s._v(" "),t("p",[s._v("直接使用"),t("code",[s._v("verdaccio")]),s._v("就可以运行了，启动成功之后，会显示相关的配置信息")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("warn --- config "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("  - /home/me/.config/verdaccio/config.yaml\nwarn --- Plugin successfully loaded: htpasswd\nwarn --- Plugin successfully loaded: audit\nwarn --- http address - http://localhost:4873/ - verdaccio/3.8.6\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("如果是长期要使用，最好使用pm2来管理"),t("code",[s._v("pm2 start verdaccio")]),s._v("就可以了。注意官方提示了不要使用PM2's cluster mode。")]),s._v(" "),t("h3",{attrs:{id:"配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),t("p",[s._v("根据控制台的输出可以知道配置信息的位置，可以直接修改配置文件。我这边安装完成如果不先启动一次是没有对应的配置文件的，所以开始先启动了。 默认情况下，在本地没有包的时候会取npmjs上找可用的包，我们可以把这个替换成taobao的地址来加速。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("uplinks:\n  taobao:\n    url: https://registry.npm.taobao.org/\n  npmjs:\n    url: https://registry.npmjs.org/\n\npackages:\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@*/*'")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v("\n    access: "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$all")]),s._v("\n    publish: "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$authenticated")]),s._v("\n    proxy: taobao\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'**'")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v("\n    access: "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$all")]),s._v("\n    publish: "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$authenticated")]),s._v("\n    proxy: taobao\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[s._v("在uplinks里加上对应的地址，把packages厘米的proxy换成要使用的地址。")]),s._v(" "),t("p",[s._v("默认情况下，启动的web只能在localhost访问，如果想支持其他地方也能访问的话，需要在上述文件加上如下配置：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("listen:\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:4873\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("需要知道更多可以自定义的配置，可以参考"),t("a",{attrs:{href:"https://github.com/verdaccio/verdaccio/blob/master/conf/full.yaml",target:"_blank",rel:"noopener noreferrer"}},[s._v("verdaccio的全部配置"),t("OutboundLink")],1)]),s._v(" "),t("h3",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),t("p",[s._v("设置npm的源"),t("code",[s._v("npm set registry http://localhost:4873/")]),s._v("，推荐使用nrm作为npm源管理工具。 设置之后，我们就可以直接使用了，缓存的包默认是在"),t("code",[s._v("～/.local/share/verdaccio/storage")]),s._v("下面，可以在配置文件里面更改。")]),s._v(" "),t("h3",{attrs:{id:"发布私有包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发布私有包"}},[s._v("#")]),s._v(" 发布私有包")]),s._v(" "),t("p",[s._v("首先添加一个用户"),t("code",[s._v("npm adduser --registry http://localhost:4873")]),s._v("，输入用户名密码和邮箱。")]),s._v(" "),t("p",[s._v("然后根据npm发布包的规范就可以发布一个包了。 "),t("code",[s._v("npm publish --registry http://localhost:4873")])]),s._v(" "),t("h2",{attrs:{id:"docker尝试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker尝试"}},[s._v("#")]),s._v(" docker尝试")]),s._v(" "),t("p",[s._v("只是想试试的小伙伴，可以在docker上是一下")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull verdaccio/verdaccio\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -it --rm --name verdaccio -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4873")]),s._v(":4873 verdaccio/verdaccio\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);