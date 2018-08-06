webpackHotUpdate(0,{

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(10)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n/* @media (max-width: 600px) { */\\n    /* .card { */\\n        /* width: 100%; */\\n    /* } */\\n/* } */\\n\", \"\", {\"version\":3,\"sources\":[\"/home/mikefromru/django_apps/blog-django-vue/project/src/components/commons/src/components/commons/BlogFeed.vue\"],\"names\":[],\"mappings\":\";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAgEA,iCAAA;IACA,aAAA;QACA,kBAAA;IACA,OAAA;AACA,OAAA\",\"file\":\"BlogFeed.vue\",\"sourcesContent\":[\"<template>\\n    <div>\\n        <div v-for=\\\"post in posts\\\" :key=\\\"post.id\\\">\\n            <b-card>\\n                <h3><router-link :to=\\\"{ name: 'post_detail', params: {id: post.id} }\\\">{{ post.title }}</router-link></h3>\\n                {{ post.body }}\\n            </b-card>\\n        </div>\\n        <b-pagination :total-rows=\\\"20\\\" :per-page=\\\"2\\\">\\n        </b-pagination>\\n    </div>\\n</template>\\n\\n<script>\\nimport axios from 'axios'\\nimport { mapGetters } from 'vuex'\\nexport default {\\n    name: 'App-main',\\n    data() {\\n        return {\\n            currentPage: 1,\\n            page: 1,\\n            perPage: 2,\\n            pages: []\\n        }\\n    },\\n    // computed: mapGetters ({\\n    //     posts: 'posts'\\n    // }),\\n    methods: {\\n        setPages () {\\n            let numberOfPages = Math.ceil(this.posts.length / this.perPage);\\n            for (let index = 1; index <= numberOfPages; index++) {\\n            this.pages.push(index);\\n            }\\n        },\\n        paginate (posts) {\\n            let page = this.page;\\n            let perPage = this.perPage;\\n            let from = (page * perPage) - perPage;\\n            let to = (page * perPage);\\n            return  posts.slice(from, to);\\n        }\\n    },\\n    watch: {\\n        posts () {\\n            this.setPages();\\n        }\\n    },\\n    created() {\\n        this.$store.dispatch('GET_POSTS')\\n        console.log(this.posts.length, '<---')\\n    },\\n    // computed: {\\n        // hello() {\\n            // console.log(this.posts.length, '<---')\\n            // console.log('Hello from computed <---')\\n        // }\\n    // }\\n}\\n</script>\\n\\n\\n<style scoped>\\n/* @media (max-width: 600px) { */\\n    /* .card { */\\n        /* width: 100%; */\\n    /* } */\\n/* } */\\n</style>\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb25zL0Jsb2dGZWVkLnZ1ZT81MjMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7OztBQUdBO0FBQ0EsdUxBQXdMLG1CQUFtQiw0QkFBNEIsYUFBYSxTQUFTLGFBQWEsaU9BQWlPLFlBQVksVUFBVSxXQUFXLFVBQVUsaU1BQWlNLCtCQUErQixZQUFZLEVBQUUsS0FBSyxjQUFjLHVDQUF1QyxhQUFhLHFNQUFxTSxhQUFhLDhCQUE4QixxQ0FBcUMsa0JBQWtCLDhHQUE4RyxPQUFPLGlDQUFpQyxxQ0FBcUMsa0JBQWtCLHVCQUF1Qiw4RUFBOEUsaUNBQWlDLHdCQUF3QixXQUFXLHFDQUFxQyxlQUFlLFdBQVcsNkJBQTZCLG1DQUFtQyx5Q0FBeUMsb0RBQW9ELHdDQUF3Qyw0Q0FBNEMsV0FBVyxPQUFPLGVBQWUsb0JBQW9CLDhCQUE4QixXQUFXLE9BQU8sa0JBQWtCLGtHQUFrRyxxQkFBcUIsc0JBQXNCLDZIQUE2SCxVQUFVLEdBQUcsK0RBQStELG1CQUFtQiw0QkFBNEIsYUFBYSxTQUFTLGtDQUFrQzs7QUFFNTBFIiwiZmlsZSI6IjM1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbi8qIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkgeyAqL1xcbiAgICAvKiAuY2FyZCB7ICovXFxuICAgICAgICAvKiB3aWR0aDogMTAwJTsgKi9cXG4gICAgLyogfSAqL1xcbi8qIH0gKi9cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvbWlrZWZyb21ydS9kamFuZ29fYXBwcy9ibG9nLWRqYW5nby12dWUvcHJvamVjdC9zcmMvY29tcG9uZW50cy9jb21tb25zL3NyYy9jb21wb25lbnRzL2NvbW1vbnMvQmxvZ0ZlZWQudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnRUEsaUNBQUE7SUFDQSxhQUFBO1FBQ0Esa0JBQUE7SUFDQSxPQUFBO0FBQ0EsT0FBQVwiLFwiZmlsZVwiOlwiQmxvZ0ZlZWQudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPGRpdj5cXG4gICAgICAgIDxkaXYgdi1mb3I9XFxcInBvc3QgaW4gcG9zdHNcXFwiIDprZXk9XFxcInBvc3QuaWRcXFwiPlxcbiAgICAgICAgICAgIDxiLWNhcmQ+XFxuICAgICAgICAgICAgICAgIDxoMz48cm91dGVyLWxpbmsgOnRvPVxcXCJ7IG5hbWU6ICdwb3N0X2RldGFpbCcsIHBhcmFtczoge2lkOiBwb3N0LmlkfSB9XFxcIj57eyBwb3N0LnRpdGxlIH19PC9yb3V0ZXItbGluaz48L2gzPlxcbiAgICAgICAgICAgICAgICB7eyBwb3N0LmJvZHkgfX1cXG4gICAgICAgICAgICA8L2ItY2FyZD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGItcGFnaW5hdGlvbiA6dG90YWwtcm93cz1cXFwiMjBcXFwiIDpwZXItcGFnZT1cXFwiMlxcXCI+XFxuICAgICAgICA8L2ItcGFnaW5hdGlvbj5cXG4gICAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcXG5leHBvcnQgZGVmYXVsdCB7XFxuICAgIG5hbWU6ICdBcHAtbWFpbicsXFxuICAgIGRhdGEoKSB7XFxuICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiAxLFxcbiAgICAgICAgICAgIHBhZ2U6IDEsXFxuICAgICAgICAgICAgcGVyUGFnZTogMixcXG4gICAgICAgICAgICBwYWdlczogW11cXG4gICAgICAgIH1cXG4gICAgfSxcXG4gICAgLy8gY29tcHV0ZWQ6IG1hcEdldHRlcnMgKHtcXG4gICAgLy8gICAgIHBvc3RzOiAncG9zdHMnXFxuICAgIC8vIH0pLFxcbiAgICBtZXRob2RzOiB7XFxuICAgICAgICBzZXRQYWdlcyAoKSB7XFxuICAgICAgICAgICAgbGV0IG51bWJlck9mUGFnZXMgPSBNYXRoLmNlaWwodGhpcy5wb3N0cy5sZW5ndGggLyB0aGlzLnBlclBhZ2UpO1xcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPD0gbnVtYmVyT2ZQYWdlczsgaW5kZXgrKykge1xcbiAgICAgICAgICAgIHRoaXMucGFnZXMucHVzaChpbmRleCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIHBhZ2luYXRlIChwb3N0cykge1xcbiAgICAgICAgICAgIGxldCBwYWdlID0gdGhpcy5wYWdlO1xcbiAgICAgICAgICAgIGxldCBwZXJQYWdlID0gdGhpcy5wZXJQYWdlO1xcbiAgICAgICAgICAgIGxldCBmcm9tID0gKHBhZ2UgKiBwZXJQYWdlKSAtIHBlclBhZ2U7XFxuICAgICAgICAgICAgbGV0IHRvID0gKHBhZ2UgKiBwZXJQYWdlKTtcXG4gICAgICAgICAgICByZXR1cm4gIHBvc3RzLnNsaWNlKGZyb20sIHRvKTtcXG4gICAgICAgIH1cXG4gICAgfSxcXG4gICAgd2F0Y2g6IHtcXG4gICAgICAgIHBvc3RzICgpIHtcXG4gICAgICAgICAgICB0aGlzLnNldFBhZ2VzKCk7XFxuICAgICAgICB9XFxuICAgIH0sXFxuICAgIGNyZWF0ZWQoKSB7XFxuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnR0VUX1BPU1RTJylcXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucG9zdHMubGVuZ3RoLCAnPC0tLScpXFxuICAgIH0sXFxuICAgIC8vIGNvbXB1dGVkOiB7XFxuICAgICAgICAvLyBoZWxsbygpIHtcXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnBvc3RzLmxlbmd0aCwgJzwtLS0nKVxcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdIZWxsbyBmcm9tIGNvbXB1dGVkIDwtLS0nKVxcbiAgICAgICAgLy8gfVxcbiAgICAvLyB9XFxufVxcbjwvc2NyaXB0PlxcblxcblxcbjxzdHlsZSBzY29wZWQ+XFxuLyogQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7ICovXFxuICAgIC8qIC5jYXJkIHsgKi9cXG4gICAgICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgICAvKiB9ICovXFxuLyogfSAqL1xcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LWI1YmVkMTUyXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9jb21tb25zL0Jsb2dGZWVkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///35\n");

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(24);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(33);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n    name: 'App-main',\n    data: function data() {\n        return {\n            currentPage: 1,\n            page: 1,\n            perPage: 2,\n            pages: []\n        };\n    },\n\n    // computed: mapGetters ({\n    //     posts: 'posts'\n    // }),\n    methods: {\n        setPages: function setPages() {\n            var numberOfPages = Math.ceil(this.posts.length / this.perPage);\n            for (var index = 1; index <= numberOfPages; index++) {\n                this.pages.push(index);\n            }\n        },\n        paginate: function paginate(posts) {\n            var page = this.page;\n            var perPage = this.perPage;\n            var from = page * perPage - perPage;\n            var to = page * perPage;\n            return posts.slice(from, to);\n        }\n    },\n    watch: {\n        posts: function posts() {\n            this.setPages();\n        }\n    },\n    created: function created() {\n        this.$store.dispatch('GET_POSTS');\n        console.log(this.posts.length, '<---');\n    }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvY29tbW9ucy9CbG9nRmVlZC52dWU/OGRkZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0E7QUFDQTtBQUNBLG9CQURBO0FBRUEsUUFGQSxrQkFFQTtBQUNBO0FBQ0EsMEJBREE7QUFFQSxtQkFGQTtBQUdBLHNCQUhBO0FBSUE7QUFKQTtBQU1BLEtBVEE7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFEQSxzQkFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FOQTtBQU9BLGdCQVBBLG9CQU9BLEtBUEEsRUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBLEtBYkE7QUE0QkE7QUFDQSxhQURBLG1CQUNBO0FBQ0E7QUFDQTtBQUhBLEtBNUJBO0FBaUNBLFdBakNBLHFCQWlDQTtBQUNBO0FBQ0E7QUFDQTtBQXBDQSIsImZpbGUiOiI2NS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2IHYtZm9yPVwicG9zdCBpbiBwb3N0c1wiIDprZXk9XCJwb3N0LmlkXCI+XG4gICAgICAgICAgICA8Yi1jYXJkPlxuICAgICAgICAgICAgICAgIDxoMz48cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAncG9zdF9kZXRhaWwnLCBwYXJhbXM6IHtpZDogcG9zdC5pZH0gfVwiPnt7IHBvc3QudGl0bGUgfX08L3JvdXRlci1saW5rPjwvaDM+XG4gICAgICAgICAgICAgICAge3sgcG9zdC5ib2R5IH19XG4gICAgICAgICAgICA8L2ItY2FyZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxiLXBhZ2luYXRpb24gOnRvdGFsLXJvd3M9XCIyMFwiIDpwZXItcGFnZT1cIjJcIj5cbiAgICAgICAgPC9iLXBhZ2luYXRpb24+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ0FwcC1tYWluJyxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY3VycmVudFBhZ2U6IDEsXG4gICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgICAgcGVyUGFnZTogMixcbiAgICAgICAgICAgIHBhZ2VzOiBbXVxuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyBjb21wdXRlZDogbWFwR2V0dGVycyAoe1xuICAgIC8vICAgICBwb3N0czogJ3Bvc3RzJ1xuICAgIC8vIH0pLFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgc2V0UGFnZXMgKCkge1xuICAgICAgICAgICAgbGV0IG51bWJlck9mUGFnZXMgPSBNYXRoLmNlaWwodGhpcy5wb3N0cy5sZW5ndGggLyB0aGlzLnBlclBhZ2UpO1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8PSBudW1iZXJPZlBhZ2VzOyBpbmRleCsrKSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2VzLnB1c2goaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwYWdpbmF0ZSAocG9zdHMpIHtcbiAgICAgICAgICAgIGxldCBwYWdlID0gdGhpcy5wYWdlO1xuICAgICAgICAgICAgbGV0IHBlclBhZ2UgPSB0aGlzLnBlclBhZ2U7XG4gICAgICAgICAgICBsZXQgZnJvbSA9IChwYWdlICogcGVyUGFnZSkgLSBwZXJQYWdlO1xuICAgICAgICAgICAgbGV0IHRvID0gKHBhZ2UgKiBwZXJQYWdlKTtcbiAgICAgICAgICAgIHJldHVybiAgcG9zdHMuc2xpY2UoZnJvbSwgdG8pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICBwb3N0cyAoKSB7XG4gICAgICAgICAgICB0aGlzLnNldFBhZ2VzKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdHRVRfUE9TVFMnKVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBvc3RzLmxlbmd0aCwgJzwtLS0nKVxuICAgIH0sXG4gICAgLy8gY29tcHV0ZWQ6IHtcbiAgICAgICAgLy8gaGVsbG8oKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnBvc3RzLmxlbmd0aCwgJzwtLS0nKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0hlbGxvIGZyb20gY29tcHV0ZWQgPC0tLScpXG4gICAgICAgIC8vIH1cbiAgICAvLyB9XG59XG48L3NjcmlwdD5cblxuXG48c3R5bGUgc2NvcGVkPlxuLyogQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7ICovXG4gICAgLyogLmNhcmQgeyAqL1xuICAgICAgICAvKiB3aWR0aDogMTAwJTsgKi9cbiAgICAvKiB9ICovXG4vKiB9ICovXG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2NvbW1vbnMvQmxvZ0ZlZWQudnVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///65\n");

/***/ })

})