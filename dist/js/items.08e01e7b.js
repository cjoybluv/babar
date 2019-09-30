(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["items"],{"0fd9":function(t,e,n){"use strict";n("4b85");var i=n("2b0e"),s=n("d9f7"),a=n("80d2");const l=["sm","md","lg","xl"],r=["start","end","center"];function o(t,e){return l.reduce((n,i)=>{return n[t+Object(a["B"])(i)]=e(),n},{})}const c=t=>[...r,"baseline","stretch"].includes(t),d=o("align",()=>({type:String,default:null,validator:c})),u=t=>[...r,"space-between","space-around"].includes(t),f=o("justify",()=>({type:String,default:null,validator:u})),h=t=>[...r,"space-between","space-around","stretch"].includes(t),g=o("alignContent",()=>({type:String,default:null,validator:h})),p={align:Object.keys(d),justify:Object.keys(f),alignContent:Object.keys(g)},w={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,n){let i=w[t];if(null!=n){if(e){const n=e.replace(t,"");i+=`-${n}`}return i+=`-${n}`,i.toLowerCase()}}const v=new Map;e["a"]=i["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:u},...f,alignContent:{type:String,default:null,validator:h},...g},render(t,{props:e,data:n,children:i}){let a="";for(const s in e)a+=String(e[s]);let l=v.get(a);if(!l){let t;for(t in l=[],p)p[t].forEach(n=>{const i=e[n],s=y(t,n,i);s&&l.push(s)});l.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),v.set(a,l)}return t(e.tag,Object(s["a"])(n,{staticClass:"row",class:l}),i)}})},"62ad":function(t,e,n){"use strict";n("4b85");var i=n("2b0e"),s=n("d9f7"),a=n("80d2");const l=["sm","md","lg","xl"],r=(()=>{return l.reduce((t,e)=>{return t[e]={type:[Boolean,String,Number],default:!1},t},{})})(),o=(()=>{return l.reduce((t,e)=>{return t["offset"+Object(a["B"])(e)]={type:[String,Number],default:null},t},{})})(),c=(()=>{return l.reduce((t,e)=>{return t["order"+Object(a["B"])(e)]={type:[String,Number],default:null},t},{})})(),d={col:Object.keys(r),offset:Object.keys(o),order:Object.keys(c)};function u(t,e,n){let i=t;if(null!=n&&!1!==n){if(e){const n=e.replace(t,"");i+=`-${n}`}return"col"!==t||""!==n&&!0!==n?(i+=`-${n}`,i.toLowerCase()):i.toLowerCase()}}const f=new Map;e["a"]=i["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...r,offset:{type:[String,Number],default:null},...o,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:n,children:i,parent:a}){let l="";for(const s in e)l+=String(e[s]);let r=f.get(l);if(!r){let t;for(t in r=[],d)d[t].forEach(n=>{const i=e[n],s=u(t,n,i);s&&r.push(s)});const n=r.some(t=>t.startsWith("col-"));r.push({col:!n||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),f.set(l,r)}return t(e.tag,Object(s["a"])(n,{class:r}),i)}})},"6e69":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",{staticClass:"d-none d-sm-flex",attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12",sm:"5",md:"3"}},[n("v-sheet",{staticClass:"primary pa-2",attrs:{tile:"","min-height":t.window.height-t.window.heightReduction}},[n("h1",{staticClass:"headline white--text"},[t._v("Welcome to Checklists")]),n("v-spacer"),n("p",{staticClass:"body-2 white--text"},[t._v("\n          After you have saved checklists, they will be displayed in this\n          panel.\n        ")]),n("p",{staticClass:"body-2 white--text"},[t._v("\n          Use the panel to the right to create a checklist.\n        ")])],1)],1),n("v-col",{attrs:{cols:"12",sm:"7",md:"5"}},[n("v-sheet",{staticClass:"primary lighten-1",attrs:{tile:"","min-height":t.window.height-t.window.heightReduction}},[n("h1",[t._v("panel[1]")])])],1),n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-sheet",{staticClass:"primary lighten-2",attrs:{tile:"","min-height":t.window.height-t.window.heightReduction}})],1)],1)],1)},s=[],a={name:"checklists",components:{},data:function(){return{window:{width:0,height:0,heightReduction:0}}},methods:{handleResize:function(){this.window.width=window.innerWidth,this.window.height=window.innerHeight}},created:function(){window.addEventListener("resize",this.handleResize),this.handleResize()},destroyed:function(){window.removeEventListener("resize",this.handleResize)}},l=a,r=(n("beac"),n("2877")),o=n("6544"),c=n.n(o),d=n("62ad"),u=n("0fd9"),f=n("8dd9"),h=n("2fa4"),g=Object(r["a"])(l,i,s,!1,null,null,null);e["default"]=g.exports;c()(g,{VCol:d["a"],VRow:u["a"],VSheet:f["a"],VSpacer:h["a"]})},beac:function(t,e,n){"use strict";var i=n("fd9e"),s=n.n(i);s.a},fd9e:function(t,e,n){}}]);
//# sourceMappingURL=items.08e01e7b.js.map