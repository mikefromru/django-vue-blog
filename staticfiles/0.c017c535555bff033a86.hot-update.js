webpackHotUpdate(0,{

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    [\n      _vm._l(_vm.posts, function(post) {\n        return _c(\n          \"div\",\n          { key: post.id },\n          [\n            _c(\"b-card\", [\n              _c(\n                \"h3\",\n                [\n                  _c(\n                    \"router-link\",\n                    {\n                      attrs: {\n                        to: { name: \"post_detail\", params: { id: post.id } }\n                      }\n                    },\n                    [_vm._v(_vm._s(post.title))]\n                  )\n                ],\n                1\n              ),\n              _vm._v(\"\\n            \" + _vm._s(post.body) + \"\\n        \")\n            ])\n          ],\n          1\n        )\n      }),\n      _vm._v(\" \"),\n      _c(\"b-pagination\", {\n        attrs: { \"total-rows\": 100, \"per-page\": 10 },\n        model: {\n          value: _vm.currentPage,\n          callback: function($$v) {\n            _vm.currentPage = $$v\n          },\n          expression: \"currentPage\"\n        }\n      })\n    ],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (true) {\n  module.hot.accept()\n  if (module.hot.data) {\n    __webpack_require__(6)      .rerender(\"data-v-b5bed152\", esExports)\n  }\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb25zL0Jsb2dGZWVkLnZ1ZT9mOGZhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxlQUFlO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QiwrQkFBK0IsY0FBYztBQUMxRTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsZ0JBQWdCLG9DQUFvQztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIxNTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX3ZtLl9sKF92bS5wb3N0cywgZnVuY3Rpb24ocG9zdCkge1xuICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IGtleTogcG9zdC5pZCB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiYi1jYXJkXCIsIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJoM1wiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG86IHsgbmFtZTogXCJwb3N0X2RldGFpbFwiLCBwYXJhbXM6IHsgaWQ6IHBvc3QuaWQgfSB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhwb3N0LnRpdGxlKSldXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKHBvc3QuYm9keSkgKyBcIlxcbiAgICAgICAgXCIpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImItcGFnaW5hdGlvblwiLCB7XG4gICAgICAgIGF0dHJzOiB7IFwidG90YWwtcm93c1wiOiAxMDAsIFwicGVyLXBhZ2VcIjogMTAgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLmN1cnJlbnRQYWdlLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS5jdXJyZW50UGFnZSA9ICQkdlxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJjdXJyZW50UGFnZVwiXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG52YXIgZXNFeHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuZXhwb3J0IGRlZmF1bHQgZXNFeHBvcnRzXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LWI1YmVkMTUyXCIsIGVzRXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtYjViZWQxNTJcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL2NvbW1vbnMvQmxvZ0ZlZWQudnVlXG4vLyBtb2R1bGUgaWQgPSAxNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///159\n");

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(10)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n/* @media (max-width: 600px) { */\\n    /* .card { */\\n        /* width: 100%; */\\n    /* } */\\n/* } */\\n\", \"\", {\"version\":3,\"sources\":[\"/home/mikefromru/django_apps/blog-django-vue/project/src/components/commons/src/components/commons/BlogFeed.vue\"],\"names\":[],\"mappings\":\";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkCA,iCAAA;IACA,aAAA;QACA,kBAAA;IACA,OAAA;AACA,OAAA\",\"file\":\"BlogFeed.vue\",\"sourcesContent\":[\"<template>\\n    <div>\\n        <div v-for=\\\"post in posts\\\" :key=\\\"post.id\\\">\\n            <b-card>\\n                <h3><router-link :to=\\\"{ name: 'post_detail', params: {id: post.id} }\\\">{{ post.title }}</router-link></h3>\\n                {{ post.body }}\\n            </b-card>\\n        </div>\\n        <b-pagination :total-rows=\\\"100\\\" v-model=\\\"currentPage\\\" :per-page=\\\"10\\\">\\n        </b-pagination>\\n    </div>\\n</template>\\n\\n<script>\\nimport axios from 'axios'\\nimport { mapGetters } from 'vuex'\\nexport default {\\n    name: 'App-main',\\n    data() {\\n        return {\\n            currentPage: 3\\n        }\\n    },\\n    computed: mapGetters ({\\n        posts: 'posts'\\n    }),\\n    created() {\\n        this.$store.dispatch('GET_POSTS')\\n    }\\n}\\n</script>\\n\\n\\n<style scoped>\\n/* @media (max-width: 600px) { */\\n    /* .card { */\\n        /* width: 100%; */\\n    /* } */\\n/* } */\\n</style>\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb25zL0Jsb2dGZWVkLnZ1ZT81MjMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7OztBQUdBO0FBQ0EsMkhBQTRILG1CQUFtQiw0QkFBNEIsYUFBYSxTQUFTLGFBQWEsbU1BQW1NLFlBQVksVUFBVSxXQUFXLFVBQVUsaU1BQWlNLCtCQUErQixZQUFZLEVBQUUsS0FBSyxjQUFjLHVDQUF1QyxhQUFhLCtOQUErTixhQUFhLDhCQUE4QixxQ0FBcUMsa0JBQWtCLHVDQUF1QyxPQUFPLDhCQUE4QiwrQkFBK0IsbUJBQW1CLGtEQUFrRCxHQUFHLCtEQUErRCxtQkFBbUIsNEJBQTRCLGFBQWEsU0FBUyxrQ0FBa0M7O0FBRTM0QyIsImZpbGUiOiIzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4vKiBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHsgKi9cXG4gICAgLyogLmNhcmQgeyAqL1xcbiAgICAgICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIC8qIH0gKi9cXG4vKiB9ICovXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL21pa2Vmcm9tcnUvZGphbmdvX2FwcHMvYmxvZy1kamFuZ28tdnVlL3Byb2plY3Qvc3JjL2NvbXBvbmVudHMvY29tbW9ucy9zcmMvY29tcG9uZW50cy9jb21tb25zL0Jsb2dGZWVkLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0NBLGlDQUFBO0lBQ0EsYUFBQTtRQUNBLGtCQUFBO0lBQ0EsT0FBQTtBQUNBLE9BQUFcIixcImZpbGVcIjpcIkJsb2dGZWVkLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxkaXY+XFxuICAgICAgICA8ZGl2IHYtZm9yPVxcXCJwb3N0IGluIHBvc3RzXFxcIiA6a2V5PVxcXCJwb3N0LmlkXFxcIj5cXG4gICAgICAgICAgICA8Yi1jYXJkPlxcbiAgICAgICAgICAgICAgICA8aDM+PHJvdXRlci1saW5rIDp0bz1cXFwieyBuYW1lOiAncG9zdF9kZXRhaWwnLCBwYXJhbXM6IHtpZDogcG9zdC5pZH0gfVxcXCI+e3sgcG9zdC50aXRsZSB9fTwvcm91dGVyLWxpbms+PC9oMz5cXG4gICAgICAgICAgICAgICAge3sgcG9zdC5ib2R5IH19XFxuICAgICAgICAgICAgPC9iLWNhcmQ+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxiLXBhZ2luYXRpb24gOnRvdGFsLXJvd3M9XFxcIjEwMFxcXCIgdi1tb2RlbD1cXFwiY3VycmVudFBhZ2VcXFwiIDpwZXItcGFnZT1cXFwiMTBcXFwiPlxcbiAgICAgICAgPC9iLXBhZ2luYXRpb24+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXFxuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgICBuYW1lOiAnQXBwLW1haW4nLFxcbiAgICBkYXRhKCkge1xcbiAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICBjdXJyZW50UGFnZTogM1xcbiAgICAgICAgfVxcbiAgICB9LFxcbiAgICBjb21wdXRlZDogbWFwR2V0dGVycyAoe1xcbiAgICAgICAgcG9zdHM6ICdwb3N0cydcXG4gICAgfSksXFxuICAgIGNyZWF0ZWQoKSB7XFxuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnR0VUX1BPU1RTJylcXG4gICAgfVxcbn1cXG48L3NjcmlwdD5cXG5cXG5cXG48c3R5bGUgc2NvcGVkPlxcbi8qIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkgeyAqL1xcbiAgICAvKiAuY2FyZCB7ICovXFxuICAgICAgICAvKiB3aWR0aDogMTAwJTsgKi9cXG4gICAgLyogfSAqL1xcbi8qIH0gKi9cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi1iNWJlZDE1MlwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvY29tbW9ucy9CbG9nRmVlZC52dWVcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///35\n");

/***/ })

})