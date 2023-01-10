(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{678:function(s,t,a){"use strict";a.r(t);var n=a(17),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("之前搞了一个 VuePress 的博客，也很长时间没怎么管了，其实偶尔还是会写一些东西的，但是都没有往上面放。其中有一个原因就是之前操作起来比较麻烦，要写完->提交->构建->更新，一套操作下拉非常费事。如果写完提交就不用管就会方便很多，如果只是想找个地方放一下，通过 GitHub 的 Actions 部署到 GitHub Pages 完全就够了。")]),s._v(" "),a("h2",{attrs:{id:"配置-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-pages"}},[s._v("#")]),s._v(" 配置 Pages")]),s._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github Pages"),a("OutboundLink")],1),s._v(" 是通过 GitHub 托管和发布的公共网页。")])]),s._v(" "),a("p",[s._v("目前有官方的"),a("a",{attrs:{href:"https://docs.github.com/cn/pages/quickstart",target:"_blank",rel:"noopener noreferrer"}},[s._v("中文文档"),a("OutboundLink")],1),s._v("，可以根据文档进行一些比较复杂的配置。")]),s._v(" "),a("p",[s._v("以下配置都是以 Github 用户名为 "),a("code",[s._v("qccblog")]),s._v("，存储库名称为 "),a("code",[s._v("qccblog.github.io")]),s._v(" 为例，实际使用根据对应的用户名和存储库名称进行调整。")]),s._v(" "),a("p",[s._v("打开存储库 "),a("a",{attrs:{href:"https://github.com/qccblog/qccblog.github.io",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/qccblog/qccblog.github.io"),a("OutboundLink")],1),s._v("，进入 Settings，选择 Pages，选择一个主题（后面随时可以改），选择主题之后会自动打开一个 index.md 文件，编辑完成提交后过一会，回到 Pages 设置页面就会看到一个提示说站点已经发布了。")]),s._v(" "),a("p",[a("strong",[s._v("注意")]),s._v("：正常情况下，假定仓库名称为 "),a("code",[s._v("demo")]),s._v("，那么配置 pages 后访问的地址就是 "),a("code",[s._v("username.github.io/demo")]),s._v("。如果希望地址是 "),a("code",[s._v("username.github.io")]),s._v("，那么就要以 "),a("code",[s._v("username.github.io")]),s._v(" 作为存储库名称。")]),s._v(" "),a("h2",{attrs:{id:"配置-actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-actions"}},[s._v("#")]),s._v(" 配置 Actions")]),s._v(" "),a("p",[s._v("首先需要在存储库下新建 "),a("code",[s._v(".github/workflows/")]),s._v(" 文件夹，接着在 "),a("code",[s._v("workflows")]),s._v(" 文件夹下新增 "),a("code",[s._v("xxx.yml")]),s._v(" 文件，这个文件名随意，但是必须是 "),a("code",[s._v("YAML")]),s._v(" 格式的文件（也可以直接在界面上通过 Actions 进行操作）。以 "),a("code",[s._v("deploy.yml")]),s._v(" 为例：")]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Build and Deploy\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("branches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" master\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build-and-deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("runs-on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("latest\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Checkout\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/checkout@v3\n\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Install and Build\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[s._v("\n          npm install\n          npm run build")]),s._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Deploy\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" JamesIves/github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("pages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("deploy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("action@4.1.3\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("BRANCH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" gh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("pages\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("FOLDER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" docs/.vuepress/dist\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("p",[s._v("上面这段配置就是告诉 Github Actions，当前 master 分支有 push 操作的时候执行 build-and-deploy 这个任务，这个任务就是在 ubuntu-latest 环境先把代码拉取下来；安装依赖再打包；生成的静态文件部署到 gh-pages 分支上。")]),s._v(" "),a("p",[s._v("上述的配置比较简单，如果最后作为 pages 的仓库和当前仓库是同一个使用上述配置就行了。")]),s._v(" "),a("p",[s._v("实际使用中可能会往存储库中存放一些相关的配置信息，比如 "),a("code",[s._v("vssueConfig")]),s._v(" 之类不希望对外暴露的信息，那么存储库就不能设置为 public，但是 pages 对个人而言只有在 public 的时候才是免费使用的，Github也不支持按分支设置是否 public，所以需要另外开一个仓库作为 pages 的存储库，这种情况下下就涉及到跨库保存，不少文章都是使用 Github 的 Token 进行操作（比如 VuePress 文档中的"),a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/deploy.html#github-pages",target:"_blank",rel:"noopener noreferrer"}},[s._v("部署"),a("OutboundLink")],1),s._v(" 部分），这边介绍一下怎么使用存储库的 Deploy keys 进行操作。")]),s._v(" "),a("p",[s._v("存储库为 "),a("code",[s._v("qccblog/blog")]),s._v("，pages 库为 "),a("code",[s._v("qccblog/qccblog.github.io")]),s._v(" 为例：")]),s._v(" "),a("ul",[a("li",[s._v("生成一对公私钥 "),a("code",[s._v('ssh-keygen -t ed25519 -C "备注"')])]),s._v(" "),a("li",[s._v("把生成的.pub 文件内容复制到 "),a("code",[s._v("qccblog/blog")]),s._v(" 的 Settings -> Deploy keys 中")]),s._v(" "),a("li",[s._v("把私钥文件内容添加到 "),a("code",[s._v("qccblog/qccblog.github.io")]),s._v(" 的 Settings -> Secrets -> Actions 中，指定名称为 "),a("code",[s._v("DEPLOY_TOKEN")]),s._v("。")]),s._v(" "),a("li",[s._v("配置 "),a("code",[s._v("qccblog/blog")]),s._v(" 的 Actions")])]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Deploy\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" JamesIves/github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("pages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("deploy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("action@4.1.3\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("BRANCH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" gh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("pages\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("FOLDER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" public\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("repository-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" qccblog/qccblog.github.io\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("force")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("commit-message")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Deploy\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ssh-key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" secrets.DEPLOY_TOKEN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("其他部分和上述一致，给 Deploy 部分新增一些配置，指定提交的仓库，然后配置 ssh-key 进行提交即可。更多的配置可以参考 "),a("a",{attrs:{href:"https://github.com/marketplace/actions/deploy-to-github-pages",target:"_blank",rel:"noopener noreferrer"}},[s._v("deploy-to-github-pages"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("p",[s._v("配置完成之后访问 "),a("a",{attrs:{href:"https://qccblog.github.io",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://qccblog.github.io"),a("OutboundLink")],1),s._v(" 就可以看到效果了。")])])}),[],!1,null,null,null);t.default=e.exports}}]);