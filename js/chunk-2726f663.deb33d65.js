(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2726f663"],{"202f":function(e,t,n){"use strict";var c=n("f427"),o=n.n(c);o.a},a2f1:function(e,t,n){"use strict";n.r(t);var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Header",{attrs:{msg:"主题换肤",back:!0,leftText:"返回"}}),n("van-radio-group",{staticClass:"themes_block",model:{value:e.selectedTheme,callback:function(t){e.selectedTheme=t},expression:"selectedTheme"}},[n("van-cell-group",e._l(e.themeList,(function(t,c){return n("van-cell",{key:c,attrs:{title:t.title+""+(e.getThemeColor==t.color?"(当前)":""),clickable:""},on:{click:function(t){return e.changeTheme(c)}},scopedSlots:e._u([{key:"right-icon",fn:function(){return[n("van-radio",{attrs:{name:""+c}})]},proxy:!0}],null,!0)})})),1)],1)],1)},o=[],r=(n("c740"),n("d4ec")),i=n("bee2"),a=n("262e"),l=n("2caf"),s=n("9ab4"),u=n("0418"),h=n("60a3"),f=function(e){Object(a["a"])(n,e);var t=Object(l["a"])(n);function n(){var e;return Object(r["a"])(this,n),e=t.apply(this,arguments),e.selectedTheme="",e.themeList=[{title:"经典蓝",color:"classic-blue"},{title:"经典红",color:"classic-red"},{title:"尊贵黑金",color:"noble-black-gold"},{title:"简约白金",color:"simple-platinum"}],e}return Object(i["a"])(n,[{key:"filterTheme",value:function(){var e=this,t=this.themeList.findIndex((function(t){return t.color==e.getThemeColor}));return t}},{key:"changeTheme",value:function(e){this.selectedTheme="".concat(e),this.$store.dispatch("setThemeSkin",this.themeList[e].color)}},{key:"created",value:function(){this.selectedTheme="".concat(this.filterTheme())}},{key:"getThemeColor",get:function(){return this.$store.state.themeColor}}]),n}(h["d"]);f=Object(s["a"])([Object(h["a"])({components:{Header:u["a"]}})],f);var d=f,m=d,b=(n("202f"),n("2877")),p=Object(b["a"])(m,c,o,!1,null,"4bd25498",null);t["default"]=p.exports},c740:function(e,t,n){"use strict";var c=n("23e7"),o=n("b727").findIndex,r=n("44d2"),i=n("ae40"),a="findIndex",l=!0,s=i(a);a in[]&&Array(1)[a]((function(){l=!1})),c({target:"Array",proto:!0,forced:l||!s},{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),r(a)},f427:function(e,t,n){}}]);
//# sourceMappingURL=chunk-2726f663.deb33d65.js.map