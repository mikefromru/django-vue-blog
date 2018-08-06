webpackHotUpdate(0,{

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(10)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n/* @media (max-width: 600px) { */\\n    /* .card { */\\n        /* width: 100%; */\\n    /* } */\\n/* } */\\n\", \"\", {\"version\":3,\"sources\":[\"/home/mikefromru/django_apps/blog-django-vue/project/src/components/commons/src/components/commons/BlogFeed.vue\"],\"names\":[],\"mappings\":\";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAwEA,iCAAA;IACA,aAAA;QACA,kBAAA;IACA,OAAA;AACA,OAAA\",\"file\":\"BlogFeed.vue\",\"sourcesContent\":[\"<template>\\n    <div>\\n        <div v-for=\\\"post in displayPage\\\" :key=\\\"post.id\\\">\\n            <b-card>\\n                <h3><router-link :to=\\\"{ name: 'post_detail', params: {id: post.id} }\\\">{{ post.title }}</router-link></h3>\\n                {{ post.body }}\\n            </b-card>\\n        </div>\\n        <!-- <b-pagination :total-rows=\\\"20\\\" :per-page=\\\"2\\\"> -->\\n        <!-- </b-pagination> -->\\n        <button type=\\\"button\\\" class=\\\"btn btn-sm btn-outline-secondary\\\" v-if=\\\"page != 1\\\" @click=\\\"page--\\\">back</button>\\n        <button type=\\\"button\\\" class=\\\"btn btn-sm btn-outline-secondary\\\" v-for=\\\"pageNumber in pages.slice(page-1, page+5)\\\" @click=\\\"page = pageNumber\\\"> {{pageNumber}} </button>\\n        <button type=\\\"button\\\" @click=\\\"page++\\\" v-if=\\\"page < pages.length\\\" class=\\\"btn btn-sm btn-outline-secondary\\\">go</button>\\n    </div>\\n</template>\\n\\n<script>\\nimport axios from 'axios'\\nimport { mapGetters } from 'vuex'\\nexport default {\\n    name: 'App-main',\\n    data() {\\n        return {\\n            currentPage: 1,\\n            page: 1,\\n            perPage: 1,\\n            pages: []\\n        }\\n    },\\n    computed: {\\n        ...mapGetters([\\n            'posts',\\n        ]),\\n        displayPage() {\\n            return this.paginate(this.posts)\\n        }\\n    },\\n    methods: {\\n        setPages () {\\n            let numberOfPages = Math.ceil(this.posts.length / this.perPage);\\n            for (let index = 1; index <= numberOfPages; index++) {\\n            this.pages.push(index);\\n            }\\n        },\\n        paginate (posts) {\\n            let page = this.page;\\n            let perPage = this.perPage;\\n            let from = (page * perPage) - perPage;\\n            let to = (page * perPage);\\n            return  posts.slice(from, to);\\n        }\\n    },\\n    watch: {\\n        posts () {\\n            this.setPages();\\n        }\\n    },\\n    created() {\\n        this.$store.dispatch('GET_POSTS')\\n        console.log(this.posts.length, '<---')\\n    },\\n    // computed: {\\n        // hello() {\\n            // console.log(this.posts.length, '<---')\\n            // console.log('Hello from computed <---')\\n        // }\\n    // }\\n}\\n</script>\\n\\n\\n<style scoped>\\n/* @media (max-width: 600px) { */\\n    /* .card { */\\n        /* width: 100%; */\\n    /* } */\\n/* } */\\n</style>\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb25zL0Jsb2dGZWVkLnZ1ZT81MjMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7OztBQUdBO0FBQ0EsdU1BQXdNLG1CQUFtQiw0QkFBNEIsYUFBYSxTQUFTLGFBQWEseU9BQXlPLFlBQVksVUFBVSxXQUFXLFVBQVUsdU1BQXVNLCtCQUErQixZQUFZLEVBQUUsS0FBSyxjQUFjLHVDQUF1QyxhQUFhLDZhQUE2YSxZQUFZLDJOQUEyTixhQUFhLDhCQUE4QixxQ0FBcUMsa0JBQWtCLDhHQUE4RyxPQUFPLGtCQUFrQixxRkFBcUYseURBQXlELE9BQU8saUJBQWlCLHVCQUF1Qiw4RUFBOEUsaUNBQWlDLHdCQUF3QixXQUFXLHFDQUFxQyxlQUFlLFdBQVcsNkJBQTZCLG1DQUFtQyx5Q0FBeUMsb0RBQW9ELHdDQUF3Qyw0Q0FBNEMsV0FBVyxPQUFPLGVBQWUsb0JBQW9CLDhCQUE4QixXQUFXLE9BQU8sa0JBQWtCLGtHQUFrRyxxQkFBcUIsc0JBQXNCLDZIQUE2SCxVQUFVLEdBQUcsK0RBQStELG1CQUFtQiw0QkFBNEIsYUFBYSxTQUFTLGtDQUFrQzs7QUFFejVGIiwiZmlsZSI6IjM1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbi8qIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkgeyAqL1xcbiAgICAvKiAuY2FyZCB7ICovXFxuICAgICAgICAvKiB3aWR0aDogMTAwJTsgKi9cXG4gICAgLyogfSAqL1xcbi8qIH0gKi9cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvbWlrZWZyb21ydS9kamFuZ29fYXBwcy9ibG9nLWRqYW5nby12dWUvcHJvamVjdC9zcmMvY29tcG9uZW50cy9jb21tb25zL3NyYy9jb21wb25lbnRzL2NvbW1vbnMvQmxvZ0ZlZWQudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdFQSxpQ0FBQTtJQUNBLGFBQUE7UUFDQSxrQkFBQTtJQUNBLE9BQUE7QUFDQSxPQUFBXCIsXCJmaWxlXCI6XCJCbG9nRmVlZC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2PlxcbiAgICAgICAgPGRpdiB2LWZvcj1cXFwicG9zdCBpbiBkaXNwbGF5UGFnZVxcXCIgOmtleT1cXFwicG9zdC5pZFxcXCI+XFxuICAgICAgICAgICAgPGItY2FyZD5cXG4gICAgICAgICAgICAgICAgPGgzPjxyb3V0ZXItbGluayA6dG89XFxcInsgbmFtZTogJ3Bvc3RfZGV0YWlsJywgcGFyYW1zOiB7aWQ6IHBvc3QuaWR9IH1cXFwiPnt7IHBvc3QudGl0bGUgfX08L3JvdXRlci1saW5rPjwvaDM+XFxuICAgICAgICAgICAgICAgIHt7IHBvc3QuYm9keSB9fVxcbiAgICAgICAgICAgIDwvYi1jYXJkPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8IS0tIDxiLXBhZ2luYXRpb24gOnRvdGFsLXJvd3M9XFxcIjIwXFxcIiA6cGVyLXBhZ2U9XFxcIjJcXFwiPiAtLT5cXG4gICAgICAgIDwhLS0gPC9iLXBhZ2luYXRpb24+IC0tPlxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVxcXCIgdi1pZj1cXFwicGFnZSAhPSAxXFxcIiBAY2xpY2s9XFxcInBhZ2UtLVxcXCI+YmFjazwvYnV0dG9uPlxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVxcXCIgdi1mb3I9XFxcInBhZ2VOdW1iZXIgaW4gcGFnZXMuc2xpY2UocGFnZS0xLCBwYWdlKzUpXFxcIiBAY2xpY2s9XFxcInBhZ2UgPSBwYWdlTnVtYmVyXFxcIj4ge3twYWdlTnVtYmVyfX0gPC9idXR0b24+XFxuICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgQGNsaWNrPVxcXCJwYWdlKytcXFwiIHYtaWY9XFxcInBhZ2UgPCBwYWdlcy5sZW5ndGhcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVxcXCI+Z288L2J1dHRvbj5cXG4gICAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcXG5leHBvcnQgZGVmYXVsdCB7XFxuICAgIG5hbWU6ICdBcHAtbWFpbicsXFxuICAgIGRhdGEoKSB7XFxuICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiAxLFxcbiAgICAgICAgICAgIHBhZ2U6IDEsXFxuICAgICAgICAgICAgcGVyUGFnZTogMSxcXG4gICAgICAgICAgICBwYWdlczogW11cXG4gICAgICAgIH1cXG4gICAgfSxcXG4gICAgY29tcHV0ZWQ6IHtcXG4gICAgICAgIC4uLm1hcEdldHRlcnMoW1xcbiAgICAgICAgICAgICdwb3N0cycsXFxuICAgICAgICBdKSxcXG4gICAgICAgIGRpc3BsYXlQYWdlKCkge1xcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhZ2luYXRlKHRoaXMucG9zdHMpXFxuICAgICAgICB9XFxuICAgIH0sXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICAgIHNldFBhZ2VzICgpIHtcXG4gICAgICAgICAgICBsZXQgbnVtYmVyT2ZQYWdlcyA9IE1hdGguY2VpbCh0aGlzLnBvc3RzLmxlbmd0aCAvIHRoaXMucGVyUGFnZSk7XFxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8PSBudW1iZXJPZlBhZ2VzOyBpbmRleCsrKSB7XFxuICAgICAgICAgICAgdGhpcy5wYWdlcy5wdXNoKGluZGV4KTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgcGFnaW5hdGUgKHBvc3RzKSB7XFxuICAgICAgICAgICAgbGV0IHBhZ2UgPSB0aGlzLnBhZ2U7XFxuICAgICAgICAgICAgbGV0IHBlclBhZ2UgPSB0aGlzLnBlclBhZ2U7XFxuICAgICAgICAgICAgbGV0IGZyb20gPSAocGFnZSAqIHBlclBhZ2UpIC0gcGVyUGFnZTtcXG4gICAgICAgICAgICBsZXQgdG8gPSAocGFnZSAqIHBlclBhZ2UpO1xcbiAgICAgICAgICAgIHJldHVybiAgcG9zdHMuc2xpY2UoZnJvbSwgdG8pO1xcbiAgICAgICAgfVxcbiAgICB9LFxcbiAgICB3YXRjaDoge1xcbiAgICAgICAgcG9zdHMgKCkge1xcbiAgICAgICAgICAgIHRoaXMuc2V0UGFnZXMoKTtcXG4gICAgICAgIH1cXG4gICAgfSxcXG4gICAgY3JlYXRlZCgpIHtcXG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdHRVRfUE9TVFMnKVxcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wb3N0cy5sZW5ndGgsICc8LS0tJylcXG4gICAgfSxcXG4gICAgLy8gY29tcHV0ZWQ6IHtcXG4gICAgICAgIC8vIGhlbGxvKCkge1xcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucG9zdHMubGVuZ3RoLCAnPC0tLScpXFxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0hlbGxvIGZyb20gY29tcHV0ZWQgPC0tLScpXFxuICAgICAgICAvLyB9XFxuICAgIC8vIH1cXG59XFxuPC9zY3JpcHQ+XFxuXFxuXFxuPHN0eWxlIHNjb3BlZD5cXG4vKiBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHsgKi9cXG4gICAgLyogLmNhcmQgeyAqL1xcbiAgICAgICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIC8qIH0gKi9cXG4vKiB9ICovXFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtYjViZWQxNTJcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL2NvbW1vbnMvQmxvZ0ZlZWQudnVlXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///35\n");

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(24);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(33);\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n    name: 'App-main',\n    data: function data() {\n        return {\n            currentPage: 1,\n            page: 1,\n            perPage: 1,\n            pages: []\n        };\n    },\n\n    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__[\"b\" /* mapGetters */])(['posts']), {\n        displayPage: function displayPage() {\n            return this.paginate(this.posts);\n        }\n    }),\n    methods: {\n        setPages: function setPages() {\n            var numberOfPages = Math.ceil(this.posts.length / this.perPage);\n            for (var index = 1; index <= numberOfPages; index++) {\n                this.pages.push(index);\n            }\n        },\n        paginate: function paginate(posts) {\n            var page = this.page;\n            var perPage = this.perPage;\n            var from = page * perPage - perPage;\n            var to = page * perPage;\n            return posts.slice(from, to);\n        }\n    },\n    watch: {\n        posts: function posts() {\n            this.setPages();\n        }\n    },\n    created: function created() {\n        this.$store.dispatch('GET_POSTS');\n        console.log(this.posts.length, '<---');\n    }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvY29tbW9ucy9CbG9nRmVlZC52dWU/OGRkZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBO0FBQ0E7QUFDQTtBQUNBLG9CQURBO0FBRUEsUUFGQSxrQkFFQTtBQUNBO0FBQ0EsMEJBREE7QUFFQSxtQkFGQTtBQUdBLHNCQUhBO0FBSUE7QUFKQTtBQU1BLEtBVEE7O0FBVUEsMkJBQ0Esa0VBQ0EsT0FEQSxFQURBO0FBSUEsbUJBSkEseUJBSUE7QUFDQTtBQUNBO0FBTkEsTUFWQTtBQWtCQTtBQUNBLGdCQURBLHNCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQU5BO0FBT0EsZ0JBUEEsb0JBT0EsS0FQQSxFQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkEsS0FsQkE7QUFpQ0E7QUFDQSxhQURBLG1CQUNBO0FBQ0E7QUFDQTtBQUhBLEtBakNBO0FBc0NBLFdBdENBLHFCQXNDQTtBQUNBO0FBQ0E7QUFDQTtBQXpDQSIsImZpbGUiOiI2NS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2IHYtZm9yPVwicG9zdCBpbiBkaXNwbGF5UGFnZVwiIDprZXk9XCJwb3N0LmlkXCI+XG4gICAgICAgICAgICA8Yi1jYXJkPlxuICAgICAgICAgICAgICAgIDxoMz48cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAncG9zdF9kZXRhaWwnLCBwYXJhbXM6IHtpZDogcG9zdC5pZH0gfVwiPnt7IHBvc3QudGl0bGUgfX08L3JvdXRlci1saW5rPjwvaDM+XG4gICAgICAgICAgICAgICAge3sgcG9zdC5ib2R5IH19XG4gICAgICAgICAgICA8L2ItY2FyZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwhLS0gPGItcGFnaW5hdGlvbiA6dG90YWwtcm93cz1cIjIwXCIgOnBlci1wYWdlPVwiMlwiPiAtLT5cbiAgICAgICAgPCEtLSA8L2ItcGFnaW5hdGlvbj4gLS0+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1zZWNvbmRhcnlcIiB2LWlmPVwicGFnZSAhPSAxXCIgQGNsaWNrPVwicGFnZS0tXCI+YmFjazwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIgdi1mb3I9XCJwYWdlTnVtYmVyIGluIHBhZ2VzLnNsaWNlKHBhZ2UtMSwgcGFnZSs1KVwiIEBjbGljaz1cInBhZ2UgPSBwYWdlTnVtYmVyXCI+IHt7cGFnZU51bWJlcn19IDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBAY2xpY2s9XCJwYWdlKytcIiB2LWlmPVwicGFnZSA8IHBhZ2VzLmxlbmd0aFwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1zZWNvbmRhcnlcIj5nbzwvYnV0dG9uPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdBcHAtbWFpbicsXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiAxLFxuICAgICAgICAgICAgcGFnZTogMSxcbiAgICAgICAgICAgIHBlclBhZ2U6IDEsXG4gICAgICAgICAgICBwYWdlczogW11cbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgLi4ubWFwR2V0dGVycyhbXG4gICAgICAgICAgICAncG9zdHMnLFxuICAgICAgICBdKSxcbiAgICAgICAgZGlzcGxheVBhZ2UoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYWdpbmF0ZSh0aGlzLnBvc3RzKVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHNldFBhZ2VzICgpIHtcbiAgICAgICAgICAgIGxldCBudW1iZXJPZlBhZ2VzID0gTWF0aC5jZWlsKHRoaXMucG9zdHMubGVuZ3RoIC8gdGhpcy5wZXJQYWdlKTtcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPD0gbnVtYmVyT2ZQYWdlczsgaW5kZXgrKykge1xuICAgICAgICAgICAgdGhpcy5wYWdlcy5wdXNoKGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcGFnaW5hdGUgKHBvc3RzKSB7XG4gICAgICAgICAgICBsZXQgcGFnZSA9IHRoaXMucGFnZTtcbiAgICAgICAgICAgIGxldCBwZXJQYWdlID0gdGhpcy5wZXJQYWdlO1xuICAgICAgICAgICAgbGV0IGZyb20gPSAocGFnZSAqIHBlclBhZ2UpIC0gcGVyUGFnZTtcbiAgICAgICAgICAgIGxldCB0byA9IChwYWdlICogcGVyUGFnZSk7XG4gICAgICAgICAgICByZXR1cm4gIHBvc3RzLnNsaWNlKGZyb20sIHRvKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgcG9zdHMgKCkge1xuICAgICAgICAgICAgdGhpcy5zZXRQYWdlcygpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnR0VUX1BPU1RTJylcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wb3N0cy5sZW5ndGgsICc8LS0tJylcbiAgICB9LFxuICAgIC8vIGNvbXB1dGVkOiB7XG4gICAgICAgIC8vIGhlbGxvKCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wb3N0cy5sZW5ndGgsICc8LS0tJylcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdIZWxsbyBmcm9tIGNvbXB1dGVkIDwtLS0nKVxuICAgICAgICAvLyB9XG4gICAgLy8gfVxufVxuPC9zY3JpcHQ+XG5cblxuPHN0eWxlIHNjb3BlZD5cbi8qIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkgeyAqL1xuICAgIC8qIC5jYXJkIHsgKi9cbiAgICAgICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgLyogfSAqL1xuLyogfSAqL1xuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9jb21tb25zL0Jsb2dGZWVkLnZ1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///65\n");

/***/ })

})