webpackHotUpdate(0,{

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(37)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.card {\\n    margin-top: 10px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/home/mikefromru/django_apps/blog-django-vue/project/src/src/App.vue\"],\"names\":[],\"mappings\":\";AA2CA;IACA,iBAAA;CACA\",\"file\":\"App.vue\",\"sourcesContent\":[\"<template>\\n    <div id=\\\"app\\\">\\n            <b-container>\\n                <app-header/>\\n                    <b-row>\\n                        <b-col cols-xs=\\\"6\\\" md='4'><app-aside/></b-col>\\n                        <!-- <b-col cols=\\\"12\\\" md=\\\"8\\\"><app-main/></b-col> -->\\n                        <b-col cols=\\\"12\\\" md=\\\"8\\\">\\n                            <div v-for=\\\"post in posts\\\" :key=\\\"post.id\\\">\\n                                <b-card>\\n                                    <h3><router-link :to=\\\"{ name: 'post_detail', params: {id: post.id} }\\\">{{ post.title }}</router-link></h3>\\n                                     {{ post.body }}\\n                                 </b-card>\\n                             </div>\\n                        </b-col>\\n                    </b-row>\\n            </b-container>\\n        <router-view/>\\n    </div>\\n</template>\\n\\n<script>\\nimport Header from './components/commons/App-header'\\nimport Aside from './components/commons/App-aside'\\nimport Main from './components/commons/App-main'\\nimport { mapGetters } from 'vuex'\\nexport default {\\n    name: \\\"app\\\",\\n    components: {\\n        'app-header': Header,\\n        'app-aside': Aside, \\n        'app-main': Main\\n    },\\n    computed: mapGetters ({\\n        posts: 'posts'\\n    }),\\n    created() {\\n        this.$store.dispatch('GET_POSTS')\\n    }\\n};\\n</script>\\n\\n<style>\\n.card {\\n    margin-top: 10px;\\n}\\n</style>\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQXBwLnZ1ZT8wMzI4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7OztBQUdBO0FBQ0Esa0NBQW1DLHVCQUF1QixHQUFHLFVBQVUsdUhBQXVILE1BQU0sV0FBVyx1aUJBQXVpQiwrQkFBK0IsWUFBWSxFQUFFLEtBQUssY0FBYyw0REFBNEQsYUFBYSxnWkFBZ1osYUFBYSw4QkFBOEIsdUNBQXVDLDhGQUE4Riw4QkFBOEIsK0JBQStCLG1CQUFtQixrREFBa0QsSUFBSSwrQkFBK0IsdUJBQXVCLEdBQUcsK0JBQStCOztBQUU3cEQiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uY2FyZCB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9taWtlZnJvbXJ1L2RqYW5nb19hcHBzL2Jsb2ctZGphbmdvLXZ1ZS9wcm9qZWN0L3NyYy9zcmMvQXBwLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBMkNBO0lBQ0EsaUJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiQXBwLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxkaXYgaWQ9XFxcImFwcFxcXCI+XFxuICAgICAgICAgICAgPGItY29udGFpbmVyPlxcbiAgICAgICAgICAgICAgICA8YXBwLWhlYWRlci8+XFxuICAgICAgICAgICAgICAgICAgICA8Yi1yb3c+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIGNvbHMteHM9XFxcIjZcXFwiIG1kPSc0Jz48YXBwLWFzaWRlLz48L2ItY29sPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPGItY29sIGNvbHM9XFxcIjEyXFxcIiBtZD1cXFwiOFxcXCI+PGFwcC1tYWluLz48L2ItY29sPiAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgY29scz1cXFwiMTJcXFwiIG1kPVxcXCI4XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cXFwicG9zdCBpbiBwb3N0c1xcXCIgOmtleT1cXFwicG9zdC5pZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz48cm91dGVyLWxpbmsgOnRvPVxcXCJ7IG5hbWU6ICdwb3N0X2RldGFpbCcsIHBhcmFtczoge2lkOiBwb3N0LmlkfSB9XFxcIj57eyBwb3N0LnRpdGxlIH19PC9yb3V0ZXItbGluaz48L2gzPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3N0LmJvZHkgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItY2FyZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XFxuICAgICAgICAgICAgICAgICAgICA8L2Itcm93PlxcbiAgICAgICAgICAgIDwvYi1jb250YWluZXI+XFxuICAgICAgICA8cm91dGVyLXZpZXcvPlxcbiAgICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvY29tbW9ucy9BcHAtaGVhZGVyJ1xcbmltcG9ydCBBc2lkZSBmcm9tICcuL2NvbXBvbmVudHMvY29tbW9ucy9BcHAtYXNpZGUnXFxuaW1wb3J0IE1haW4gZnJvbSAnLi9jb21wb25lbnRzL2NvbW1vbnMvQXBwLW1haW4nXFxuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgICBuYW1lOiBcXFwiYXBwXFxcIixcXG4gICAgY29tcG9uZW50czoge1xcbiAgICAgICAgJ2FwcC1oZWFkZXInOiBIZWFkZXIsXFxuICAgICAgICAnYXBwLWFzaWRlJzogQXNpZGUsIFxcbiAgICAgICAgJ2FwcC1tYWluJzogTWFpblxcbiAgICB9LFxcbiAgICBjb21wdXRlZDogbWFwR2V0dGVycyAoe1xcbiAgICAgICAgcG9zdHM6ICdwb3N0cydcXG4gICAgfSksXFxuICAgIGNyZWF0ZWQoKSB7XFxuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnR0VUX1BPU1RTJylcXG4gICAgfVxcbn07XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcbi5jYXJkIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtN2JhNWJkOTBcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvQXBwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_commons_App_header__ = __webpack_require__(253);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_commons_App_aside__ = __webpack_require__(255);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_commons_App_main__ = __webpack_require__(257);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(273);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n    name: \"app\",\n    components: {\n        'app-header': __WEBPACK_IMPORTED_MODULE_0__components_commons_App_header__[\"a\" /* default */],\n        'app-aside': __WEBPACK_IMPORTED_MODULE_1__components_commons_App_aside__[\"a\" /* default */],\n        'app-main': __WEBPACK_IMPORTED_MODULE_2__components_commons_App_main__[\"a\" /* default */]\n    },\n    computed: Object(__WEBPACK_IMPORTED_MODULE_3_vuex__[\"b\" /* mapGetters */])({\n        posts: 'posts'\n    }),\n    created: function created() {\n        this.$store.dispatch('GET_POSTS');\n    }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL0FwcC52dWU/ZWE5OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQTtBQUNBO0FBQ0E7QUFDQTt5REFDQTtBQUNBLGVBREE7QUFFQTtBQUNBLHFHQURBO0FBRUEsbUdBRkE7QUFHQTtBQUhBLEtBRkE7QUFPQTtBQUNBO0FBREEsTUFQQTtBQVVBLFdBVkEscUJBVUE7QUFDQTtBQUNBO0FBWkEiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGlkPVwiYXBwXCI+XG4gICAgICAgICAgICA8Yi1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPGFwcC1oZWFkZXIvPlxuICAgICAgICAgICAgICAgICAgICA8Yi1yb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgY29scy14cz1cIjZcIiBtZD0nNCc+PGFwcC1hc2lkZS8+PC9iLWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPGItY29sIGNvbHM9XCIxMlwiIG1kPVwiOFwiPjxhcHAtbWFpbi8+PC9iLWNvbD4gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgY29scz1cIjEyXCIgbWQ9XCI4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cInBvc3QgaW4gcG9zdHNcIiA6a2V5PVwicG9zdC5pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdwb3N0X2RldGFpbCcsIHBhcmFtczoge2lkOiBwb3N0LmlkfSB9XCI+e3sgcG9zdC50aXRsZSB9fTwvcm91dGVyLWxpbms+PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3N0LmJvZHkgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDwvYi1yb3c+XG4gICAgICAgICAgICA8L2ItY29udGFpbmVyPlxuICAgICAgICA8cm91dGVyLXZpZXcvPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL2NvbW1vbnMvQXBwLWhlYWRlcidcbmltcG9ydCBBc2lkZSBmcm9tICcuL2NvbXBvbmVudHMvY29tbW9ucy9BcHAtYXNpZGUnXG5pbXBvcnQgTWFpbiBmcm9tICcuL2NvbXBvbmVudHMvY29tbW9ucy9BcHAtbWFpbidcbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwiYXBwXCIsXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICAnYXBwLWhlYWRlcic6IEhlYWRlcixcbiAgICAgICAgJ2FwcC1hc2lkZSc6IEFzaWRlLCBcbiAgICAgICAgJ2FwcC1tYWluJzogTWFpblxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IG1hcEdldHRlcnMgKHtcbiAgICAgICAgcG9zdHM6ICdwb3N0cydcbiAgICB9KSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnR0VUX1BPU1RTJylcbiAgICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi5jYXJkIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvQXBwLnZ1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n");

/***/ })

})