webpackHotUpdate(0,{

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(10)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n/* @media (max-width: 600px) { */\\n    /* .card { */\\n        /* width: 100%; */\\n    /* } */\\n/* } */\\n\", \"\", {\"version\":3,\"sources\":[\"/home/mikefromru/django_apps/blog-django-vue/project/src/components/commons/src/components/commons/BlogFeed.vue\"],\"names\":[],\"mappings\":\";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAiEA,iCAAA;IACA,aAAA;QACA,kBAAA;IACA,OAAA;AACA,OAAA\",\"file\":\"BlogFeed.vue\",\"sourcesContent\":[\"<template>\\n    <div>\\n        <div v-for=\\\"post in paginate(posts)\\\" :key=\\\"post.id\\\">\\n            <b-card>\\n                <h3><router-link :to=\\\"{ name: 'post_detail', params: {id: post.id} }\\\">{{ post.title }}</router-link></h3>\\n                {{ post.body }}\\n            </b-card>\\n        </div>\\n        <b-pagination :total-rows=\\\"20\\\" :per-page=\\\"2\\\">\\n        </b-pagination>\\n    </div>\\n</template>\\n\\n<script>\\nimport axios from 'axios'\\nimport { mapGetters } from 'vuex'\\nexport default {\\n    name: 'App-main',\\n    data() {\\n        return {\\n            currentPage: 1,\\n            page: 1,\\n            perPage: 3,\\n            pages: []\\n        }\\n    },\\n    computed: mapGetters ({\\n        posts: 'posts'\\n    }),\\n    \\n    methods: {\\n        setPages () {\\n            let numberOfPages = Math.ceil(this.posts.length / this.perPage);\\n            for (let index = 1; index <= numberOfPages; index++) {\\n            this.pages.push(index);\\n            }\\n        },\\n        paginate (posts) {\\n            let page = this.page;\\n            let perPage = this.perPage;\\n            let from = (page * perPage) - perPage;\\n            let to = (page * perPage);\\n            return  posts.slice(from, to);\\n        }\\n    },\\n    watch: {\\n        posts () {\\n            this.setPages();\\n        }\\n    },\\n    created() {\\n        this.$store.dispatch('GET_POSTS')\\n        console.log(this.posts.length, '<---')\\n    },\\n    // computed: {\\n        // hello() {\\n            // console.log(this.posts.length, '<---')\\n            // console.log('Hello from computed <---')\\n        // }\\n    // }\\n}\\n</script>\\n\\n\\n<style scoped>\\n/* @media (max-width: 600px) { */\\n    /* .card { */\\n        /* width: 100%; */\\n    /* } */\\n/* } */\\n</style>\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb25zL0Jsb2dGZWVkLnZ1ZT81MjMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7OztBQUdBO0FBQ0EseUxBQTBMLG1CQUFtQiw0QkFBNEIsYUFBYSxTQUFTLGFBQWEsa09BQWtPLFlBQVksVUFBVSxXQUFXLFVBQVUsMk1BQTJNLCtCQUErQixZQUFZLEVBQUUsS0FBSyxjQUFjLHVDQUF1QyxhQUFhLHFNQUFxTSxhQUFhLDhCQUE4QixxQ0FBcUMsa0JBQWtCLDhHQUE4RyxPQUFPLDhCQUE4QiwrQkFBK0Isd0JBQXdCLHVCQUF1Qiw4RUFBOEUsaUNBQWlDLHdCQUF3QixXQUFXLHFDQUFxQyxlQUFlLFdBQVcsNkJBQTZCLG1DQUFtQyx5Q0FBeUMsb0RBQW9ELHdDQUF3Qyw0Q0FBNEMsV0FBVyxPQUFPLGVBQWUsb0JBQW9CLDhCQUE4QixXQUFXLE9BQU8sa0JBQWtCLGtHQUFrRyxxQkFBcUIsc0JBQXNCLDZIQUE2SCxVQUFVLEdBQUcsK0RBQStELG1CQUFtQiw0QkFBNEIsYUFBYSxTQUFTLGtDQUFrQzs7QUFFdDFFIiwiZmlsZSI6IjM1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbi8qIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkgeyAqL1xcbiAgICAvKiAuY2FyZCB7ICovXFxuICAgICAgICAvKiB3aWR0aDogMTAwJTsgKi9cXG4gICAgLyogfSAqL1xcbi8qIH0gKi9cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvbWlrZWZyb21ydS9kamFuZ29fYXBwcy9ibG9nLWRqYW5nby12dWUvcHJvamVjdC9zcmMvY29tcG9uZW50cy9jb21tb25zL3NyYy9jb21wb25lbnRzL2NvbW1vbnMvQmxvZ0ZlZWQudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUVBLGlDQUFBO0lBQ0EsYUFBQTtRQUNBLGtCQUFBO0lBQ0EsT0FBQTtBQUNBLE9BQUFcIixcImZpbGVcIjpcIkJsb2dGZWVkLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxkaXY+XFxuICAgICAgICA8ZGl2IHYtZm9yPVxcXCJwb3N0IGluIHBhZ2luYXRlKHBvc3RzKVxcXCIgOmtleT1cXFwicG9zdC5pZFxcXCI+XFxuICAgICAgICAgICAgPGItY2FyZD5cXG4gICAgICAgICAgICAgICAgPGgzPjxyb3V0ZXItbGluayA6dG89XFxcInsgbmFtZTogJ3Bvc3RfZGV0YWlsJywgcGFyYW1zOiB7aWQ6IHBvc3QuaWR9IH1cXFwiPnt7IHBvc3QudGl0bGUgfX08L3JvdXRlci1saW5rPjwvaDM+XFxuICAgICAgICAgICAgICAgIHt7IHBvc3QuYm9keSB9fVxcbiAgICAgICAgICAgIDwvYi1jYXJkPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8Yi1wYWdpbmF0aW9uIDp0b3RhbC1yb3dzPVxcXCIyMFxcXCIgOnBlci1wYWdlPVxcXCIyXFxcIj5cXG4gICAgICAgIDwvYi1wYWdpbmF0aW9uPlxcbiAgICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xcbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgbmFtZTogJ0FwcC1tYWluJyxcXG4gICAgZGF0YSgpIHtcXG4gICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgY3VycmVudFBhZ2U6IDEsXFxuICAgICAgICAgICAgcGFnZTogMSxcXG4gICAgICAgICAgICBwZXJQYWdlOiAzLFxcbiAgICAgICAgICAgIHBhZ2VzOiBbXVxcbiAgICAgICAgfVxcbiAgICB9LFxcbiAgICBjb21wdXRlZDogbWFwR2V0dGVycyAoe1xcbiAgICAgICAgcG9zdHM6ICdwb3N0cydcXG4gICAgfSksXFxuICAgIFxcbiAgICBtZXRob2RzOiB7XFxuICAgICAgICBzZXRQYWdlcyAoKSB7XFxuICAgICAgICAgICAgbGV0IG51bWJlck9mUGFnZXMgPSBNYXRoLmNlaWwodGhpcy5wb3N0cy5sZW5ndGggLyB0aGlzLnBlclBhZ2UpO1xcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPD0gbnVtYmVyT2ZQYWdlczsgaW5kZXgrKykge1xcbiAgICAgICAgICAgIHRoaXMucGFnZXMucHVzaChpbmRleCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIHBhZ2luYXRlIChwb3N0cykge1xcbiAgICAgICAgICAgIGxldCBwYWdlID0gdGhpcy5wYWdlO1xcbiAgICAgICAgICAgIGxldCBwZXJQYWdlID0gdGhpcy5wZXJQYWdlO1xcbiAgICAgICAgICAgIGxldCBmcm9tID0gKHBhZ2UgKiBwZXJQYWdlKSAtIHBlclBhZ2U7XFxuICAgICAgICAgICAgbGV0IHRvID0gKHBhZ2UgKiBwZXJQYWdlKTtcXG4gICAgICAgICAgICByZXR1cm4gIHBvc3RzLnNsaWNlKGZyb20sIHRvKTtcXG4gICAgICAgIH1cXG4gICAgfSxcXG4gICAgd2F0Y2g6IHtcXG4gICAgICAgIHBvc3RzICgpIHtcXG4gICAgICAgICAgICB0aGlzLnNldFBhZ2VzKCk7XFxuICAgICAgICB9XFxuICAgIH0sXFxuICAgIGNyZWF0ZWQoKSB7XFxuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnR0VUX1BPU1RTJylcXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucG9zdHMubGVuZ3RoLCAnPC0tLScpXFxuICAgIH0sXFxuICAgIC8vIGNvbXB1dGVkOiB7XFxuICAgICAgICAvLyBoZWxsbygpIHtcXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnBvc3RzLmxlbmd0aCwgJzwtLS0nKVxcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdIZWxsbyBmcm9tIGNvbXB1dGVkIDwtLS0nKVxcbiAgICAgICAgLy8gfVxcbiAgICAvLyB9XFxufVxcbjwvc2NyaXB0PlxcblxcblxcbjxzdHlsZSBzY29wZWQ+XFxuLyogQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7ICovXFxuICAgIC8qIC5jYXJkIHsgKi9cXG4gICAgICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgICAvKiB9ICovXFxuLyogfSAqL1xcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LWI1YmVkMTUyXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9jb21tb25zL0Jsb2dGZWVkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///35\n");

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(24);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(33);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n    name: 'App-main',\n    data: function data() {\n        return {\n            currentPage: 1,\n            page: 1,\n            perPage: 3,\n            pages: []\n        };\n    },\n\n    computed: Object(__WEBPACK_IMPORTED_MODULE_1_vuex__[\"b\" /* mapGetters */])({\n        posts: 'posts'\n    }),\n\n    methods: {\n        setPages: function setPages() {\n            var numberOfPages = Math.ceil(this.posts.length / this.perPage);\n            for (var index = 1; index <= numberOfPages; index++) {\n                this.pages.push(index);\n            }\n        },\n        paginate: function paginate(posts) {\n            var page = this.page;\n            var perPage = this.perPage;\n            var from = page * perPage - perPage;\n            var to = page * perPage;\n            return posts.slice(from, to);\n        }\n    },\n    watch: {\n        posts: function posts() {\n            this.setPages();\n        }\n    },\n    created: function created() {\n        this.$store.dispatch('GET_POSTS');\n        console.log(this.posts.length, '<---');\n    }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvY29tbW9ucy9CbG9nRmVlZC52dWU/OGRkZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0E7QUFDQTtBQUNBLG9CQURBO0FBRUEsUUFGQSxrQkFFQTtBQUNBO0FBQ0EsMEJBREE7QUFFQSxtQkFGQTtBQUdBLHNCQUhBO0FBSUE7QUFKQTtBQU1BLEtBVEE7O0FBVUE7QUFDQTtBQURBLE1BVkE7O0FBY0E7QUFDQSxnQkFEQSxzQkFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FOQTtBQU9BLGdCQVBBLG9CQU9BLEtBUEEsRUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBLEtBZEE7QUE2QkE7QUFDQSxhQURBLG1CQUNBO0FBQ0E7QUFDQTtBQUhBLEtBN0JBO0FBa0NBLFdBbENBLHFCQWtDQTtBQUNBO0FBQ0E7QUFDQTtBQXJDQSIsImZpbGUiOiI2NS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2IHYtZm9yPVwicG9zdCBpbiBwYWdpbmF0ZShwb3N0cylcIiA6a2V5PVwicG9zdC5pZFwiPlxuICAgICAgICAgICAgPGItY2FyZD5cbiAgICAgICAgICAgICAgICA8aDM+PHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ3Bvc3RfZGV0YWlsJywgcGFyYW1zOiB7aWQ6IHBvc3QuaWR9IH1cIj57eyBwb3N0LnRpdGxlIH19PC9yb3V0ZXItbGluaz48L2gzPlxuICAgICAgICAgICAgICAgIHt7IHBvc3QuYm9keSB9fVxuICAgICAgICAgICAgPC9iLWNhcmQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Yi1wYWdpbmF0aW9uIDp0b3RhbC1yb3dzPVwiMjBcIiA6cGVyLXBhZ2U9XCIyXCI+XG4gICAgICAgIDwvYi1wYWdpbmF0aW9uPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdBcHAtbWFpbicsXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiAxLFxuICAgICAgICAgICAgcGFnZTogMSxcbiAgICAgICAgICAgIHBlclBhZ2U6IDMsXG4gICAgICAgICAgICBwYWdlczogW11cbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IG1hcEdldHRlcnMgKHtcbiAgICAgICAgcG9zdHM6ICdwb3N0cydcbiAgICB9KSxcbiAgICBcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHNldFBhZ2VzICgpIHtcbiAgICAgICAgICAgIGxldCBudW1iZXJPZlBhZ2VzID0gTWF0aC5jZWlsKHRoaXMucG9zdHMubGVuZ3RoIC8gdGhpcy5wZXJQYWdlKTtcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPD0gbnVtYmVyT2ZQYWdlczsgaW5kZXgrKykge1xuICAgICAgICAgICAgdGhpcy5wYWdlcy5wdXNoKGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcGFnaW5hdGUgKHBvc3RzKSB7XG4gICAgICAgICAgICBsZXQgcGFnZSA9IHRoaXMucGFnZTtcbiAgICAgICAgICAgIGxldCBwZXJQYWdlID0gdGhpcy5wZXJQYWdlO1xuICAgICAgICAgICAgbGV0IGZyb20gPSAocGFnZSAqIHBlclBhZ2UpIC0gcGVyUGFnZTtcbiAgICAgICAgICAgIGxldCB0byA9IChwYWdlICogcGVyUGFnZSk7XG4gICAgICAgICAgICByZXR1cm4gIHBvc3RzLnNsaWNlKGZyb20sIHRvKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgcG9zdHMgKCkge1xuICAgICAgICAgICAgdGhpcy5zZXRQYWdlcygpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnR0VUX1BPU1RTJylcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wb3N0cy5sZW5ndGgsICc8LS0tJylcbiAgICB9LFxuICAgIC8vIGNvbXB1dGVkOiB7XG4gICAgICAgIC8vIGhlbGxvKCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wb3N0cy5sZW5ndGgsICc8LS0tJylcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdIZWxsbyBmcm9tIGNvbXB1dGVkIDwtLS0nKVxuICAgICAgICAvLyB9XG4gICAgLy8gfVxufVxuPC9zY3JpcHQ+XG5cblxuPHN0eWxlIHNjb3BlZD5cbi8qIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkgeyAqL1xuICAgIC8qIC5jYXJkIHsgKi9cbiAgICAgICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgLyogfSAqL1xuLyogfSAqL1xuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9jb21tb25zL0Jsb2dGZWVkLnZ1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///65\n");

/***/ })

})