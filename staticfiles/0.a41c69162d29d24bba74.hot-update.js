webpackHotUpdate(0,{

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(10)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n/* @media (max-width: 600px) { */\\n    /* .card { */\\n        /* width: 100%; */\\n    /* } */\\n/* } */\\n\", \"\", {\"version\":3,\"sources\":[\"/home/mikefromru/django_apps/blog-django-vue/project/src/components/commons/src/components/commons/BlogFeed.vue\"],\"names\":[],\"mappings\":\";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAsEA,iCAAA;IACA,aAAA;QACA,kBAAA;IACA,OAAA;AACA,OAAA\",\"file\":\"BlogFeed.vue\",\"sourcesContent\":[\"<template>\\n    <div>\\n        <div v-for=\\\"post in paginate(posts)\\\" :key=\\\"post.id\\\">\\n            <b-card>\\n                <h3><router-link :to=\\\"{ name: 'post_detail', params: {id: post.id} }\\\">{{ post.title }}</router-link></h3>\\n                {{ post.body }}\\n            </b-card>\\n        </div>\\n        <b-pagination :total-rows=\\\"20\\\" :per-page=\\\"2\\\">\\n        </b-pagination>\\n    </div>\\n</template>\\n\\n<script>\\nimport axios from 'axios'\\nimport { mapGetters } from 'vuex'\\nexport default {\\n    name: 'App-main',\\n    data() {\\n        return {\\n            currentPage: 1,\\n            page: 1,\\n            perPage: 3,\\n            pages: []\\n        }\\n    },\\n    // computed: mapGetters ({\\n    //     posts: 'posts'\\n    // }),\\n    computed: {\\n        ...mapGetters([\\n            'posts',\\n        ]),\\n        \\n    },\\n    methods: {\\n        setPages () {\\n            let numberOfPages = Math.ceil(this.posts.length / this.perPage);\\n            for (let index = 1; index <= numberOfPages; index++) {\\n            this.pages.push(index);\\n            }\\n        },\\n        paginate (posts) {\\n            let page = this.page;\\n            let perPage = this.perPage;\\n            let from = (page * perPage) - perPage;\\n            let to = (page * perPage);\\n            return  posts.slice(from, to);\\n        }\\n    },\\n    watch: {\\n        posts () {\\n            this.setPages();\\n        }\\n    },\\n    created() {\\n        this.$store.dispatch('GET_POSTS')\\n        console.log(this.posts.length, '<---')\\n    },\\n    // computed: {\\n        // hello() {\\n            // console.log(this.posts.length, '<---')\\n            // console.log('Hello from computed <---')\\n        // }\\n    // }\\n}\\n</script>\\n\\n\\n<style scoped>\\n/* @media (max-width: 600px) { */\\n    /* .card { */\\n        /* width: 100%; */\\n    /* } */\\n/* } */\\n</style>\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb25zL0Jsb2dGZWVkLnZ1ZT81MjMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7OztBQUdBO0FBQ0EsbU1BQW9NLG1CQUFtQiw0QkFBNEIsYUFBYSxTQUFTLGFBQWEsdU9BQXVPLFlBQVksVUFBVSxXQUFXLFVBQVUsMk1BQTJNLCtCQUErQixZQUFZLEVBQUUsS0FBSyxjQUFjLHVDQUF1QyxhQUFhLHFNQUFxTSxhQUFhLDhCQUE4QixxQ0FBcUMsa0JBQWtCLDhHQUE4RyxPQUFPLGlDQUFpQyxxQ0FBcUMsbUJBQW1CLDZFQUE2RSxpQkFBaUIsdUJBQXVCLDhFQUE4RSxpQ0FBaUMsd0JBQXdCLFdBQVcscUNBQXFDLGVBQWUsV0FBVyw2QkFBNkIsbUNBQW1DLHlDQUF5QyxvREFBb0Qsd0NBQXdDLDRDQUE0QyxXQUFXLE9BQU8sZUFBZSxvQkFBb0IsOEJBQThCLFdBQVcsT0FBTyxrQkFBa0Isa0dBQWtHLHFCQUFxQixzQkFBc0IsNkhBQTZILFVBQVUsR0FBRywrREFBK0QsbUJBQW1CLDRCQUE0QixhQUFhLFNBQVMsa0NBQWtDOztBQUV2OEUiLCJmaWxlIjoiMzUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuLyogQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7ICovXFxuICAgIC8qIC5jYXJkIHsgKi9cXG4gICAgICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgICAvKiB9ICovXFxuLyogfSAqL1xcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9taWtlZnJvbXJ1L2RqYW5nb19hcHBzL2Jsb2ctZGphbmdvLXZ1ZS9wcm9qZWN0L3NyYy9jb21wb25lbnRzL2NvbW1vbnMvc3JjL2NvbXBvbmVudHMvY29tbW9ucy9CbG9nRmVlZC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNFQSxpQ0FBQTtJQUNBLGFBQUE7UUFDQSxrQkFBQTtJQUNBLE9BQUE7QUFDQSxPQUFBXCIsXCJmaWxlXCI6XCJCbG9nRmVlZC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2PlxcbiAgICAgICAgPGRpdiB2LWZvcj1cXFwicG9zdCBpbiBwYWdpbmF0ZShwb3N0cylcXFwiIDprZXk9XFxcInBvc3QuaWRcXFwiPlxcbiAgICAgICAgICAgIDxiLWNhcmQ+XFxuICAgICAgICAgICAgICAgIDxoMz48cm91dGVyLWxpbmsgOnRvPVxcXCJ7IG5hbWU6ICdwb3N0X2RldGFpbCcsIHBhcmFtczoge2lkOiBwb3N0LmlkfSB9XFxcIj57eyBwb3N0LnRpdGxlIH19PC9yb3V0ZXItbGluaz48L2gzPlxcbiAgICAgICAgICAgICAgICB7eyBwb3N0LmJvZHkgfX1cXG4gICAgICAgICAgICA8L2ItY2FyZD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGItcGFnaW5hdGlvbiA6dG90YWwtcm93cz1cXFwiMjBcXFwiIDpwZXItcGFnZT1cXFwiMlxcXCI+XFxuICAgICAgICA8L2ItcGFnaW5hdGlvbj5cXG4gICAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcXG5leHBvcnQgZGVmYXVsdCB7XFxuICAgIG5hbWU6ICdBcHAtbWFpbicsXFxuICAgIGRhdGEoKSB7XFxuICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiAxLFxcbiAgICAgICAgICAgIHBhZ2U6IDEsXFxuICAgICAgICAgICAgcGVyUGFnZTogMyxcXG4gICAgICAgICAgICBwYWdlczogW11cXG4gICAgICAgIH1cXG4gICAgfSxcXG4gICAgLy8gY29tcHV0ZWQ6IG1hcEdldHRlcnMgKHtcXG4gICAgLy8gICAgIHBvc3RzOiAncG9zdHMnXFxuICAgIC8vIH0pLFxcbiAgICBjb21wdXRlZDoge1xcbiAgICAgICAgLi4ubWFwR2V0dGVycyhbXFxuICAgICAgICAgICAgJ3Bvc3RzJyxcXG4gICAgICAgIF0pLFxcbiAgICAgICAgXFxuICAgIH0sXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICAgIHNldFBhZ2VzICgpIHtcXG4gICAgICAgICAgICBsZXQgbnVtYmVyT2ZQYWdlcyA9IE1hdGguY2VpbCh0aGlzLnBvc3RzLmxlbmd0aCAvIHRoaXMucGVyUGFnZSk7XFxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8PSBudW1iZXJPZlBhZ2VzOyBpbmRleCsrKSB7XFxuICAgICAgICAgICAgdGhpcy5wYWdlcy5wdXNoKGluZGV4KTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgcGFnaW5hdGUgKHBvc3RzKSB7XFxuICAgICAgICAgICAgbGV0IHBhZ2UgPSB0aGlzLnBhZ2U7XFxuICAgICAgICAgICAgbGV0IHBlclBhZ2UgPSB0aGlzLnBlclBhZ2U7XFxuICAgICAgICAgICAgbGV0IGZyb20gPSAocGFnZSAqIHBlclBhZ2UpIC0gcGVyUGFnZTtcXG4gICAgICAgICAgICBsZXQgdG8gPSAocGFnZSAqIHBlclBhZ2UpO1xcbiAgICAgICAgICAgIHJldHVybiAgcG9zdHMuc2xpY2UoZnJvbSwgdG8pO1xcbiAgICAgICAgfVxcbiAgICB9LFxcbiAgICB3YXRjaDoge1xcbiAgICAgICAgcG9zdHMgKCkge1xcbiAgICAgICAgICAgIHRoaXMuc2V0UGFnZXMoKTtcXG4gICAgICAgIH1cXG4gICAgfSxcXG4gICAgY3JlYXRlZCgpIHtcXG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdHRVRfUE9TVFMnKVxcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wb3N0cy5sZW5ndGgsICc8LS0tJylcXG4gICAgfSxcXG4gICAgLy8gY29tcHV0ZWQ6IHtcXG4gICAgICAgIC8vIGhlbGxvKCkge1xcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucG9zdHMubGVuZ3RoLCAnPC0tLScpXFxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0hlbGxvIGZyb20gY29tcHV0ZWQgPC0tLScpXFxuICAgICAgICAvLyB9XFxuICAgIC8vIH1cXG59XFxuPC9zY3JpcHQ+XFxuXFxuXFxuPHN0eWxlIHNjb3BlZD5cXG4vKiBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHsgKi9cXG4gICAgLyogLmNhcmQgeyAqL1xcbiAgICAgICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIC8qIH0gKi9cXG4vKiB9ICovXFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtYjViZWQxNTJcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL2NvbW1vbnMvQmxvZ0ZlZWQudnVlXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///35\n");

/***/ })

})