(window.webpackJsonp=window.webpackJsonp||[]).push([[9,6,7,8],{246:function(t,e,r){var content=r(254);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(66).default)("383177ea",content,!0,{sourceMap:!1})},252:function(t,e,r){t.exports=r.p+"videos/theWay.57b4d73.mp4"},253:function(t,e,r){"use strict";r(246)},254:function(t,e,r){var o=r(65)(!1);o.push([t.i,'.myGrid{display:grid;width:100vw;height:100vh;grid-template-columns:30% 40% 30%;grid-template-rows:repeat(3,33%);grid-template-areas:"orange cyan red1" "orange indigo2 red2" "yellow indigo2 .";grid-gap:.3rem;justify-items:stretch;align-items:stretch}.orange{grid-area:orange}.indigo{grid-area:indigo}.red1,.red2{grid-area:red}.yellow{grid-area:#ff0}.cyan{grid-area:#0ff}@media only screen and (max-width:960px){.myGrid{width:100vw;height:100vh;grid-template-columns:100%;grid-template-rows:repeat(7,14.3%);grid-template-areas:"oranage" "yellow" "cyan" "indigo2" "red1" "red2" "red3"}}',""]),t.exports=o},267:function(t,e,r){t.exports=r.p+"img/trippieredd.92dd3c6.png"},268:function(t,e,r){"use strict";r.r(e);var o={},n=r(56),l=r(241),c=r.n(l),d=r(319),f=(r(244),r(245)),v=Object(f.a)("flex"),m=Object(f.a)("layout"),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-container",[o("v-layout",{attrs:{row:""}},[o("v-flex",{attrs:{xs12:"",md6:""}},[o("img",{staticStyle:{"text-align":"left"},attrs:{height:"100%",width:"100%",src:r(267),alt:""}})]),t._v(" "),o("v-flex")],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VContainer:d.a,VFlex:v,VLayout:m})},269:function(t,e,r){"use strict";r.r(e);r(58);var o={data:function(){return{interval:{},audio:void 0,isPlaying:!1,value:0,setSong:void 0,lorem:"Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.",songs:[{color:"orange",id:1,title:"Tomb Stone",album:"",url:"https://drive.google.com/uc?export=download&id=1Rvybbfj5KDks15M_NYyx_qpXLlJhmThM"},{color:"yellow",title:"Love Me More",album:"",url:"https://drive.google.com/uc?export=download&id=1PpzXwxf4ibqC-glQovXsP7qI7z5woQiC"},{color:"cyan",id:3,title:"Wet Dreamz",album:"",url:"https://drive.google.com/uc?export=download&id=19v1iWSOud5tt16muoKG3fc55X8gTt_-4"},{color:"indigo",id:4,title:"Love",album:"",url:"https://drive.google.com/uc?export=download&id=1gRvnYa-O8gPwcq58nceBwIwDJv2Rb_uF"},{color:"red1",id:5,title:"Pop It",album:"",url:"https://drive.google.com/uc?export=download&id=1HOS3PMzC1UF19DxF-NQFWgbtB4bwC-BQ"},{color:"red2",id:6,title:"Rich Forever",album:"",url:"https://drive.google.com/uc?export=download&id=1fQ-_5vto1bZPCXBN41tNFyJ2FgemHCRu"}]}},methods:{playSong:function(t,e){var r=this;!1===this.isPlaying&&(this.audio=new Audio(t),this.audio.play(),this.interval=setInterval((function(){if(100===Math.ceil(r.value))return r.pause(t,e),r.value=0;r.value+=3.33,console.log(Math.ceil(r.value))}),1e3)),this.isPlaying=!0,this.setSong=e,console.log(this.isPlaying,t)},pause:function(t,e){this.setSong===e?(this.audio.pause(),this.isPlaying=!1,clearInterval(this.interval),this.value=0):(console.log("play the new song and send the id"),this.audio.pause(),this.isPlaying=!1,clearInterval(this.interval),this.value=0,this.playSong(t,e))}}},n=(r(253),r(56)),l=r(241),c=r.n(l),d=r(367),f=r(319),v=r(300),m=r(275),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("v-container",{staticClass:"myGrid"},t._l(t.songs,(function(e){return r("v-card",{key:e.id,class:e.color,attrs:{color:e.color+"lighten-2",tile:"",flat:"",width:"100%",height:"100%"},on:{click:function(r){t.isPlaying?t.pause(e.url,e.id):t.playSong(e.url,e.id)}}},[r("v-img",{staticClass:"card-img",attrs:{src:e.cover_art_url,width:"inherit",height:"inherit"}},[e.id===t.setSong?r("div",{class:e.id},[t.isPlaying?r("v-progress-circular",{class:e.id,staticStyle:{margin:"0",position:"absolute","progress-circular-rotate-animation":"progress-circular-rotate 0.5 linear infinite !default",top:"50%",left:"50%","-ms-transform":"translate(-50%, -50%)",transform:"translate(-50%, -50%)"},attrs:{rotate:360,size:200,width:15,value:t.value,color:"red accent-3"}},[r("font-awesome-icon",{staticClass:" fa-4x ",attrs:{icon:["fas","stop"]}})],1):t._e()],1):t._e()])],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:d.a,VContainer:f.a,VImg:v.a,VProgressCircular:m.a})},270:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{drawer:!1,group:null}},watch:{group:function(){this.drawer=!1}}},n=r(56),l=r(241),c=r.n(l),d=r(368),f=r(369),v=r(363),m=r(295),h=r(266),y=r(302),w=r(242),x=r(365),_=r(364),k=r(297),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-app-bar",{attrs:{fixed:"",color:"transparent"},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[r("v-row",[r("v-col",{attrs:{cols:"2"}},[r("v-app-bar-nav-icon",{staticClass:"vertical-center"})],1),t._v(" "),r("v-col",{staticClass:"d-flex justify-space-around"},[r("v-toolbar-title",{staticClass:"vertical-center"},[r("h1",[t._v("Trippie Redd")])])],1),t._v(" "),r("v-col",{staticClass:"d-flex justify-end",attrs:{cols:"2"}},[r("span",{staticClass:"fa-2x ",on:{click:function(e){return t.redirect("https://www.instagram.com/trippieredd/?hl=en")}}},[r("font-awesome-icon",{staticClass:"fab",attrs:{color:"purple",icon:["fab","instagram"]}})],1),t._v(" "),r("span",{staticClass:" fa-2x ",on:{click:function(e){return t.redirect("https://www.youtube.com/channel/UCstw-41J8syXgdJ8xWvaizA")}}},[r("font-awesome-icon",{attrs:{color:"red",icon:["fab","youtube"]}})],1),t._v(" "),r("span",{staticClass:" fa-2x ",on:{click:function(e){return t.redirect("https://twitter.com/trippieredd?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor")}}},[r("font-awesome-icon",{attrs:{color:"rgb(29, 161, 242)",icon:["fab","twitter"]}})],1),t._v(" "),r("span",{staticClass:" fa-2x ",on:{click:function(e){return t.redirect("https://open.spotify.com/artist/6Xgp2XMz1fhVYe7i6yNAax")}}},[r("font-awesome-icon",{attrs:{color:"green",icon:["fab","spotify"]}})],1),t._v(" "),r("span",{staticClass:" fa-2x ",on:{click:function(e){return t.redirect("https://www.facebook.com/TrippieRedd/")}}},[r("font-awesome-icon",{attrs:{color:"blue",icon:["fab","facebook"]}})],1),t._v(" "),r("span",{staticClass:" fa-2x ",on:{click:function(e){return t.redirect("https://soundcloud.com/trippie-hippie-2")}}},[r("font-awesome-icon",{attrs:{color:"orange",icon:["fab","soundcloud"]}})],1)])],1)],1),t._v(" "),r("v-navigation-drawer",{attrs:{absolute:"",bottom:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",{attrs:{nav:"",dense:""}},[r("v-list-item-group",{attrs:{"active-class":"deep-purple--text text--accent-4"},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},[r("v-list-item",[r("v-list-item-title",[t._v("Foo")])],1),t._v(" "),r("v-list-item",[r("v-list-item-title",[t._v("Bar")])],1),t._v(" "),r("v-list-item",[r("v-list-item-title",[t._v("Fizz")])],1),t._v(" "),r("v-list-item",[r("v-list-item-title",[t._v("Buzz")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VAppBar:d.a,VAppBarNavIcon:f.a,VCol:v.a,VList:m.a,VListItem:h.a,VListItemGroup:y.a,VListItemTitle:w.a,VNavigationDrawer:x.a,VRow:_.a,VToolbarTitle:k.a})},298:function(t,e,r){var content=r(355);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(66).default)("1b7833da",content,!0,{sourceMap:!1})},299:function(t,e,r){"use strict";r.r(e);var o={},n=r(56),component=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("video",{attrs:{width:"100%",height:"auto",muted:"",loop:"",autoplay:"",src:r(252),type:"video/mp4"},domProps:{muted:!0}})])}),[],!1,null,null,null);e.default=component.exports},307:function(t,e,r){(function(e){const{resolve:o}=r(308);t.exports=async function(t){const r=Object.assign({component:"",suffix:"",imports:[]},this.options.fontawesome,t);r.component&&!r.suffix||(r.suffix="-icon"),r.component=r.component||"font-awesome",this.options.css.unshift("@fortawesome/fontawesome-svg-core/styles.css"),this.addPlugin({src:o(e,"./templates/plugin.js"),options:r})}}).call(this,"/")},308:function(t,e,r){(function(t){function r(t,e){for(var r=0,i=t.length-1;i>=0;i--){var o=t[i];"."===o?t.splice(i,1):".."===o?(t.splice(i,1),r++):r&&(t.splice(i,1),r--)}if(e)for(;r--;r)t.unshift("..");return t}function filter(t,e){if(t.filter)return t.filter(e);for(var r=[],i=0;i<t.length;i++)e(t[i],i,t)&&r.push(t[i]);return r}e.resolve=function(){for(var e="",o=!1,i=arguments.length-1;i>=-1&&!o;i--){var path=i>=0?arguments[i]:t.cwd();if("string"!=typeof path)throw new TypeError("Arguments to path.resolve must be strings");path&&(e=path+"/"+e,o="/"===path.charAt(0))}return(o?"/":"")+(e=r(filter(e.split("/"),(function(p){return!!p})),!o).join("/"))||"."},e.normalize=function(path){var t=e.isAbsolute(path),n="/"===o(path,-1);return(path=r(filter(path.split("/"),(function(p){return!!p})),!t).join("/"))||t||(path="."),path&&n&&(path+="/"),(t?"/":"")+path},e.isAbsolute=function(path){return"/"===path.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(filter(t,(function(p,t){if("string"!=typeof p)throw new TypeError("Arguments to path.join must be strings");return p})).join("/"))},e.relative=function(t,r){function o(t){for(var e=0;e<t.length&&""===t[e];e++);for(var r=t.length-1;r>=0&&""===t[r];r--);return e>r?[]:t.slice(e,r-e+1)}t=e.resolve(t).substr(1),r=e.resolve(r).substr(1);for(var n=o(t.split("/")),l=o(r.split("/")),c=Math.min(n.length,l.length),d=c,i=0;i<c;i++)if(n[i]!==l[i]){d=i;break}var f=[];for(i=d;i<n.length;i++)f.push("..");return(f=f.concat(l.slice(d))).join("/")},e.sep="/",e.delimiter=":",e.dirname=function(path){if("string"!=typeof path&&(path+=""),0===path.length)return".";for(var code=path.charCodeAt(0),t=47===code,e=-1,r=!0,i=path.length-1;i>=1;--i)if(47===(code=path.charCodeAt(i))){if(!r){e=i;break}}else r=!1;return-1===e?t?"/":".":t&&1===e?"/":path.slice(0,e)},e.basename=function(path,t){var e=function(path){"string"!=typeof path&&(path+="");var i,t=0,e=-1,r=!0;for(i=path.length-1;i>=0;--i)if(47===path.charCodeAt(i)){if(!r){t=i+1;break}}else-1===e&&(r=!1,e=i+1);return-1===e?"":path.slice(t,e)}(path);return t&&e.substr(-1*t.length)===t&&(e=e.substr(0,e.length-t.length)),e},e.extname=function(path){"string"!=typeof path&&(path+="");for(var t=-1,e=0,r=-1,o=!0,n=0,i=path.length-1;i>=0;--i){var code=path.charCodeAt(i);if(47!==code)-1===r&&(o=!1,r=i+1),46===code?-1===t?t=i:1!==n&&(n=1):-1!==t&&(n=-1);else if(!o){e=i+1;break}}return-1===t||-1===r||0===n||1===n&&t===r-1&&t===e+1?"":path.slice(t,r)};var o="b"==="ab".substr(-1)?function(t,e,r){return t.substr(e,r)}:function(t,e,r){return e<0&&(e=t.length+e),t.substr(e,r)}}).call(this,r(185))},354:function(t,e,r){"use strict";r(298)},355:function(t,e,r){var o=r(65)(!1);o.push([t.i,'span{padding:10px}.vertical-center{font-family:"Winter";font:12;margin:0;position:absolute;top:50%;transform:translateY(-50%)}.fab{background:radial-gradient(circle at 30%,at 107%,#fdf497 0,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285aeb 90%);background:radial-gradient(circle at 30% 107%,#fdf497 0,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285aeb 90%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.v-btn:hover:before{opacity:0!important}@media only screen and (max-width:767px){.v-footer{background:orange;bottom:0;width:100vw;margin-bottom:0}}',""]),t.exports=o},356:function(t,e,r){var content=r(357);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(66).default)("3d49e0e5",content,!0,{sourceMap:!1})},357:function(t,e,r){var o=r(65)(!1);o.push([t.i,".theme--light.v-application{background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-application .text--primary{color:rgba(0,0,0,.87)!important}.theme--light.v-application .text--secondary{color:rgba(0,0,0,.6)!important}.theme--light.v-application .text--disabled{color:rgba(0,0,0,.38)!important}.theme--dark.v-application{background:#121212;color:#fff}.theme--dark.v-application .text--primary{color:#fff!important}.theme--dark.v-application .text--secondary{color:hsla(0,0%,100%,.7)!important}.theme--dark.v-application .text--disabled{color:hsla(0,0%,100%,.5)!important}.v-application{display:flex}.v-application a{cursor:pointer}.v-application--is-rtl{direction:rtl}.v-application--wrap{flex:1 1 auto;-webkit-backface-visibility:hidden;backface-visibility:hidden;display:flex;flex-direction:column;min-height:100vh;max-width:100%;position:relative}@-moz-document url-prefix(){@media print{.v-application,.v-application--wrap{display:block}}}",""]),t.exports=o},358:function(t,e,r){var content=r(359);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(66).default)("424d9537",content,!0,{sourceMap:!1})},359:function(t,e,r){var o=r(65)(!1);o.push([t.i,".v-main{display:flex;flex:1 0 auto;max-width:100%;transition:.2s cubic-bezier(.4,0,.2,1)}.v-main:not([data-booted=true]){transition:none!important}.v-main__wrap{flex:1 1 auto;max-width:100%;position:relative}@-moz-document url-prefix(){@media print{.v-main{display:block}}}",""]),t.exports=o},366:function(t,e,r){"use strict";r.r(e);r(307);var o=r(299),n=r(269),l=r(270),c=r(268),d={components:{UnreleasedVault:n.default,IntroVideo:o.default,Appbar:l.default,About:c.default},methods:{redirect:function(link){window.location=link}}},f=(r(354),r(56)),v=r(241),m=r.n(v),h=(r(29),r(22),r(32),r(47),r(23),r(48),r(12)),y=(r(356),r(240)),w=r(236);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var k=Object(w.a)(y.a).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark:function(){return this.$vuetify.theme.dark}},beforeCreate:function(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render:function(t){var e=t("div",{staticClass:"v-application--wrap"},this.$slots.default);return t("div",{staticClass:"v-application",class:_({"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl},this.themeClasses),attrs:{"data-app":!0},domProps:{id:this.id}},[e])}}),C=(r(358),r(264).a.extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,e=t.bar,r=t.top,o=t.right,footer=t.footer,n=t.insetFooter,l=t.bottom,c=t.left;return{paddingTop:"".concat(r+e,"px"),paddingRight:"".concat(o,"px"),paddingBottom:"".concat(footer+n+l,"px"),paddingLeft:"".concat(c,"px")}}},render:function(t){var data={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,data,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("Appbar"),t._v(" "),r("v-main",{staticClass:"v-main"},[r("IntroVideo"),t._v(" "),r("About"),t._v(" "),r("section",[r("UnreleasedVault")],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{Appbar:r(270).default,About:r(268).default,UnreleasedVault:r(269).default}),m()(component,{VApp:k,VMain:C})}}]);