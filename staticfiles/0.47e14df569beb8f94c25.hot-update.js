webpackHotUpdate(0,{

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(12)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n/* @media (min-width: 1000px) {\\n    .card {\\n        width: 300px;\\n    }\\n}\\n*/\\n\\n/* @media (max-width: 600px) {\\n    .card {\\n        display: none;\\n    }\\n} */\\n\", \"\", {\"version\":3,\"sources\":[\"/home/mikefromru/django_apps/blog-django-vue/project/src/components/commons/src/components/commons/App-aside.vue\"],\"names\":[],\"mappings\":\";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAyCA;;;;;EAKA;;AAEA;;;;IAIA\",\"file\":\"App-aside.vue\",\"sourcesContent\":[\"<template>\\n    <div>\\n        <!-- <div class=\\\"div-card\\\"> -->\\n            <b-row>\\n            <b-col cols-xs=\\\"6\\\" md=\\\"4\\\">\\n                <b-card title=\\\"Card Category\\\">\\n                    <div v-for=\\\"category in categories\\\" :key=\\\"category.id\\\">\\n                        {{ category.name }}\\n                    </div>\\n                </b-card>\\n            </b-col>\\n            </b-row>\\n        <!-- </div> -->\\n    </div>\\n</template>\\n\\n<script>\\nimport axios from 'axios'\\nexport default {\\n    name: 'App-aside',\\n    data() {\\n        return {\\n            categories: []\\n        }\\n    },\\n    methods: {\\n        get_categories() {\\n            axios.get('/api/categories/').then(response => {\\n                this.categories = response.data\\n            })\\n        }\\n    },\\n    created() {\\n        this.get_categories()\\n    }\\n\\n}\\n</script>\\n\\n\\n<style scoped>\\n/* @media (min-width: 1000px) {\\n    .card {\\n        width: 300px;\\n    }\\n}\\n*/\\n\\n/* @media (max-width: 600px) {\\n    .card {\\n        display: none;\\n    }\\n} */\\n</style>\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb25zL0FwcC1hc2lkZS52dWU/NmZmMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOzs7QUFHQTtBQUNBLDBJQUEySSxhQUFhLHVCQUF1QixPQUFPLEdBQUcsc0NBQXNDLGFBQWEsd0JBQXdCLE9BQU8sR0FBRyxhQUFhLDJNQUEyTSxVQUFVLE1BQU0sUUFBUSxnVkFBZ1YsaUJBQWlCLDhNQUE4TSxzQ0FBc0Msa0JBQWtCLHVDQUF1QyxPQUFPLGlCQUFpQiw0QkFBNEIsOERBQThELGdFQUFnRSxZQUFZLE9BQU8sa0JBQWtCLHNDQUFzQyxLQUFLLGdFQUFnRSxhQUFhLHVCQUF1QixPQUFPLEdBQUcsc0NBQXNDLGFBQWEsd0JBQXdCLE9BQU8sR0FBRyxnQ0FBZ0M7O0FBRWpuRCIsImZpbGUiOiIyNzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuLyogQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge1xcbiAgICAuY2FyZCB7XFxuICAgICAgICB3aWR0aDogMzAwcHg7XFxuICAgIH1cXG59XFxuKi9cXG5cXG4vKiBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgLmNhcmQge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbn0gKi9cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvbWlrZWZyb21ydS9kamFuZ29fYXBwcy9ibG9nLWRqYW5nby12dWUvcHJvamVjdC9zcmMvY29tcG9uZW50cy9jb21tb25zL3NyYy9jb21wb25lbnRzL2NvbW1vbnMvQXBwLWFzaWRlLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlDQTs7Ozs7RUFLQTs7QUFFQTs7OztJQUlBXCIsXCJmaWxlXCI6XCJBcHAtYXNpZGUudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPGRpdj5cXG4gICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cXFwiZGl2LWNhcmRcXFwiPiAtLT5cXG4gICAgICAgICAgICA8Yi1yb3c+XFxuICAgICAgICAgICAgPGItY29sIGNvbHMteHM9XFxcIjZcXFwiIG1kPVxcXCI0XFxcIj5cXG4gICAgICAgICAgICAgICAgPGItY2FyZCB0aXRsZT1cXFwiQ2FyZCBDYXRlZ29yeVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVxcXCJjYXRlZ29yeSBpbiBjYXRlZ29yaWVzXFxcIiA6a2V5PVxcXCJjYXRlZ29yeS5pZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAge3sgY2F0ZWdvcnkubmFtZSB9fVxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvYi1jYXJkPlxcbiAgICAgICAgICAgIDwvYi1jb2w+XFxuICAgICAgICAgICAgPC9iLXJvdz5cXG4gICAgICAgIDwhLS0gPC9kaXY+IC0tPlxcbiAgICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgbmFtZTogJ0FwcC1hc2lkZScsXFxuICAgIGRhdGEoKSB7XFxuICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IFtdXFxuICAgICAgICB9XFxuICAgIH0sXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICAgIGdldF9jYXRlZ29yaWVzKCkge1xcbiAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS9jYXRlZ29yaWVzLycpLnRoZW4ocmVzcG9uc2UgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSByZXNwb25zZS5kYXRhXFxuICAgICAgICAgICAgfSlcXG4gICAgICAgIH1cXG4gICAgfSxcXG4gICAgY3JlYXRlZCgpIHtcXG4gICAgICAgIHRoaXMuZ2V0X2NhdGVnb3JpZXMoKVxcbiAgICB9XFxuXFxufVxcbjwvc2NyaXB0PlxcblxcblxcbjxzdHlsZSBzY29wZWQ+XFxuLyogQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge1xcbiAgICAuY2FyZCB7XFxuICAgICAgICB3aWR0aDogMzAwcHg7XFxuICAgIH1cXG59XFxuKi9cXG5cXG4vKiBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgLmNhcmQge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbn0gKi9cXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi1kOTAzM2FiNlwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvY29tbW9ucy9BcHAtYXNpZGUudnVlXG4vLyBtb2R1bGUgaWQgPSAyNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///271\n");

/***/ })

})