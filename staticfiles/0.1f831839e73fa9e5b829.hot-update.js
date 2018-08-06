webpackHotUpdate(0,{

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(10)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n/* @media (max-width: 600px) { */\\n    /* .card { */\\n        /* width: 100%; */\\n    /* } */\\n/* } */\\n\", \"\", {\"version\":3,\"sources\":[\"/home/mikefromru/django_apps/blog-django-vue/project/src/components/commons/src/components/commons/BlogFeed.vue\"],\"names\":[],\"mappings\":\";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA4DA,iCAAA;IACA,aAAA;QACA,kBAAA;IACA,OAAA;AACA,OAAA\",\"file\":\"BlogFeed.vue\",\"sourcesContent\":[\"<template>\\n    <div>\\n        <div v-for=\\\"post in posts\\\" :key=\\\"post.id\\\">\\n            <b-card>\\n                <h3><router-link :to=\\\"{ name: 'post_detail', params: {id: post.id} }\\\">{{ post.title }}</router-link></h3>\\n                {{ post.body }}\\n            </b-card>\\n        </div>\\n        <b-pagination :total-rows=\\\"20\\\" :per-page=\\\"2\\\">\\n        </b-pagination>\\n    </div>\\n</template>\\n\\n<script>\\nimport axios from 'axios'\\nimport { mapGetters } from 'vuex'\\nexport default {\\n    name: 'App-main',\\n    data() {\\n        return {\\n            currentPage: 1,\\n            page: 1,\\n            perPage: 2,\\n            pages: []\\n        }\\n    },\\n    computed: mapGetters ({\\n        posts: 'posts'\\n    }),\\n    methods: {\\n        setPages () {\\n            let numberOfPages = Math.ceil(this.posts.length / this.perPage);\\n            for (let index = 1; index <= numberOfPages; index++) {\\n            this.pages.push(index);\\n            }\\n        },\\n        paginate (posts) {\\n            let page = this.page;\\n            let perPage = this.perPage;\\n            let from = (page * perPage) - perPage;\\n            let to = (page * perPage);\\n            return  posts.slice(from, to);\\n        }\\n    },\\n    watch: {\\n        posts () {\\n            this.setPages();\\n        }\\n    },\\n    created() {\\n        this.$store.dispatch('GET_POSTS')\\n    },\\n    computed: {\\n\\n    }\\n}\\n</script>\\n\\n\\n<style scoped>\\n/* @media (max-width: 600px) { */\\n    /* .card { */\\n        /* width: 100%; */\\n    /* } */\\n/* } */\\n</style>\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb25zL0Jsb2dGZWVkLnZ1ZT81MjMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7OztBQUdBO0FBQ0EsK0tBQWdMLG1CQUFtQiw0QkFBNEIsYUFBYSxTQUFTLGFBQWEsNk5BQTZOLFlBQVksVUFBVSxXQUFXLFVBQVUsaU1BQWlNLCtCQUErQixZQUFZLEVBQUUsS0FBSyxjQUFjLHVDQUF1QyxhQUFhLHFNQUFxTSxhQUFhLDhCQUE4QixxQ0FBcUMsa0JBQWtCLDhHQUE4RyxPQUFPLDhCQUE4QiwrQkFBK0Isa0JBQWtCLHVCQUF1Qiw4RUFBOEUsaUNBQWlDLHdCQUF3QixXQUFXLHFDQUFxQyxlQUFlLFdBQVcsNkJBQTZCLG1DQUFtQyx5Q0FBeUMsb0RBQW9ELHdDQUF3Qyw0Q0FBNEMsV0FBVyxPQUFPLGVBQWUsb0JBQW9CLDhCQUE4QixXQUFXLE9BQU8sa0JBQWtCLGtEQUFrRCxrQkFBa0IsU0FBUyxHQUFHLCtEQUErRCxtQkFBbUIsNEJBQTRCLGFBQWEsU0FBUyxrQ0FBa0M7O0FBRWhuRSIsImZpbGUiOiIzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4vKiBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHsgKi9cXG4gICAgLyogLmNhcmQgeyAqL1xcbiAgICAgICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIC8qIH0gKi9cXG4vKiB9ICovXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL21pa2Vmcm9tcnUvZGphbmdvX2FwcHMvYmxvZy1kamFuZ28tdnVlL3Byb2plY3Qvc3JjL2NvbXBvbmVudHMvY29tbW9ucy9zcmMvY29tcG9uZW50cy9jb21tb25zL0Jsb2dGZWVkLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0REEsaUNBQUE7SUFDQSxhQUFBO1FBQ0Esa0JBQUE7SUFDQSxPQUFBO0FBQ0EsT0FBQVwiLFwiZmlsZVwiOlwiQmxvZ0ZlZWQudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPGRpdj5cXG4gICAgICAgIDxkaXYgdi1mb3I9XFxcInBvc3QgaW4gcG9zdHNcXFwiIDprZXk9XFxcInBvc3QuaWRcXFwiPlxcbiAgICAgICAgICAgIDxiLWNhcmQ+XFxuICAgICAgICAgICAgICAgIDxoMz48cm91dGVyLWxpbmsgOnRvPVxcXCJ7IG5hbWU6ICdwb3N0X2RldGFpbCcsIHBhcmFtczoge2lkOiBwb3N0LmlkfSB9XFxcIj57eyBwb3N0LnRpdGxlIH19PC9yb3V0ZXItbGluaz48L2gzPlxcbiAgICAgICAgICAgICAgICB7eyBwb3N0LmJvZHkgfX1cXG4gICAgICAgICAgICA8L2ItY2FyZD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGItcGFnaW5hdGlvbiA6dG90YWwtcm93cz1cXFwiMjBcXFwiIDpwZXItcGFnZT1cXFwiMlxcXCI+XFxuICAgICAgICA8L2ItcGFnaW5hdGlvbj5cXG4gICAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcXG5leHBvcnQgZGVmYXVsdCB7XFxuICAgIG5hbWU6ICdBcHAtbWFpbicsXFxuICAgIGRhdGEoKSB7XFxuICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiAxLFxcbiAgICAgICAgICAgIHBhZ2U6IDEsXFxuICAgICAgICAgICAgcGVyUGFnZTogMixcXG4gICAgICAgICAgICBwYWdlczogW11cXG4gICAgICAgIH1cXG4gICAgfSxcXG4gICAgY29tcHV0ZWQ6IG1hcEdldHRlcnMgKHtcXG4gICAgICAgIHBvc3RzOiAncG9zdHMnXFxuICAgIH0pLFxcbiAgICBtZXRob2RzOiB7XFxuICAgICAgICBzZXRQYWdlcyAoKSB7XFxuICAgICAgICAgICAgbGV0IG51bWJlck9mUGFnZXMgPSBNYXRoLmNlaWwodGhpcy5wb3N0cy5sZW5ndGggLyB0aGlzLnBlclBhZ2UpO1xcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPD0gbnVtYmVyT2ZQYWdlczsgaW5kZXgrKykge1xcbiAgICAgICAgICAgIHRoaXMucGFnZXMucHVzaChpbmRleCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIHBhZ2luYXRlIChwb3N0cykge1xcbiAgICAgICAgICAgIGxldCBwYWdlID0gdGhpcy5wYWdlO1xcbiAgICAgICAgICAgIGxldCBwZXJQYWdlID0gdGhpcy5wZXJQYWdlO1xcbiAgICAgICAgICAgIGxldCBmcm9tID0gKHBhZ2UgKiBwZXJQYWdlKSAtIHBlclBhZ2U7XFxuICAgICAgICAgICAgbGV0IHRvID0gKHBhZ2UgKiBwZXJQYWdlKTtcXG4gICAgICAgICAgICByZXR1cm4gIHBvc3RzLnNsaWNlKGZyb20sIHRvKTtcXG4gICAgICAgIH1cXG4gICAgfSxcXG4gICAgd2F0Y2g6IHtcXG4gICAgICAgIHBvc3RzICgpIHtcXG4gICAgICAgICAgICB0aGlzLnNldFBhZ2VzKCk7XFxuICAgICAgICB9XFxuICAgIH0sXFxuICAgIGNyZWF0ZWQoKSB7XFxuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnR0VUX1BPU1RTJylcXG4gICAgfSxcXG4gICAgY29tcHV0ZWQ6IHtcXG5cXG4gICAgfVxcbn1cXG48L3NjcmlwdD5cXG5cXG5cXG48c3R5bGUgc2NvcGVkPlxcbi8qIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkgeyAqL1xcbiAgICAvKiAuY2FyZCB7ICovXFxuICAgICAgICAvKiB3aWR0aDogMTAwJTsgKi9cXG4gICAgLyogfSAqL1xcbi8qIH0gKi9cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi1iNWJlZDE1MlwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvY29tbW9ucy9CbG9nRmVlZC52dWVcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///35\n");

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(24);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(33);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (_defineProperty({\n    name: 'App-main',\n    data: function data() {\n        return {\n            currentPage: 1,\n            page: 1,\n            perPage: 2,\n            pages: []\n        };\n    },\n\n    computed: Object(__WEBPACK_IMPORTED_MODULE_1_vuex__[\"b\" /* mapGetters */])({\n        posts: 'posts'\n    }),\n    methods: {\n        setPages: function setPages() {\n            var numberOfPages = Math.ceil(this.posts.length / this.perPage);\n            for (var index = 1; index <= numberOfPages; index++) {\n                this.pages.push(index);\n            }\n        },\n        paginate: function paginate(posts) {\n            var page = this.page;\n            var perPage = this.perPage;\n            var from = page * perPage - perPage;\n            var to = page * perPage;\n            return posts.slice(from, to);\n        }\n    },\n    watch: {\n        posts: function posts() {\n            this.setPages();\n        }\n    },\n    created: function created() {\n        this.$store.dispatch('GET_POSTS');\n    }\n}, 'computed', {}));\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvY29tbW9ucy9CbG9nRmVlZC52dWU/OGRkZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFDQTtBQUNBO0FBQ0Esb0JBREE7QUFFQSxRQUZBLGtCQUVBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBLG1CQUZBO0FBR0Esc0JBSEE7QUFJQTtBQUpBO0FBTUEsS0FUQTs7QUFVQTtBQUNBO0FBREEsTUFWQTtBQWFBO0FBQ0EsZ0JBREEsc0JBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBTkE7QUFPQSxnQkFQQSxvQkFPQSxLQVBBLEVBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQSxLQWJBO0FBNEJBO0FBQ0EsYUFEQSxtQkFDQTtBQUNBO0FBQ0E7QUFIQSxLQTVCQTtBQWlDQSxXQWpDQSxxQkFpQ0E7QUFDQTtBQUNBO0FBbkNBLGVBb0NBLEVBcENBIiwiZmlsZSI6IjY1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxkaXYgdi1mb3I9XCJwb3N0IGluIHBvc3RzXCIgOmtleT1cInBvc3QuaWRcIj5cbiAgICAgICAgICAgIDxiLWNhcmQ+XG4gICAgICAgICAgICAgICAgPGgzPjxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdwb3N0X2RldGFpbCcsIHBhcmFtczoge2lkOiBwb3N0LmlkfSB9XCI+e3sgcG9zdC50aXRsZSB9fTwvcm91dGVyLWxpbms+PC9oMz5cbiAgICAgICAgICAgICAgICB7eyBwb3N0LmJvZHkgfX1cbiAgICAgICAgICAgIDwvYi1jYXJkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGItcGFnaW5hdGlvbiA6dG90YWwtcm93cz1cIjIwXCIgOnBlci1wYWdlPVwiMlwiPlxuICAgICAgICA8L2ItcGFnaW5hdGlvbj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnQXBwLW1haW4nLFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjdXJyZW50UGFnZTogMSxcbiAgICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgICAgICBwZXJQYWdlOiAyLFxuICAgICAgICAgICAgcGFnZXM6IFtdXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiBtYXBHZXR0ZXJzICh7XG4gICAgICAgIHBvc3RzOiAncG9zdHMnXG4gICAgfSksXG4gICAgbWV0aG9kczoge1xuICAgICAgICBzZXRQYWdlcyAoKSB7XG4gICAgICAgICAgICBsZXQgbnVtYmVyT2ZQYWdlcyA9IE1hdGguY2VpbCh0aGlzLnBvc3RzLmxlbmd0aCAvIHRoaXMucGVyUGFnZSk7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDw9IG51bWJlck9mUGFnZXM7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHRoaXMucGFnZXMucHVzaChpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHBhZ2luYXRlIChwb3N0cykge1xuICAgICAgICAgICAgbGV0IHBhZ2UgPSB0aGlzLnBhZ2U7XG4gICAgICAgICAgICBsZXQgcGVyUGFnZSA9IHRoaXMucGVyUGFnZTtcbiAgICAgICAgICAgIGxldCBmcm9tID0gKHBhZ2UgKiBwZXJQYWdlKSAtIHBlclBhZ2U7XG4gICAgICAgICAgICBsZXQgdG8gPSAocGFnZSAqIHBlclBhZ2UpO1xuICAgICAgICAgICAgcmV0dXJuICBwb3N0cy5zbGljZShmcm9tLCB0byk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgIHBvc3RzICgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0UGFnZXMoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ0dFVF9QT1NUUycpXG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuXG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cblxuPHN0eWxlIHNjb3BlZD5cbi8qIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkgeyAqL1xuICAgIC8qIC5jYXJkIHsgKi9cbiAgICAgICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgLyogfSAqL1xuLyogfSAqL1xuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9jb21tb25zL0Jsb2dGZWVkLnZ1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///65\n");

/***/ })

})