webpackHotUpdate(0,{

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(10)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n/* @media (max-width: 600px) { */\\n    /* .card { */\\n        /* width: 100%; */\\n    /* } */\\n/* } */\\n\", \"\", {\"version\":3,\"sources\":[\"/home/mikefromru/django_apps/blog-django-vue/project/src/components/commons/src/components/commons/BlogFeed.vue\"],\"names\":[],\"mappings\":\";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAmEA,iCAAA;IACA,aAAA;QACA,kBAAA;IACA,OAAA;AACA,OAAA\",\"file\":\"BlogFeed.vue\",\"sourcesContent\":[\"<template>\\n    <div>\\n        <div v-for=\\\"post in paginate(posts)\\\" :key=\\\"post.id\\\">\\n            <b-card>\\n                <h3><router-link :to=\\\"{ name: 'post_detail', params: {id: post.id} }\\\">{{ post.title }}</router-link></h3>\\n                {{ post.body }}\\n            </b-card>\\n        </div>\\n        <b-pagination :total-rows=\\\"20\\\" :per-page=\\\"2\\\">\\n        </b-pagination>\\n    </div>\\n</template>\\n\\n<script>\\nimport axios from 'axios'\\nimport { mapGetters } from 'vuex'\\nexport default {\\n    name: 'App-main',\\n    data() {\\n        return {\\n            currentPage: 1,\\n            page: 1,\\n            perPage: 3,\\n            pages: []\\n        }\\n    },\\n    // computed: mapGetters ({\\n    //     posts: 'posts'\\n    // }),\\n    computed: {\\n        mapGetters\\n    },\\n    methods: {\\n        setPages () {\\n            let numberOfPages = Math.ceil(this.posts.length / this.perPage);\\n            for (let index = 1; index <= numberOfPages; index++) {\\n            this.pages.push(index);\\n            }\\n        },\\n        paginate (posts) {\\n            let page = this.page;\\n            let perPage = this.perPage;\\n            let from = (page * perPage) - perPage;\\n            let to = (page * perPage);\\n            return  posts.slice(from, to);\\n        }\\n    },\\n    watch: {\\n        posts () {\\n            this.setPages();\\n        }\\n    },\\n    created() {\\n        this.$store.dispatch('GET_POSTS')\\n        console.log(this.posts.length, '<---')\\n    },\\n    // computed: {\\n        // hello() {\\n            // console.log(this.posts.length, '<---')\\n            // console.log('Hello from computed <---')\\n        // }\\n    // }\\n}\\n</script>\\n\\n\\n<style scoped>\\n/* @media (max-width: 600px) { */\\n    /* .card { */\\n        /* width: 100%; */\\n    /* } */\\n/* } */\\n</style>\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb25zL0Jsb2dGZWVkLnZ1ZT81MjMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7OztBQUdBO0FBQ0EsNkxBQThMLG1CQUFtQiw0QkFBNEIsYUFBYSxTQUFTLGFBQWEsb09BQW9PLFlBQVksVUFBVSxXQUFXLFVBQVUsMk1BQTJNLCtCQUErQixZQUFZLEVBQUUsS0FBSyxjQUFjLHVDQUF1QyxhQUFhLHFNQUFxTSxhQUFhLDhCQUE4QixxQ0FBcUMsa0JBQWtCLDhHQUE4RyxPQUFPLGlDQUFpQyxxQ0FBcUMsbUJBQW1CLDJCQUEyQixpQkFBaUIsdUJBQXVCLDhFQUE4RSxpQ0FBaUMsd0JBQXdCLFdBQVcscUNBQXFDLGVBQWUsV0FBVyw2QkFBNkIsbUNBQW1DLHlDQUF5QyxvREFBb0Qsd0NBQXdDLDRDQUE0QyxXQUFXLE9BQU8sZUFBZSxvQkFBb0IsOEJBQThCLFdBQVcsT0FBTyxrQkFBa0Isa0dBQWtHLHFCQUFxQixzQkFBc0IsNkhBQTZILFVBQVUsR0FBRywrREFBK0QsbUJBQW1CLDRCQUE0QixhQUFhLFNBQVMsa0NBQWtDOztBQUU1NEUiLCJmaWxlIjoiMzUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuLyogQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7ICovXFxuICAgIC8qIC5jYXJkIHsgKi9cXG4gICAgICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgICAvKiB9ICovXFxuLyogfSAqL1xcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9taWtlZnJvbXJ1L2RqYW5nb19hcHBzL2Jsb2ctZGphbmdvLXZ1ZS9wcm9qZWN0L3NyYy9jb21wb25lbnRzL2NvbW1vbnMvc3JjL2NvbXBvbmVudHMvY29tbW9ucy9CbG9nRmVlZC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1FQSxpQ0FBQTtJQUNBLGFBQUE7UUFDQSxrQkFBQTtJQUNBLE9BQUE7QUFDQSxPQUFBXCIsXCJmaWxlXCI6XCJCbG9nRmVlZC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2PlxcbiAgICAgICAgPGRpdiB2LWZvcj1cXFwicG9zdCBpbiBwYWdpbmF0ZShwb3N0cylcXFwiIDprZXk9XFxcInBvc3QuaWRcXFwiPlxcbiAgICAgICAgICAgIDxiLWNhcmQ+XFxuICAgICAgICAgICAgICAgIDxoMz48cm91dGVyLWxpbmsgOnRvPVxcXCJ7IG5hbWU6ICdwb3N0X2RldGFpbCcsIHBhcmFtczoge2lkOiBwb3N0LmlkfSB9XFxcIj57eyBwb3N0LnRpdGxlIH19PC9yb3V0ZXItbGluaz48L2gzPlxcbiAgICAgICAgICAgICAgICB7eyBwb3N0LmJvZHkgfX1cXG4gICAgICAgICAgICA8L2ItY2FyZD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGItcGFnaW5hdGlvbiA6dG90YWwtcm93cz1cXFwiMjBcXFwiIDpwZXItcGFnZT1cXFwiMlxcXCI+XFxuICAgICAgICA8L2ItcGFnaW5hdGlvbj5cXG4gICAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcXG5leHBvcnQgZGVmYXVsdCB7XFxuICAgIG5hbWU6ICdBcHAtbWFpbicsXFxuICAgIGRhdGEoKSB7XFxuICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiAxLFxcbiAgICAgICAgICAgIHBhZ2U6IDEsXFxuICAgICAgICAgICAgcGVyUGFnZTogMyxcXG4gICAgICAgICAgICBwYWdlczogW11cXG4gICAgICAgIH1cXG4gICAgfSxcXG4gICAgLy8gY29tcHV0ZWQ6IG1hcEdldHRlcnMgKHtcXG4gICAgLy8gICAgIHBvc3RzOiAncG9zdHMnXFxuICAgIC8vIH0pLFxcbiAgICBjb21wdXRlZDoge1xcbiAgICAgICAgbWFwR2V0dGVyc1xcbiAgICB9LFxcbiAgICBtZXRob2RzOiB7XFxuICAgICAgICBzZXRQYWdlcyAoKSB7XFxuICAgICAgICAgICAgbGV0IG51bWJlck9mUGFnZXMgPSBNYXRoLmNlaWwodGhpcy5wb3N0cy5sZW5ndGggLyB0aGlzLnBlclBhZ2UpO1xcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPD0gbnVtYmVyT2ZQYWdlczsgaW5kZXgrKykge1xcbiAgICAgICAgICAgIHRoaXMucGFnZXMucHVzaChpbmRleCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIHBhZ2luYXRlIChwb3N0cykge1xcbiAgICAgICAgICAgIGxldCBwYWdlID0gdGhpcy5wYWdlO1xcbiAgICAgICAgICAgIGxldCBwZXJQYWdlID0gdGhpcy5wZXJQYWdlO1xcbiAgICAgICAgICAgIGxldCBmcm9tID0gKHBhZ2UgKiBwZXJQYWdlKSAtIHBlclBhZ2U7XFxuICAgICAgICAgICAgbGV0IHRvID0gKHBhZ2UgKiBwZXJQYWdlKTtcXG4gICAgICAgICAgICByZXR1cm4gIHBvc3RzLnNsaWNlKGZyb20sIHRvKTtcXG4gICAgICAgIH1cXG4gICAgfSxcXG4gICAgd2F0Y2g6IHtcXG4gICAgICAgIHBvc3RzICgpIHtcXG4gICAgICAgICAgICB0aGlzLnNldFBhZ2VzKCk7XFxuICAgICAgICB9XFxuICAgIH0sXFxuICAgIGNyZWF0ZWQoKSB7XFxuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnR0VUX1BPU1RTJylcXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucG9zdHMubGVuZ3RoLCAnPC0tLScpXFxuICAgIH0sXFxuICAgIC8vIGNvbXB1dGVkOiB7XFxuICAgICAgICAvLyBoZWxsbygpIHtcXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnBvc3RzLmxlbmd0aCwgJzwtLS0nKVxcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdIZWxsbyBmcm9tIGNvbXB1dGVkIDwtLS0nKVxcbiAgICAgICAgLy8gfVxcbiAgICAvLyB9XFxufVxcbjwvc2NyaXB0PlxcblxcblxcbjxzdHlsZSBzY29wZWQ+XFxuLyogQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7ICovXFxuICAgIC8qIC5jYXJkIHsgKi9cXG4gICAgICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgICAvKiB9ICovXFxuLyogfSAqL1xcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LWI1YmVkMTUyXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9jb21tb25zL0Jsb2dGZWVkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///35\n");

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(24);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(33);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n    name: 'App-main',\n    data: function data() {\n        return {\n            currentPage: 1,\n            page: 1,\n            perPage: 3,\n            pages: []\n        };\n    },\n\n    // computed: mapGetters ({\n    //     posts: 'posts'\n    // }),\n    computed: {\n        mapGetters: __WEBPACK_IMPORTED_MODULE_1_vuex__[\"b\" /* mapGetters */]\n    },\n    methods: {\n        setPages: function setPages() {\n            var numberOfPages = Math.ceil(this.posts.length / this.perPage);\n            for (var index = 1; index <= numberOfPages; index++) {\n                this.pages.push(index);\n            }\n        },\n        paginate: function paginate(posts) {\n            var page = this.page;\n            var perPage = this.perPage;\n            var from = page * perPage - perPage;\n            var to = page * perPage;\n            return posts.slice(from, to);\n        }\n    },\n    watch: {\n        posts: function posts() {\n            this.setPages();\n        }\n    },\n    created: function created() {\n        this.$store.dispatch('GET_POSTS');\n        console.log(this.posts.length, '<---');\n    }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvY29tbW9ucy9CbG9nRmVlZC52dWU/OGRkZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0E7QUFDQTtBQUNBLG9CQURBO0FBRUEsUUFGQSxrQkFFQTtBQUNBO0FBQ0EsMEJBREE7QUFFQSxtQkFGQTtBQUdBLHNCQUhBO0FBSUE7QUFKQTtBQU1BLEtBVEE7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBLEtBYkE7QUFnQkE7QUFDQSxnQkFEQSxzQkFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FOQTtBQU9BLGdCQVBBLG9CQU9BLEtBUEEsRUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBLEtBaEJBO0FBK0JBO0FBQ0EsYUFEQSxtQkFDQTtBQUNBO0FBQ0E7QUFIQSxLQS9CQTtBQW9DQSxXQXBDQSxxQkFvQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2Q0EiLCJmaWxlIjoiNjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiB2LWZvcj1cInBvc3QgaW4gcGFnaW5hdGUocG9zdHMpXCIgOmtleT1cInBvc3QuaWRcIj5cbiAgICAgICAgICAgIDxiLWNhcmQ+XG4gICAgICAgICAgICAgICAgPGgzPjxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdwb3N0X2RldGFpbCcsIHBhcmFtczoge2lkOiBwb3N0LmlkfSB9XCI+e3sgcG9zdC50aXRsZSB9fTwvcm91dGVyLWxpbms+PC9oMz5cbiAgICAgICAgICAgICAgICB7eyBwb3N0LmJvZHkgfX1cbiAgICAgICAgICAgIDwvYi1jYXJkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGItcGFnaW5hdGlvbiA6dG90YWwtcm93cz1cIjIwXCIgOnBlci1wYWdlPVwiMlwiPlxuICAgICAgICA8L2ItcGFnaW5hdGlvbj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnQXBwLW1haW4nLFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjdXJyZW50UGFnZTogMSxcbiAgICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgICAgICBwZXJQYWdlOiAzLFxuICAgICAgICAgICAgcGFnZXM6IFtdXG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIGNvbXB1dGVkOiBtYXBHZXR0ZXJzICh7XG4gICAgLy8gICAgIHBvc3RzOiAncG9zdHMnXG4gICAgLy8gfSksXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgbWFwR2V0dGVyc1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBzZXRQYWdlcyAoKSB7XG4gICAgICAgICAgICBsZXQgbnVtYmVyT2ZQYWdlcyA9IE1hdGguY2VpbCh0aGlzLnBvc3RzLmxlbmd0aCAvIHRoaXMucGVyUGFnZSk7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDw9IG51bWJlck9mUGFnZXM7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHRoaXMucGFnZXMucHVzaChpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHBhZ2luYXRlIChwb3N0cykge1xuICAgICAgICAgICAgbGV0IHBhZ2UgPSB0aGlzLnBhZ2U7XG4gICAgICAgICAgICBsZXQgcGVyUGFnZSA9IHRoaXMucGVyUGFnZTtcbiAgICAgICAgICAgIGxldCBmcm9tID0gKHBhZ2UgKiBwZXJQYWdlKSAtIHBlclBhZ2U7XG4gICAgICAgICAgICBsZXQgdG8gPSAocGFnZSAqIHBlclBhZ2UpO1xuICAgICAgICAgICAgcmV0dXJuICBwb3N0cy5zbGljZShmcm9tLCB0byk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgIHBvc3RzICgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0UGFnZXMoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ0dFVF9QT1NUUycpXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucG9zdHMubGVuZ3RoLCAnPC0tLScpXG4gICAgfSxcbiAgICAvLyBjb21wdXRlZDoge1xuICAgICAgICAvLyBoZWxsbygpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucG9zdHMubGVuZ3RoLCAnPC0tLScpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnSGVsbG8gZnJvbSBjb21wdXRlZCA8LS0tJylcbiAgICAgICAgLy8gfVxuICAgIC8vIH1cbn1cbjwvc2NyaXB0PlxuXG5cbjxzdHlsZSBzY29wZWQ+XG4vKiBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHsgKi9cbiAgICAvKiAuY2FyZCB7ICovXG4gICAgICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAgIC8qIH0gKi9cbi8qIH0gKi9cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvY29tbW9ucy9CbG9nRmVlZC52dWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///65\n");

/***/ })

})