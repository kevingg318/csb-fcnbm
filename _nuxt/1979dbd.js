(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{189:function(t,e,r){var content=r(194);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(74).default)("1b7833da",content,!0,{sourceMap:!1})},193:function(t,e,r){"use strict";r(189)},194:function(t,e,r){var n=r(73)(!1);n.push([t.i,"h1{padding-top:20px}",""]),t.exports=n},208:function(t,e,r){"use strict";r.r(e);var n=r(3),c=(r(33),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,t.params,e.next=3,r("articles").only(["title","slug"]).sortBy("createdAt","asc").fetch();case 3:return n=e.sent,e.abrupt("return",{articles:n});case 5:case"end":return e.stop()}}),e)})))()}}),o=(r(193),r(32)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("h1",[t._v("Blog Posts")]),t._v(" "),r("NuxtLink",{attrs:{to:"/search"}},[t._v("Search page")]),t._v(" "),r("ul",t._l(t.articles,(function(article){return r("li",{key:article.slug},[r("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[r("div",[r("h2",[t._v(t._s(article.title))]),t._v(" "),r("p",[t._v(t._s(article.description))])])])],1)})),0)],1)])}),[],!1,null,null,null);e.default=component.exports}}]);