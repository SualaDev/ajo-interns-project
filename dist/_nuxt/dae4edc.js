(window.webpackJsonp=window.webpackJsonp||[]).push([[28,15,16,17,20,23,24],{303:function(t,e,o){var content=o(306);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(66).default)("60156d58",content,!0,{sourceMap:!1})},304:function(t,e,o){"use strict";o.r(e);var r={name:"TheButton",props:{title:String,value:String},data:function(){return{}}},n=(o(305),o(36)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"button",class:t.value},[o("p",[t._v(t._s(t.title))])])}),[],!1,null,"2b3d5997",null);e.default=component.exports},305:function(t,e,o){"use strict";o(303)},306:function(t,e,o){var r=o(65)(!1);r.push([t.i,'*[data-v-2b3d5997]{font-family:"Noto Sans",sans-serif}body[data-v-2b3d5997]{position:relative}.button[data-v-2b3d5997]{font-family:"AirbnbCereal_W_lt";font-size:14px;display:flex;align-items:center;justify-content:center;border-radius:56px;height:34px;grid-gap:10px;gap:10px;transition:all .25s ease}.button p[data-v-2b3d5997]{margin:0;display:flex;flex-direction:row}.whiteBgLg[data-v-2b3d5997]{background-color:#fff;color:#041a7a;width:364px;height:56px}.whiteBgLg[data-v-2b3d5997]:hover{transform:scale(1.02);border:1px solid #fcf300;background-color:transparent;color:#fcf300}.yellowBgLg[data-v-2b3d5997]{background-color:#fcf300;color:#041a7a;width:364px;height:56px}.yellowBgLg[data-v-2b3d5997]:hover{transform:scale(1.02);border:1px solid #041a7a;background-color:transparent;color:#041a7a}',""]),t.exports=r},307:function(t,e,o){var content=o(318);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(66).default)("b3fe8fb8",content,!0,{sourceMap:!1})},310:function(t,e,o){var content=o(332);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(66).default)("6c069f1c",content,!0,{sourceMap:!1})},311:function(t,e,o){t.exports=o.p+"img/error.03628b6.png"},312:function(t,e,o){var content=o(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(66).default)("0dfd6a04",content,!0,{sourceMap:!1})},313:function(t,e,o){var content=o(336);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(66).default)("b283bbc4",content,!0,{sourceMap:!1})},317:function(t,e,o){"use strict";o(307)},318:function(t,e,o){var r=o(65)(!1);r.push([t.i,'*{font-family:"Noto Sans",sans-serif}.nav,body{position:relative}.nav{display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:0 32px;margin-top:45px}.nav svg{color:#9a9400;cursor:pointer}.nav img{width:20px}.nav .page-enter-active,.nav .page-leave-active{transition:opacity 1.5s}.nav .page-enter,.nav .page-leave-active{opacity:0}.drop-container{position:absolute;top:0;width:100%;background-color:#fff;z-index:2;padding-bottom:2rem}.drop-container .drop-header{display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin-top:34px;padding:0 1rem}.drop-container .drop-header .title a{display:flex;flex-direction:row;align-items:center;grid-gap:10px;gap:10px;text-decoration:none}.drop-container .drop-header .title a h1{font-family:"AirbnbCereal_W_Md";color:#041a7a}.drop-container .drop-header .title svg{color:#9a9400;cursor:pointer}.drop-container .drop-header svg{color:#041a7a;cursor:pointer}.drop-container .drop-items{padding:.5rem 1rem;display:flex;flex-direction:column}.drop-container .drop-items a{font-family:"AirbnbCereal_W_lt";color:#393939;padding-bottom:1.5rem;padding-top:.8rem;border-bottom:.5px solid #c7c4c4;text-decoration:none}.drop-container .drop-items .logout{padding-top:15px;color:#041a7a;cursor:pointer}',""]),t.exports=r},324:function(t,e,o){"use strict";o.r(e);var r={data:function(){return{showDropdown:!1}},methods:{toggleDropdown:function(){console.log("tada"),this.showDropdown,this.showDropdown},closeDropDown:function(){this.showDropdown,this.showDropdown},logout:function(){this.$store.commit("setUserDetails",{}),this.$router.push("/"),console.log("User Logged Out")}}},n=(o(317),o(36)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{directives:[{name:"show",rawName:"v-show",value:t.showDropdown,expression:"showDropdown"}],staticClass:"drop-container",staticStyle:{display:"block"}},[o("div",{staticClass:"drop-header"},[o("div",{staticClass:"title"},[o("nuxt-link",{attrs:{to:"/home"}},[o("font-awesome-icon",{attrs:{icon:"dove"}}),t._v(" "),o("h1",[t._v("AJO")])],1)],1),t._v(" "),o("div",[o("font-awesome-icon",{attrs:{icon:"xmark"},on:{click:function(e){t.showDropdown=!t.showDropdown}}})],1)]),t._v(" "),o("div",{staticClass:"drop-items"},[o("nuxt-link",{attrs:{to:"/"}},[t._v("Wishlists")]),t._v(" "),o("nuxt-link",{attrs:{to:"/"}},[t._v("Past Trips")]),t._v(" "),o("nuxt-link",{attrs:{to:"/home"}},[t._v("Home")]),t._v(" "),o("div",{staticClass:"logout",on:{click:t.logout}},[t._v("Log out")])],1)]),t._v(" "),o("div",{staticClass:"nav"},[o("font-awesome-icon",{attrs:{icon:"bars"},on:{click:function(e){t.showDropdown=!t.showDropdown}}}),t._v(" "),o("div",[o("nuxt-link",{attrs:{to:"/"}},[o("svg",{staticClass:"bi bi-person-circle",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[o("path",{attrs:{d:"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"}}),t._v(" "),o("path",{attrs:{"fill-rule":"evenodd",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"}})])])],1)],1)])}),[],!1,null,null,null);e.default=component.exports},330:function(t,e,o){t.exports=o.p+"img/search-icon.0f2d73c.svg"},331:function(t,e,o){"use strict";o(310)},332:function(t,e,o){var r=o(65)(!1);r.push([t.i,'*[data-v-171d144c]{font-family:"Noto Sans",sans-serif}body[data-v-171d144c]{position:relative}.search[data-v-171d144c]{width:90%;text-align:right}.search input[data-v-171d144c]{position:absolute;left:32px;height:40px;width:90%;background:hsla(0,0%,92.2%,.5);border:.5px solid hsla(0,0%,76.9%,.3);box-shadow:0 1px 5px rgba(0,0,0,.14);box-sizing:border-box;border-radius:32px;padding:0 1.5rem;margin-bottom:24px;margin-top:6px}.search img[data-v-171d144c]{width:20px;margin-top:16px;color:#041a7a}',""]),t.exports=r},333:function(t,e,o){"use strict";o(312)},334:function(t,e,o){var r=o(65)(!1);r.push([t.i,'*[data-v-a9019bfa]{font-family:"Noto Sans",sans-serif}body[data-v-a9019bfa]{position:relative}main[data-v-a9019bfa]{display:flex;flex-direction:column;justify-content:center;align-items:center}main .img-container[data-v-a9019bfa]{padding:1rem 0;margin-top:200px}main .text[data-v-a9019bfa]{color:#041a7a;text-align:center}main .text h1[data-v-a9019bfa]{font-size:25px}main .text p[data-v-a9019bfa]{font-size:14px}main .btn[data-v-a9019bfa]{margin-top:72px;margin-bottom:130px}main a[data-v-a9019bfa]{text-decoration:none}',""]),t.exports=r},335:function(t,e,o){"use strict";o(313)},336:function(t,e,o){var r=o(65)(!1);r.push([t.i,'*[data-v-af622374]{font-family:"Noto Sans",sans-serif}body[data-v-af622374]{position:relative}.scroll-container[data-v-af622374]{position:relative;display:flex;flex-direction:row;overflow:hidden;overflow-x:scroll;padding:0 .5rem}.scroll-container[data-v-af622374] ::-webkit-scrollbar{height:0;width:0;background:#fff}.scroll-container[data-v-af622374] ::-webkit-scrollbar-thumb:horizontal{background:#fff;border-radius:10px}.scroll-container .scroll-text[data-v-af622374]{display:flex;grid-gap:60px;gap:60px;padding:0 .5rem;width:-webkit-max-content;width:-moz-max-content;width:max-content}.scroll-container .scroll-text a[data-v-af622374]{text-decoration:none}.scroll-container .scroll-text a p[data-v-af622374]{font-family:"AirbnbCereal_W_Lt";color:#1d405a;font-size:14px;font-weight:400;cursor:pointer;width:140px}.scroll-container .scroll-text .yellow[data-v-af622374]:after{content:"";position:absolute;height:2px;width:60px;bottom:0;background:#fcf300}.line[data-v-af622374]{margin-top:10px;height:22px;background:#000;max-width:428px}',""]),t.exports=r},346:function(t,e,o){var content=o(397);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(66).default)("4ee85bdc",content,!0,{sourceMap:!1})},358:function(t,e,o){"use strict";o.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img-container"},[e("img",{attrs:{src:o(311),alt:""}})])}],n={props:{message:String}},c=(o(333),o(36)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("main",[t._m(0),t._v(" "),o("div",{staticClass:"text"},[o("h1",[t._v("Not Found")]),t._v(" "),o("p",[t._v(t._s(t.message))]),t._v(" "),o("p",[t._v("Check the spelling and try again")])]),t._v(" "),o("nuxt-link",{staticClass:"btn",attrs:{to:"/home"}},[o("TheButton",{attrs:{title:"Back to homepage",value:"yellowBgLg"}})],1)],1)])}),r,!1,null,"a9019bfa",null);e.default=component.exports;installComponents(component,{TheButton:o(304).default})},359:function(t,e,o){"use strict";o.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search"},[r("input",{staticClass:"input",attrs:{type:"search",placeholder:"where do you want to visit?"}}),t._v(" "),r("img",{attrs:{src:o(330),alt:"Search"}})])}],n={},c=(o(331),o(36)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),r,!1,null,"171d144c",null);e.default=component.exports},360:function(t,e,o){"use strict";o.r(e);o(45),o(34),o(44),o(14),o(67),o(38),o(68);var r=o(27),n=o(69);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var l={data:function(){return{showYellow:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(n.c)({cities:function(t){return t.cities},popularPlaces:function(t){return t.popularPlaces}})),methods:{setYellow:function(){this.showYellow=!this.showYellow},hideYellow:function(){this.showYellow=!this.showYellow}}},d=l,f=(o(335),o(36)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"scroll-container"},[t._l(t.cities,(function(e,r){return o("div",{key:e.id,staticClass:"scroll-text"},[o("a",{class:{yellow:t.showYellow},attrs:{href:"/"+e.city}},[o("p",{on:{mouseover:t.setYellow,mouseleave:t.hideYellow}},[t._v("\n          "+t._s(e.city)+"\n        ")])])])})),t._v(" "),o("div",{staticClass:"line"})],2)])}),[],!1,null,"af622374",null);e.default=component.exports},396:function(t,e,o){"use strict";o(346)},397:function(t,e,o){var r=o(65)(!1);r.push([t.i,'*[data-v-e90bbef8]{font-family:"Noto Sans",sans-serif}body[data-v-e90bbef8]{position:relative}.explore[data-v-e90bbef8]{background-position:0 45%;width:364px;height:160px;border-radius:32px;padding:.5rem 0;margin-top:10px}.explore .explore-text[data-v-e90bbef8]{color:#fff;margin-top:4.2rem;padding:.5rem 1rem}.explore .explore-text h1[data-v-e90bbef8]{font-size:20px;line-height:22.79px}.explore .explore-text p[data-v-e90bbef8]{font-size:14px;line-height:18.23px}a[data-v-e90bbef8]{text-decoration:none}',""]),t.exports=r},421:function(t,e,o){var content=o(450);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(66).default)("656e5329",content,!0,{sourceMap:!1})},430:function(t,e,o){"use strict";o.r(e);var r={name:"explore-card",props:{place:{Required:!0,type:Object}},computed:{backgroundImg:function(){return"https://maps.googleapis.com/maps/api/place/photo?photo_reference=".concat(this.place.fullSearchResult.photos[0].photo_reference,"&maxwidth=900&maxheight=600&key=AIzaSyASdmsJF14srd4fjjO8gehV3VEPtAX-plE")}}},n=(o(396),o(36)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nuxt-link",{attrs:{to:"/explore/"+t.place.fullSearchResult.place_id}},[o("div",{staticClass:"container"},[o("div",{staticClass:"explore",style:"background-image: url('"+t.backgroundImg+"')"},[o("div",{staticClass:"explore-text"},[o("h1",[t._v(t._s(t.place.fullSearchResult.name))]),t._v(" "),o("p",[t._v(t._s(t.place.fullSearchResult.vicinity))])])])])])}),[],!1,null,"e90bbef8",null);e.default=component.exports},449:function(t,e,o){"use strict";o(421)},450:function(t,e,o){var r=o(65)(!1);r.push([t.i,'*[data-v-6c6293f3]{font-family:"Noto Sans",sans-serif}body[data-v-6c6293f3]{position:relative}.container[data-v-6c6293f3]{max-width:428px;font-family:"Brown"}.container .top .welcome[data-v-6c6293f3]{font-family:"Brown";margin-top:34px;padding:0 2rem}.container .top .welcome h1[data-v-6c6293f3]{font-size:25px;font-weight:900;color:#041a7a;cursor:pointer}.container .middle[data-v-6c6293f3]{grid-area:mid}.container .middle[data-v-6c6293f3] ::-webkit-scrollbar{height:0;width:0;background:#fff}.container .middle[data-v-6c6293f3] ::-webkit-scrollbar-thumb:horizontal{background:#fff;border-radius:10px}.container .middle .scroll[data-v-6c6293f3]{position:relative;margin-top:27px;display:flex;flex-direction:row;overflow:scroll;max-width:428px;padding-bottom:16px}.container .middle .scroll .line[data-v-6c6293f3]{height:2px;background:#fffee6;max-width:428px}.container .middle .search[data-v-6c6293f3]{margin-top:16px;margin-bottom:24px}.container .explore-container .explore-cards[data-v-6c6293f3]{display:flex;flex-direction:column;align-items:center;grid-gap:20px;gap:20px;margin-top:1rem;overflow-y:scroll;overflow-x:hidden;max-height:650px;padding:0 3rem}.discover-enter-active[data-v-6c6293f3],.discover-leave-active[data-v-6c6293f3]{transition:opacity .5s}.discover-enter[data-v-6c6293f3],.discover-leave-active[data-v-6c6293f3]{opacity:0}',""]),t.exports=r},461:function(t,e,o){"use strict";o.r(e);var r=o(7),n=(o(42),o(358)),c=o(46),l=o.n(c),d={transition:"discover",conponents:{TheErrorCard:n.default},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.get("https://ajo-app.herokuapp.com/api/places/discover/".concat(t.$route.params.explore,"?placeType=point_of_interest"));case 3:t.discoveredPlacesData=e.sent.data.data,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0.message);case 9:return e.prev=9,e.next=12,l.a.get("https://ajo-app.herokuapp.com/api/top-cities");case 12:t.citiesData=e.sent.data.data,e.next=18;break;case 15:e.prev=15,e.t1=e.catch(9),console.log(e.t1.message);case 18:case"end":return e.stop()}}),e,null,[[0,6],[9,15]])})))()},data:function(){return{discoveredPlacesData:[],cityName:this.$route.params.explore,citiesData:[]}},computed:{cities:function(){return this.citiesData},discoveredPlaces:function(){return this.discoveredPlacesData}}},f=(o(449),o(36)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"main-container"},[o("section",{staticClass:"top"},[o("TheNavbar"),t._v(" "),o("div",{staticClass:"welcome"},[o("h1",[t._v("Discover, "+t._s(t.cityName))])])],1),t._v(" "),o("section",{staticClass:"middle"},[o("div",{staticClass:"scroll"},t._l(t.cities,(function(e,r){return o("div",{key:e.id,staticClass:"scroll-text"},[o("TheScrollBar",{attrs:{popCity:e,index:r}}),t._v(" "),o("div",{staticClass:"line"})],1)})),0),t._v(" "),o("div",{staticClass:"search"},[o("TheSearchBar")],1)]),t._v(" "),o("section",{staticClass:"explore-container"},[t.discoveredPlaces?o("div",{staticClass:"explore-cards"},t._l(t.discoveredPlaces,(function(t,e){return o("TheExploreCard",{key:e,attrs:{place:t}})})),1):t.discoveredPlaces?t._e():o("TheErrorCard",{attrs:{message:"Oops... Something is wrong"}})],1)])}),[],!1,null,"6c6293f3",null);e.default=component.exports;installComponents(component,{TheNavbar:o(324).default,TheScrollBar:o(360).default,TheSearchBar:o(359).default,TheExploreCard:o(430).default,TheErrorCard:o(358).default})}}]);