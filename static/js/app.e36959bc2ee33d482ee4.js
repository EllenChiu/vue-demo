webpackJsonp([1],{"/15P":function(t,a){},"/hSz":function(t,a){},NHnr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("7+uW"),n={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]};var i=s("VU/8")({name:"App"},n,!1,function(t){s("S27q"),s("/hSz")},null,null).exports,r=s("/ocq"),o={name:"WelcomePage",components:{Datepicker:s("IC97").a},data:function(){return{title:"WHAT'S YOUR NEXT STATION ?"}}},c={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"wrap-outer"},[s("div",{staticClass:"inner "},[s("h1",{staticClass:"cover-heading"},[t._v(t._s(t.title))]),t._v(" "),s("div",{staticClass:"target-form"},[s("form",[s("div",{staticClass:"form-row"},[s("div",{staticClass:"col"},[s("datepicker",{attrs:{"bootstrap-styling":!0,placeholder:"Depart"}})],1),t._v(" "),s("div",{staticClass:"col"},[s("datepicker",{attrs:{"bootstrap-styling":!0,placeholder:"Return"}})],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2)])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col"},[a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"From",value:"Taoyuan, Taiwan"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col"},[a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"To",value:"Tokyo, Japan"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-1"},[a("a",{staticClass:"btn btn-primary mb-2",attrs:{href:"https://ellenchiu.github.io/layout-demo/index.html"}},[a("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}})])])}]};var l=s("VU/8")(o,c,!1,function(t){s("jnjU")},"data-v-8c4d8392",null).exports,v={name:"Login",data:function(){return{loginBtnText:"Login",sendLogin:!0}},methods:{login:function(){this.sendLogin=!1;var t=this;setTimeout(function(){t.$router.push("dashboard")},1e3)}}},m={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"wrapper"},[t._m(0),t._v(" "),s("div",{staticClass:"wrap-main"},[s("div",{staticClass:"login-block"},[t._m(1),t._v(" "),t._m(2),t._v(" "),s("div",{staticClass:"login-btn"},[s("button",{staticClass:"btn btn-info btn-lg btn-block",on:{click:t.login}},[s("span",{directives:[{name:"show",rawName:"v-show",value:t.sendLogin,expression:"sendLogin"}]},[t._v(t._s(t.loginBtnText))]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:!t.sendLogin,expression:"!sendLogin"}]},[s("i",{staticClass:"fa fa-spinner fa-spin fa-fw"})])])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"nav"},[a("i",{staticClass:"fa fa-cubes fa-2x",attrs:{"aria-hidden":"true"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"login-icon"},[a("div",{staticClass:"circle-image"},[a("img",{attrs:{src:s("bD10")}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"login-form"},[a("form",[a("div",{staticClass:"form-group"},[a("label",[this._v("Name / Email")]),this._v(" "),a("input",{staticClass:"form-control",attrs:{type:"text",value:"Ellen"}})]),this._v(" "),a("div",{staticClass:"form-group"},[a("label",[this._v("Password")]),this._v(" "),a("input",{staticClass:"form-control",attrs:{type:"password",placeholder:"password",value:"12345"}})])])])}]};var u=s("VU/8")(v,m,!1,function(t){s("hMfp")},"data-v-4e57501e",null).exports,d={name:"Dashboard",components:{GChart:s("kXf/").GChart},data:function(){return{income:1e3,expense:500,amount:1e3,month:"8",category:"1",chartData:[["Month","Income","Expenses"],["3",2999,2890],["4",5e3,3446],["5",4e3,1120],["6",6e3,1540],["7",5330,540],["8",1e3,500]],chartOptions:{chart:{title:"Summary",width:400,height:300}}}},filters:{commaFormat:function(t){t=parseInt(t);for(var a=/(-?\d+)(\d{3})/;a.test(t);)t=t.toString().replace(a,"$1,$2");return t}},methods:{save:function(){var t=this.category,a=parseInt(this.month)-2,s=parseInt(this.amount,10),e=parseInt(this.income),n=parseInt(this.expense);s||(s=0),"1"===t?(this.income=e+s,this.chartData[a][1]=this.income):(this.expense=n+s,this.chartData[a][2]=this.expense),this.$refs.gChart.drawChart()}}},p={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"wrapper"},[t._m(0),t._v(" "),s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[t._m(1),t._v(" "),s("main",{staticClass:"col-md-9 ml-sm-auto col-lg-10 px-4",attrs:{role:"main"}},[s("div",{staticClass:"block account-area"},[s("h5",[t._v("Accounting")]),t._v(" "),s("div",{staticClass:"content"},[s("form",{staticClass:"form-inline"},[s("div",{staticClass:"input-group mb-2"},[t._m(2),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"form-control",attrs:{type:"number",name:"amount"},domProps:{value:t.amount},on:{input:function(a){a.target.composing||(t.amount=a.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group mx-sm-3 mb-2"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.month,expression:"month"}],staticClass:"form-control mx-sm-1",attrs:{name:"month"},on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.month=a.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"8"}},[t._v("Aug")]),t._v(" "),s("option",{attrs:{value:"7"}},[t._v("Jul")]),t._v(" "),s("option",{attrs:{value:"6"}},[t._v("Jun")]),t._v(" "),s("option",{attrs:{value:"5"}},[t._v("May")]),t._v(" "),s("option",{attrs:{value:"4"}},[t._v("Apirl")]),t._v(" "),s("option",{attrs:{value:"3"}},[t._v("Mar")])])]),t._v(" "),s("div",{staticClass:"form-group mx-sm-3 mb-2"},[s("div",{staticClass:"form-check form-check-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],staticClass:"form-check-input",attrs:{type:"radio",id:"category1",name:"category",value:"1"},domProps:{checked:t._q(t.category,"1")},on:{change:function(a){t.category="1"}}}),t._v(" "),s("label",{staticClass:"form-check-label",attrs:{for:"category1"}},[t._v("Income")])]),t._v(" "),s("div",{staticClass:"form-check form-check-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],staticClass:"form-check-input",attrs:{type:"radio",id:"category2",name:"category",value:"0"},domProps:{checked:t._q(t.category,"0")},on:{change:function(a){t.category="0"}}}),t._v(" "),s("label",{staticClass:"form-check-label",attrs:{for:"category2"}},[t._v("Expenses")])])]),t._v(" "),s("button",{staticClass:"btn btn-primary btn-sm mb-2",attrs:{type:"button"},on:{click:t.save}},[t._v("Save")])])])]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"block"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("div",{staticClass:"bucket gray income"},[s("div",{staticClass:"dollar",attrs:{id:"income-count"}},[t._v(t._s(t._f("commaFormat")(t.income)))]),t._v(" "),s("p",[t._v("\n                  Income\n                ")])])]),t._v(" "),s("div",{staticClass:"col-6"},[s("div",{staticClass:"bucket gray expense"},[s("div",{staticClass:"dollar",attrs:{id:"expense-count"}},[t._v(t._s(t._f("commaFormat")(t.expense)))]),t._v(" "),s("p",[t._v("\n                  Expense\n                ")])])])])]),t._v(" "),s("div",{staticClass:"block"},[s("h5",[t._v("  Summary")]),t._v(" "),s("div",{staticClass:"content"},[s("GChart",{ref:"gChart",attrs:{type:"LineChart",data:t.chartData,options:t.chartOptions}})],1)])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("nav",{staticClass:"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow"},[a("a",{staticClass:"navbar-brand col-sm-3 col-md-2 mr-0",attrs:{href:"#"}},[this._v("Hi, Ellen")]),this._v(" "),a("input",{staticClass:"form-control form-control-dark w-100",attrs:{type:"text",placeholder:"Search","aria-label":"Search"}}),this._v(" "),a("ul",{staticClass:"navbar-nav px-3"},[a("li",{staticClass:"nav-item text-nowrap"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[a("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}})])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"col-md-2 d-none d-md-block bg-light sidebar"},[s("div",{staticClass:"sidebar-sticky"},[s("ul",{staticClass:"nav flex-column"},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link active",attrs:{href:"#"}},[s("span",{attrs:{"data-feather":"home"}}),t._v("\n                Dashboard "),s("span",{staticClass:"sr-only"},[t._v("(current)")])])]),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[s("i",{staticClass:"fa fa-calendar feather",attrs:{"aria-hidden":"true"}}),t._v("\n                Calendar\n              ")])]),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[s("i",{staticClass:"fa fa-book feather",attrs:{"aria-hidden":"true"}}),t._v("\n                Note\n              ")])])]),t._v(" "),s("hr"),t._v(" "),s("h6",{staticClass:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"},[s("span",[t._v("Relate Link")])]),t._v(" "),s("ul",{staticClass:"nav flex-column mb-2"},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#/welcome"}},[t._v("\n                Trip Work\n              ")])]),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"https://github.com/EllenChiu"}},[t._v("\n                 GitHub\n              ")])]),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#/"}},[t._v("\n                 Sign Out\n              ")])])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[this._v("$")])])}]};var h=s("VU/8")(d,p,!1,function(t){s("/15P")},null,null).exports;e.a.use(r.a);var f=new r.a({routes:[{path:"/welcome",name:"WelcomePage",component:l},{path:"/",name:"LoginPage",component:u},{path:"/dashboard",name:"DashboardPage",component:h}]});s("SSNS"),s("K3J8");e.a.config.productionTip=!1,new e.a({el:"#app",router:f,components:{App:i},template:"<App/>"})},S27q:function(t,a){},SSNS:function(t,a){},bD10:function(t,a,s){t.exports=s.p+"static/img/login.255ed62.png"},hMfp:function(t,a){},jnjU:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.e36959bc2ee33d482ee4.js.map