webpackHotUpdate(0,{

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(10)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n/* @media (max-width: 600px) { */\\n    /* .card { */\\n        /* width: 100%; */\\n    /* } */\\n/* } */\\n\", \"\", {\"version\":3,\"sources\":[\"/home/mikefromru/django_apps/blog-django-vue/project/src/components/commons/src/components/commons/BlogFeed.vue\"],\"names\":[],\"mappings\":\";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA+DA,iCAAA;IACA,aAAA;QACA,kBAAA;IACA,OAAA;AACA,OAAA\",\"file\":\"BlogFeed.vue\",\"sourcesContent\":[\"<template>\\n    <div>\\n        <div v-for=\\\"post in displayPage\\\" :key=\\\"post.id\\\">\\n            <b-card>\\n                <h3><router-link :to=\\\"{ name: 'post_detail', params: {id: post.id} }\\\">{{ post.title }}</router-link></h3>\\n                {{ post.body }}\\n            </b-card>\\n        </div>\\n        <pagination :pagination=\\\"pagination\\\" :callback=\\\"loadData\\\" :options=\\\"paginationOptions\\\"></pagination>\\n\\n    </div>\\n</template>\\n\\n<script>\\nimport axios from 'axios'\\nimport { mapGetters } from 'vuex'\\nexport default {\\n    name: 'App-main',\\n    components: {\\n        pagination\\n    },\\n    data() {\\n        return {\\n            pagination: {\\n                total: 0,\\n                per_page: 12,\\n                currentPage: 1,\\n                last_page: 0,\\n                from: 1,\\n                to: 12\\n            },\\n            paginationOptions: {\\n                offset: 4,\\n                previousText: 'Prev',\\n                nextText: 'Next',\\n                alwaysShowPrevNext: true\\n            }\\n        }\\n    },\\n    computed: {\\n        ...mapGetters([\\n            'posts',\\n        ])\\n    },\\n    methods: {\\n        loadData() {\\n            const options = {\\n                params: {\\n                    paginate: this.pagination.per_page,\\n                    page: this.pagination.current_page,\\n            /* additional parameters */\\n                }\\n            };\\n        }\\n    },\\n    created() {\\n        this.$store.dispatch('GET_POSTS')\\n    },\\n}\\n</script>\\n\\n\\n<style scoped>\\n/* @media (max-width: 600px) { */\\n    /* .card { */\\n        /* width: 100%; */\\n    /* } */\\n/* } */\\n</style>\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb25zL0Jsb2dGZWVkLnZ1ZT81MjMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7OztBQUdBO0FBQ0EscUxBQXNMLG1CQUFtQiw0QkFBNEIsYUFBYSxTQUFTLGFBQWEsZ09BQWdPLFlBQVksVUFBVSxXQUFXLFVBQVUsdU1BQXVNLCtCQUErQixZQUFZLEVBQUUsS0FBSyxjQUFjLHVDQUF1QyxhQUFhLHVPQUF1TyxhQUFhLDhCQUE4QiwwQ0FBMEMsMkJBQTJCLGVBQWUsa0JBQWtCLDJCQUEyQiwyTEFBMkwsbUNBQW1DLCtKQUErSixXQUFXLE9BQU8sa0JBQWtCLGtFQUFrRSxpQkFBaUIsc0JBQXNCLCtCQUErQiwyQkFBMkIsOEtBQThLLGdCQUFnQixXQUFXLE9BQU8sa0JBQWtCLGtEQUFrRCxJQUFJLCtEQUErRCxtQkFBbUIsNEJBQTRCLGFBQWEsU0FBUyxrQ0FBa0M7O0FBRW51RSIsImZpbGUiOiIzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4vKiBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHsgKi9cXG4gICAgLyogLmNhcmQgeyAqL1xcbiAgICAgICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIC8qIH0gKi9cXG4vKiB9ICovXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL21pa2Vmcm9tcnUvZGphbmdvX2FwcHMvYmxvZy1kamFuZ28tdnVlL3Byb2plY3Qvc3JjL2NvbXBvbmVudHMvY29tbW9ucy9zcmMvY29tcG9uZW50cy9jb21tb25zL0Jsb2dGZWVkLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErREEsaUNBQUE7SUFDQSxhQUFBO1FBQ0Esa0JBQUE7SUFDQSxPQUFBO0FBQ0EsT0FBQVwiLFwiZmlsZVwiOlwiQmxvZ0ZlZWQudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPGRpdj5cXG4gICAgICAgIDxkaXYgdi1mb3I9XFxcInBvc3QgaW4gZGlzcGxheVBhZ2VcXFwiIDprZXk9XFxcInBvc3QuaWRcXFwiPlxcbiAgICAgICAgICAgIDxiLWNhcmQ+XFxuICAgICAgICAgICAgICAgIDxoMz48cm91dGVyLWxpbmsgOnRvPVxcXCJ7IG5hbWU6ICdwb3N0X2RldGFpbCcsIHBhcmFtczoge2lkOiBwb3N0LmlkfSB9XFxcIj57eyBwb3N0LnRpdGxlIH19PC9yb3V0ZXItbGluaz48L2gzPlxcbiAgICAgICAgICAgICAgICB7eyBwb3N0LmJvZHkgfX1cXG4gICAgICAgICAgICA8L2ItY2FyZD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPHBhZ2luYXRpb24gOnBhZ2luYXRpb249XFxcInBhZ2luYXRpb25cXFwiIDpjYWxsYmFjaz1cXFwibG9hZERhdGFcXFwiIDpvcHRpb25zPVxcXCJwYWdpbmF0aW9uT3B0aW9uc1xcXCI+PC9wYWdpbmF0aW9uPlxcblxcbiAgICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xcbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgbmFtZTogJ0FwcC1tYWluJyxcXG4gICAgY29tcG9uZW50czoge1xcbiAgICAgICAgcGFnaW5hdGlvblxcbiAgICB9LFxcbiAgICBkYXRhKCkge1xcbiAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiB7XFxuICAgICAgICAgICAgICAgIHRvdGFsOiAwLFxcbiAgICAgICAgICAgICAgICBwZXJfcGFnZTogMTIsXFxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlOiAxLFxcbiAgICAgICAgICAgICAgICBsYXN0X3BhZ2U6IDAsXFxuICAgICAgICAgICAgICAgIGZyb206IDEsXFxuICAgICAgICAgICAgICAgIHRvOiAxMlxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgcGFnaW5hdGlvbk9wdGlvbnM6IHtcXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiA0LFxcbiAgICAgICAgICAgICAgICBwcmV2aW91c1RleHQ6ICdQcmV2JyxcXG4gICAgICAgICAgICAgICAgbmV4dFRleHQ6ICdOZXh0JyxcXG4gICAgICAgICAgICAgICAgYWx3YXlzU2hvd1ByZXZOZXh0OiB0cnVlXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9LFxcbiAgICBjb21wdXRlZDoge1xcbiAgICAgICAgLi4ubWFwR2V0dGVycyhbXFxuICAgICAgICAgICAgJ3Bvc3RzJyxcXG4gICAgICAgIF0pXFxuICAgIH0sXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICAgIGxvYWREYXRhKCkge1xcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGU6IHRoaXMucGFnaW5hdGlvbi5wZXJfcGFnZSxcXG4gICAgICAgICAgICAgICAgICAgIHBhZ2U6IHRoaXMucGFnaW5hdGlvbi5jdXJyZW50X3BhZ2UsXFxuICAgICAgICAgICAgLyogYWRkaXRpb25hbCBwYXJhbWV0ZXJzICovXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9O1xcbiAgICAgICAgfVxcbiAgICB9LFxcbiAgICBjcmVhdGVkKCkge1xcbiAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ0dFVF9QT1NUUycpXFxuICAgIH0sXFxufVxcbjwvc2NyaXB0PlxcblxcblxcbjxzdHlsZSBzY29wZWQ+XFxuLyogQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7ICovXFxuICAgIC8qIC5jYXJkIHsgKi9cXG4gICAgICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgICAvKiB9ICovXFxuLyogfSAqL1xcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LWI1YmVkMTUyXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9jb21tb25zL0Jsb2dGZWVkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///35\n");

/***/ })

})