webpackHotUpdate(0,{

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(10)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n/* @media (max-width: 600px) { */\\n    /* .card { */\\n        /* width: 100%; */\\n    /* } */\\n/* } */\\n\", \"\", {\"version\":3,\"sources\":[\"/home/mikefromru/django_apps/blog-django-vue/project/src/components/commons/src/components/commons/BlogFeed.vue\"],\"names\":[],\"mappings\":\";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAmCA,iCAAA;IACA,aAAA;QACA,kBAAA;IACA,OAAA;AACA,OAAA\",\"file\":\"BlogFeed.vue\",\"sourcesContent\":[\"<template>\\n    <div>\\n        <div v-for=\\\"post in posts\\\" :key=\\\"post.id\\\">\\n            <b-card>\\n                <h3><router-link :to=\\\"{ name: 'post_detail', params: {id: post.id} }\\\">{{ post.title }}</router-link></h3>\\n                {{ post.body }}\\n            </b-card>\\n        </div>\\n        <b-pagination :total-rows=\\\"20\\\" v-model=\\\"currentPage\\\" :per-page=\\\"2\\\">\\n        </b-pagination>\\n    </div>\\n</template>\\n\\n<script>\\nimport axios from 'axios'\\nimport { mapGetters } from 'vuex'\\nexport default {\\n    name: 'App-main',\\n    data() {\\n        return {\\n            currentPage: 1\\n        }\\n    },\\n    computed: mapGetters ({\\n        posts: 'posts'\\n    }),\\n    created() {\\n        this.$store.dispatch('GET_POSTS')\\n        console.log(this.posts.length, ' <---')\\n    }\\n}\\n</script>\\n\\n\\n<style scoped>\\n/* @media (max-width: 600px) { */\\n    /* .card { */\\n        /* width: 100%; */\\n    /* } */\\n/* } */\\n</style>\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb25zL0Jsb2dGZWVkLnZ1ZT81MjMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7OztBQUdBO0FBQ0EsNkhBQThILG1CQUFtQiw0QkFBNEIsYUFBYSxTQUFTLGFBQWEsb01BQW9NLFlBQVksVUFBVSxXQUFXLFVBQVUsaU1BQWlNLCtCQUErQixZQUFZLEVBQUUsS0FBSyxjQUFjLHVDQUF1QyxhQUFhLDZOQUE2TixhQUFhLDhCQUE4QixxQ0FBcUMsa0JBQWtCLHVDQUF1QyxPQUFPLDhCQUE4QiwrQkFBK0IsbUJBQW1CLG1HQUFtRyxHQUFHLCtEQUErRCxtQkFBbUIsNEJBQTRCLGFBQWEsU0FBUyxrQ0FBa0M7O0FBRTc3QyIsImZpbGUiOiIzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4vKiBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHsgKi9cXG4gICAgLyogLmNhcmQgeyAqL1xcbiAgICAgICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIC8qIH0gKi9cXG4vKiB9ICovXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL21pa2Vmcm9tcnUvZGphbmdvX2FwcHMvYmxvZy1kamFuZ28tdnVlL3Byb2plY3Qvc3JjL2NvbXBvbmVudHMvY29tbW9ucy9zcmMvY29tcG9uZW50cy9jb21tb25zL0Jsb2dGZWVkLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1DQSxpQ0FBQTtJQUNBLGFBQUE7UUFDQSxrQkFBQTtJQUNBLE9BQUE7QUFDQSxPQUFBXCIsXCJmaWxlXCI6XCJCbG9nRmVlZC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2PlxcbiAgICAgICAgPGRpdiB2LWZvcj1cXFwicG9zdCBpbiBwb3N0c1xcXCIgOmtleT1cXFwicG9zdC5pZFxcXCI+XFxuICAgICAgICAgICAgPGItY2FyZD5cXG4gICAgICAgICAgICAgICAgPGgzPjxyb3V0ZXItbGluayA6dG89XFxcInsgbmFtZTogJ3Bvc3RfZGV0YWlsJywgcGFyYW1zOiB7aWQ6IHBvc3QuaWR9IH1cXFwiPnt7IHBvc3QudGl0bGUgfX08L3JvdXRlci1saW5rPjwvaDM+XFxuICAgICAgICAgICAgICAgIHt7IHBvc3QuYm9keSB9fVxcbiAgICAgICAgICAgIDwvYi1jYXJkPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8Yi1wYWdpbmF0aW9uIDp0b3RhbC1yb3dzPVxcXCIyMFxcXCIgdi1tb2RlbD1cXFwiY3VycmVudFBhZ2VcXFwiIDpwZXItcGFnZT1cXFwiMlxcXCI+XFxuICAgICAgICA8L2ItcGFnaW5hdGlvbj5cXG4gICAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcXG5leHBvcnQgZGVmYXVsdCB7XFxuICAgIG5hbWU6ICdBcHAtbWFpbicsXFxuICAgIGRhdGEoKSB7XFxuICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiAxXFxuICAgICAgICB9XFxuICAgIH0sXFxuICAgIGNvbXB1dGVkOiBtYXBHZXR0ZXJzICh7XFxuICAgICAgICBwb3N0czogJ3Bvc3RzJ1xcbiAgICB9KSxcXG4gICAgY3JlYXRlZCgpIHtcXG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdHRVRfUE9TVFMnKVxcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wb3N0cy5sZW5ndGgsICcgPC0tLScpXFxuICAgIH1cXG59XFxuPC9zY3JpcHQ+XFxuXFxuXFxuPHN0eWxlIHNjb3BlZD5cXG4vKiBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHsgKi9cXG4gICAgLyogLmNhcmQgeyAqL1xcbiAgICAgICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIC8qIH0gKi9cXG4vKiB9ICovXFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtYjViZWQxNTJcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL2NvbW1vbnMvQmxvZ0ZlZWQudnVlXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///35\n");

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(24);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(33);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n    name: 'App-main',\n    data: function data() {\n        return {\n            currentPage: 1\n        };\n    },\n\n    computed: Object(__WEBPACK_IMPORTED_MODULE_1_vuex__[\"b\" /* mapGetters */])({\n        posts: 'posts'\n    }),\n    created: function created() {\n        this.$store.dispatch('GET_POSTS');\n        console.log(this.posts.length, ' <---');\n    }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvY29tbW9ucy9CbG9nRmVlZC52dWU/OGRkZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0E7QUFDQTtBQUNBLG9CQURBO0FBRUEsUUFGQSxrQkFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBLEtBTkE7O0FBT0E7QUFDQTtBQURBLE1BUEE7QUFVQSxXQVZBLHFCQVVBO0FBQ0E7QUFDQTtBQUNBO0FBYkEiLCJmaWxlIjoiNjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiB2LWZvcj1cInBvc3QgaW4gcG9zdHNcIiA6a2V5PVwicG9zdC5pZFwiPlxuICAgICAgICAgICAgPGItY2FyZD5cbiAgICAgICAgICAgICAgICA8aDM+PHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ3Bvc3RfZGV0YWlsJywgcGFyYW1zOiB7aWQ6IHBvc3QuaWR9IH1cIj57eyBwb3N0LnRpdGxlIH19PC9yb3V0ZXItbGluaz48L2gzPlxuICAgICAgICAgICAgICAgIHt7IHBvc3QuYm9keSB9fVxuICAgICAgICAgICAgPC9iLWNhcmQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Yi1wYWdpbmF0aW9uIDp0b3RhbC1yb3dzPVwiMjBcIiB2LW1vZGVsPVwiY3VycmVudFBhZ2VcIiA6cGVyLXBhZ2U9XCIyXCI+XG4gICAgICAgIDwvYi1wYWdpbmF0aW9uPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdBcHAtbWFpbicsXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiAxXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiBtYXBHZXR0ZXJzICh7XG4gICAgICAgIHBvc3RzOiAncG9zdHMnXG4gICAgfSksXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ0dFVF9QT1NUUycpXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucG9zdHMubGVuZ3RoLCAnIDwtLS0nKVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG5cbjxzdHlsZSBzY29wZWQ+XG4vKiBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHsgKi9cbiAgICAvKiAuY2FyZCB7ICovXG4gICAgICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAgIC8qIH0gKi9cbi8qIH0gKi9cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvY29tbW9ucy9CbG9nRmVlZC52dWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///65\n");

/***/ })

})