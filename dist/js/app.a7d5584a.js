(function(t){function e(e){for(var r,o,s=e[0],c=e[1],u=e[2],f=0,l=[];f<s.length;f++)o=s[f],a[o]&&l.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(l.length)l.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},a={app:0},i=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"c44b1ab8","chunk-7eff4242":"1c2534dd","chunk-1f2b2fd1":"b50dff91","chunk-232d1eb8":"f48e2f4f","chunk-cb223572":"30962090","chunk-e47f1e20":"6101aa10"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-7eff4242":1,"chunk-1f2b2fd1":1,"chunk-232d1eb8":1,"chunk-cb223572":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise(function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-7eff4242":"9319ffa5","chunk-1f2b2fd1":"5ee92935","chunk-232d1eb8":"27d3d133","chunk-cb223572":"1334ffd8","chunk-e47f1e20":"31d6cfe0"}[t]+".css",a=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],f=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(f===r||f===a))return e()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){u=l[s],f=u.getAttribute("data-href");if(f===r||f===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[t],d.parentNode.removeChild(d),n(i)},d.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(d)}).then(function(){o[t]=0}));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise(function(e,n){r=a[t]=[e,n]});e.push(r[2]=i);var u,f=document.createElement("script");f.charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.src=s(t),u=function(e){f.onerror=f.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[t]=void 0}};var l=setTimeout(function(){u({type:"timeout",target:f})},12e4);f.onerror=f.onload=u,document.head.appendChild(f)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],f=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var d=f;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"07a4":function(t,e,n){"use strict";var r={};n.r(r),n.d(r,"namespaced",function(){return f}),n.d(r,"state",function(){return l}),n.d(r,"getters",function(){return d}),n.d(r,"mutations",function(){return h}),n.d(r,"actions",function(){return p});var o={};n.r(o),n.d(o,"namespaced",function(){return g}),n.d(o,"state",function(){return y}),n.d(o,"mutations",function(){return E}),n.d(o,"actions",function(){return k});var a={};n.r(a),n.d(a,"namespaced",function(){return A}),n.d(a,"state",function(){return L}),n.d(a,"getters",function(){return w}),n.d(a,"mutations",function(){return T}),n.d(a,"actions",function(){return x});var i=n("2b0e"),s=n("2f62"),c=n("b012"),u=n("35ca"),f=!0,l={user:{},token:"",isAuthenticated:!1},d={token:function(t){return t.token||localStorage.getItem("token")},ownerId:function(t){return t.user._id},user:function(t){return t.user},userFolders:function(t){return t.user.folders}},h={CLEAR_AUTH:function(t){t.user={},t.token="",t.isAuthenticated=!1,localStorage.removeItem("token"),localStorage.removeItem("user")},SET_AUTH:function(t,e){t.user=e.user,t.token=e.token,t.isAuthenticated=!0,localStorage.setItem("token",e.token),localStorage.setItem("user",JSON.stringify(e.user))},CLEAR_USER:function(t){t.user=[]},SET_USER:function(t,e){t.user=e}},p={login:function(t,e){var n=t.commit,r=t.dispatch;return n("CLEAR_AUTH"),new Promise(function(t,o){c["a"].postLogin(e).then(function(e){n("SET_AUTH",e.data);var o={type:"success",message:"LOGIN SUCCESS!"};r("notification/add",o,{root:!0}),t(e.data)}).catch(function(t){var e={type:"error",message:"LOGIN FAILURE! "+t.message};r("notification/add",e,{root:!0}),o(t)})})},getFromLocal:function(t){var e=t.commit;return new Promise(function(t,n){var r=localStorage.getItem("token"),o=JSON.parse(localStorage.getItem("user"));if(r&&o){var a={token:r,user:o};e("SET_AUTH",a),t()}else n()})},updateUser:function(t,e){var n=t.commit,r=t.dispatch;return n("CLEAR_USER"),new Promise(function(t,o){u["a"].putUser(e).then(function(e){n("SET_USER",e.data),r("checklist/updateFolderDisplay",null,{root:!0});var o={type:"success",message:"User Updated!"};r("notification/add",o,{root:!0}),t(e.data)}).catch(function(t){var e={type:"error",message:"USER UPDATE FAILURE! "+t.message};r("notification/add",e,{root:!0}),o(t)})})},getUser:function(t,e){var n=t.commit,r=t.dispatch;return n("CLEAR_USER"),new Promise(function(t,o){u["a"].getUser(e).then(function(e){n("SET_USER",e.data);var o={type:"success",message:"User fetched."};r("notification/add",o,{root:!0}),t(e.data)}).catch(function(t){var e={type:"error",message:"USER FETCH FAILURE! "+t.message};r("notification/add",e,{root:!0}),o(t)})})}},m=(n("8e6e"),n("ac6a"),n("456d"),n("bd86"));function v(t,e){var n=Object.keys(t);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(t)),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n}function b(t){for(var e=1;e<arguments.length;e++)if(e%2){var n=null!=arguments[e]?arguments[e]:{};v(n,!0).forEach(function(e){Object(m["a"])(t,e,n[e])})}else Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(arguments[e])):v(n).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(arguments[e],n))});return t}var g=!0,y={notifications:[]},_=1,E={PUSH:function(t,e){t.notifications.push(b({},e,{id:_++}))},DELETE:function(t,e){t.notifications=t.notifications.filter(function(t){return t.id!==e.id})}},k={add:function(t,e){var n=t.commit;n("PUSH",e)},remove:function(t,e){var n=t.commit;n("DELETE",e)}},C=(n("20d6"),n("7514"),n("fbe1"));n("55dd"),n("7f7f");function S(t,e,n){var r=0,o=[],a=[];return t.forEach(function(t){o.push({key:r,id:null,name:t,children:[],folder:!0}),r++}),e.forEach(function(t){if(t.folderName){var e=o.findIndex(function(e){return e.name===t.folderName});-1!==e?(o[e].children.push({key:r,id:t._id,name:t[n],folder:!1}),a.push({key:r,id:t._id}),r++):(o.push({key:r,id:t._id,name:t[n],children:[],folder:!1}),a.push({key:r,id:t._id}),r++)}else o.push({key:r,id:t._id,name:t[n],children:[],folder:!1}),a.push({key:r,id:t._id}),r++}),o.sort(function(t,e){return t.name.toUpperCase()>e.name.toUpperCase()?0:-1}).sort(function(t,e){return t.folder>e.folder?-1:0}),o.forEach(function(t){return t.children.sort(function(t,e){return t.itemName>e.itemName?0:-1})}),{displayArray:o,itemMap:a}}var A=!0,L={checklists:[],folderArray:[],itemMap:[],selectedChecklist:{}},w={getChecklistById:function(t){return function(e){return t.checklists.find(function(t){return t._id===e})}}},T={CLEAR_CHECKLISTS:function(t){t.checklists=[]},SET_CHECKLISTS:function(t,e){t.checklists=e},UPDATE_CHECKLIST:function(t,e){var n=t.checklists.findIndex(function(t){return t._id===e._id});i["a"].set(t.checklists,n,e)},SAVE_CHECKLIST:function(t,e){t.checklists.push(e)},SET_SELECTED_CHECKLIST:function(t,e){t.selectedChecklist=e},CLEAR_SELECTED_CHECKLIST:function(t){t.selectedChecklist={}},SET_FOLDER_DISPLAY:function(t,e){t.folderArray=e.displayArray,t.itemMap=e.itemMap}},x={fetchAll:function(t,e){var n=t.commit,r=t.dispatch;return n("CLEAR_CHECKLISTS"),new Promise(function(t,o){C["a"].getChecklists(e).then(function(e){n("SET_CHECKLISTS",e.data),r("updateFolderDisplay");var o={type:"success",message:"Checklists Fetched!"};r("notification/add",o,{root:!0}),t(e.data)}).catch(function(t){var e={type:"error",message:"Checklists Fetch Error:"+t.message};r("notification/add",e,{root:!0}),o(t)})})},edit:function(t,e){var n=t.commit;return new Promise(function(t){n("SET_SELECTED_CHECKLIST",e),t()})},clearForm:function(t){var e=t.commit;return new Promise(function(t){e("CLEAR_SELECTED_CHECKLIST"),t()})},save:function(t,e){var n=t.commit,r=t.dispatch,o=t.rootState;return new Promise(function(t,a){e.ownerId=o.auth.user._id,e._id?C["a"].putChecklist(e).then(function(e){n("UPDATE_CHECKLIST",e.data),n("CLEAR_SELECTED_CHECKLIST"),r("updateFolderDisplay");var o={type:"success",message:"Checklist Updated!"};r("notification/add",o,{root:!0}),t(e.data)}).catch(function(t){var e={type:"error",message:"CHECKLIST UPDATE FAILURE:"+t.message};r("notification/add",e,{root:!0}),a(t)}):C["a"].postChecklist(e).then(function(e){n("SAVE_CHECKLIST",e.data),n("CLEAR_SELECTED_CHECKLIST"),r("updateFolderDisplay");var o={type:"success",message:"Checklist saved!"};r("notification/add",o,{root:!0}),t(e.data)}).catch(function(t){var e={type:"error",message:"CHECKLIST SAVE FAILURE:"+t.message};r("notification/add",e,{root:!0}),a(t)})})},updateFolderDisplay:function(t){var e=t.state,n=t.rootState,r=t.commit;r("SET_FOLDER_DISPLAY",S(n.auth.user.folders,e.checklists,"title"))}};i["a"].use(s["a"]);e["a"]=new s["a"].Store({modules:{auth:r,notification:o,checklist:a}})},"09e8":function(t,e,n){},"35ca":function(t,e,n){"use strict";(function(t){var r=n("bc3a"),o=n.n(r),a=n("07a4"),i=Object({VUE_APP_API_VERSION:"v1",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_URL||t+"/api/v1",s={baseURL:i,withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"},timeout:1e4},c=o.a.create(s),u=function(t){var e=a["a"].getters["auth/token"];return e&&(t.headers.Authorization="Bearer ".concat(e)),t},f=function(t){return t};c.interceptors.request.use(u),c.interceptors.request.use(f),e["a"]={getUser:function(t){return c.get("/users?email="+t)},postUser:function(t){return c.post("/users",t)},putUser:function(t){return c.put("/users/"+t._id,t)}}}).call(this,"/")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=n("f309"),a=n("fcf4");r["a"].use(o["a"]);var i=new o["a"]({theme:{themes:{light:{primary:a["a"].blue.base,secondary:a["a"].lightBlue.lighten2,accent:a["a"].blue.accent1}}}}),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("v-toolbar-title",[t._v("Babar")]),n("v-spacer"),t._l(t.links,function(e){return n("v-btn",{key:e.label+"-header-link",attrs:{text:"",rounded:"",to:e.url}},[t._v(t._s(e.label))])})],2),n("v-content",[n("NotificationContainer"),n("router-view")],1),n("v-footer",{attrs:{color:"primary lighten-1",padless:""}},[n("v-layout",{attrs:{"justify-center":"",wrap:""}},[t._l(t.links,function(e){return n("v-btn",{key:e.label+"-footer-link",staticClass:"my-2",attrs:{color:"white",text:"",rounded:"",to:e.url}},[t._v(t._s(e.label))])}),n("v-flex",{attrs:{primary:"","lighten-2":"","py-4":"","text-center":"","white--text":"",xs12:""}},[t._v("\n        "+t._s((new Date).getFullYear())+" —\n        "),n("strong",[t._v("Babar")])])],2)],1)],1)},c=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"notification-container info lighten-4"},t._l(t.notifications,function(t){return n("NotificationBar",{key:t.id,attrs:{notification:t}})}),1)},f=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"notification-bar white--text",class:t.notification.type},[n("p",[t._v(t._s(t.notification.message))])])},d=[],h=n("2f62"),p={props:{notification:{type:Object,required:!0}},data:function(){return{timeout:null}},mounted:function(){var t=this;this.timeout=setTimeout(function(){return t.remove(t.notification)},5e3)},beforeDestroy:function(){clearTimeout(this.timeout)},methods:Object(h["b"])("notification",["remove"])},m=p,v=(n("f581"),n("2877")),b=Object(v["a"])(m,l,d,!1,null,"308ff170",null),g=b.exports,y={components:{NotificationBar:g},computed:Object(h["d"])("notification",["notifications"])},_=y,E=(n("c26c"),Object(v["a"])(_,u,f,!1,null,"efda6dae",null)),k=E.exports,C={name:"App",components:{NotificationContainer:k},data:function(){return{links:[{label:"Home",url:"/"},{label:"Login",url:"/login"},{label:"Dashboard",url:"/dashboard"},{label:"Checklists",url:"/checklists"}]}}},S=C,A=n("6544"),L=n.n(A),w=n("7496"),T=n("40dc"),x=n("8336"),j=n("a75b"),I=n("0e8f"),U=n("553a"),O=n("a722"),P=n("2fa4"),R=n("2a7f"),D=Object(v["a"])(S,s,c,!1,null,null,null),V=D.exports;L()(D,{VApp:w["a"],VAppBar:T["a"],VBtn:x["a"],VContent:j["a"],VFlex:I["a"],VFooter:U["a"],VLayout:O["a"],VSpacer:P["a"],VToolbarTitle:R["a"]});var N=n("8c4f"),H=n("07a4"),F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},q=[],B=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-layout",{attrs:{"text-center":"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-img",{staticClass:"my-3",attrs:{src:n("9b19"),contain:"",height:"200"}})],1),r("v-flex",{attrs:{"mb-4":""}},[r("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("Welcome to Vuetify")]),r("p",{staticClass:"subheading font-weight-regular"},[t._v("\n        For help and collaboration with other Vuetify developers,\n        "),r("br"),t._v("please join our online\n        "),r("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),r("v-flex",{attrs:{"mb-5":"",xs12:""}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("What's next?")]),r("v-layout",{attrs:{"justify-center":""}},t._l(t.whatsNext,function(e,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(t._s(e.text))])}),0)],1),r("v-flex",{attrs:{xs12:"","mb-5":""}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),r("v-layout",{attrs:{"justify-center":""}},t._l(t.importantLinks,function(e,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(t._s(e.text))])}),0)],1),r("v-flex",{attrs:{xs12:"","mb-5":""}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),r("v-layout",{attrs:{"justify-center":""}},t._l(t.ecosystem,function(e,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(t._s(e.text))])}),0)],1)],1)],1)},K=[],M={data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},$=M,J=n("a523"),W=n("adda"),Y=Object(v["a"])($,B,K,!1,null,null,null),z=Y.exports;L()(Y,{VContainer:J["a"],VFlex:I["a"],VImg:W["a"],VLayout:O["a"]});var G={name:"home",components:{HelloWorld:z}},Q=G,X=Object(v["a"])(Q,F,q,!1,null,null,null),Z=X.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Oops!")]),n("h3",[t._v("The "+t._s(t.resource)+" you're looking for is not here.")]),n("router-link",{attrs:{to:{name:"home"}}},[t._v("Back to the home page")])],1)},et=[],nt={props:{resource:{type:String,required:!0}}},rt=nt,ot=Object(v["a"])(rt,tt,et,!1,null,null,null),at=ot.exports,it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Uh-Oh!")]),n("h3",[t._v("\n    It looks like you're experiencing some network issues, please click the\n    back button and try again.\n  ")]),n("router-link",{attrs:{to:{name:"home"}}},[t._v("Or go back to the home page")])],1)},st=[],ct={},ut=Object(v["a"])(ct,it,st,!1,null,null,null),ft=ut.exports;r["a"].use(N["a"]);var lt=new N["a"]({mode:"history",routes:[{path:"/",name:"home",component:Z,meta:{requiresAuth:!1}},{path:"/about",name:"about",meta:{requiresAuth:!1},component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/login",name:"login",meta:{requiresAuth:!1},component:function(){return Promise.all([n.e("chunk-7eff4242"),n.e("chunk-e47f1e20")]).then(n.bind(null,"a55b"))}},{path:"/dashboard",name:"dashboard",meta:{requiresAuth:!0},component:function(){return Promise.all([n.e("chunk-7eff4242"),n.e("chunk-1f2b2fd1"),n.e("chunk-232d1eb8")]).then(n.bind(null,"7277"))}},{path:"/checklists",beforeEnter:function(t,e,n){H["a"].dispatch("auth/getFromLocal").then(function(){var t=H["a"].getters["auth/ownerId"];n({name:"checklists",params:{ownerId:t}})}).catch(function(){n({name:"login"})})}},{path:"/checklists/:ownerId",name:"checklists",meta:{requiresAuth:!0},component:function(){return Promise.all([n.e("chunk-7eff4242"),n.e("chunk-1f2b2fd1"),n.e("chunk-cb223572")]).then(n.bind(null,"7f53"))},beforeEnter:function(t,e,n){H["a"].dispatch("checklist/fetchAll",t.params.ownerId).then(function(e){t.params.checklists=e,n()}).catch(function(t){t.response&&404==t.response.status?n({name:"404",params:{resource:"checklist"}}):n({name:"network-issue"})})}},{path:"/404",name:"404",meta:{requiresAuth:!1},component:at,props:!0},{path:"/network-issue",name:"network-issue",meta:{requiresAuth:!1},component:ft},{path:"*",redirect:{name:"404",params:{resource:"page"}}}]});lt.beforeEach(function(t,e,n){if(t.matched.some(function(t){return t.meta.requiresAuth})){var r=JSON.parse(localStorage.getItem("user")).email;H["a"].dispatch("auth/getUser",r).then(function(){n()}).catch(function(){n({name:"login"})})}else n()});var dt=lt,ht=(n("a5d8"),n("ed18")),pt=n.n(ht);pt.a.config(),r["a"].config.productionTip=!1,new r["a"]({vuetify:i,router:dt,store:H["a"],render:function(t){return t(V)}}).$mount("#app")},"5bb7":function(t,e,n){},"9b19":function(t,e,n){t.exports=n.p+"img/logo.63a7d78d.svg"},b012:function(t,e,n){"use strict";(function(t){var r=n("bc3a"),o=n.n(r),a=n("07a4"),i=Object({VUE_APP_API_VERSION:"v1",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_URL||t+"/api/v1",s={baseURL:i,withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"},timeout:1e4},c=o.a.create(s),u=function(t){var e=a["a"].getters["auth/token"];return e&&(t.headers.Authorization="Bearer ".concat(e)),t},f=function(t){return t};c.interceptors.request.use(u),c.interceptors.request.use(f),e["a"]={postLogin:function(t){return c.post("/auth/login",t)}}}).call(this,"/")},c26c:function(t,e,n){"use strict";var r=n("09e8"),o=n.n(r);o.a},f581:function(t,e,n){"use strict";var r=n("5bb7"),o=n.n(r);o.a},fbe1:function(t,e,n){"use strict";(function(t){var r=n("bc3a"),o=n.n(r),a=n("07a4"),i=Object({VUE_APP_API_VERSION:"v1",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_URL||t+"/api/v1",s={baseURL:i,withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"},timeout:1e4},c=o.a.create(s),u=function(t){var e=a["a"].getters["auth/token"];return e&&(t.headers.Authorization="Bearer ".concat(e)),t},f=function(t){return t};c.interceptors.request.use(u),c.interceptors.request.use(f),e["a"]={getChecklists:function(t){return c.get("/checklists?ownerId="+t)},postChecklist:function(t){return c.post("/checklists",t)},putChecklist:function(t){return c.put("/checklists/"+t._id,t)}}}).call(this,"/")}});
//# sourceMappingURL=app.a7d5584a.js.map