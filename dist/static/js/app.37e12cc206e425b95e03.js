webpackJsonp([5],{"991W":function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("7+uW"),o=e("Dd8w"),i=e.n(o),r=e("NYxO"),u={computed:i()({},Object(r.b)(["topNav"]))},s={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"topnav"},[e("div",{staticClass:"topnav-main"},[t._m(0),t._v(" "),e("ul",t._l(t.topNav,function(n){return e("li",[e("router-link",{attrs:{to:n.link}},[t._v(t._s(n.name))])],1)}))])])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("dl",[n("dt",[this._v("名字\n        "),n("span",[this._v("博客")])]),this._v(" "),n("dd",[n("p",[this._v("这里是说明")]),this._v(" "),n("p",[this._v("这里是说明")])])])}]},c={components:{topNav:e("VU/8")(u,s,!1,function(t){e("U3ti")},"data-v-015d5736",null).exports},created:function(){this.$store.dispatch("getData")}},l={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("top-nav"),this._v(" "),n("router-view")],1)},staticRenderFns:[]},p=e("VU/8")(c,l,!1,function(t){e("SpNi")},"data-v-5805422a",null).exports,v=(e("991W"),e("llnD"),e("/ocq"));a.a.use(v.a);var d=new v.a({routes:[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:function(){return e.e(1).then(e.bind(null,"26dS"))}},{path:"/bloglist",name:"blogList",component:function(){return e.e(3).then(e.bind(null,"CEsl"))}},{path:"/label",name:"label",component:function(){return e.e(0).then(e.bind(null,"yTr5"))}},{path:"/aboutme",name:"aboutMe",component:function(){return e.e(2).then(e.bind(null,"Ln1t"))}}]}),h=e("mtWM"),f=e.n(h);f.a.defaults.baseURL="http://localhost:4000",f.a.defaults.timeout=5e3;var m=function(t,n){return f()({method:"get",url:t,params:n}).catch(function(t){console.log(t)})},_=e("bOdI"),b=e.n(_)()({},"GET_DATA",function(t,n){t.topNav=n});a.a.use(r.a);var N=new r.a.Store({state:{topNav:[]},getters:{topNav:function(t){return t.topNav}},actions:{getData:function(t,n){var e=t.commit;m("/topNav").then(function(t){e("GET_DATA",t.data)})}},mutations:b});a.a.config.productionTip=!1,new a.a({el:"#app",router:d,store:N,template:"<App/>",components:{App:p}})},SpNi:function(t,n){},U3ti:function(t,n){},llnD:function(t,n){}},["NHnr"]);