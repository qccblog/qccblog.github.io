(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{621:function(t,i,o){"use strict";o.r(i);var e=o(17),l=Object(e.a)({},(function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("p",[t._v("position属性规定元素的定位类型。以前在使用过程中感觉已经会用了，但是了解之后发现对其还是有不少误解的地方，现在进一步梳理一下对position的理解。")]),t._v(" "),o("ol",[o("li",[t._v("position的默认值是static，元素会出现在它该出现的地方，并且top, right, bottom, left 和 z-index 属性无效。")]),t._v(" "),o("li",[t._v("position的值为relative时，元素会相对它原本应该出现的位置根据top, right, bottom, left进行定位，元素还在文本流当中，还占据着原本位置的空间。")]),t._v(" "),o("li",[t._v("position的值为absolute时，元素会相对第一非static定位的父元素进行定位，会一级级的向上查找，直至找到非static定位元素或者body元素，然后进行定位，元素脱离了文本流，不占据空间。")]),t._v(" "),o("li",[t._v("position的值为fixed时，表现和绝对定位很相似（有种说法是fixed就是一种特殊的absolute），一般情况下是相对于浏览器窗口（视图）进行定位，常用于创建固定在屏幕某个位置的元素。")]),t._v(" "),o("li",[t._v("sticky是个实验性质的API，为了安全起见还是不用了吧。")]),t._v(" "),o("li",[t._v("在relative，absolute和fixed中，当top和bottom同时指定的情况下，top优先。")]),t._v(" "),o("li",[t._v("在relative中，当left和right同时指定的情况下，left优先。在absolute和fixed中，当left和right同时指定，若direction为ltr（英语、汉语等），则优先采用 left；若direction为rtl（阿拉伯语、希伯来语等），则优先采用right。")]),t._v(" "),o("li",[t._v("position的值为absolute时，如果元素的宽度固定，left和right的值为某个固定值(比如0)，且margin的值为auto的话，该元素就会居中，同理可以实现垂直居中。其原理是在css中定义了元素总的宽度=’left’ + ‘margin-left’ + ‘border-left-width’ + ‘padding-left’ + ‘width’ + ‘padding-right’ + ‘border-right-width’ + ‘margin-right’ + ‘right’。在其他几个值固定之后，浏览器将根据margin的auto自动计算这样左右的margin就会是一样的，从而实现居中。")])]),t._v(" "),o("p",[t._v("慢慢发现更多的事。。。")])])}),[],!1,null,null,null);i.default=l.exports}}]);