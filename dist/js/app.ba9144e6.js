(function(t){function e(e){for(var a,c,l=e[0],o=e[1],s=e[2],u=0,h=[];u<l.length;u++)c=l[u],i[c]&&h.push(i[c][0]),i[c]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);p&&p(e);while(h.length)h.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,c=1;c<n.length;c++){var o=n[c];0!==i[o]&&(a=!1)}a&&(r.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},i={app:0},r=[];function c(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-2d0b24bb":"d4a3c3d5","chunk-2d0b59c7":"bdfb1a91","chunk-2d0ccbe9":"26e46500","chunk-2d213ef7":"42c5fe7b","chunk-2d21801c":"d1670196","chunk-2d21aea0":"0c7f9817"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise(function(e,a){n=i[t]=[e,a]});e.push(n[2]=a);var r,o=document.createElement("script");o.charset="utf-8",o.timeout=120,l.nc&&o.setAttribute("nonce",l.nc),o.src=c(t),r=function(e){o.onerror=o.onload=null,clearTimeout(s);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,c=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");c.type=a,c.request=r,n[1](c)}i[t]=void 0}};var s=setTimeout(function(){r({type:"timeout",target:o})},12e4);o.onerror=o.onload=r,document.head.appendChild(o)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var p=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0da6":function(t,e,n){},"1be0":function(t,e,n){},"37da":function(t,e,n){"use strict";var a=n("0da6"),i=n.n(a);i.a},4915:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("dac5"),n("6e26"),n("9604"),n("df67");var a=n("6e6d"),i=n("7f4e"),r=n.n(i),c=n("e20c"),l=(n("7364"),n("f763"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-popover",{attrs:{placement:"bottom-start",width:t.width,trigger:"click"},on:{hide:t.popHide},model:{value:t.popShow,callback:function(e){t.popShow=e},expression:"popShow"}},[n("el-button",{attrs:{slot:"reference",plain:""},slot:"reference"},[t._v(t._s(t.title))]),n("el-checkbox-group",{staticClass:"tr-check",model:{value:t.checkedVal,callback:function(e){t.checkedVal=e},expression:"checkedVal"}},[t.dataModel?n("div",t._l(t.displayData,function(e,a){return n("div",{key:a,staticClass:"tr-group-check"},[e.title&&e.title.length>0?n("div",{staticClass:"tr-group-check-title"},[t._v(t._s(e.title))]):t._e(),t._l(e.propsData,function(e){return n("el-checkbox",{key:e.key,staticClass:"tr-group-check-item",style:{width:t.columnWidth},attrs:{disabled:e.disabled,label:e.key}},[t._v(t._s(e.label))])})],2)}),0):t._e(),t.dataModel?t._e():n("div",t._l(t.displayData,function(e){return n("el-checkbox",{key:e.key,staticClass:"tr-group-check-item",style:{width:t.columnWidth},attrs:{disabled:e.disabled,label:e.key}},[t._v(t._s(e.label))])}),1)]),n("div",{staticClass:"tr-check-pop-bottom"},[n("el-button",{attrs:{size:"mini"},on:{click:function(e){t.popShow=!1}}},[t._v("取消")]),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.confirm}},[t._v("确定")])],1)],1)}),o=[],s=(n("d4d5"),{name:"trCheckPop",props:{title:{type:String,default:"自定义"},data:{type:Array,default:function(){return[]}},width:{type:Number,default:500},column:{type:Number,default:4,validator:function(t){return t>0}},saveKey:{type:String,default:""}},data:function(){return{popShow:!1,checkedVal:[]}},computed:{columnWidth:function(){return this.width/this.column+"px"},displayData:function(){return JSON.parse(JSON.stringify(this.data))},dataModel:function(){return this.data&&this.data.length>0&&this.data[0].hasOwnProperty("propsData")}},methods:{popHide:function(t){this.popShow=!1,t||this.initCheckedVal()},confirm:function(){var t=this;this.dataModel?this.displayData.forEach(function(e){e.propsData.forEach(function(e){e.checked=t.checkedVal.indexOf(e.key)>=0})}):this.displayData.forEach(function(e){e.checked=t.checkedVal.indexOf(e.key)>=0}),this.$emit("on-confirm",this.displayData),this.popHide(!0),this.saveKey&&this.saveKey.length>0&&localStorage.setItem(this.saveKey,JSON.stringify(this.displayData))},initCheckedVal:function(){var t=this;this.checkedVal=[],this.dataModel?this.displayData.forEach(function(e){e.propsData.forEach(function(e){e.checked&&t.checkedVal.push(e.key)})}):this.displayData.forEach(function(e){e.checked&&t.checkedVal.push(e.key)})}},watch:{data:function(t,e){this.initCheckedVal()}}}),u=s,p=(n("72b3"),n("17cc")),h=Object(p["a"])(u,l,o,!1,null,"c10d8450",null),d=h.exports;d.install=function(t){t.component(d.name,d)};var f=d,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tr-pagination-body"},[n("div",{staticStyle:{flex:"1"}},[t._v("共"+t._s(t.total)+"条，当前为第"+t._s(t.current)+"页")]),n("el-pagination",{attrs:{"current-page":t.current,"page-size":t.pageSize,layout:"prev, pager, next",total:t.total},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.current=e},"update:current-page":function(e){t.current=e}}}),n("div",{staticClass:"tr-pagination-search"},[n("el-input",{nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleSearch()}},model:{value:t.pageInput,callback:function(e){t.pageInput=e},expression:"pageInput"}},[n("button",{attrs:{slot:"append"},on:{click:function(e){return t.handleSearch()}},slot:"append"},[t._v("GO")])])],1)],1)},v=[],b=(n("7c56"),{name:"trPagination",props:{pageSize:{type:Number,default:10},total:{type:Number,default:0},currentPage:{type:Number,default:1}},data:function(){return{pageInput:"",current:1}},mounted:function(){this.current=this.currentPage},methods:{handleCurrentChange:function(t){this.current=t,this.$emit("on-change",this.current)},handleSearch:function(){!new RegExp(/^[0-9]*$/).test(this.pageInput)||0===parseInt(this.pageInput)||parseInt(this.pageInput)>Math.ceil(this.total/this.pageSize)?this.pageInput=this.current:(this.current=parseInt(this.pageInput),this.$emit("on-change",this.current))}},watch:{currentPage:{handler:function(t,e){this.current=t}}}}),y=b,g=(n("7d5d"),Object(p["a"])(y,m,v,!1,null,"9bf1725a",null)),k=g.exports;k.install=function(t){t.component(k.name,k)};var O=k,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-select",{attrs:{placeholder:t.placeholder,clearable:t.clearable,multiple:t.multiple,"collapse-tags":t.multiple,loading:t.loading},on:{"remove-tag":t.removeTagAction,clear:t.clearTagAction,change:t.selectChanged},model:{value:t.selectVal,callback:function(e){t.selectVal=e},expression:"selectVal"}},[t.searchable?n("el-input",{staticClass:"tr-select-search-input",attrs:{clearable:"",placeholder:t.searchPlaceholder,"prefix-icon":"el-icon-search"},model:{value:t.searchInput,callback:function(e){t.searchInput=e},expression:"searchInput"}}):t._e(),t._l(t.displayData,function(e){return n("el-option",{directives:[{name:"show",rawName:"v-show",value:!e.hiddened,expression:"!item.hiddened"}],key:e[t.keyAttri],ref:"selectOption",refInFor:!0,staticClass:"tr-select-option",attrs:{label:e[t.labelAttri],value:e[t.valueAttri],disabled:e[t.disabledAttri]}},[t.multiple?n("div",{staticClass:"option-item"},[n("el-checkbox",{staticClass:"option-item-checkbox",attrs:{disabled:e[t.disabledAttri]},on:{change:function(n){return t.checkedOption(e)}},model:{value:e.checked,callback:function(n){t.$set(e,"checked",n)},expression:"item.checked"}},[t._v("\n                    "+t._s(e[t.labelAttri])+"\n                ")])],1):t._e()])}),t.createOptionable?n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.showCreateOptionInput,expression:"!showCreateOptionInput"}],staticClass:"tr-select-create",on:{mouseenter:t.mouseoverCreateOptionAction,click:t.createOptionInputShowed}},[n("i",{staticClass:"el-icon-plus"}),n("span",[t._v("创建新选项")])]),n("el-input",{directives:[{name:"show",rawName:"v-show",value:t.showCreateOptionInput,expression:"showCreateOptionInput"}],ref:"createOptionInputRef",staticClass:"tr-select-create-input",attrs:{placeholder:"请输入创建选项",disabled:t.loadingCreateOption},on:{blur:t.cancelCreateOption,change:t.commitCreateOption},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.commitCreateOption(e)}},model:{value:t.createOptionInput,callback:function(e){t.createOptionInput=e},expression:"createOptionInput"}},[n("i",{directives:[{name:"show",rawName:"v-show",value:t.loadingCreateOption,expression:"loadingCreateOption"}],staticClass:"el-icon-loading tr-create-option-input-suffix",attrs:{slot:"suffix"},slot:"suffix"})])],1):t._e()],2)],1)},w=[],I={name:"trSelect",props:{value:{type:[String,Number,Array],default:""},placeholder:{type:String,default:"请选择"},clearable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},optionData:{type:Array,default:function(){return[]}},keyAttri:{type:String,default:"value"},labelAttri:{type:String,default:"label"},valueAttri:{type:String,default:"value"},disabledAttri:{type:String,default:"disabled"},searchable:{type:Boolean,default:!1},searchPlaceholder:{type:String,default:"请输入搜索内容"},createOptionable:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},data:function(){return{selectVal:this.value,searchInput:"",cancelHoverClass:!1,createOptionInput:"",showCreateOptionInput:!1,loadingCreateOption:!1}},computed:{displayData:function(){var t=this;this.loadingCreateOption=!1,this.showCreateOptionInput=!1;var e=JSON.parse(JSON.stringify(this.optionData));if(this.multiple){var n=e.filter(function(e){return t.value.indexOf(e[t.valueAttri])>=0});n.forEach(function(t){t.checked=!0})}return e}},methods:{selectChanged:function(){this.multiple||(this.$emit("on-change",this.selectVal),this.$emit("input",this.selectVal))},checkedOption:function(t){var e=this,n=this.displayData.filter(function(t){return!0===t.checked});this.selectVal=n.map(function(t){return t[e.valueAttri]}),this.$emit("on-change",this.selectVal),this.$emit("input",this.selectVal)},removeTagAction:function(t){var e=this,n=this.displayData.filter(function(n){return n[e.valueAttri]===t})[0];n.checked=!1,this.$emit("on-remove-tag",n),this.checkedOption(n)},clearTagAction:function(){this.$emit("on-clear"),this.multiple&&(this.displayData.forEach(function(t){t.checked=!1}),this.selectVal=[],this.$emit("on-change",this.selectVal),this.$emit("input",this.selectVal))},mouseoverCreateOptionAction:function(){for(var t=document.getElementsByClassName("tr-select-option"),e=0;e<t.length;e++)t[e].classList.remove("hover")},createOptionInputShowed:function(){var t=this;this.showCreateOptionInput=!0,setTimeout(function(){t.$refs.createOptionInputRef.focus()})},commitCreateOption:function(){this.createOptionInput&&this.createOptionInput.trim().length>0&&(this.loadingCreateOption=!0,this.$emit("on-create-option",this.createOptionInput))},cancelCreateOption:function(){this.createOptionInput&&0!==this.createOptionInput.trim().length||(this.loadingCreateOption=!1,this.showCreateOptionInput=!1)}},watch:{searchInput:function(t,e){var n=this;this.displayData.forEach(function(e){e.hiddened=e[n.labelAttri].indexOf(t)<0})},value:function(t){this.selectVal=t}}},x=I,_=(n("67b6"),n("86e9"),Object(p["a"])(x,C,w,!1,null,"928e9618",null)),S=_.exports;S.install=function(t){t.component(S.name,S)};var A=S,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pub-search"},[n("el-input",{staticClass:"search-input",attrs:{size:"small",placeholder:t.placeholder,clearable:""},on:{blur:t.blurAction,clear:t.clearAction},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.enterAction(e)}},model:{value:t.searchInput,callback:function(e){t.searchInput=e},expression:"searchInput"}}),n("el-button",{staticClass:"search-button",attrs:{icon:"el-icon-search"},on:{click:t.enterAction}})],1)},$=[],V={name:"trInput",props:{value:{type:String,default:""},placeholder:{type:String,default:"请输入..."}},data:function(){return{searchInput:this.value}},methods:{blurAction:function(){this.$emit("blur",this.searchInput)},enterAction:function(){this.$emit("enter",this.searchInput)},clearAction:function(){this.$emit("clear",this.searchInput)}},watch:{value:function(t,e){this.searchInput=t},searchInput:function(t){this.$emit("input",t)}}},E=V,D=(n("8500"),Object(p["a"])(E,P,$,!1,null,"222369bc",null)),j=D.exports;j.install=function(t){t.component(j.name,j)};var N=j,T=[f,O,A,N],M=function t(e){t.installed||T.forEach(function(t){e.component(t.name,t)})};"undefined"!==typeof window&&window.Vue&&M(window.Vue);var L=Object(c["a"])({install:M},T),z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h-full",attrs:{id:"app"}},[n("main-layout")],1)},J=[],B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{staticClass:"h-full root"},[n("layout-header"),n("el-container",{staticClass:"flex-1 flex-row"},[n("layout-aside",{staticClass:"h-full"}),n("el-container",{staticClass:"flex-1"},[n("el-main",{staticClass:"h-full overflow-auto"},[n("router-view")],1)],1)],1)],1)},H=[],K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-header",{staticClass:"flex-row flex-v-center flex-h-center h-60 b-b-line"},[n("h1",[t._v("UITraman")])])},R=[],W={name:"LayoutHeader"},q=W,F=Object(p["a"])(q,K,R,!1,null,"e208ab7c",null),G=F.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-aside",{staticClass:"h-full flex-col flex-v-center flex-h-center"},[n("el-menu",{staticClass:"el-menu-vertical-demo h-full w-full",attrs:{router:"","default-active":t.defaultActivePath}},t._l(t.menus,function(e){return n("el-menu-item",{key:e.path,attrs:{index:e.path}},[n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])])}),1)],1)},Q=[],X=[{title:"快速上手",path:"/Instructions"},{title:"Pagination 分页",path:"/TramanPagination"},{title:"CheckPop 弹框选择",path:"/CheckPop"},{title:"Cascader 级联选择器",path:"/Cascader"},{title:"Select 选择器",path:"/Select"},{title:"Input 搜索",path:"/Input"}],Y=X,Z={name:"LayoutAside",data:function(){return{menus:Y,defaultActivePath:this.$router.history.current.fullPath}},watch:{$route:function(t,e){this.defaultActivePath=t.fullPath,"/"===this.defaultActivePath&&(this.defaultActivePath="/Instructions")}}},tt=Z,et=(n("37da"),Object(p["a"])(tt,U,Q,!1,null,"b5e96264",null)),nt=et.exports,at={name:"MainLayout",components:{LayoutHeader:G,LayoutAside:nt}},it=at,rt=(n("f1ff"),Object(p["a"])(it,B,H,!1,null,"6636f26e",null)),ct=rt.exports,lt={name:"app",components:{MainLayout:ct}},ot=lt,st=Object(p["a"])(ot,z,J,!1,null,null,null),ut=st.exports,pt=n("3bc2");a["default"].use(pt["a"]);var ht=new pt["a"]({routes:[{path:"/Instructions",alias:"",name:"Instructions",component:function(){return n.e("chunk-2d213ef7").then(n.bind(null,"af95"))}},{path:"/TramanPagination",name:"TramanPagination",component:function(){return n.e("chunk-2d21801c").then(n.bind(null,"c8c4"))}},{path:"/CheckPop",name:"CheckPop",component:function(){return n.e("chunk-2d0b24bb").then(n.bind(null,"2403"))}},{path:"/Cascader",name:"Cascader",component:function(){return n.e("chunk-2d0ccbe9").then(n.bind(null,"4edf"))}},{path:"/Select",name:"Select",component:function(){return n.e("chunk-2d21aea0").then(n.bind(null,"be18"))}},{path:"/Input",name:"Input",component:function(){return n.e("chunk-2d0b59c7").then(n.bind(null,"1a45"))}}]}),dt=n("f9d3"),ft=n.n(dt);n("caf1"),n("1be0"),n("3653");a["default"].config.productionTip=!1,a["default"].prototype.$hljs=ft.a,a["default"].use(r.a),a["default"].use(L),new a["default"]({router:ht,render:function(t){return t(ut)}}).$mount("#app")},"67b6":function(t,e,n){"use strict";var a=n("aeed"),i=n.n(a);i.a},"72b3":function(t,e,n){"use strict";var a=n("b70f"),i=n.n(a);i.a},"7d5d":function(t,e,n){"use strict";var a=n("a16d"),i=n.n(a);i.a},8500:function(t,e,n){"use strict";var a=n("4915"),i=n.n(a);i.a},"86e9":function(t,e,n){"use strict";var a=n("bcb6"),i=n.n(a);i.a},"94ee":function(t,e,n){},a16d:function(t,e,n){},aeed:function(t,e,n){},b70f:function(t,e,n){},bcb6:function(t,e,n){},f1ff:function(t,e,n){"use strict";var a=n("94ee"),i=n.n(a);i.a}});
//# sourceMappingURL=app.ba9144e6.js.map