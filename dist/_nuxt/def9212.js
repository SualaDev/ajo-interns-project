(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{325:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNS44OTk4IDBMNy4yNTM3MyA0LjQ4MDI3QzcuMjYzNjEgNC41MTI5NSA3LjI4Mjk0IDQuNTQxNDMgNy4zMDg5MyA0LjU2MTYxQzcuMzM0OTIgNC41ODE3OSA3LjM2NjI0IDQuNTkyNjMgNy4zOTgzNyA0LjU5MjU2TDExLjgwMTEgNC41ODMyN0w4LjIzMzU0IDcuMzQyNjdDOC4yMDc1MSA3LjM2MjgyIDguMTg4MTMgNy4zOTEyOCA4LjE3ODIxIDcuNDIzOTVDOC4xNjgyOSA3LjQ1NjYzIDguMTY4MzMgNy40OTE4MyA4LjE3ODMzIDcuNTI0NDdMOS41NDgxNyAxMkw1Ljk4OTEzIDkuMjI0OTFDNS45NjMxOCA5LjIwNDY3IDUuOTMxODggOS4xOTM3NiA1Ljg5OTc1IDkuMTkzNzZDNS44Njc2MyA5LjE5Mzc2IDUuODM2MzMgOS4yMDQ2NyA1LjgxMDM3IDkuMjI0OTFMMi4yNTI5OSAxMS45OTk4TDMuNjIyNzkgNy41MjQ0N0MzLjYzMjc5IDcuNDkxODMgMy42MzI4MyA3LjQ1NjYzIDMuNjIyOSA3LjQyMzk1QzMuNjEyOTggNy4zOTEyOCAzLjU5MzYxIDcuMzYyODIgMy41Njc1OCA3LjM0MjY3TDAgNC41ODMyN0w0LjQwMjc1IDQuNTkyNTZDNC40MzQ4OCA0LjU5MjYzIDQuNDY2MiA0LjU4MTc3IDQuNDkyMiA0LjU2MTU4QzQuNTE4MTkgNC41NDEzOSA0LjUzNzUxIDQuNTEyOSA0LjU0NzM4IDQuNDgwMjFMNS44OTk4IDBaIiBmaWxsPSIjRjFDNDBGIi8+DQo8L3N2Zz4NCg=="},350:function(e,t,r){var content=r(407);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(66).default)("357200ae",content,!0,{sourceMap:!1})},406:function(e,t,r){"use strict";r(350)},407:function(e,t,r){var c=r(65)(!1);c.push([e.i,'*[data-v-5afcb430]{font-family:"Noto Sans",sans-serif}body[data-v-5afcb430]{position:relative}.review-card[data-v-5afcb430]{display:flex;justify-content:center;align-items:center;grid-gap:10.32px;gap:10.32px;padding:16px 0 19px;border-bottom:1px solid #cecece;align-items:flex-start}.review-card .review-left .img-container[data-v-5afcb430]{height:60px}.review-card .review-left .img-container img[data-v-5afcb430]{width:42.1px;-o-object-fit:contain;object-fit:contain}.review-card .review-content .review-name h2[data-v-5afcb430]{font-weight:500;font-size:14px;line-height:16px}.review-card .review-content .review-description p[data-v-5afcb430]{font-weight:300;font-size:10px;line-height:16px;width:80vw}.review-card .review-content .review-rating[data-v-5afcb430]{display:flex;align-items:center;grid-gap:10px;gap:10px}.review-card .review-content .review-rating .time-posted p[data-v-5afcb430]{font-size:10px}',""]),e.exports=c},414:function(e,t,r){"use strict";r.r(t);var c={name:"reviewFull",props:{review:{Required:!0,type:Object}},computed:{starRatings:function(){for(var e=[],i=0;i<this.review.rating;i++)e.push(i);return e}}},n=(r(406),r(36)),component=Object(n.a)(c,(function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"review-card"},[c("div",{staticClass:"review-left"},[c("div",{staticClass:"img-container"},[c("img",{attrs:{src:e.review.profile_photo_url,alt:e.review.author_name}})])]),e._v(" "),c("div",{staticClass:"review-content"},[c("div",{staticClass:"review-name"},[c("h2",[e._v(e._s(e.review.author_name))])]),e._v(" "),c("div",{staticClass:"review-rating"},[c("div",{staticClass:"star-ratings"},e._l(e.starRatings,(function(e){return c("img",{key:e,attrs:{src:r(325),alt:"star ratings"}})})),0),e._v(" "),c("div",{staticClass:"time-posted"},[c("p",[e._v(e._s(e.review.relative_time_description))])])]),e._v(" "),c("div",{staticClass:"review-description"},[c("p",[e._v("\n        "+e._s(e.review.text)+"\n      ")])])])])}),[],!1,null,"5afcb430",null);t.default=component.exports}}]);