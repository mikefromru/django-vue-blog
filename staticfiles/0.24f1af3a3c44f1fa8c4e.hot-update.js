webpackHotUpdate(0,{

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    _vm._l(_vm.posts, function(post) {\n      return _c(\n        \"div\",\n        { key: post.id },\n        [\n          _c(\"b-card\", [\n            _c(\n              \"h3\",\n              [\n                _c(\n                  \"router-link\",\n                  {\n                    attrs: {\n                      to: { name: \"post_detail\", params: { id: post.id } }\n                    }\n                  },\n                  [_vm._v(_vm._s(post.title))]\n                )\n              ],\n              1\n            ),\n            _vm._v(\n              \"\\n                    \" +\n                _vm._s(post.body) +\n                \"\\n                \"\n            )\n          ])\n        ],\n        1\n      )\n    })\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (true) {\n  module.hot.accept()\n  if (module.hot.data) {\n    __webpack_require__(7)      .rerender(\"data-v-b5bed152\", esExports)\n  }\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb25zL0Jsb2dGZWVkLnZ1ZT9mOGZhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsZUFBZTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsK0JBQStCLGNBQWM7QUFDeEU7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIxNTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgX3ZtLl9sKF92bS5wb3N0cywgZnVuY3Rpb24ocG9zdCkge1xuICAgICAgcmV0dXJuIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IGtleTogcG9zdC5pZCB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJiLWNhcmRcIiwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiaDNcIixcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRvOiB7IG5hbWU6IFwicG9zdF9kZXRhaWxcIiwgcGFyYW1zOiB7IGlkOiBwb3N0LmlkIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MocG9zdC50aXRsZSkpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICBfdm0uX3MocG9zdC5ib2R5KSArXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgfSlcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbnZhciBlc0V4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5leHBvcnQgZGVmYXVsdCBlc0V4cG9ydHNcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtYjViZWQxNTJcIiwgZXNFeHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1iNWJlZDE1MlwiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvY29tbW9ucy9CbG9nRmVlZC52dWVcbi8vIG1vZHVsZSBpZCA9IDE1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///154\n");

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(12)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.some[data-v-b5bed152] {\\n    /* width: 100%; */\\n}\\n/* @media (max-width: 600px) { */\\n    /* .card { */\\n        /* width: 100%; */\\n    /* } */\\n/* } */\\n\", \"\", {\"version\":3,\"sources\":[\"/home/mikefromru/django_apps/blog-django-vue/project/src/components/commons/src/components/commons/BlogFeed.vue\"],\"names\":[],\"mappings\":\";AAiCA;IACA,kBAAA;CACA;AACA,iCAAA;IACA,aAAA;QACA,kBAAA;IACA,OAAA;AACA,OAAA\",\"file\":\"BlogFeed.vue\",\"sourcesContent\":[\"<template>\\n    <div>\\n            <!-- <div class=\\\"post-card\\\"> -->\\n        <!-- <b-row> -->\\n            <!-- <b-col cols=\\\"12\\\" md=\\\"8\\\"> -->\\n                <div v-for=\\\"post in posts\\\" :key=\\\"post.id\\\">\\n                    <b-card>\\n                        <h3><router-link :to=\\\"{ name: 'post_detail', params: {id: post.id} }\\\">{{ post.title }}</router-link></h3>\\n                        {{ post.body }}\\n                    </b-card>\\n                </div>\\n            <!-- </b-col> -->\\n        <!-- </b-row> -->\\n            <!-- </div> -->\\n    </div>\\n</template>\\n\\n<script>\\nimport axios from 'axios'\\nimport { mapGetters } from 'vuex'\\nexport default {\\n    name: 'App-main',\\n    computed: mapGetters ({\\n        posts: 'posts'\\n    }),\\n    created() {\\n        this.$store.dispatch('GET_POSTS')\\n    }\\n}\\n</script>\\n\\n\\n<style scoped>\\n.some {\\n    /* width: 100%; */\\n}\\n/* @media (max-width: 600px) { */\\n    /* .card { */\\n        /* width: 100%; */\\n    /* } */\\n/* } */\\n</style>\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb25zL0Jsb2dGZWVkLnZ1ZT81MjMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7OztBQUdBO0FBQ0EsbURBQW9ELHFCQUFxQixNQUFNLGdDQUFnQyxtQkFBbUIsNEJBQTRCLGFBQWEsU0FBUyxhQUFhLGtLQUFrSyxNQUFNLFdBQVcsS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLHNWQUFzViwrQkFBK0IsWUFBWSxFQUFFLEtBQUssY0FBYywrQ0FBK0MsYUFBYSx3TkFBd04sYUFBYSw4QkFBOEIsb0RBQW9ELCtCQUErQixtQkFBbUIsa0RBQWtELEdBQUcsd0NBQXdDLHFCQUFxQixNQUFNLGdDQUFnQyxtQkFBbUIsNEJBQTRCLGFBQWEsU0FBUyxrQ0FBa0M7O0FBRTc5QyIsImZpbGUiOiIzNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uc29tZVtkYXRhLXYtYjViZWQxNTJdIHtcXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxufVxcbi8qIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkgeyAqL1xcbiAgICAvKiAuY2FyZCB7ICovXFxuICAgICAgICAvKiB3aWR0aDogMTAwJTsgKi9cXG4gICAgLyogfSAqL1xcbi8qIH0gKi9cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvbWlrZWZyb21ydS9kamFuZ29fYXBwcy9ibG9nLWRqYW5nby12dWUvcHJvamVjdC9zcmMvY29tcG9uZW50cy9jb21tb25zL3NyYy9jb21wb25lbnRzL2NvbW1vbnMvQmxvZ0ZlZWQudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFpQ0E7SUFDQSxrQkFBQTtDQUNBO0FBQ0EsaUNBQUE7SUFDQSxhQUFBO1FBQ0Esa0JBQUE7SUFDQSxPQUFBO0FBQ0EsT0FBQVwiLFwiZmlsZVwiOlwiQmxvZ0ZlZWQudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPGRpdj5cXG4gICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XFxcInBvc3QtY2FyZFxcXCI+IC0tPlxcbiAgICAgICAgPCEtLSA8Yi1yb3c+IC0tPlxcbiAgICAgICAgICAgIDwhLS0gPGItY29sIGNvbHM9XFxcIjEyXFxcIiBtZD1cXFwiOFxcXCI+IC0tPlxcbiAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVxcXCJwb3N0IGluIHBvc3RzXFxcIiA6a2V5PVxcXCJwb3N0LmlkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxiLWNhcmQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxyb3V0ZXItbGluayA6dG89XFxcInsgbmFtZTogJ3Bvc3RfZGV0YWlsJywgcGFyYW1zOiB7aWQ6IHBvc3QuaWR9IH1cXFwiPnt7IHBvc3QudGl0bGUgfX08L3JvdXRlci1saW5rPjwvaDM+XFxuICAgICAgICAgICAgICAgICAgICAgICAge3sgcG9zdC5ib2R5IH19XFxuICAgICAgICAgICAgICAgICAgICA8L2ItY2FyZD5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPCEtLSA8L2ItY29sPiAtLT5cXG4gICAgICAgIDwhLS0gPC9iLXJvdz4gLS0+XFxuICAgICAgICAgICAgPCEtLSA8L2Rpdj4gLS0+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXFxuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgICBuYW1lOiAnQXBwLW1haW4nLFxcbiAgICBjb21wdXRlZDogbWFwR2V0dGVycyAoe1xcbiAgICAgICAgcG9zdHM6ICdwb3N0cydcXG4gICAgfSksXFxuICAgIGNyZWF0ZWQoKSB7XFxuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnR0VUX1BPU1RTJylcXG4gICAgfVxcbn1cXG48L3NjcmlwdD5cXG5cXG5cXG48c3R5bGUgc2NvcGVkPlxcbi5zb21lIHtcXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxufVxcbi8qIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkgeyAqL1xcbiAgICAvKiAuY2FyZCB7ICovXFxuICAgICAgICAvKiB3aWR0aDogMTAwJTsgKi9cXG4gICAgLyogfSAqL1xcbi8qIH0gKi9cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi1iNWJlZDE1MlwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvY29tbW9ucy9CbG9nRmVlZC52dWVcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///34\n");

/***/ })

})