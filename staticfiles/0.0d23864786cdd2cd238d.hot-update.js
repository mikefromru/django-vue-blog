webpackHotUpdate(0,{

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(10)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n/* @media (min-width: 1000px) {\\n    .card {\\n        width: 300px;\\n    }\\n}\\n*/\\n\\n/* @media (max-width: 600px) {\\n    .card {\\n        display: none;\\n    }\\n} */\\n\", \"\", {\"version\":3,\"sources\":[\"/home/mikefromru/django_apps/blog-django-vue/project/src/components/commons/src/components/commons/App-aside.vue\"],\"names\":[],\"mappings\":\";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAsCA;;;;;EAKA;;AAEA;;;;IAIA\",\"file\":\"App-aside.vue\",\"sourcesContent\":[\"<template>\\n    <div>\\n        <b-card title=\\\"Card Category\\\">\\n            <div v-for=\\\"category in categories\\\" :key=\\\"category.id\\\">\\n                <router-link :to=\\\"{name: 'post_filter', params: {id: category.id}}\\\">{{ category.name }}</router-link>\\n            </div>\\n        </b-card>\\n    </div>\\n</template>\\n\\n<script>\\nimport axios from 'axios'\\nimport { mapGetters } from 'vuex'\\nexport default {\\n    name: 'App-aside',\\n    computed: mapGetters ({\\n        categories: 'categories'\\n    }),\\n    watch: {\\n        '$route.params.id': function (id) {\\n            this.$forceUpdate()\\n        // this.doStuff()\\n        }\\n    },\\n    methods: {\\n        doStuff() {\\n            this.$store.dispatch('GET_CATEGORIES')\\n        }\\n    },\\n    created() {\\n        this.doStuff()\\n    }\\n\\n}\\n</script>\\n\\n\\n<style scoped>\\n/* @media (min-width: 1000px) {\\n    .card {\\n        width: 300px;\\n    }\\n}\\n*/\\n\\n/* @media (max-width: 600px) {\\n    .card {\\n        display: none;\\n    }\\n} */\\n</style>\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb25zL0FwcC1hc2lkZS52dWU/NmZmMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOzs7QUFHQTtBQUNBLG9JQUFxSSxhQUFhLHVCQUF1QixPQUFPLEdBQUcsc0NBQXNDLGFBQWEsd0JBQXdCLE9BQU8sR0FBRyxhQUFhLHdNQUF3TSxVQUFVLE1BQU0sUUFBUSw4TkFBOE4sOEJBQThCLGlCQUFpQixLQUFLLGlCQUFpQiwrSEFBK0gsYUFBYSw4QkFBOEIscURBQXFELHlDQUF5QyxnQkFBZ0IsNkNBQTZDLHVFQUF1RSxPQUFPLGlCQUFpQixxQkFBcUIsK0RBQStELE9BQU8sa0JBQWtCLCtCQUErQixLQUFLLGdFQUFnRSxhQUFhLHVCQUF1QixPQUFPLEdBQUcsc0NBQXNDLGFBQWEsd0JBQXdCLE9BQU8sR0FBRyxnQ0FBZ0M7O0FBRWhqRCIsImZpbGUiOiIzMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4vKiBAbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxuICAgIC5jYXJkIHtcXG4gICAgICAgIHdpZHRoOiAzMDBweDtcXG4gICAgfVxcbn1cXG4qL1xcblxcbi8qIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAuY2FyZCB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxufSAqL1xcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9taWtlZnJvbXJ1L2RqYW5nb19hcHBzL2Jsb2ctZGphbmdvLXZ1ZS9wcm9qZWN0L3NyYy9jb21wb25lbnRzL2NvbW1vbnMvc3JjL2NvbXBvbmVudHMvY29tbW9ucy9BcHAtYXNpZGUudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0NBOzs7OztFQUtBOztBQUVBOzs7O0lBSUFcIixcImZpbGVcIjpcIkFwcC1hc2lkZS52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2PlxcbiAgICAgICAgPGItY2FyZCB0aXRsZT1cXFwiQ2FyZCBDYXRlZ29yeVxcXCI+XFxuICAgICAgICAgICAgPGRpdiB2LWZvcj1cXFwiY2F0ZWdvcnkgaW4gY2F0ZWdvcmllc1xcXCIgOmtleT1cXFwiY2F0ZWdvcnkuaWRcXFwiPlxcbiAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVxcXCJ7bmFtZTogJ3Bvc3RfZmlsdGVyJywgcGFyYW1zOiB7aWQ6IGNhdGVnb3J5LmlkfX1cXFwiPnt7IGNhdGVnb3J5Lm5hbWUgfX08L3JvdXRlci1saW5rPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9iLWNhcmQ+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXFxuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgICBuYW1lOiAnQXBwLWFzaWRlJyxcXG4gICAgY29tcHV0ZWQ6IG1hcEdldHRlcnMgKHtcXG4gICAgICAgIGNhdGVnb3JpZXM6ICdjYXRlZ29yaWVzJ1xcbiAgICB9KSxcXG4gICAgd2F0Y2g6IHtcXG4gICAgICAgICckcm91dGUucGFyYW1zLmlkJzogZnVuY3Rpb24gKGlkKSB7XFxuICAgICAgICAgICAgdGhpcy4kZm9yY2VVcGRhdGUoKVxcbiAgICAgICAgLy8gdGhpcy5kb1N0dWZmKClcXG4gICAgICAgIH1cXG4gICAgfSxcXG4gICAgbWV0aG9kczoge1xcbiAgICAgICAgZG9TdHVmZigpIHtcXG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnR0VUX0NBVEVHT1JJRVMnKVxcbiAgICAgICAgfVxcbiAgICB9LFxcbiAgICBjcmVhdGVkKCkge1xcbiAgICAgICAgdGhpcy5kb1N0dWZmKClcXG4gICAgfVxcblxcbn1cXG48L3NjcmlwdD5cXG5cXG5cXG48c3R5bGUgc2NvcGVkPlxcbi8qIEBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcXG4gICAgLmNhcmQge1xcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xcbiAgICB9XFxufVxcbiovXFxuXFxuLyogQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIC5jYXJkIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG59ICovXFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtZDkwMzNhYjZcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL2NvbW1vbnMvQXBwLWFzaWRlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///32\n");

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(24);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(33);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n    name: 'App-aside',\n    computed: Object(__WEBPACK_IMPORTED_MODULE_1_vuex__[\"b\" /* mapGetters */])({\n        categories: 'categories'\n    }),\n    watch: {\n        '$route.params.id': function $routeParamsId(id) {\n            this.$forceUpdate();\n            // this.doStuff()\n        }\n    },\n    methods: {\n        doStuff: function doStuff() {\n            this.$store.dispatch('GET_CATEGORIES');\n        }\n    },\n    created: function created() {\n        this.doStuff();\n    }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvY29tbW9ucy9BcHAtYXNpZGUudnVlP2ZiZjIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQSxxQkFEQTtBQUVBO0FBQ0E7QUFEQSxNQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBLEtBTEE7QUFXQTtBQUNBLGVBREEscUJBQ0E7QUFDQTtBQUNBO0FBSEEsS0FYQTtBQWdCQSxXQWhCQSxxQkFnQkE7QUFDQTtBQUNBO0FBbEJBIiwiZmlsZSI6IjYzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxiLWNhcmQgdGl0bGU9XCJDYXJkIENhdGVnb3J5XCI+XG4gICAgICAgICAgICA8ZGl2IHYtZm9yPVwiY2F0ZWdvcnkgaW4gY2F0ZWdvcmllc1wiIDprZXk9XCJjYXRlZ29yeS5pZFwiPlxuICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7bmFtZTogJ3Bvc3RfZmlsdGVyJywgcGFyYW1zOiB7aWQ6IGNhdGVnb3J5LmlkfX1cIj57eyBjYXRlZ29yeS5uYW1lIH19PC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2ItY2FyZD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnQXBwLWFzaWRlJyxcbiAgICBjb21wdXRlZDogbWFwR2V0dGVycyAoe1xuICAgICAgICBjYXRlZ29yaWVzOiAnY2F0ZWdvcmllcydcbiAgICB9KSxcbiAgICB3YXRjaDoge1xuICAgICAgICAnJHJvdXRlLnBhcmFtcy5pZCc6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgdGhpcy4kZm9yY2VVcGRhdGUoKVxuICAgICAgICAvLyB0aGlzLmRvU3R1ZmYoKVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGRvU3R1ZmYoKSB7XG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnR0VUX0NBVEVHT1JJRVMnKVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgICB0aGlzLmRvU3R1ZmYoKVxuICAgIH1cblxufVxuPC9zY3JpcHQ+XG5cblxuPHN0eWxlIHNjb3BlZD5cbi8qIEBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgICAuY2FyZCB7XG4gICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICB9XG59XG4qL1xuXG4vKiBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuY2FyZCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufSAqL1xuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvY29tbW9ucy9BcHAtYXNpZGUudnVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///63\n");

/***/ })

})