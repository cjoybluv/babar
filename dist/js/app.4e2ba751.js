(function(e){function t(t){for(var r,i,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)i=s[l],a[i]&&d.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},i={app:0},a={app:0},o=[];function s(e){return c.p+"js/"+({about:"about","checklists~dashboard~login~regiister":"checklists~dashboard~login~regiister","checklists~dashboard":"checklists~dashboard",checklists:"checklists",dashboard:"dashboard",login:"login",regiister:"regiister",items:"items"}[e]||e)+"."+{about:"12385b72","checklists~dashboard~login~regiister":"04fe8b44","checklists~dashboard":"579cf7c4",checklists:"88be4ee1",dashboard:"04249f0a",login:"3f18e41f",regiister:"42f675ef",items:"08e01e7b"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"checklists~dashboard~login~regiister":1,"checklists~dashboard":1,checklists:1,dashboard:1,regiister:1,items:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise(function(t,n){for(var r="css/"+({about:"about","checklists~dashboard~login~regiister":"checklists~dashboard~login~regiister","checklists~dashboard":"checklists~dashboard",checklists:"checklists",dashboard:"dashboard",login:"login",regiister:"regiister",items:"items"}[e]||e)+"."+{about:"31d6cfe0","checklists~dashboard~login~regiister":"9319ffa5","checklists~dashboard":"93e1d852",checklists:"e2ca38eb",dashboard:"27d3d133",login:"31d6cfe0",regiister:"de8d49cf",items:"d2cc3d94"}[e]+".css",a=c.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete i[e],f.parentNode.removeChild(f),n(o)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)}).then(function(){i[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e),u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+r+": "+i+")");o.type=r,o.request=i,n[1](o)}a[e]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"09e8":function(e,t,n){},"4f0f":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"namespaced",function(){return ae}),n.d(r,"state",function(){return oe}),n.d(r,"getters",function(){return se}),n.d(r,"mutations",function(){return ce}),n.d(r,"actions",function(){return ue});var i={};n.r(i),n.d(i,"namespaced",function(){return he}),n.d(i,"state",function(){return pe}),n.d(i,"mutations",function(){return ge}),n.d(i,"actions",function(){return ve});var a={};n.r(a),n.d(a,"namespaced",function(){return be}),n.d(a,"state",function(){return ye}),n.d(a,"mutations",function(){return ke});var o={};n.r(o),n.d(o,"namespaced",function(){return Ue}),n.d(o,"state",function(){return Ie}),n.d(o,"getters",function(){return Pe}),n.d(o,"mutations",function(){return Re}),n.d(o,"actions",function(){return He});n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),c=n("f309"),u=n("fcf4");s["a"].use(c["a"]);var l=new c["a"]({theme:{themes:{light:{primary:u["a"].blue.base,secondary:u["a"].lightBlue.lighten2,accent:u["a"].blue.accent1,danger:u["a"].red}}}}),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("v-toolbar-title",{staticClass:"display-3",attrs:{dark:""}},[e._v("ljunda")]),n("v-spacer"),e._l(e.links,function(t){return n("v-btn",{key:t.label+"-header-link",attrs:{text:"",rounded:"",to:t.url}},[e._v(e._s(t.label))])})],2),n("v-content",[n("NotificationContainer"),n("router-view")],1),n("v-footer",{attrs:{color:"primary lighten-1",padless:""}},[n("v-layout",{attrs:{"justify-center":"",wrap:""}},[e._l(e.links,function(t){return n("v-btn",{key:t.label+"-footer-link",staticClass:"my-2",attrs:{color:"white",text:"",rounded:"",to:t.url}},[e._v(e._s(t.label))])}),n("v-flex",{attrs:{primary:"","lighten-2":"","py-4":"","text-center":"","white--text":"",xs12:""}},[e._v("\n        "+e._s((new Date).getFullYear())+" —\n        "),n("strong",[e._v("Babar")])])],2)],1)],1)},f=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"notification-container info lighten-4"},e._l(e.notifications,function(e){return n("NotificationBar",{key:e.id,attrs:{notification:e}})}),1)},p=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"notification-bar white--text",class:e.notification.type},[n("p",[e._v(e._s(e.notification.message))])])},g=[],v=n("2f62"),b={props:{notification:{type:Object,required:!0}},data:function(){return{timeout:null,delay:{info:3e3,success:3e3,error:6e3}}},mounted:function(){var e=this;this.timeout=setTimeout(function(){return e.remove(e.notification)},this.delay[this.notification.type])},beforeDestroy:function(){clearTimeout(this.timeout)},methods:Object(v["b"])("notification",["remove"])},y=b,k=(n("756a"),n("2877")),E=Object(k["a"])(y,m,g,!1,null,"f846acbe",null),C=E.exports,_={components:{NotificationBar:C},computed:Object(v["d"])("notification",["notifications"])},S=_,w=(n("c26c"),Object(k["a"])(S,h,p,!1,null,"efda6dae",null)),T=w.exports,j={name:"App",components:{NotificationContainer:T},data:function(){return{links:[{label:"Home",url:"/"},{label:"Login",url:"/login"},{label:"Dashboard",url:"/dashboard"},{label:"Checklists",url:"/checklists"}]}}},A=j,L=(n("5c0b"),n("6544")),O=n.n(L),x=n("7496"),U=n("40dc"),I=n("8336"),P=n("a75b"),R=n("0e8f"),H=n("553a"),D=n("a722"),V=n("2fa4"),F=n("2a7f"),q=Object(k["a"])(A,d,f,!1,null,null,null),K=q.exports;O()(q,{VApp:x["a"],VAppBar:U["a"],VBtn:I["a"],VContent:P["a"],VFlex:R["a"],VFooter:H["a"],VLayout:D["a"],VSpacer:V["a"],VToolbarTitle:F["a"]});var N=n("1dce"),B=n.n(N),M=n("8c4f"),$=n("bc3a"),W=n.n($),J="http://ljunda.heroku.com/api/v1",G={baseURL:J,withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"},timeout:1e4},z=W.a.create(G),Y=function(e){var t=De.getters["auth/token"];return t&&(e.headers.Authorization="Bearer ".concat(t)),e},Q=function(e){return e};z.interceptors.request.use(Y),z.interceptors.request.use(Q);var X={postLogin:function(e){return z.post("/auth/login",e)},postRegister:function(e){return z.post("/auth/register",e)}},Z="http://ljunda.heroku.com/api/v1",ee={baseURL:Z,withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"},timeout:1e4},te=W.a.create(ee),ne=function(e){var t=De.getters["auth/token"];return t&&(e.headers.Authorization="Bearer ".concat(t)),e},re=function(e){return e};te.interceptors.request.use(ne),te.interceptors.request.use(re);var ie={getUser:function(e){return te.get("/users?email="+e)},postUser:function(e){return te.post("/users",e)},putUser:function(e){return te.put("/users/"+e._id,e)}},ae=!0,oe={user:{},token:"",isAuthenticated:!1},se={token:function(e){return e.token||localStorage.getItem("token")},ownerId:function(e){return e.user._id},user:function(e){return e.user},userTags:function(e){return e.user.tags}},ce={CLEAR_AUTH:function(e){e.user={},e.token="",e.isAuthenticated=!1,localStorage.removeItem("token"),localStorage.removeItem("user")},SET_AUTH:function(e,t){e.user=t.user,e.token=t.token,e.isAuthenticated=!0,localStorage.setItem("token",t.token),localStorage.setItem("user",JSON.stringify(t.user))},CLEAR_USER:function(e){e.user={}},SET_USER:function(e,t){e.user=t}},ue={login:function(e,t){var n=e.commit,r=e.dispatch;return n("CLEAR_AUTH"),r("clearUserData"),new Promise(function(e,i){X.postLogin(t).then(function(t){n("SET_AUTH",t.data);var i={type:"success",message:"LOGIN SUCCESS!"};r("notification/add",i,{root:!0}),e(t.data)}).catch(function(e){var t={type:"error",message:"LOGIN FAILURE! "+e.message};r("notification/add",t,{root:!0}),i(e)})})},register:function(e,t){var n=e.commit,r=e.dispatch;return n("CLEAR_AUTH"),r("clearUserData"),new Promise(function(e,i){X.postRegister(t).then(function(t){n("SET_AUTH",t.data);var i={type:"success",message:"REGISTER SUCCESS!"};r("notification/add",i,{root:!0}),e(t.data)}).catch(function(e){var t={type:"error",message:"REGISTER FAILURE! "+e.message};r("notification/add",t,{root:!0}),i(e)})})},getFromLocal:function(e){var t=e.commit;return new Promise(function(e,n){var r=localStorage.getItem("token"),i=JSON.parse(localStorage.getItem("user"));if(r&&i){var a={token:r,user:i};t("SET_AUTH",a),e()}else n()})},updateUser:function(e,t){var n=e.commit,r=e.dispatch;return n("CLEAR_USER"),new Promise(function(e,i){ie.putUser(t).then(function(t){n("SET_USER",t.data);var i={type:"success",message:"User Updated!"};r("notification/add",i,{root:!0}),e(t.data)}).catch(function(e){var t={type:"error",message:"USER UPDATE FAILURE! "+e.message};r("notification/add",t,{root:!0}),i(e)})})},getUser:function(e,t){var n=e.commit,r=e.dispatch;return n("CLEAR_USER"),new Promise(function(e,i){ie.getUser(t).then(function(t){n("SET_USER",t.data);var i={type:"success",message:"User fetched."};r("notification/add",i,{root:!0}),e(t.data)}).catch(function(e){var t={type:"error",message:"USER FETCH FAILURE! "+e.message};r("notification/add",t,{root:!0}),i(e)})})},clearUserData:function(e){var t=e.commit;t("checklist/CLEAR_CHECKLISTS",null,{root:!0})}},le=(n("8e6e"),n("ac6a"),n("456d"),n("bd86"));function de(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n}function fe(e){for(var t=1;t<arguments.length;t++)if(t%2){var n=null!=arguments[t]?arguments[t]:{};de(n,!0).forEach(function(t){Object(le["a"])(e,t,n[t])})}else Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(arguments[t])):de(n).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(arguments[t],n))});return e}var he=!0,pe={notifications:[]},me=1,ge={PUSH:function(e,t){e.notifications.push(fe({},t,{id:me++}))},DELETE:function(e,t){e.notifications=e.notifications.filter(function(e){return e.id!==t.id})}},ve={add:function(e,t){var n=e.commit;n("PUSH",t)},remove:function(e,t){var n=e.commit;n("DELETE",t)}},be=!0,ye={itemType:"",items:[],itemMap:[],selectedHeaderField:"status"},ke={SET_TREE_VIEW:function(e,t){var n=t.itemType,r=t.items,i=t.itemMap,a=t.headerField;e.itemType=n,e.items=r,e.itemMap=i,e.selectedHeaderField=a}},Ee=(n("20d6"),n("7514"),n("0644")),Ce=n.n(Ee),_e="http://ljunda.heroku.com/api/v1",Se={baseURL:_e,withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"},timeout:1e4},we=W.a.create(Se),Te=function(e){var t=De.getters["auth/token"];return t&&(e.headers.Authorization="Bearer ".concat(t)),e},je=function(e){return e};we.interceptors.request.use(Te),we.interceptors.request.use(je);var Ae={getChecklists:function(e){return we.get("/checklists?ownerId="+e)},postChecklist:function(e){return we.post("/checklists",e)},putChecklist:function(e){return we.put("/checklists/"+e._id,e)}};n("55dd"),n("7f7f");function Le(e,t){var n=0,r=[],i=[];return e.forEach(function(e){if(e[t]){var a=r.findIndex(function(n){return n.name===e[t]});-1!==a?(r[a].children.push({key:n,id:e._id,name:e.name,header:!1}),i.push({key:n,id:e._id}),n++):(r.push({key:n,id:null,name:e[t],children:[],header:!0}),n++,r[r.length-1].children.push({key:n,id:e._id,name:e.name,children:[],header:!1}),i.push({key:n,id:e._id}),n++)}else r.push({key:n,id:e._id,name:e.name,children:[],header:!1}),i.push({key:n,id:e._id}),n++}),r.length&&(r.sort(function(e,t){return e.name||(e.name=""),t.name||(t.name=""),e.name.toUpperCase()>t.name.toUpperCase()?0:-1}).sort(function(e,t){return e.header>t.header?-1:0}),r.forEach(function(e){return e.children.sort(function(e,t){return e.name||(e.name=""),t.name||(t.name=""),e.name.toUpperCase()>t.name.toUpperCase()?0:-1})})),{items:r,itemMap:i}}function Oe(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n}function xe(e){for(var t=1;t<arguments.length;t++)if(t%2){var n=null!=arguments[t]?arguments[t]:{};Oe(n,!0).forEach(function(t){Object(le["a"])(e,t,n[t])})}else Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(arguments[t])):Oe(n).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(arguments[t],n))});return e}var Ue=!0,Ie={checklists:[],selectedChecklist:{},originalChecklist:{}},Pe={getChecklistById:function(e){return function(t){return e.checklists.find(function(e){return e._id===t})}},primaryTag:function(e){return function(e){return e.tags[0]}},status:function(e){return function(e){if(e.masterChecklist)return"master";var t=e.items.filter(function(e){return!e.completed});if(t.length)return"active";var n=e.tags.filter(function(e){return"Log"===e});return n.length?"log":"complete"}}},Re={CLEAR_CHECKLISTS:function(e){e.checklists=[],e.selectedChecklist={}},SET_CHECKLISTS:function(e,t){e.checklists=t},UPDATE_CHECKLIST:function(e,t){var n=e.checklists.findIndex(function(e){return e._id===t._id});s["a"].set(e.checklists,n,t)},SAVE_CHECKLIST:function(e,t){e.checklists.push(t)},SET_SELECTED_CHECKLIST:function(e,t){e.selectedChecklist=t,e.originalChecklist=Ce()(t)},CLEAR_SELECTED_CHECKLIST:function(e){e.selectedChecklist={}}},He={fetchAll:function(e,t){var n=e.commit,r=e.dispatch,i=e.rootState;return n("CLEAR_CHECKLISTS"),new Promise(function(e,a){Ae.getChecklists(t).then(function(t){n("SET_CHECKLISTS",t.data),r("updateTreeViewDisplay",i.treeView.selectedHeaderField);var a={type:t.data.length?"success":"info",message:t.data.length?"Checklists Fetched!":"No Checklists Found!"};r("notification/add",a,{root:!0}),e(t.data)}).catch(function(e){var t={type:"error",message:"Checklists Fetch Error:"+e.message};r("notification/add",t,{root:!0}),a(e)})})},edit:function(e,t){var n=e.commit;return new Promise(function(e){n("SET_SELECTED_CHECKLIST",t),e()})},clearForm:function(e){var t=e.commit;return new Promise(function(e){t("CLEAR_SELECTED_CHECKLIST"),e()})},save:function(e,t){var n=e.commit,r=e.dispatch,i=e.rootState;return new Promise(function(e,a){t.ownerId=i.auth.user._id,t._id?Ae.putChecklist(t).then(function(a){n("UPDATE_CHECKLIST",a.data),n("CLEAR_SELECTED_CHECKLIST");var o=!1,s=i.auth.user.tags;t.tags.forEach(function(e){s.find(function(t){return t.toUpperCase()===e.toUpperCase()})||(o=!0,s.push(e))}),o&&r("auth/updateUser",{_id:t.ownerId,tags:s},{root:!0}),r("updateTreeViewDisplay",i.treeView.selectedHeaderField);var c={type:"success",message:"Checklist Updated!"};r("notification/add",c,{root:!0}),e(a.data)}).catch(function(e){var t={type:"error",message:"CHECKLIST UPDATE FAILURE:"+e.message};r("notification/add",t,{root:!0}),a(e)}):Ae.postChecklist(t).then(function(t){n("SAVE_CHECKLIST",t.data),n("CLEAR_SELECTED_CHECKLIST"),r("updateTreeViewDisplay",i.treeView.selectedHeaderField);var a={type:"success",message:"Checklist saved!"};r("notification/add",a,{root:!0}),e(t.data)}).catch(function(e){var t={type:"error",message:"CHECKLIST SAVE FAILURE:"+e.message};r("notification/add",t,{root:!0}),a(e)})})},updateTreeViewDisplay:function(e,t){var n=e.state,r=e.rootState,i=e.commit,a=e.getters;if(!r.treeView.itemType||"checklist"===r.treeView.itemType){var o=[];n.checklists&&(o=n.checklists.map(function(e){return xe({},e,Object(le["a"])({},t,a[t](e)))})),i("treeView/SET_TREE_VIEW",xe({itemType:"checklist",headerField:t},Le(o,t)),{root:!0})}}};s["a"].use(v["a"]);var De=new v["a"].Store({modules:{auth:r,notification:i,treeView:a,checklist:o}}),Ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},Fe=[],qe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-layout",{attrs:{"text-center":"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-img",{staticClass:"my-3",attrs:{src:n("9b19"),contain:"",height:"200"}})],1),r("v-flex",{attrs:{"mb-4":""}},[r("h1",{staticClass:"display-2 font-weight-bold mb-3"},[e._v("Welcome to Vuetify")]),r("p",{staticClass:"subheading font-weight-regular"},[e._v("\n        For help and collaboration with other Vuetify developers,\n        "),r("br"),e._v("please join our online\n        "),r("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[e._v("Discord Community")])])]),r("v-flex",{attrs:{"mb-5":"",xs12:""}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v("What's next?")]),r("v-layout",{attrs:{"justify-center":""}},e._l(e.whatsNext,function(t,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:t.href,target:"_blank"}},[e._v(e._s(t.text))])}),0)],1),r("v-flex",{attrs:{xs12:"","mb-5":""}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v("Important Links")]),r("v-layout",{attrs:{"justify-center":""}},e._l(e.importantLinks,function(t,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:t.href,target:"_blank"}},[e._v(e._s(t.text))])}),0)],1),r("v-flex",{attrs:{xs12:"","mb-5":""}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v("Ecosystem")]),r("v-layout",{attrs:{"justify-center":""}},e._l(e.ecosystem,function(t,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:t.href,target:"_blank"}},[e._v(e._s(t.text))])}),0)],1)],1)],1)},Ke=[],Ne={data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},Be=Ne,Me=n("a523"),$e=n("adda"),We=Object(k["a"])(Be,qe,Ke,!1,null,null,null),Je=We.exports;O()(We,{VContainer:Me["a"],VFlex:R["a"],VImg:$e["a"],VLayout:D["a"]});var Ge={name:"home",components:{HelloWorld:Je}},ze=Ge,Ye=Object(k["a"])(ze,Ve,Fe,!1,null,null,null),Qe=Ye.exports,Xe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Oops!")]),n("h3",[e._v("The "+e._s(e.resource)+" you're looking for is not here.")]),n("router-link",{attrs:{to:{name:"home"}}},[e._v("Back to the home page")])],1)},Ze=[],et={props:{resource:{type:String,required:!0}}},tt=et,nt=Object(k["a"])(tt,Xe,Ze,!1,null,null,null),rt=nt.exports,it=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Uh-Oh!")]),n("h3",[e._v("\n    It looks like you're experiencing some network issues, please click the\n    back button and try again.\n  ")]),n("router-link",{attrs:{to:{name:"home"}}},[e._v("Or go back to the home page")])],1)},at=[],ot={},st=Object(k["a"])(ot,it,at,!1,null,null,null),ct=st.exports;s["a"].use(M["a"]);var ut=new M["a"]({mode:"history",routes:[{path:"/",name:"home",component:Qe,meta:{requiresAuth:!1}},{path:"/items",name:"items",meta:{requiresAuth:!0},component:function(){return n.e("items").then(n.bind(null,"6e69"))}},{path:"/about",name:"about",meta:{requiresAuth:!1},component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/login",name:"login",meta:{requiresAuth:!1},component:function(){return Promise.all([n.e("checklists~dashboard~login~regiister"),n.e("login")]).then(n.bind(null,"a55b"))}},{path:"/register",name:"register",props:!0,meta:{requiresAuth:!1},component:function(){return Promise.all([n.e("checklists~dashboard~login~regiister"),n.e("regiister")]).then(n.bind(null,"73cf"))}},{path:"/dashboard",name:"dashboard",meta:{requiresAuth:!0},component:function(){return Promise.all([n.e("checklists~dashboard~login~regiister"),n.e("checklists~dashboard"),n.e("dashboard")]).then(n.bind(null,"7277"))}},{path:"/checklists",beforeEnter:function(e,t,n){De.dispatch("auth/getFromLocal").then(function(){var e=De.getters["auth/ownerId"];n({name:"checklists",params:{ownerId:e}})}).catch(function(){n({name:"login"})})}},{path:"/checklists/:ownerId",name:"checklists",meta:{requiresAuth:!0},component:function(){return Promise.all([n.e("checklists~dashboard~login~regiister"),n.e("checklists~dashboard"),n.e("checklists")]).then(n.bind(null,"7f53"))},beforeEnter:function(e,t,n){De.dispatch("checklist/fetchAll",e.params.ownerId).then(function(t){e.params.checklists=t,n()}).catch(function(e){e.response&&404==e.response.status?n({name:"404",params:{resource:"checklist"}}):n({name:"network-issue"})})}},{path:"/404",name:"404",meta:{requiresAuth:!1},component:rt,props:!0},{path:"/network-issue",name:"network-issue",meta:{requiresAuth:!1},component:ct},{path:"*",redirect:{name:"404",params:{resource:"page"}}}]});ut.beforeEach(function(e,t,n){if(e.matched.some(function(e){return e.meta.requiresAuth})){var r=JSON.parse(localStorage.getItem("user")).email;De.dispatch("auth/getUser",r).then(function(){n()}).catch(function(){n({name:"login"})})}else n()});var lt=ut,dt=(n("a5d8"),n("ed18")),ft=n.n(dt);ft.a.config(),s["a"].config.productionTip=!1,s["a"].use(B.a),new s["a"]({vuetify:l,router:lt,store:De,render:function(e){return e(K)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("6879"),i=n.n(r);i.a},6879:function(e,t,n){},"756a":function(e,t,n){"use strict";var r=n("4f0f"),i=n.n(r);i.a},"9b19":function(e,t,n){e.exports=n.p+"img/logo.63a7d78d.svg"},c26c:function(e,t,n){"use strict";var r=n("09e8"),i=n.n(r);i.a}});
//# sourceMappingURL=app.4e2ba751.js.map