(function(e){function n(n){for(var r,c,a=n[0],i=n[1],s=n[2],l=0,d=[];l<a.length;l++)c=a[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(n);while(d.length)d.shift()();return u.push.apply(u,s||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,c=1;c<t.length;c++){var i=t[c];0!==o[i]&&(r=!1)}r&&(u.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},o={app:0},u=[];function c(e){return a.p+"js/"+({}[e]||e)+"."+{"chunk-24180508":"8794eca6","chunk-2d0a406d":"0df777c4","chunk-2d0b306f":"8983320d","chunk-2d0ccb96":"50b6716d","chunk-2d20fefa":"2b05bb2b","chunk-2d213b39":"951ef3f2","chunk-2d22258a":"aaffce84","chunk-2d222715":"3f8b1575","chunk-2d222cfc":"3cf144b3","chunk-2d22500a":"551bfa11"}[e]+".js"}function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var u,i=document.createElement("script");i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.src=c(e);var s=new Error;u=function(n){i.onerror=i.onload=null,clearTimeout(l);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+u+")",s.name="ChunkLoadError",s.type=r,s.request=u,t[1](s)}o[e]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:i})}),12e4);i.onerror=i.onload=u,document.head.appendChild(i)}return Promise.all(n)},a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/",a.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var f=s;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"2fb4":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},u=[],c=(t("5c0b"),t("2877")),a={},i=Object(c["a"])(a,o,u,!1,null,null,null),s=i.exports,l=(t("45fc"),t("d3b7"),t("8c4f")),f=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"home"},[t("Header",{class:e.defaultClass.common}),t("Introduction",{class:e.defaultClass.section}),t("Profile",{class:e.defaultClass.section}),t("Skill",{class:e.defaultClass.section}),t("Experience",{class:e.defaultClass.section}),t("Achievement",{class:e.defaultClass.section}),t("About",{class:e.defaultClass.section}),t("Footer",{class:e.defaultClass.common}),t("Menu")],1)},d=[],p={name:"Home",components:{Header:function(){return t.e("chunk-2d0ccb96").then(t.bind(null,"4ec2"))},Introduction:function(){return t.e("chunk-2d22500a").then(t.bind(null,"e317"))},Profile:function(){return t.e("chunk-2d0a406d").then(t.bind(null,"054f"))},Skill:function(){return t.e("chunk-2d222715").then(t.bind(null,"cf40"))},Experience:function(){return t.e("chunk-2d20fefa").then(t.bind(null,"b66f"))},Achievement:function(){return t.e("chunk-2d213b39").then(t.bind(null,"ae98"))},About:function(){return t.e("chunk-2d0b306f").then(t.bind(null,"272f"))},Footer:function(){return t.e("chunk-2d22258a").then(t.bind(null,"cde8"))},Menu:function(){return t.e("chunk-2d222cfc").then(t.bind(null,"cfcf"))}},data:function(){return{defaultClass:{section:"content-section",common:"common-section"}}}},h=p,m=Object(c["a"])(h,f,d,!1,null,null,null),b=m.exports,v=t("260b"),g=(t("ea7b"),t("e71f"),{apiKey:"AIzaSyDp5CllsguF5MVFRAGlrpxLUqoPpkGWv2M",authDomain:"my-portfolio-db-a948d.firebaseapp.com",databaseURL:"https://my-portfolio-db-a948d.firebaseio.com",projectId:"my-portfolio-db-a948d",storageBucket:"my-portfolio-db-a948d.appspot.com",messagingSenderId:"43372862185",appId:"1:43372862185:web:757c9dc20a16eac9b9ee78",measurementId:"G-3L6N507NGX"});v["a"].initializeApp(g);var k=v["a"].firestore(),w=v["a"].auth(),y=k.collection("users").doc("q2YEnXADuqmNI66R7BW1");r["default"].use(l["a"]);var P=[{path:"/",name:"Login",component:function(){return t.e("chunk-24180508").then(t.bind(null,"a55b"))}},{path:"/home",name:"Home",component:b,meta:{requiresAuth:!0}}],j=new l["a"]({mode:"history",routes:P});j.beforeEach((function(e,n,t){var r=e.matched.some((function(e){return e.meta.requiresAuth}));r&&!w.currentUser?t("/"):t()}));var x=j,O=(t("96cf"),t("1da1")),C=t("2f62");r["default"].use(C["a"]);var A,S=new C["a"].Store({state:{userProfile:{},websiteInfo:{name:"iAmKean.github.io",url:"https://iamkean.github.io/",owner:"Keanu T. Dela Cruz",year:"2020"}},mutations:{setUserProfile:function(e,n){e.userProfile=n}},actions:{login:function(e,n){return Object(O["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.dispatch,t.next=3,w.signInWithEmailAndPassword(n.email,n.pass).then((function(e){localStorage.setItem("uid",e.user.uid),e&&r("fetchuserProfile")})).catch((function(e){console.log(e)}));case 3:case"end":return t.stop()}}),t)})))()},logout:function(e){return Object(O["a"])(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t=e.commit,n.next=3,w.signOut();case 3:localStorage.removeItem("uid"),t("setUserProfile",{});case 5:case"end":return n.stop()}}),n)})))()},fetchuserProfile:function(e){return Object(O["a"])(regeneratorRuntime.mark((function n(){var t,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t=e.commit,r=y,r.get().then((function(e){e.exists?(t("setUserProfile",e),x.push("/home")):console.log("No such document!")})).catch((function(e){console.log("Error getting document:",e)}));case 3:case"end":return n.stop()}}),n)})))()}},modules:{}}),I=(t("e829"),t("5c96")),E=t.n(I);t("0fae"),t("2fb4");r["default"].config.productionTip=!1,r["default"].use(E.a),w.onAuthStateChanged((function(){A||(A=new r["default"]({router:x,store:S,render:function(e){return e(s)}}).$mount("#app"))}))},"5c0b":function(e,n,t){"use strict";t("9c0c")},"9c0c":function(e,n,t){}});
//# sourceMappingURL=app.31d1af20.js.map