webpackHotUpdate(0,{

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(37)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.card {\\n    margin-top: 10px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/home/mikefromru/django_apps/blog-django-vue/project/src/src/App.vue\"],\"names\":[],\"mappings\":\";AA8CA;IACA,iBAAA;CACA\",\"file\":\"App.vue\",\"sourcesContent\":[\"<template>\\n    <div id=\\\"app\\\">\\n            <b-container>\\n                <app-header/>\\n                    <b-row>\\n                        <b-col cols-xs=\\\"6\\\" md='4'><app-aside/></b-col>\\n\\n                        <!-- <b-col cols=\\\"12\\\" md=\\\"8\\\"><app-main/></b-col> -->\\n                        <router-view/>\\n\\n                        <!-- <b-col cols=\\\"12\\\" md=\\\"8\\\">\\n                            <div v-for=\\\"post in posts\\\" :key=\\\"post.id\\\">\\n                                <b-card>\\n                                    <h3><router-link :to=\\\"{ name: 'post_detail', params: {id: post.id} }\\\">{{ post.title }}</router-link></h3>\\n                                     {{ post.body }}\\n                                 </b-card>\\n                             </div>\\n                        </b-col> -->\\n                    </b-row>\\n            </b-container>\\n        <!-- <router-view/> -->\\n    </div>\\n</template>\\n\\n<script>\\nimport Header from './components/commons/App-header'\\nimport Aside from './components/commons/App-aside'\\n// import Main from './components/commons/App-main'\\n// import { mapGetters } from 'vuex'\\nexport default {\\n    name: \\\"app\\\",\\n    components: {\\n        'app-header': Header,\\n        'app-aside': Aside, \\n    //     'app-main': Main\\n    },\\n    // computed: mapGetters ({\\n    //     posts: 'posts'\\n    // }),\\n    // created() {\\n    //     this.$store.dispatch('GET_POSTS')\\n    // }\\n};\\n</script>\\n\\n<style>\\n.card {\\n    margin-top: 10px;\\n}\\n</style>\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQXBwLnZ1ZT8wMzI4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7OztBQUdBO0FBQ0Esa0NBQW1DLHVCQUF1QixHQUFHLFVBQVUsdUhBQXVILE1BQU0sV0FBVyx3bEJBQXdsQiwrQkFBK0IsWUFBWSxFQUFFLEtBQUssY0FBYyw0REFBNEQsYUFBYSxtYUFBbWEsYUFBYSw4QkFBOEIsdUNBQXVDLGlHQUFpRyxpQ0FBaUMscUNBQXFDLHNCQUFzQix3REFBd0QsSUFBSSwrQkFBK0IsdUJBQXVCLEdBQUcsK0JBQStCOztBQUV0dkQiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uY2FyZCB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9taWtlZnJvbXJ1L2RqYW5nb19hcHBzL2Jsb2ctZGphbmdvLXZ1ZS9wcm9qZWN0L3NyYy9zcmMvQXBwLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBOENBO0lBQ0EsaUJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiQXBwLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxkaXYgaWQ9XFxcImFwcFxcXCI+XFxuICAgICAgICAgICAgPGItY29udGFpbmVyPlxcbiAgICAgICAgICAgICAgICA8YXBwLWhlYWRlci8+XFxuICAgICAgICAgICAgICAgICAgICA8Yi1yb3c+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIGNvbHMteHM9XFxcIjZcXFwiIG1kPSc0Jz48YXBwLWFzaWRlLz48L2ItY29sPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPGItY29sIGNvbHM9XFxcIjEyXFxcIiBtZD1cXFwiOFxcXCI+PGFwcC1tYWluLz48L2ItY29sPiAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLXZpZXcvPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPGItY29sIGNvbHM9XFxcIjEyXFxcIiBtZD1cXFwiOFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XFxcInBvc3QgaW4gcG9zdHNcXFwiIDprZXk9XFxcInBvc3QuaWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+PHJvdXRlci1saW5rIDp0bz1cXFwieyBuYW1lOiAncG9zdF9kZXRhaWwnLCBwYXJhbXM6IHtpZDogcG9zdC5pZH0gfVxcXCI+e3sgcG9zdC50aXRsZSB9fTwvcm91dGVyLWxpbms+PC9oMz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcG9zdC5ib2R5IH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNhcmQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPiAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDwvYi1yb3c+XFxuICAgICAgICAgICAgPC9iLWNvbnRhaW5lcj5cXG4gICAgICAgIDwhLS0gPHJvdXRlci12aWV3Lz4gLS0+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9jb21tb25zL0FwcC1oZWFkZXInXFxuaW1wb3J0IEFzaWRlIGZyb20gJy4vY29tcG9uZW50cy9jb21tb25zL0FwcC1hc2lkZSdcXG4vLyBpbXBvcnQgTWFpbiBmcm9tICcuL2NvbXBvbmVudHMvY29tbW9ucy9BcHAtbWFpbidcXG4vLyBpbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcXG5leHBvcnQgZGVmYXVsdCB7XFxuICAgIG5hbWU6IFxcXCJhcHBcXFwiLFxcbiAgICBjb21wb25lbnRzOiB7XFxuICAgICAgICAnYXBwLWhlYWRlcic6IEhlYWRlcixcXG4gICAgICAgICdhcHAtYXNpZGUnOiBBc2lkZSwgXFxuICAgIC8vICAgICAnYXBwLW1haW4nOiBNYWluXFxuICAgIH0sXFxuICAgIC8vIGNvbXB1dGVkOiBtYXBHZXR0ZXJzICh7XFxuICAgIC8vICAgICBwb3N0czogJ3Bvc3RzJ1xcbiAgICAvLyB9KSxcXG4gICAgLy8gY3JlYXRlZCgpIHtcXG4gICAgLy8gICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdHRVRfUE9TVFMnKVxcbiAgICAvLyB9XFxufTtcXG48L3NjcmlwdD5cXG5cXG48c3R5bGU+XFxuLmNhcmQge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi03YmE1YmQ5MFwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9BcHAudnVlXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { attrs: { id: \"app\" } },\n    [\n      _c(\n        \"b-container\",\n        [\n          _c(\"app-header\"),\n          _vm._v(\" \"),\n          _c(\n            \"b-row\",\n            [\n              _c(\n                \"b-col\",\n                { attrs: { \"cols-xs\": \"6\", md: \"4\" } },\n                [_c(\"app-aside\")],\n                1\n              ),\n              _vm._v(\" \"),\n              _c(\"router-view\")\n            ],\n            1\n          )\n        ],\n        1\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (true) {\n  module.hot.accept()\n  if (module.hot.data) {\n    __webpack_require__(8)      .rerender(\"data-v-7ba5bd90\", esExports)\n  }\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQXBwLnZ1ZT8zYTI1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssU0FBUyxZQUFZLEVBQUU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTLDBCQUEwQixFQUFFO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiNDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBhdHRyczogeyBpZDogXCJhcHBcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiYi1jb250YWluZXJcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiYXBwLWhlYWRlclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBcImNvbHMteHNcIjogXCI2XCIsIG1kOiBcIjRcIiB9IH0sXG4gICAgICAgICAgICAgICAgW19jKFwiYXBwLWFzaWRlXCIpXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwicm91dGVyLXZpZXdcIilcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG52YXIgZXNFeHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuZXhwb3J0IGRlZmF1bHQgZXNFeHBvcnRzXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTdiYTViZDkwXCIsIGVzRXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtN2JhNWJkOTBcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvQXBwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///41\n");

/***/ })

})