webpackHotUpdate(0,{

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(10)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n/* @media (min-width: 1000px) {\\n    .card {\\n        width: 300px;\\n    }\\n}\\n*/\\n\\n/* @media (max-width: 600px) {\\n    .card {\\n        display: none;\\n    }\\n} */\\n\", \"\", {\"version\":3,\"sources\":[\"/home/mikefromru/django_apps/blog-django-vue/project/src/components/commons/src/components/commons/App-aside.vue\"],\"names\":[],\"mappings\":\";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAqCA;;;;;EAKA;;AAEA;;;;IAIA\",\"file\":\"App-aside.vue\",\"sourcesContent\":[\"<template>\\n    <div>\\n        <b-card title=\\\"Card Category\\\">\\n            <div v-for=\\\"category in categories\\\" :key=\\\"category.id\\\">\\n                <router-link :to=\\\"{name: 'post_filter', params: {id: category.id}}\\\">{{ category.name }}</router-link>\\n            </div>\\n        </b-card>\\n    </div>\\n</template>\\n\\n<script>\\nimport axios from 'axios'\\nimport { mapGetters } from 'vuex'\\nexport default {\\n    name: 'App-aside',\\n    data() {\\n        return {\\n            categories: []\\n        }\\n    },\\n    computed: mapGetters ({\\n        categories: 'categories'\\n    }),\\n    methods() {\\n        axios.get('/api/categories/')\\n        .then()\\n    },\\n    created() {\\n        get_categories()\\n        // this.$store.dispatch('GET_CATEGORIES')\\n    }\\n\\n}\\n</script>\\n\\n\\n<style scoped>\\n/* @media (min-width: 1000px) {\\n    .card {\\n        width: 300px;\\n    }\\n}\\n*/\\n\\n/* @media (max-width: 600px) {\\n    .card {\\n        display: none;\\n    }\\n} */\\n</style>\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb25zL0FwcC1hc2lkZS52dWU/NmZmMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOzs7QUFHQTtBQUNBLGtJQUFtSSxhQUFhLHVCQUF1QixPQUFPLEdBQUcsc0NBQXNDLGFBQWEsd0JBQXdCLE9BQU8sR0FBRyxhQUFhLHVNQUF1TSxVQUFVLE1BQU0sUUFBUSw4TkFBOE4sOEJBQThCLGlCQUFpQixLQUFLLGlCQUFpQiwrSEFBK0gsYUFBYSw4QkFBOEIsc0NBQXNDLGtCQUFrQix1Q0FBdUMsT0FBTyw4QkFBOEIseUNBQXlDLG1CQUFtQiwrREFBK0Qsa0JBQWtCLG9GQUFvRixLQUFLLGdFQUFnRSxhQUFhLHVCQUF1QixPQUFPLEdBQUcsc0NBQXNDLGFBQWEsd0JBQXdCLE9BQU8sR0FBRyxnQ0FBZ0M7O0FBRTVnRCIsImZpbGUiOiIzMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4vKiBAbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxuICAgIC5jYXJkIHtcXG4gICAgICAgIHdpZHRoOiAzMDBweDtcXG4gICAgfVxcbn1cXG4qL1xcblxcbi8qIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAuY2FyZCB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxufSAqL1xcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9taWtlZnJvbXJ1L2RqYW5nb19hcHBzL2Jsb2ctZGphbmdvLXZ1ZS9wcm9qZWN0L3NyYy9jb21wb25lbnRzL2NvbW1vbnMvc3JjL2NvbXBvbmVudHMvY29tbW9ucy9BcHAtYXNpZGUudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQ0E7Ozs7O0VBS0E7O0FBRUE7Ozs7SUFJQVwiLFwiZmlsZVwiOlwiQXBwLWFzaWRlLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxkaXY+XFxuICAgICAgICA8Yi1jYXJkIHRpdGxlPVxcXCJDYXJkIENhdGVnb3J5XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IHYtZm9yPVxcXCJjYXRlZ29yeSBpbiBjYXRlZ29yaWVzXFxcIiA6a2V5PVxcXCJjYXRlZ29yeS5pZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XFxcIntuYW1lOiAncG9zdF9maWx0ZXInLCBwYXJhbXM6IHtpZDogY2F0ZWdvcnkuaWR9fVxcXCI+e3sgY2F0ZWdvcnkubmFtZSB9fTwvcm91dGVyLWxpbms+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2ItY2FyZD5cXG4gICAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcXG5leHBvcnQgZGVmYXVsdCB7XFxuICAgIG5hbWU6ICdBcHAtYXNpZGUnLFxcbiAgICBkYXRhKCkge1xcbiAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiBbXVxcbiAgICAgICAgfVxcbiAgICB9LFxcbiAgICBjb21wdXRlZDogbWFwR2V0dGVycyAoe1xcbiAgICAgICAgY2F0ZWdvcmllczogJ2NhdGVnb3JpZXMnXFxuICAgIH0pLFxcbiAgICBtZXRob2RzKCkge1xcbiAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL2NhdGVnb3JpZXMvJylcXG4gICAgICAgIC50aGVuKClcXG4gICAgfSxcXG4gICAgY3JlYXRlZCgpIHtcXG4gICAgICAgIGdldF9jYXRlZ29yaWVzKClcXG4gICAgICAgIC8vIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdHRVRfQ0FURUdPUklFUycpXFxuICAgIH1cXG5cXG59XFxuPC9zY3JpcHQ+XFxuXFxuXFxuPHN0eWxlIHNjb3BlZD5cXG4vKiBAbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxuICAgIC5jYXJkIHtcXG4gICAgICAgIHdpZHRoOiAzMDBweDtcXG4gICAgfVxcbn1cXG4qL1xcblxcbi8qIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAuY2FyZCB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxufSAqL1xcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LWQ5MDMzYWI2XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9jb21tb25zL0FwcC1hc2lkZS52dWVcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///32\n");

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(24);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(33);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n    name: 'App-aside',\n    data: function data() {\n        return {\n            categories: []\n        };\n    },\n\n    computed: Object(__WEBPACK_IMPORTED_MODULE_1_vuex__[\"b\" /* mapGetters */])({\n        categories: 'categories'\n    }),\n    methods: function methods() {\n        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/categories/').then();\n    },\n    created: function created() {\n        get_categories();\n        // this.$store.dispatch('GET_CATEGORIES')\n    }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvY29tbW9ucy9BcHAtYXNpZGUudnVlP2ZiZjIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQSxxQkFEQTtBQUVBLFFBRkEsa0JBRUE7QUFDQTtBQUNBO0FBREE7QUFHQSxLQU5BOztBQU9BO0FBQ0E7QUFEQSxNQVBBO0FBVUEsV0FWQSxxQkFVQTtBQUNBLDhFQUNBLElBREE7QUFFQSxLQWJBO0FBY0EsV0FkQSxxQkFjQTtBQUNBO0FBQ0E7QUFDQTtBQWpCQSIsImZpbGUiOiI2My5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8Yi1jYXJkIHRpdGxlPVwiQ2FyZCBDYXRlZ29yeVwiPlxuICAgICAgICAgICAgPGRpdiB2LWZvcj1cImNhdGVnb3J5IGluIGNhdGVnb3JpZXNcIiA6a2V5PVwiY2F0ZWdvcnkuaWRcIj5cbiAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwie25hbWU6ICdwb3N0X2ZpbHRlcicsIHBhcmFtczoge2lkOiBjYXRlZ29yeS5pZH19XCI+e3sgY2F0ZWdvcnkubmFtZSB9fTwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9iLWNhcmQ+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ0FwcC1hc2lkZScsXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IFtdXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiBtYXBHZXR0ZXJzICh7XG4gICAgICAgIGNhdGVnb3JpZXM6ICdjYXRlZ29yaWVzJ1xuICAgIH0pLFxuICAgIG1ldGhvZHMoKSB7XG4gICAgICAgIGF4aW9zLmdldCgnL2FwaS9jYXRlZ29yaWVzLycpXG4gICAgICAgIC50aGVuKClcbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIGdldF9jYXRlZ29yaWVzKClcbiAgICAgICAgLy8gdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ0dFVF9DQVRFR09SSUVTJylcbiAgICB9XG5cbn1cbjwvc2NyaXB0PlxuXG5cbjxzdHlsZSBzY29wZWQ+XG4vKiBAbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XG4gICAgLmNhcmQge1xuICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgfVxufVxuKi9cblxuLyogQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLmNhcmQge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn0gKi9cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2NvbW1vbnMvQXBwLWFzaWRlLnZ1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///63\n");

/***/ })

})