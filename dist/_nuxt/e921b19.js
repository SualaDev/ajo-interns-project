(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{321:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01Ljg5OTggMEw3LjI1MzczIDQuNDgwMjdDNy4yNjM2MSA0LjUxMjk1IDcuMjgyOTQgNC41NDE0MyA3LjMwODkzIDQuNTYxNjFDNy4zMzQ5MiA0LjU4MTc5IDcuMzY2MjQgNC41OTI2MyA3LjM5ODM3IDQuNTkyNTZMMTEuODAxMSA0LjU4MzI3TDguMjMzNTQgNy4zNDI2N0M4LjIwNzUxIDcuMzYyODIgOC4xODgxMyA3LjM5MTI4IDguMTc4MjEgNy40MjM5NUM4LjE2ODI5IDcuNDU2NjMgOC4xNjgzMyA3LjQ5MTgzIDguMTc4MzMgNy41MjQ0N0w5LjU0ODE3IDEyTDUuOTg5MTMgOS4yMjQ5MUM1Ljk2MzE4IDkuMjA0NjcgNS45MzE4OCA5LjE5Mzc2IDUuODk5NzUgOS4xOTM3NkM1Ljg2NzYzIDkuMTkzNzYgNS44MzYzMyA5LjIwNDY3IDUuODEwMzcgOS4yMjQ5MUwyLjI1Mjk5IDExLjk5OThMMy42MjI3OSA3LjUyNDQ3QzMuNjMyNzkgNy40OTE4MyAzLjYzMjgzIDcuNDU2NjMgMy42MjI5IDcuNDIzOTVDMy42MTI5OCA3LjM5MTI4IDMuNTkzNjEgNy4zNjI4MiAzLjU2NzU4IDcuMzQyNjdMMCA0LjU4MzI3TDQuNDAyNzUgNC41OTI1NkM0LjQzNDg4IDQuNTkyNjMgNC40NjYyIDQuNTgxNzcgNC40OTIyIDQuNTYxNThDNC41MTgxOSA0LjU0MTM5IDQuNTM3NTEgNC41MTI5IDQuNTQ3MzggNC40ODAyMUw1Ljg5OTggMFoiIGZpbGw9IiNGMUM0MEYiLz4KPC9zdmc+Cg=="},345:function(e,t,M){var content=M(404);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,M(66).default)("6acd7c68",content,!0,{sourceMap:!1})},403:function(e,t,M){"use strict";M(345)},404:function(e,t,M){var r=M(65)(!1);r.push([e.i,'*[data-v-279080ab]{font-family:"Noto Sans",sans-serif}body[data-v-279080ab]{position:relative}.review-card[data-v-279080ab]{display:flex;justify-content:center;align-items:center;grid-gap:10.32px;gap:10.32px;padding:16px 0 19px;border-bottom:1px solid #cecece;align-items:flex-start}.review-card .review-left .img-container[data-v-279080ab]{height:60px}.review-card .review-left .img-container img[data-v-279080ab]{width:42.1px;-o-object-fit:contain;object-fit:contain}.review-card .review-content .review-name h2[data-v-279080ab]{font-weight:500;font-size:14px;line-height:16px}.review-card .review-content .review-description p[data-v-279080ab]{font-weight:300;font-size:10px;line-height:16px;width:80vw}.review-card .review-content .review-rating[data-v-279080ab]{display:flex;align-items:center;grid-gap:10px;gap:10px}.review-card .review-content .review-rating .time-posted p[data-v-279080ab]{font-size:10px}',""]),e.exports=r},411:function(e,t,M){"use strict";M.r(t);var r={name:"reviewFull",props:{review:{Required:!0,type:Object}},computed:{starRatings:function(){for(var e=[],i=0;i<this.review.rating;i++)e.push(i);return e}}},n=(M(403),M(36)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"review-card"},[r("div",{staticClass:"review-left"},[r("div",{staticClass:"img-container"},[r("img",{attrs:{src:e.review.profile_photo_url,alt:e.review.author_name}})])]),e._v(" "),r("div",{staticClass:"review-content"},[r("div",{staticClass:"review-name"},[r("h2",[e._v(e._s(e.review.author_name))])]),e._v(" "),r("div",{staticClass:"review-rating"},[r("div",{staticClass:"star-ratings"},e._l(e.starRatings,(function(e){return r("img",{key:e,attrs:{src:M(321),alt:"star ratings"}})})),0),e._v(" "),r("div",{staticClass:"time-posted"},[r("p",[e._v(e._s(e.review.relative_time_description))])])]),e._v(" "),r("div",{staticClass:"review-description"},[r("p",[e._v("\n                "+e._s(e.review.text)+"\n            ")])])])])}),[],!1,null,"279080ab",null);t.default=component.exports}}]);