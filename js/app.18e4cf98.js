(function(t){function e(e){for(var o,r,a=e[0],l=e[1],u=e[2],d=0,f=[];d<a.length;d++)r=a[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);c&&c(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,a=1;a<n.length;a++){var l=n[a];0!==s[l]&&(o=!1)}o&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},s={app:0},i=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var c=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("f9e3"),n("f507");var o=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container my-4"},[n("h1",[t._v("TODOs")]),n("todo-list")],1)])},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todo-list mt-5"},[n("ul",{staticClass:"list-group"},t._l(t.todoList,(function(e,o){return n("li",{key:"todo"+o,staticClass:"list-group-item d-flex"},[n("span",{class:{done:e.done}},[t._v(t._s(o+1)+". "+t._s(e.name))]),n("button",{staticClass:"btn btn-outline-success btn-small ml-auto",on:{click:function(e){return t.checkDone(o)}}},[0==e.done?n("span",[t._v("DONE")]):t._e(),e.done?n("span",[t._v("UNDONE")]):t._e()]),n("button",{staticClass:"btn btn-outline-danger btn-small ml-2",on:{click:function(e){return t.deleteTodo(o)}}},[t._v("DELETE")])])})),0),n("ul",{staticClass:"list-group"},[n("li",{staticClass:"list-group-item d-flex"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodoName,expression:"newTodoName"}],staticClass:"form-control mr-2",attrs:{type:"text"},domProps:{value:t.newTodoName},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo()},input:function(e){e.target.composing||(t.newTodoName=e.target.value)}}}),n("button",{staticClass:"btn btn-success",on:{click:function(e){return t.addTodo()}}},[t._v("ADD")])])])])},a=[],l=(n("a434"),{data:function(){return{todoList:[],newTodoName:""}},created:function(){this.init()},methods:{addTodo:function(){this.newTodoName&&(this.todoList.push({name:this.newTodoName,done:!1}),this.newTodoName="",this.save())},checkDone:function(t){this.todoList[t].done=!this.todoList[t].done,this.save()},deleteTodo:function(t){this.todoList.splice(t,1),this.save()},init:function(){localStorage.getItem("todoList")?this.todoList=JSON.parse(localStorage.getItem("todoList")):localStorage.setItem("todoList",JSON.stringify(this.todoList))},save:function(){localStorage.setItem("todoList",JSON.stringify(this.todoList))}}}),u=l,c=(n("6650"),n("2877")),d=Object(c["a"])(u,r,a,!1,null,"f2627db8",null),f=d.exports,p={name:"App",components:{TodoList:f}},m=p,v=Object(c["a"])(m,s,i,!1,null,null,null),h=v.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(h)}}).$mount("#app")},6650:function(t,e,n){"use strict";var o=n("f396"),s=n.n(o);s.a},f396:function(t,e,n){}});
//# sourceMappingURL=app.18e4cf98.js.map