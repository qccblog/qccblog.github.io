(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{599:function(e,v,p){"use strict";p.r(v);var _=p(17),n=Object(_.a)({},(function(){var e=this,v=e.$createElement,p=e._self._c||v;return p("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[p("p",[e._v("在开发web网站的时候使用了ci框架，感觉各方面都挺不错的，唯一能看到的比较烦的应该就是URI中的index.php这一段了。一般情况下，一个 URI 字符串和它对应的控制器中类和方法是一一对应的关系。 URI 中的每一段通常遵循下面的规则: example.com/class/function/id/。在这个规则下，URI基本默认情况下就是example.com/index.php/blog/这种形式的。")]),e._v(" "),p("p",[e._v("如果是使用Apache，我们可以通过rewrite规则来去掉URI中index.php部分。")]),e._v(" "),p("p",[e._v("1.修改.htaccess文件")]),e._v(" "),p("p",[e._v("打开网站根目录的.htaccess文件写入如下内容：")]),e._v(" "),p("p",[e._v("RewriteEngine on"),p("br"),e._v("\nRewriteCond $1 !^(index\\.php|希望被直接访问的文件或者文件夹名|robots\\.txt)"),p("br"),e._v("\nRewriteRule ^(.*)$ /index.php/$1 [L]")]),e._v(" "),p("p",[e._v("如果我们希望网站的css，js，图片之类的文件可以被直接访问就需要将相关的文件夹或者文件加入RewriteCond中。")]),e._v(" "),p("p",[e._v("如果网站不是在服务配置的域名根目录（一般为www目录），那么RewriteRule ^(."),p("em",[e._v(")$ /index.php/$1 [L]就需要修改为RewriteRule ^(.")]),e._v(")$ /路径 /index.php/$1 [L]")]),e._v(" "),p("p",[e._v("2.配置Apache2")]),e._v(" "),p("p",[e._v("①开启rewrite功能")]),e._v(" "),p("p",[e._v("方法一：")]),e._v(" "),p("p",[e._v("进入/var/apache2/mods-enabled/然后使用 sudo cp -s ../mods-available/rewrite.load ./命令把相关模块软连接过来")]),e._v(" "),p("p",[e._v("方法二：")]),e._v(" "),p("p",[e._v("sudo a2enmod")]),e._v(" "),p("p",[e._v("程序提示可供激活的模块名称，输入：")]),e._v(" "),p("p",[e._v("rewrite")]),e._v(" "),p("p",[e._v("②开启 .htaccess")]),e._v(" "),p("p",[e._v("sudo vi /etc/apache2/apache2.conf")]),e._v(" "),p("p",[e._v("将")]),e._v(" "),e._v(" /var/www/>  \n"),p("p",[e._v("Options Indexes FollowSymLinks"),p("br"),e._v("\n        AllowOverride None"),p("br"),e._v("\n        Require all granted"),p("br"),e._v(" "),p("br"),e._v("\n中的AllowOverride None的改为AllowOverride All")]),e._v(" "),p("p",[e._v("重启Apache服务器，这时候就可以去掉URI中的index.php访问我们的页面了")])])}),[],!1,null,null,null);v.default=n.exports}}]);