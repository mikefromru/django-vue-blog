webpackHotUpdate(0,{

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(10)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n/* @media (min-width: 1000px) {\\n    .card {\\n        width: 300px;\\n    }\\n}\\n*/\\n\\n/* @media (max-width: 600px) {\\n    .card {\\n        display: none;\\n    }\\n} */\\n\", \"\", {\"version\":3,\"sources\":[\"/home/mikefromru/django_apps/blog-django-vue/project/src/components/commons/src/components/commons/App-aside.vue\"],\"names\":[],\"mappings\":\";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAyCA;;;;;EAKA;;AAEA;;;;IAIA\",\"file\":\"App-aside.vue\",\"sourcesContent\":[\"<template>\\n    <div>\\n        <b-card title=\\\"Card Category\\\">\\n            <div v-for=\\\"category in categories\\\" :key=\\\"category.id\\\">\\n                <router-link :to=\\\"{name: 'post_filter', params: {id: category.id}}\\\">{{ category.name }}</router-link>\\n            </div>\\n        </b-card>\\n    </div>\\n</template>\\n\\n<script>\\nimport axios from 'axios'\\nimport { mapGetters } from 'vuex'\\nexport default {\\n    name: 'App-aside',\\n    data() {\\n        return {\\n            categories: []\\n        }\\n    },\\n    computed: mapGetters ({\\n        // categories: 'categories'\\n    }),\\n    methods: {\\n        get_categories() {\\n            axios.get('/api/categories/')\\n            .then(response => {\\n                this.categories = response.data\\n            })\\n        }\\n    },\\n    created() {\\n        get_categories()\\n        // this.$store.dispatch('GET_CATEGORIES')\\n    }\\n\\n}\\n</script>\\n\\n\\n<style scoped>\\n/* @media (min-width: 1000px) {\\n    .card {\\n        width: 300px;\\n    }\\n}\\n*/\\n\\n/* @media (max-width: 600px) {\\n    .card {\\n        display: none;\\n    }\\n} */\\n</style>\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb25zL0FwcC1hc2lkZS52dWU/NmZmMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOzs7QUFHQTtBQUNBLDBJQUEySSxhQUFhLHVCQUF1QixPQUFPLEdBQUcsc0NBQXNDLGFBQWEsd0JBQXdCLE9BQU8sR0FBRyxhQUFhLDJNQUEyTSxVQUFVLE1BQU0sUUFBUSw4TkFBOE4sOEJBQThCLGlCQUFpQixLQUFLLGlCQUFpQiwrSEFBK0gsYUFBYSw4QkFBOEIsc0NBQXNDLGtCQUFrQix1Q0FBdUMsT0FBTyw4QkFBOEIsNENBQTRDLGtCQUFrQiw0QkFBNEIsNEVBQTRFLGdFQUFnRSxZQUFZLE9BQU8sa0JBQWtCLG9GQUFvRixLQUFLLGdFQUFnRSxhQUFhLHVCQUF1QixPQUFPLEdBQUcsc0NBQXNDLGFBQWEsd0JBQXdCLE9BQU8sR0FBRyxnQ0FBZ0M7O0FBRXRwRCIsImZpbGUiOiIzMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4vKiBAbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxuICAgIC5jYXJkIHtcXG4gICAgICAgIHdpZHRoOiAzMDBweDtcXG4gICAgfVxcbn1cXG4qL1xcblxcbi8qIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAuY2FyZCB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxufSAqL1xcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9taWtlZnJvbXJ1L2RqYW5nb19hcHBzL2Jsb2ctZGphbmdvLXZ1ZS9wcm9qZWN0L3NyYy9jb21wb25lbnRzL2NvbW1vbnMvc3JjL2NvbXBvbmVudHMvY29tbW9ucy9BcHAtYXNpZGUudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUNBOzs7OztFQUtBOztBQUVBOzs7O0lBSUFcIixcImZpbGVcIjpcIkFwcC1hc2lkZS52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2PlxcbiAgICAgICAgPGItY2FyZCB0aXRsZT1cXFwiQ2FyZCBDYXRlZ29yeVxcXCI+XFxuICAgICAgICAgICAgPGRpdiB2LWZvcj1cXFwiY2F0ZWdvcnkgaW4gY2F0ZWdvcmllc1xcXCIgOmtleT1cXFwiY2F0ZWdvcnkuaWRcXFwiPlxcbiAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVxcXCJ7bmFtZTogJ3Bvc3RfZmlsdGVyJywgcGFyYW1zOiB7aWQ6IGNhdGVnb3J5LmlkfX1cXFwiPnt7IGNhdGVnb3J5Lm5hbWUgfX08L3JvdXRlci1saW5rPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9iLWNhcmQ+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXFxuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgICBuYW1lOiAnQXBwLWFzaWRlJyxcXG4gICAgZGF0YSgpIHtcXG4gICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgY2F0ZWdvcmllczogW11cXG4gICAgICAgIH1cXG4gICAgfSxcXG4gICAgY29tcHV0ZWQ6IG1hcEdldHRlcnMgKHtcXG4gICAgICAgIC8vIGNhdGVnb3JpZXM6ICdjYXRlZ29yaWVzJ1xcbiAgICB9KSxcXG4gICAgbWV0aG9kczoge1xcbiAgICAgICAgZ2V0X2NhdGVnb3JpZXMoKSB7XFxuICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL2NhdGVnb3JpZXMvJylcXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XFxuICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHJlc3BvbnNlLmRhdGFcXG4gICAgICAgICAgICB9KVxcbiAgICAgICAgfVxcbiAgICB9LFxcbiAgICBjcmVhdGVkKCkge1xcbiAgICAgICAgZ2V0X2NhdGVnb3JpZXMoKVxcbiAgICAgICAgLy8gdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ0dFVF9DQVRFR09SSUVTJylcXG4gICAgfVxcblxcbn1cXG48L3NjcmlwdD5cXG5cXG5cXG48c3R5bGUgc2NvcGVkPlxcbi8qIEBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcXG4gICAgLmNhcmQge1xcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xcbiAgICB9XFxufVxcbiovXFxuXFxuLyogQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIC5jYXJkIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG59ICovXFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtZDkwMzNhYjZcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL2NvbW1vbnMvQXBwLWFzaWRlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///32\n");

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(24);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(33);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n    name: 'App-aside',\n    data: function data() {\n        return {\n            categories: []\n        };\n    },\n\n    computed: Object(__WEBPACK_IMPORTED_MODULE_1_vuex__[\"b\" /* mapGetters */])({\n        // categories: 'categories'\n    }),\n    methods: {\n        get_categories: function get_categories() {\n            var _this = this;\n\n            __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/categories/').then(function (response) {\n                _this.categories = response.data;\n            });\n        }\n    },\n    created: function created() {\n        get_categories();\n        // this.$store.dispatch('GET_CATEGORIES')\n    }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvY29tbW9ucy9BcHAtYXNpZGUudnVlP2ZiZjIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQSxxQkFEQTtBQUVBLFFBRkEsa0JBRUE7QUFDQTtBQUNBO0FBREE7QUFHQSxLQU5BOztBQU9BO0FBQ0E7QUFEQSxNQVBBO0FBVUE7QUFDQSxzQkFEQSw0QkFDQTtBQUFBOztBQUNBLGtGQUNBLElBREEsQ0FDQTtBQUNBO0FBQ0EsYUFIQTtBQUlBO0FBTkEsS0FWQTtBQWtCQSxXQWxCQSxxQkFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFyQkEiLCJmaWxlIjoiNjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGItY2FyZCB0aXRsZT1cIkNhcmQgQ2F0ZWdvcnlcIj5cbiAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJjYXRlZ29yeSBpbiBjYXRlZ29yaWVzXCIgOmtleT1cImNhdGVnb3J5LmlkXCI+XG4gICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cIntuYW1lOiAncG9zdF9maWx0ZXInLCBwYXJhbXM6IHtpZDogY2F0ZWdvcnkuaWR9fVwiPnt7IGNhdGVnb3J5Lm5hbWUgfX08L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYi1jYXJkPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdBcHAtYXNpZGUnLFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjYXRlZ29yaWVzOiBbXVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDogbWFwR2V0dGVycyAoe1xuICAgICAgICAvLyBjYXRlZ29yaWVzOiAnY2F0ZWdvcmllcydcbiAgICB9KSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGdldF9jYXRlZ29yaWVzKCkge1xuICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL2NhdGVnb3JpZXMvJylcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSByZXNwb25zZS5kYXRhXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgICBnZXRfY2F0ZWdvcmllcygpXG4gICAgICAgIC8vIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdHRVRfQ0FURUdPUklFUycpXG4gICAgfVxuXG59XG48L3NjcmlwdD5cblxuXG48c3R5bGUgc2NvcGVkPlxuLyogQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge1xuICAgIC5jYXJkIHtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgIH1cbn1cbiovXG5cbi8qIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5jYXJkIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59ICovXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9jb21tb25zL0FwcC1hc2lkZS52dWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///63\n");

/***/ })

})