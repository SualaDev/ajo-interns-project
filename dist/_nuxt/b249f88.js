(window.webpackJsonp=window.webpackJsonp||[]).push([[33,15,16,19,20,21,23,24],{300:function(t,e,o){var content=o(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(66).default)("60156d58",content,!0,{sourceMap:!1})},301:function(t,e,o){"use strict";o.r(e);var r={name:"TheButton",props:{title:String,value:String},data:function(){return{}}},n=(o(302),o(36)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"button",class:t.value},[o("p",[t._v(t._s(t.title))])])}),[],!1,null,"2b3d5997",null);e.default=component.exports},302:function(t,e,o){"use strict";o(300)},303:function(t,e,o){var r=o(65)(!1);r.push([t.i,'*[data-v-2b3d5997]{font-family:"Noto Sans",sans-serif}body[data-v-2b3d5997]{position:relative}.button[data-v-2b3d5997]{font-family:"AirbnbCereal_W_lt";font-size:14px;display:flex;align-items:center;justify-content:center;border-radius:56px;height:34px;grid-gap:10px;gap:10px;transition:all .25s ease}.button p[data-v-2b3d5997]{margin:0;display:flex;flex-direction:row}.whiteBgLg[data-v-2b3d5997]{background-color:#fff;color:#041a7a;width:364px;height:56px}.whiteBgLg[data-v-2b3d5997]:hover{transform:scale(1.02);border:1px solid #fcf300;background-color:transparent;color:#fcf300}.yellowBgLg[data-v-2b3d5997]{background-color:#fcf300;color:#041a7a;width:364px;height:56px}.yellowBgLg[data-v-2b3d5997]:hover{transform:scale(1.02);border:1px solid #041a7a;background-color:transparent;color:#041a7a}',""]),t.exports=r},304:function(t,e,o){var content=o(315);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(66).default)("b3fe8fb8",content,!0,{sourceMap:!1})},307:function(t,e,o){var content=o(329);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(66).default)("82f1df7c",content,!0,{sourceMap:!1})},308:function(t,e,o){t.exports=o.p+"img/error.03628b6.png"},309:function(t,e,o){var content=o(331);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(66).default)("0dfd6a04",content,!0,{sourceMap:!1})},310:function(t,e,o){var content=o(333);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(66).default)("3552a0b5",content,!0,{sourceMap:!1})},314:function(t,e,o){"use strict";o(304)},315:function(t,e,o){var r=o(65)(!1);r.push([t.i,'*{font-family:"Noto Sans",sans-serif}.nav,body{position:relative}.nav{display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:0 32px;margin-top:45px}.nav svg{color:#9a9400;cursor:pointer}.nav img{width:20px}.nav .page-enter-active,.nav .page-leave-active{transition:opacity 1.5s}.nav .page-enter,.nav .page-leave-active{opacity:0}.drop-container{position:absolute;top:0;width:100%;background-color:#fff;z-index:2;padding-bottom:2rem}.drop-container .drop-header{display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin-top:34px;padding:0 1rem}.drop-container .drop-header .title a{display:flex;flex-direction:row;align-items:center;grid-gap:10px;gap:10px;text-decoration:none}.drop-container .drop-header .title a h1{font-family:"AirbnbCereal_W_Md";color:#041a7a}.drop-container .drop-header .title svg{color:#9a9400;cursor:pointer}.drop-container .drop-header svg{color:#041a7a;cursor:pointer}.drop-container .drop-items{padding:.5rem 1rem;display:flex;flex-direction:column}.drop-container .drop-items a{font-family:"AirbnbCereal_W_lt";color:#393939;padding-bottom:1.5rem;padding-top:.8rem;border-bottom:.5px solid #c7c4c4;text-decoration:none}.drop-container .drop-items .logout{padding-top:15px;color:#041a7a;cursor:pointer}',""]),t.exports=r},321:function(t,e,o){"use strict";o.r(e);var r={data:function(){return{showDropdown:!1}},methods:{toggleDropdown:function(){console.log("tada"),this.showDropdown,this.showDropdown},closeDropDown:function(){this.showDropdown,this.showDropdown},logout:function(){this.$store.commit("setUserDetails",{}),this.$router.push("/"),console.log("User Logged Out")}}},n=(o(314),o(36)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{directives:[{name:"show",rawName:"v-show",value:t.showDropdown,expression:"showDropdown"}],staticClass:"drop-container",staticStyle:{display:"block"}},[o("div",{staticClass:"drop-header"},[o("div",{staticClass:"title"},[o("nuxt-link",{attrs:{to:"/home"}},[o("font-awesome-icon",{attrs:{icon:"dove"}}),t._v(" "),o("h1",[t._v("AJO")])],1)],1),t._v(" "),o("div",[o("font-awesome-icon",{attrs:{icon:"xmark"},on:{click:function(e){t.showDropdown=!t.showDropdown}}})],1)]),t._v(" "),o("div",{staticClass:"drop-items"},[o("nuxt-link",{attrs:{to:"/"}},[t._v("Wishlists")]),t._v(" "),o("nuxt-link",{attrs:{to:"/"}},[t._v("Past Trips")]),t._v(" "),o("nuxt-link",{attrs:{to:"/home"}},[t._v("Home")]),t._v(" "),o("div",{staticClass:"logout",on:{click:t.logout}},[t._v("Log out")])],1)]),t._v(" "),o("div",{staticClass:"nav"},[o("font-awesome-icon",{attrs:{icon:"bars"},on:{click:function(e){t.showDropdown=!t.showDropdown}}}),t._v(" "),o("div",[o("nuxt-link",{attrs:{to:"/"}},[o("svg",{staticClass:"bi bi-person-circle",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[o("path",{attrs:{d:"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"}}),t._v(" "),o("path",{attrs:{"fill-rule":"evenodd",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"}})])])],1)],1)])}),[],!1,null,null,null);e.default=component.exports},327:function(t,e,o){t.exports=o.p+"img/search-icon.61b7acf.svg"},328:function(t,e,o){"use strict";o(307)},329:function(t,e,o){var r=o(65)(!1);r.push([t.i,'*[data-v-e46c9cba]{font-family:"Noto Sans",sans-serif}body[data-v-e46c9cba]{position:relative}.search-container[data-v-e46c9cba]{transition:all .5s ease-in-out}.search-container .search[data-v-e46c9cba]{width:90%;text-align:right}.search-container .search input[data-v-e46c9cba]{position:absolute;left:32px;height:40px;width:90%;background:hsla(0,0%,92.2%,.5);border:.5px solid hsla(0,0%,76.9%,.3);box-shadow:0 1px 5px rgba(0,0,0,.14);box-sizing:border-box;border-radius:32px;padding:0 1.5rem;margin-bottom:24px;margin-top:6px}.search-container .search img[data-v-e46c9cba]{width:20px;margin-top:16px;color:#041a7a}.search-container .options[data-v-e46c9cba]{position:absolute;background:#fff;margin:1rem 1.7rem;width:92%;max-height:300px;overflow:scroll;z-index:3;border-radius:32px}.search-container .options ul[data-v-e46c9cba]{transition:all .5s ease-in-out;margin:0;padding:0 1rem}.search-container .options ul a[data-v-e46c9cba]{text-decoration:none;color:#041a7a}.search-container .options ul li[data-v-e46c9cba]{color:#041a7a;padding:.5rem 1rem;margin:.5rem 0;list-style-type:none}.search-container .options ul li[data-v-e46c9cba]:hover{background:#f4f3f3;border-radius:32px}.search-container .options ul li svg[data-v-e46c9cba]{margin-right:20px}',""]),t.exports=r},330:function(t,e,o){"use strict";o(309)},331:function(t,e,o){var r=o(65)(!1);r.push([t.i,'*[data-v-a9019bfa]{font-family:"Noto Sans",sans-serif}body[data-v-a9019bfa]{position:relative}main[data-v-a9019bfa]{display:flex;flex-direction:column;justify-content:center;align-items:center}main .img-container[data-v-a9019bfa]{padding:1rem 0;margin-top:200px}main .text[data-v-a9019bfa]{color:#041a7a;text-align:center}main .text h1[data-v-a9019bfa]{font-size:25px}main .text p[data-v-a9019bfa]{font-size:14px}main .btn[data-v-a9019bfa]{margin-top:72px;margin-bottom:130px}main a[data-v-a9019bfa]{text-decoration:none}',""]),t.exports=r},332:function(t,e,o){"use strict";o(310)},333:function(t,e,o){var r=o(65)(!1);r.push([t.i,'*[data-v-64a6a336]{font-family:"Noto Sans",sans-serif}body[data-v-64a6a336]{position:relative}.scroll-container[data-v-64a6a336]{position:relative;display:flex;flex-direction:row;overflow:hidden;overflow-x:scroll;padding:0 .5rem}.scroll-container[data-v-64a6a336] ::-webkit-scrollbar{height:0;width:0;background:#fff}.scroll-container[data-v-64a6a336] ::-webkit-scrollbar-thumb:horizontal{background:#fff;border-radius:10px}.scroll-container .scroll-text[data-v-64a6a336]{display:flex;grid-gap:60px;gap:60px;padding:0 .5rem;width:-webkit-max-content;width:-moz-max-content;width:max-content}.scroll-container .scroll-text a[data-v-64a6a336]{text-decoration:none}.scroll-container .scroll-text a p[data-v-64a6a336]{font-family:"AirbnbCereal_W_Lt";color:#1d405a;font-size:14px;font-weight:400;cursor:pointer;width:140px}.scroll-container .scroll-text .yellow[data-v-64a6a336]:after{content:"";position:absolute;height:2px;width:60px;bottom:0;background:#fcf300}.line[data-v-64a6a336]{height:2px;background:#fffee6;max-width:428px}',""]),t.exports=r},334:function(t,e,o){var content=o(359);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(66).default)("62f3717d",content,!0,{sourceMap:!1})},335:function(t,e,o){var content=o(361);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(66).default)("1a12cfeb",content,!0,{sourceMap:!1})},355:function(t,e,o){"use strict";o.r(e);var r=o(46),n=o.n(r),c={data:function(){return{searchResults:[],searchQuery:"",isVisible:!1}},created:function(){var t=this;n.a.get("https://ajo-app.herokuapp.com/api/places/search/popular").then((function(e){t.searchResults=e.data.data})).catch((function(e){console.log(e),t.$toasted.show("Oops.. Something went wrong. Please try again",{type:"success",duration:1500})}))}},l=(o(328),o(36)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search-container",on:{click:function(e){t.isVisible=!t.isVisible}}},[r("div",{staticClass:"search"},[r("input",t._b({staticClass:"input",attrs:{type:"search",placeholder:"search your favorite locations"},on:{mouseover:function(e){t.isVisible=!t.isVisible}}},"input",t.searchQuery,!1)),t._v(" "),r("img",{attrs:{src:o(327),alt:"Search"}})]),t._v(" "),t.isVisible?r("div",{staticClass:"options",on:{mouseleave:function(e){t.isVisible=!t.isVisible}}},t._l(t.searchResults,(function(e,o){return r("ul",{key:o},[r("a",{attrs:{href:"/explore/"+e.fullSearchResult.place_id}},[r("li",[r("font-awesome-icon",{attrs:{icon:"location-arrow"}}),t._v("\n          "+t._s(e.fullSearchResult.formatted_address)+"\n        ")],1)])])})),0):t._e()])}),[],!1,null,"e46c9cba",null);e.default=component.exports},356:function(t,e,o){"use strict";o.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img-container"},[e("img",{attrs:{src:o(308),alt:""}})])}],n={props:{message:String}},c=(o(330),o(36)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("main",[t._m(0),t._v(" "),o("div",{staticClass:"text"},[o("h1",[t._v("Not Found")]),t._v(" "),o("p",[t._v(t._s(t.message))]),t._v(" "),o("p",[t._v("Check the spelling and try again")])]),t._v(" "),o("nuxt-link",{staticClass:"btn",attrs:{to:"/home"}},[o("TheButton",{attrs:{title:"Back to homepage",value:"yellowBgLg"}})],1)],1)])}),r,!1,null,"a9019bfa",null);e.default=component.exports;installComponents(component,{TheButton:o(301).default})},357:function(t,e,o){"use strict";o.r(e);o(44),o(34),o(43),o(13),o(67),o(37),o(68);var r=o(27),n=o(69);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var l={data:function(){return{showYellow:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(n.c)({cities:function(t){return t.cities},popularPlaces:function(t){return t.popularPlaces}})),methods:{setYellow:function(){this.showYellow=!this.showYellow},hideYellow:function(){this.showYellow=!this.showYellow}}},d=l,f=(o(332),o(36)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"scroll-container"},t._l(t.cities,(function(e,r){return o("div",{key:e.id,staticClass:"scroll-text"},[o("a",{class:{yellow:t.showYellow},attrs:{href:"/"+e.city}},[o("p",{on:{mouseover:t.setYellow,mouseleave:t.hideYellow}},[t._v("\n          "+t._s(e.city)+"\n        ")])])])})),0),t._v(" "),o("div",{staticClass:"line"})])}),[],!1,null,"64a6a336",null);e.default=component.exports},358:function(t,e,o){"use strict";o(334)},359:function(t,e,o){var r=o(65)(!1);r.push([t.i,'*[data-v-2b26750d]{font-family:"Noto Sans",sans-serif}body[data-v-2b26750d]{position:relative}.cards-container .scroll a[data-v-2b26750d]{text-decoration:none}.cards-container .scroll a .card[data-v-2b26750d]{background-position:50%;position:relative;margin:1rem 0;height:410px;transition:transform .5s ease;opacity:.8;padding:0 .8rem}.cards-container .scroll a .card .card-text[data-v-2b26750d]{display:flex;flex-direction:column;color:#fff}.cards-container .scroll a .card .card-text a[data-v-2b26750d]{-webkit-text-decoration-style:none;text-decoration-style:none}.cards-container .scroll a .card .card-text h1[data-v-2b26750d]{font-size:25px;line-height:31px;margin:290px 0 0;padding:0 .8rem}.cards-container .scroll a .card .card-text p[data-v-2b26750d]{width:276px;font-family:"Brown";font-size:14px;font-weight:300;padding:0 .8rem}.cards-container .scroll a .card .card-text img[data-v-2b26750d]{position:absolute;z-index:-1;width:296px;height:410px;border-radius:32px}.cards-container .scroll .card[data-v-2b26750d]:hover{transform:scale(1.02);opacity:1}',""]),t.exports=r},360:function(t,e,o){"use strict";o(335)},361:function(t,e,o){var r=o(65)(!1);r.push([t.i,'*[data-v-10f628bc]{font-family:"Noto Sans",sans-serif}body[data-v-10f628bc]{position:relative}main[data-v-10f628bc]{display:flex;flex-direction:column;justify-content:center;align-items:center}main .img-container[data-v-10f628bc]{padding:1rem 0;margin-top:200px}main .text[data-v-10f628bc]{color:#041a7a;text-align:center}main .text h1[data-v-10f628bc]{font-size:25px}main .text p[data-v-10f628bc]{font-size:14px;margin-top:30px}main .btn[data-v-10f628bc]{margin-top:72px;margin-bottom:130px}main a[data-v-10f628bc]{text-decoration:none}',""]),t.exports=r},413:function(t,e,o){var content=o(430);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(66).default)("5d3c6255",content,!0,{sourceMap:!1})},420:function(t,e,o){"use strict";o.r(e);var r=o(8),n=(o(42),o(46)),c=o.n(n),l={props:["place","name","id","index"],data:function(){return{photoReference:this.place.fullSearchResult.photos[0].photo_reference}},computed:{placeId:function(){return this.place.fullSearchResult.place_id},getImageUrl:function(){return"https://maps.googleapis.com/maps/api/place/photo?photo_reference=".concat(this.photoReference,"&maxwidth=900&maxheight=600&key=AIzaSyASdmsJF14srd4fjjO8gehV3VEPtAX-plE")}},methods:{getPlaceImage:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("https://google-maps28.p.rapidapi.com/maps/api/place/photo?photo_reference=".concat(t.photoReference,"&maxwidth=1600&maxheight=1600"),{headers:{"X-RapidAPI-Host":"google-maps28.p.rapidapi.com","X-RapidAPI-Key":"ee0219cfdfmshd0edb4d1f8464abp124dd2jsnb5dc821c8d60"}}).then((function(t){})).catch((function(t){console.log(t.message)}));case 2:case"end":return e.stop()}}),e)})))()}}},d=(o(358),o(36)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"cards-container"},[o("div",{staticClass:"scroll"},[o("a",{attrs:{href:"/explore/"+t.place.fullSearchResult.place_id}},[o("div",{staticClass:"card"},[o("div",{staticClass:"card-text"},[o("h1",[t._v(t._s(t.place.fullSearchResult.name))]),t._v(" "),o("p",[t._v("\n            "+t._s(t.place.fullSearchResult.vicinity)+"\n          ")]),t._v(" "),o("img",{attrs:{src:t.getImageUrl,alt:""}})])])])])])}),[],!1,null,"2b26750d",null);e.default=component.exports},421:function(t,e,o){"use strict";o.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img-container"},[e("img",{attrs:{src:o(308),alt:""}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"text"},[o("h1",[t._v("Oops! "),o("br"),t._v("Something went wrong.")]),t._v(" "),o("p",[t._v("Please login and try again")])])}],n={},c=(o(360),o(36)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("main",[t._m(0),t._v(" "),t._m(1),t._v(" "),o("nuxt-link",{staticClass:"btn",attrs:{to:"/auth/login"}},[o("TheButton",{attrs:{title:"Login",value:"yellowBgLg"}})],1)],1)])}),r,!1,null,"10f628bc",null);e.default=component.exports;installComponents(component,{TheButton:o(301).default})},429:function(t,e,o){"use strict";o(413)},430:function(t,e,o){var r=o(65)(!1);r.push([t.i,'*[data-v-37bff530]{font-family:"Noto Sans",sans-serif}body[data-v-37bff530]{position:relative}.container[data-v-37bff530]{max-height:926px;display:grid;grid-template-columns:1fr;grid-template-rows:auto;grid-template-areas:"top" "mid" "bottom"}.container .top[data-v-37bff530]{grid-area:top}.container .top .welcome[data-v-37bff530]{margin-top:34px;margin-bottom:16px;padding:0 2rem}.container .top .welcome p[data-v-37bff530]{font-size:25px;font-weight:700;color:#041a7a}.container .top .welcome h1[data-v-37bff530]{font-size:34px;font-weight:900;color:#041a7a;font-family:"AirbnbCereal_W_Bd"}.container .middle[data-v-37bff530]{grid-area:mid}.container .middle[data-v-37bff530] ::-webkit-scrollbar{height:0;width:0;background:#fff}.container .middle[data-v-37bff530] ::-webkit-scrollbar-thumb:horizontal{background:#fff;border-radius:10px}.container .middle .scroll[data-v-37bff530]{padding-top:35px}.container .bottom[data-v-37bff530]{grid-area:bottom;margin:0;width:100%}.container .bottom .title[data-v-37bff530]{padding:0 1rem}.container .bottom .title h1[data-v-37bff530]{margin-top:27.34px;font-weight:500}.container .bottom .container[data-v-37bff530]{width:100%;margin-bottom:67px}.container .bottom .container[data-v-37bff530] ::-webkit-scrollbar{height:0;width:0;background:#fff}.container .bottom .container[data-v-37bff530] ::-webkit-scrollbar-thumb:horizontal{background:#fff;border-radius:10px}.container .bottom .container .pop-cards[data-v-37bff530]{display:flex;flex-direction:row;overflow:hidden;overflow-x:scroll;grid-gap:20px;gap:20px}.home-enter-active[data-v-37bff530],.home-leave-active[data-v-37bff530]{transition:opacity .5s}.home-enter[data-v-37bff530],.home-leave-active[data-v-37bff530]{opacity:0}',""]),t.exports=r},452:function(t,e,o){"use strict";o.r(e);o(34),o(43),o(13),o(67),o(37),o(68);var r=o(8),n=o(27),c=(o(42),o(44),o(69));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={transition:"home",data:function(){return{error:"",userName:this.$store.state.userDetails.firstname}},computed:d(d({},Object(c.c)({popularPlaces:function(t){return t.popularPlaces}})),{},{isLoggedInUser:function(){return 0!==Object.keys(this.$store.state.userDetails).length}}),methods:d({},Object(c.b)(["getPopularPlaces","getTopCities"])),fetch:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.store,e.next=3,o.dispatch("getTopCities");case 3:return e.next=5,o.dispatch("getPopularPlaces");case 5:case"end":return e.stop()}}),e)})))()}},v=(o(429),o(36)),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[t.isLoggedInUser?o("div",[o("section",{staticClass:"top"},[o("TheNavbar"),t._v(" "),o("div",{staticClass:"welcome"},[o("p",[t._v("Hi, "+t._s(t.userName))]),t._v(" "),t._m(0)])],1),t._v(" "),o("section",{staticClass:"middle"},[o("div",{staticClass:"search"},[o("TheSearchBar")],1),t._v(" "),t.error?o("div",[o("TheErrorCard")],1):t._e(),t._v(" "),o("div",{staticClass:"scroll"},[o("div",{},[o("TheScrollBar")],1)])]),t._v(" "),o("section",{staticClass:"bottom"},[t._m(1),t._v(" "),o("div",{staticClass:"container"},[o("div",{staticClass:"pop-cards"},t._l(t.popularPlaces,(function(t,e){return o("div",{key:t.id},[o("ThePopularCard",{attrs:{place:t,index:e,id:t.id}})],1)})),0)])])]):o("div",[o("TheLoginErrorCard")],1)])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h1",[t._v("Where would you "),o("br"),t._v("like to go?")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"title"},[o("h1",[t._v("Popular")])])}],!1,null,"37bff530",null);e.default=component.exports;installComponents(component,{TheNavbar:o(321).default,TheSearchBar:o(355).default,TheErrorCard:o(356).default,TheScrollBar:o(357).default,ThePopularCard:o(420).default,TheLoginErrorCard:o(421).default})}}]);