webpackHotUpdate(0,{

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(10)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n/* @media (max-width: 600px) { */\\n    /* .card { */\\n        /* width: 100%; */\\n    /* } */\\n/* } */\\n\", \"\", {\"version\":3,\"sources\":[\"/home/mikefromru/django_apps/blog-django-vue/project/src/components/commons/src/components/commons/BlogFeed.vue\"],\"names\":[],\"mappings\":\";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA6DA,iCAAA;IACA,aAAA;QACA,kBAAA;IACA,OAAA;AACA,OAAA\",\"file\":\"BlogFeed.vue\",\"sourcesContent\":[\"<template>\\n    <div>\\n        <div v-for=\\\"post in posts\\\" :key=\\\"post.id\\\">\\n            <b-card>\\n                <h3><router-link :to=\\\"{ name: 'post_detail', params: {id: post.id} }\\\">{{ post.title }}</router-link></h3>\\n                {{ post.body }}\\n            </b-card>\\n        </div>\\n        <b-pagination :total-rows=\\\"20\\\" :per-page=\\\"2\\\">\\n        </b-pagination>\\n    </div>\\n</template>\\n\\n<script>\\nimport axios from 'axios'\\nimport { mapGetters } from 'vuex'\\nexport default {\\n    name: 'App-main',\\n    data() {\\n        return {\\n            currentPage: 1,\\n            page: 1,\\n            perPage: 2,\\n            pages: []\\n        }\\n    },\\n    computed: mapGetters ({\\n        posts: 'posts'\\n    }),\\n    methods: {\\n        setPages () {\\n            let numberOfPages = Math.ceil(this.posts.length / this.perPage);\\n            for (let index = 1; index <= numberOfPages; index++) {\\n            this.pages.push(index);\\n            }\\n        },\\n        paginate (posts) {\\n            let page = this.page;\\n            let perPage = this.perPage;\\n            let from = (page * perPage) - perPage;\\n            let to = (page * perPage);\\n            return  posts.slice(from, to);\\n        }\\n    },\\n    watch: {\\n        posts () {\\n            this.setPages();\\n        }\\n    },\\n    created() {\\n        this.$store.dispatch('GET_POSTS')\\n        console.log(this.posts.length, '<---')\\n    },\\n    computed: {\\n\\n    }\\n}\\n</script>\\n\\n\\n<style scoped>\\n/* @media (max-width: 600px) { */\\n    /* .card { */\\n        /* width: 100%; */\\n    /* } */\\n/* } */\\n</style>\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb25zL0Jsb2dGZWVkLnZ1ZT81MjMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7OztBQUdBO0FBQ0EsaUxBQWtMLG1CQUFtQiw0QkFBNEIsYUFBYSxTQUFTLGFBQWEsOE5BQThOLFlBQVksVUFBVSxXQUFXLFVBQVUsaU1BQWlNLCtCQUErQixZQUFZLEVBQUUsS0FBSyxjQUFjLHVDQUF1QyxhQUFhLHFNQUFxTSxhQUFhLDhCQUE4QixxQ0FBcUMsa0JBQWtCLDhHQUE4RyxPQUFPLDhCQUE4QiwrQkFBK0Isa0JBQWtCLHVCQUF1Qiw4RUFBOEUsaUNBQWlDLHdCQUF3QixXQUFXLHFDQUFxQyxlQUFlLFdBQVcsNkJBQTZCLG1DQUFtQyx5Q0FBeUMsb0RBQW9ELHdDQUF3Qyw0Q0FBNEMsV0FBVyxPQUFPLGVBQWUsb0JBQW9CLDhCQUE4QixXQUFXLE9BQU8sa0JBQWtCLGtHQUFrRyxrQkFBa0IsU0FBUyxHQUFHLCtEQUErRCxtQkFBbUIsNEJBQTRCLGFBQWEsU0FBUyxrQ0FBa0M7O0FBRW5xRSIsImZpbGUiOiIzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4vKiBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHsgKi9cXG4gICAgLyogLmNhcmQgeyAqL1xcbiAgICAgICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIC8qIH0gKi9cXG4vKiB9ICovXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL21pa2Vmcm9tcnUvZGphbmdvX2FwcHMvYmxvZy1kamFuZ28tdnVlL3Byb2plY3Qvc3JjL2NvbXBvbmVudHMvY29tbW9ucy9zcmMvY29tcG9uZW50cy9jb21tb25zL0Jsb2dGZWVkLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkRBLGlDQUFBO0lBQ0EsYUFBQTtRQUNBLGtCQUFBO0lBQ0EsT0FBQTtBQUNBLE9BQUFcIixcImZpbGVcIjpcIkJsb2dGZWVkLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxkaXY+XFxuICAgICAgICA8ZGl2IHYtZm9yPVxcXCJwb3N0IGluIHBvc3RzXFxcIiA6a2V5PVxcXCJwb3N0LmlkXFxcIj5cXG4gICAgICAgICAgICA8Yi1jYXJkPlxcbiAgICAgICAgICAgICAgICA8aDM+PHJvdXRlci1saW5rIDp0bz1cXFwieyBuYW1lOiAncG9zdF9kZXRhaWwnLCBwYXJhbXM6IHtpZDogcG9zdC5pZH0gfVxcXCI+e3sgcG9zdC50aXRsZSB9fTwvcm91dGVyLWxpbms+PC9oMz5cXG4gICAgICAgICAgICAgICAge3sgcG9zdC5ib2R5IH19XFxuICAgICAgICAgICAgPC9iLWNhcmQ+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxiLXBhZ2luYXRpb24gOnRvdGFsLXJvd3M9XFxcIjIwXFxcIiA6cGVyLXBhZ2U9XFxcIjJcXFwiPlxcbiAgICAgICAgPC9iLXBhZ2luYXRpb24+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXFxuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgICBuYW1lOiAnQXBwLW1haW4nLFxcbiAgICBkYXRhKCkge1xcbiAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICBjdXJyZW50UGFnZTogMSxcXG4gICAgICAgICAgICBwYWdlOiAxLFxcbiAgICAgICAgICAgIHBlclBhZ2U6IDIsXFxuICAgICAgICAgICAgcGFnZXM6IFtdXFxuICAgICAgICB9XFxuICAgIH0sXFxuICAgIGNvbXB1dGVkOiBtYXBHZXR0ZXJzICh7XFxuICAgICAgICBwb3N0czogJ3Bvc3RzJ1xcbiAgICB9KSxcXG4gICAgbWV0aG9kczoge1xcbiAgICAgICAgc2V0UGFnZXMgKCkge1xcbiAgICAgICAgICAgIGxldCBudW1iZXJPZlBhZ2VzID0gTWF0aC5jZWlsKHRoaXMucG9zdHMubGVuZ3RoIC8gdGhpcy5wZXJQYWdlKTtcXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDw9IG51bWJlck9mUGFnZXM7IGluZGV4KyspIHtcXG4gICAgICAgICAgICB0aGlzLnBhZ2VzLnB1c2goaW5kZXgpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBwYWdpbmF0ZSAocG9zdHMpIHtcXG4gICAgICAgICAgICBsZXQgcGFnZSA9IHRoaXMucGFnZTtcXG4gICAgICAgICAgICBsZXQgcGVyUGFnZSA9IHRoaXMucGVyUGFnZTtcXG4gICAgICAgICAgICBsZXQgZnJvbSA9IChwYWdlICogcGVyUGFnZSkgLSBwZXJQYWdlO1xcbiAgICAgICAgICAgIGxldCB0byA9IChwYWdlICogcGVyUGFnZSk7XFxuICAgICAgICAgICAgcmV0dXJuICBwb3N0cy5zbGljZShmcm9tLCB0byk7XFxuICAgICAgICB9XFxuICAgIH0sXFxuICAgIHdhdGNoOiB7XFxuICAgICAgICBwb3N0cyAoKSB7XFxuICAgICAgICAgICAgdGhpcy5zZXRQYWdlcygpO1xcbiAgICAgICAgfVxcbiAgICB9LFxcbiAgICBjcmVhdGVkKCkge1xcbiAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ0dFVF9QT1NUUycpXFxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBvc3RzLmxlbmd0aCwgJzwtLS0nKVxcbiAgICB9LFxcbiAgICBjb21wdXRlZDoge1xcblxcbiAgICB9XFxufVxcbjwvc2NyaXB0PlxcblxcblxcbjxzdHlsZSBzY29wZWQ+XFxuLyogQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7ICovXFxuICAgIC8qIC5jYXJkIHsgKi9cXG4gICAgICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgICAvKiB9ICovXFxuLyogfSAqL1xcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LWI1YmVkMTUyXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9jb21tb25zL0Jsb2dGZWVkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///35\n");

/***/ })

})