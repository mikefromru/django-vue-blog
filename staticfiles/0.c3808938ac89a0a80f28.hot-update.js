webpackHotUpdate(0,{

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(10)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n/* @media (max-width: 600px) { */\\n    /* .card { */\\n        /* width: 100%; */\\n    /* } */\\n/* } */\\n\", \"\", {\"version\":3,\"sources\":[\"/home/mikefromru/django_apps/blog-django-vue/project/src/components/commons/src/components/commons/BlogFeed.vue\"],\"names\":[],\"mappings\":\";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAgEA,iCAAA;IACA,aAAA;QACA,kBAAA;IACA,OAAA;AACA,OAAA\",\"file\":\"BlogFeed.vue\",\"sourcesContent\":[\"<template>\\n    <div>\\n        <div v-for=\\\"post in displayPage\\\" :key=\\\"post.id\\\">\\n            <b-card>\\n                <h3><router-link :to=\\\"{ name: 'post_detail', params: {id: post.id} }\\\">{{ post.title }}</router-link></h3>\\n                {{ post.body }}\\n            </b-card>\\n        </div>\\n        <pagination :pagination=\\\"pagination\\\" :callback=\\\"loadData\\\" :options=\\\"paginationOptions\\\"></pagination>\\n\\n    </div>\\n</template>\\n\\n<script>\\nimport pagination from 'vue-bootstrap-pagination'\\nimport axios from 'axios'\\nimport { mapGetters } from 'vuex'\\nexport default {\\n    name: 'App-main',\\n    components: {\\n        pagination\\n    },\\n    data() {\\n        return {\\n            pagination: {\\n                total: 0,\\n                per_page: 12,\\n                currentPage: 1,\\n                last_page: 0,\\n                from: 1,\\n                to: 12\\n            },\\n            paginationOptions: {\\n                offset: 4,\\n                previousText: 'Prev',\\n                nextText: 'Next',\\n                alwaysShowPrevNext: true\\n            }\\n        }\\n    },\\n    computed: {\\n        ...mapGetters([\\n            'posts',\\n        ])\\n    },\\n    methods: {\\n        loadData() {\\n            const options = {\\n                params: {\\n                    paginate: this.pagination.per_page,\\n                    page: this.pagination.current_page,\\n            /* additional parameters */\\n                }\\n            };\\n        }\\n    },\\n    created() {\\n        this.$store.dispatch('GET_POSTS')\\n    },\\n}\\n</script>\\n\\n\\n<style scoped>\\n/* @media (max-width: 600px) { */\\n    /* .card { */\\n        /* width: 100%; */\\n    /* } */\\n/* } */\\n</style>\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb25zL0Jsb2dGZWVkLnZ1ZT81MjMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7OztBQUdBO0FBQ0EsdUxBQXdMLG1CQUFtQiw0QkFBNEIsYUFBYSxTQUFTLGFBQWEsaU9BQWlPLFlBQVksVUFBVSxXQUFXLFVBQVUsdU1BQXVNLCtCQUErQixZQUFZLEVBQUUsS0FBSyxjQUFjLHVDQUF1QyxhQUFhLDBSQUEwUixhQUFhLDhCQUE4QiwwQ0FBMEMsMkJBQTJCLGVBQWUsa0JBQWtCLDJCQUEyQiwyTEFBMkwsbUNBQW1DLCtKQUErSixXQUFXLE9BQU8sa0JBQWtCLGtFQUFrRSxpQkFBaUIsc0JBQXNCLCtCQUErQiwyQkFBMkIsOEtBQThLLGdCQUFnQixXQUFXLE9BQU8sa0JBQWtCLGtEQUFrRCxJQUFJLCtEQUErRCxtQkFBbUIsNEJBQTRCLGFBQWEsU0FBUyxrQ0FBa0M7O0FBRXp4RSIsImZpbGUiOiIzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4vKiBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHsgKi9cXG4gICAgLyogLmNhcmQgeyAqL1xcbiAgICAgICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIC8qIH0gKi9cXG4vKiB9ICovXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL21pa2Vmcm9tcnUvZGphbmdvX2FwcHMvYmxvZy1kamFuZ28tdnVlL3Byb2plY3Qvc3JjL2NvbXBvbmVudHMvY29tbW9ucy9zcmMvY29tcG9uZW50cy9jb21tb25zL0Jsb2dGZWVkLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0VBLGlDQUFBO0lBQ0EsYUFBQTtRQUNBLGtCQUFBO0lBQ0EsT0FBQTtBQUNBLE9BQUFcIixcImZpbGVcIjpcIkJsb2dGZWVkLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxkaXY+XFxuICAgICAgICA8ZGl2IHYtZm9yPVxcXCJwb3N0IGluIGRpc3BsYXlQYWdlXFxcIiA6a2V5PVxcXCJwb3N0LmlkXFxcIj5cXG4gICAgICAgICAgICA8Yi1jYXJkPlxcbiAgICAgICAgICAgICAgICA8aDM+PHJvdXRlci1saW5rIDp0bz1cXFwieyBuYW1lOiAncG9zdF9kZXRhaWwnLCBwYXJhbXM6IHtpZDogcG9zdC5pZH0gfVxcXCI+e3sgcG9zdC50aXRsZSB9fTwvcm91dGVyLWxpbms+PC9oMz5cXG4gICAgICAgICAgICAgICAge3sgcG9zdC5ib2R5IH19XFxuICAgICAgICAgICAgPC9iLWNhcmQ+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxwYWdpbmF0aW9uIDpwYWdpbmF0aW9uPVxcXCJwYWdpbmF0aW9uXFxcIiA6Y2FsbGJhY2s9XFxcImxvYWREYXRhXFxcIiA6b3B0aW9ucz1cXFwicGFnaW5hdGlvbk9wdGlvbnNcXFwiPjwvcGFnaW5hdGlvbj5cXG5cXG4gICAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbmltcG9ydCBwYWdpbmF0aW9uIGZyb20gJ3Z1ZS1ib290c3RyYXAtcGFnaW5hdGlvbidcXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXFxuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgICBuYW1lOiAnQXBwLW1haW4nLFxcbiAgICBjb21wb25lbnRzOiB7XFxuICAgICAgICBwYWdpbmF0aW9uXFxuICAgIH0sXFxuICAgIGRhdGEoKSB7XFxuICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgIHBhZ2luYXRpb246IHtcXG4gICAgICAgICAgICAgICAgdG90YWw6IDAsXFxuICAgICAgICAgICAgICAgIHBlcl9wYWdlOiAxMixcXG4gICAgICAgICAgICAgICAgY3VycmVudFBhZ2U6IDEsXFxuICAgICAgICAgICAgICAgIGxhc3RfcGFnZTogMCxcXG4gICAgICAgICAgICAgICAgZnJvbTogMSxcXG4gICAgICAgICAgICAgICAgdG86IDEyXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBwYWdpbmF0aW9uT3B0aW9uczoge1xcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IDQsXFxuICAgICAgICAgICAgICAgIHByZXZpb3VzVGV4dDogJ1ByZXYnLFxcbiAgICAgICAgICAgICAgICBuZXh0VGV4dDogJ05leHQnLFxcbiAgICAgICAgICAgICAgICBhbHdheXNTaG93UHJldk5leHQ6IHRydWVcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH0sXFxuICAgIGNvbXB1dGVkOiB7XFxuICAgICAgICAuLi5tYXBHZXR0ZXJzKFtcXG4gICAgICAgICAgICAncG9zdHMnLFxcbiAgICAgICAgXSlcXG4gICAgfSxcXG4gICAgbWV0aG9kczoge1xcbiAgICAgICAgbG9hZERhdGEoKSB7XFxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XFxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0ZTogdGhpcy5wYWdpbmF0aW9uLnBlcl9wYWdlLFxcbiAgICAgICAgICAgICAgICAgICAgcGFnZTogdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRfcGFnZSxcXG4gICAgICAgICAgICAvKiBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgKi9cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH07XFxuICAgICAgICB9XFxuICAgIH0sXFxuICAgIGNyZWF0ZWQoKSB7XFxuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnR0VUX1BPU1RTJylcXG4gICAgfSxcXG59XFxuPC9zY3JpcHQ+XFxuXFxuXFxuPHN0eWxlIHNjb3BlZD5cXG4vKiBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHsgKi9cXG4gICAgLyogLmNhcmQgeyAqL1xcbiAgICAgICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIC8qIH0gKi9cXG4vKiB9ICovXFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtYjViZWQxNTJcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL2NvbW1vbnMvQmxvZ0ZlZWQudnVlXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///35\n");

/***/ }),

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var VueBootstrapPagination$1 = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',[(_vm.pagination.last_page > 0)?_c('ul',{staticClass:\"pagination\",class:_vm.sizeClass},[(_vm.showPrevious())?_c('li',{class:{ 'disabled' : _vm.pagination.current_page <= 1 }},[(_vm.pagination.current_page <= 1)?_c('span',[_c('span',{attrs:{\"aria-hidden\":\"true\"}},[_vm._v(_vm._s(_vm.config.previousText))])]):_vm._e(),(_vm.pagination.current_page > 1 )?_c('a',{attrs:{\"href\":\"#\",\"aria-label\":_vm.config.ariaPrevioius},on:{\"click\":function($event){$event.preventDefault();_vm.changePage(_vm.pagination.current_page - 1);}}},[_c('span',{attrs:{\"aria-hidden\":\"true\"}},[_vm._v(_vm._s(_vm.config.previousText))])]):_vm._e()]):_vm._e(),_vm._l((_vm.array),function(num){return _c('li',{class:{ 'active' : num === _vm.pagination.current_page }},[_c('a',{attrs:{\"href\":\"#\"},on:{\"click\":function($event){$event.preventDefault();_vm.changePage(num);}}},[_vm._v(_vm._s(num))])])}),(_vm.showNext())?_c('li',{class:{ 'disabled' : _vm.pagination.current_page === _vm.pagination.last_page || _vm.pagination.last_page === 0 }},[(_vm.pagination.current_page === _vm.pagination.last_page || _vm.pagination.last_page === 0)?_c('span',[_c('span',{attrs:{\"aria-hidden\":\"true\"}},[_vm._v(_vm._s(_vm.config.nextText))])]):_vm._e(),(_vm.pagination.current_page < _vm.pagination.last_page)?_c('a',{attrs:{\"href\":\"#\",\"aria-label\":_vm.config.ariaNext},on:{\"click\":function($event){$event.preventDefault();_vm.changePage(_vm.pagination.current_page + 1);}}},[_c('span',{attrs:{\"aria-hidden\":\"true\"}},[_vm._v(_vm._s(_vm.config.nextText))])]):_vm._e()]):_vm._e()],2):_vm._e()])},staticRenderFns: [],\r\n  name: 'pagination',\r\n  props: {\r\n    pagination: {\r\n      type: Object,\r\n      required: true,\r\n    },\r\n    callback: {\r\n      type: Function,\r\n      required: true,\r\n    },\r\n    options: {\r\n      type: Object,\r\n    },\r\n    size: {\r\n      type: String,\r\n    },\r\n  },\r\n  computed: {\r\n    array: function array() {\r\n      if (this.pagination.last_page <= 0) {\r\n        return [];\r\n      }\r\n      var from = this.pagination.current_page - this.config.offset;\r\n      if (from < 1) {\r\n        from = 1;\r\n      }\r\n      var to = from + (this.config.offset * 2);\r\n      if (to >= this.pagination.last_page) {\r\n        to = this.pagination.last_page;\r\n      }\r\n      var arr = [];\r\n      while (from <= to) {\r\n        arr.push(from);\r\n        from += 1;\r\n      }\r\n      return arr;\r\n    },\r\n    config: function config() {\r\n      return Object.assign({\r\n        offset: 3,\r\n        ariaPrevious: 'Previous',\r\n        ariaNext: 'Next',\r\n        previousText: '«',\r\n        nextText: '»',\r\n        alwaysShowPrevNext: false,\r\n      }, this.options);\r\n    },\r\n    sizeClass: function sizeClass() {\r\n      if (this.size === 'large') {\r\n        return 'pagination-lg';\r\n      } else if (this.size === 'small') {\r\n        return 'pagination-sm';\r\n      }\r\n      return '';\r\n    },\r\n  },\r\n  watch: {\r\n    'pagination.per_page': function pagination_per_page(newVal, oldVal) { // eslint-disable-line\r\n      if (+newVal !== +oldVal) {\r\n        this.callback();\r\n      }\r\n    },\r\n  },\r\n  methods: {\r\n    showPrevious: function showPrevious() {\r\n      return this.config.alwaysShowPrevNext || this.pagination.current_page > 1;\r\n    },\r\n    showNext: function showNext() {\r\n      return this.config.alwaysShowPrevNext ||\r\n          this.pagination.current_page < this.pagination.last_page;\r\n    },\r\n    changePage: function changePage(page) {\r\n      if (this.pagination.current_page === page) {\r\n        return;\r\n      }\r\n      this.$set(this.pagination, 'current_page', page);\r\n      this.callback();\r\n    },\r\n  },\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"a\"] = (VueBootstrapPagination$1);\r\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLWJvb3RzdHJhcC1wYWdpbmF0aW9uL2Rpc3QvdnVlLWJvb3RzdHJhcC1wYWdpbmF0aW9uLmVzbS5qcz9hM2U2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdDQUFnQyxtQkFBbUIsYUFBYSwwQkFBMEIsd0JBQXdCLHlEQUF5RCw2Q0FBNkMsZ0NBQWdDLE9BQU8saURBQWlELDJEQUEyRCxPQUFPLHNCQUFzQixrR0FBa0csT0FBTyxpREFBaUQsS0FBSyx5QkFBeUIsd0JBQXdCLG1EQUFtRCxhQUFhLE9BQU8sc0JBQXNCLG1HQUFtRyxnQkFBZ0IsT0FBTyxrREFBa0QsVUFBVSxPQUFPLFdBQVcsS0FBSyx5QkFBeUIsd0JBQXdCLHVCQUF1QiwwQkFBMEIsNEJBQTRCLE9BQU8sMkdBQTJHLHFIQUFxSCxPQUFPLHNCQUFzQixvSEFBb0gsT0FBTyw0Q0FBNEMsS0FBSyx5QkFBeUIsd0JBQXdCLG1EQUFtRCxhQUFhLE9BQU8sc0JBQXNCLDZFQUE2RTtBQUMzb0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLHlFQUF5RTtBQUN6RTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQSIsImZpbGUiOiI2MDUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVnVlQm9vdHN0cmFwUGFnaW5hdGlvbiQxID0ge3JlbmRlcjogZnVuY3Rpb24oKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ25hdicsWyhfdm0ucGFnaW5hdGlvbi5sYXN0X3BhZ2UgPiAwKT9fYygndWwnLHtzdGF0aWNDbGFzczpcInBhZ2luYXRpb25cIixjbGFzczpfdm0uc2l6ZUNsYXNzfSxbKF92bS5zaG93UHJldmlvdXMoKSk/X2MoJ2xpJyx7Y2xhc3M6eyAnZGlzYWJsZWQnIDogX3ZtLnBhZ2luYXRpb24uY3VycmVudF9wYWdlIDw9IDEgfX0sWyhfdm0ucGFnaW5hdGlvbi5jdXJyZW50X3BhZ2UgPD0gMSk/X2MoJ3NwYW4nLFtfYygnc3Bhbicse2F0dHJzOntcImFyaWEtaGlkZGVuXCI6XCJ0cnVlXCJ9fSxbX3ZtLl92KF92bS5fcyhfdm0uY29uZmlnLnByZXZpb3VzVGV4dCkpXSldKTpfdm0uX2UoKSwoX3ZtLnBhZ2luYXRpb24uY3VycmVudF9wYWdlID4gMSApP19jKCdhJyx7YXR0cnM6e1wiaHJlZlwiOlwiI1wiLFwiYXJpYS1sYWJlbFwiOl92bS5jb25maWcuYXJpYVByZXZpb2l1c30sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpeyRldmVudC5wcmV2ZW50RGVmYXVsdCgpO192bS5jaGFuZ2VQYWdlKF92bS5wYWdpbmF0aW9uLmN1cnJlbnRfcGFnZSAtIDEpO319fSxbX2MoJ3NwYW4nLHthdHRyczp7XCJhcmlhLWhpZGRlblwiOlwidHJ1ZVwifX0sW192bS5fdihfdm0uX3MoX3ZtLmNvbmZpZy5wcmV2aW91c1RleHQpKV0pXSk6X3ZtLl9lKCldKTpfdm0uX2UoKSxfdm0uX2woKF92bS5hcnJheSksZnVuY3Rpb24obnVtKXtyZXR1cm4gX2MoJ2xpJyx7Y2xhc3M6eyAnYWN0aXZlJyA6IG51bSA9PT0gX3ZtLnBhZ2luYXRpb24uY3VycmVudF9wYWdlIH19LFtfYygnYScse2F0dHJzOntcImhyZWZcIjpcIiNcIn0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpeyRldmVudC5wcmV2ZW50RGVmYXVsdCgpO192bS5jaGFuZ2VQYWdlKG51bSk7fX19LFtfdm0uX3YoX3ZtLl9zKG51bSkpXSldKX0pLChfdm0uc2hvd05leHQoKSk/X2MoJ2xpJyx7Y2xhc3M6eyAnZGlzYWJsZWQnIDogX3ZtLnBhZ2luYXRpb24uY3VycmVudF9wYWdlID09PSBfdm0ucGFnaW5hdGlvbi5sYXN0X3BhZ2UgfHwgX3ZtLnBhZ2luYXRpb24ubGFzdF9wYWdlID09PSAwIH19LFsoX3ZtLnBhZ2luYXRpb24uY3VycmVudF9wYWdlID09PSBfdm0ucGFnaW5hdGlvbi5sYXN0X3BhZ2UgfHwgX3ZtLnBhZ2luYXRpb24ubGFzdF9wYWdlID09PSAwKT9fYygnc3BhbicsW19jKCdzcGFuJyx7YXR0cnM6e1wiYXJpYS1oaWRkZW5cIjpcInRydWVcIn19LFtfdm0uX3YoX3ZtLl9zKF92bS5jb25maWcubmV4dFRleHQpKV0pXSk6X3ZtLl9lKCksKF92bS5wYWdpbmF0aW9uLmN1cnJlbnRfcGFnZSA8IF92bS5wYWdpbmF0aW9uLmxhc3RfcGFnZSk/X2MoJ2EnLHthdHRyczp7XCJocmVmXCI6XCIjXCIsXCJhcmlhLWxhYmVsXCI6X3ZtLmNvbmZpZy5hcmlhTmV4dH0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpeyRldmVudC5wcmV2ZW50RGVmYXVsdCgpO192bS5jaGFuZ2VQYWdlKF92bS5wYWdpbmF0aW9uLmN1cnJlbnRfcGFnZSArIDEpO319fSxbX2MoJ3NwYW4nLHthdHRyczp7XCJhcmlhLWhpZGRlblwiOlwidHJ1ZVwifX0sW192bS5fdihfdm0uX3MoX3ZtLmNvbmZpZy5uZXh0VGV4dCkpXSldKTpfdm0uX2UoKV0pOl92bS5fZSgpXSwyKTpfdm0uX2UoKV0pfSxzdGF0aWNSZW5kZXJGbnM6IFtdLFxyXG4gIG5hbWU6ICdwYWdpbmF0aW9uJyxcclxuICBwcm9wczoge1xyXG4gICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGNhbGxiYWNrOiB7XHJcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgIH0sXHJcbiAgICBzaXplOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgYXJyYXk6IGZ1bmN0aW9uIGFycmF5KCkge1xyXG4gICAgICBpZiAodGhpcy5wYWdpbmF0aW9uLmxhc3RfcGFnZSA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICB9XHJcbiAgICAgIHZhciBmcm9tID0gdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRfcGFnZSAtIHRoaXMuY29uZmlnLm9mZnNldDtcclxuICAgICAgaWYgKGZyb20gPCAxKSB7XHJcbiAgICAgICAgZnJvbSA9IDE7XHJcbiAgICAgIH1cclxuICAgICAgdmFyIHRvID0gZnJvbSArICh0aGlzLmNvbmZpZy5vZmZzZXQgKiAyKTtcclxuICAgICAgaWYgKHRvID49IHRoaXMucGFnaW5hdGlvbi5sYXN0X3BhZ2UpIHtcclxuICAgICAgICB0byA9IHRoaXMucGFnaW5hdGlvbi5sYXN0X3BhZ2U7XHJcbiAgICAgIH1cclxuICAgICAgdmFyIGFyciA9IFtdO1xyXG4gICAgICB3aGlsZSAoZnJvbSA8PSB0bykge1xyXG4gICAgICAgIGFyci5wdXNoKGZyb20pO1xyXG4gICAgICAgIGZyb20gKz0gMTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYXJyO1xyXG4gICAgfSxcclxuICAgIGNvbmZpZzogZnVuY3Rpb24gY29uZmlnKCkge1xyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgb2Zmc2V0OiAzLFxyXG4gICAgICAgIGFyaWFQcmV2aW91czogJ1ByZXZpb3VzJyxcclxuICAgICAgICBhcmlhTmV4dDogJ05leHQnLFxyXG4gICAgICAgIHByZXZpb3VzVGV4dDogJ8KrJyxcclxuICAgICAgICBuZXh0VGV4dDogJ8K7JyxcclxuICAgICAgICBhbHdheXNTaG93UHJldk5leHQ6IGZhbHNlLFxyXG4gICAgICB9LCB0aGlzLm9wdGlvbnMpO1xyXG4gICAgfSxcclxuICAgIHNpemVDbGFzczogZnVuY3Rpb24gc2l6ZUNsYXNzKCkge1xyXG4gICAgICBpZiAodGhpcy5zaXplID09PSAnbGFyZ2UnKSB7XHJcbiAgICAgICAgcmV0dXJuICdwYWdpbmF0aW9uLWxnJztcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnNpemUgPT09ICdzbWFsbCcpIHtcclxuICAgICAgICByZXR1cm4gJ3BhZ2luYXRpb24tc20nO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH0sXHJcbiAgfSxcclxuICB3YXRjaDoge1xyXG4gICAgJ3BhZ2luYXRpb24ucGVyX3BhZ2UnOiBmdW5jdGlvbiBwYWdpbmF0aW9uX3Blcl9wYWdlKG5ld1ZhbCwgb2xkVmFsKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxuICAgICAgaWYgKCtuZXdWYWwgIT09ICtvbGRWYWwpIHtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBzaG93UHJldmlvdXM6IGZ1bmN0aW9uIHNob3dQcmV2aW91cygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmFsd2F5c1Nob3dQcmV2TmV4dCB8fCB0aGlzLnBhZ2luYXRpb24uY3VycmVudF9wYWdlID4gMTtcclxuICAgIH0sXHJcbiAgICBzaG93TmV4dDogZnVuY3Rpb24gc2hvd05leHQoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5hbHdheXNTaG93UHJldk5leHQgfHxcclxuICAgICAgICAgIHRoaXMucGFnaW5hdGlvbi5jdXJyZW50X3BhZ2UgPCB0aGlzLnBhZ2luYXRpb24ubGFzdF9wYWdlO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZVBhZ2U6IGZ1bmN0aW9uIGNoYW5nZVBhZ2UocGFnZSkge1xyXG4gICAgICBpZiAodGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRfcGFnZSA9PT0gcGFnZSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLiRzZXQodGhpcy5wYWdpbmF0aW9uLCAnY3VycmVudF9wYWdlJywgcGFnZSk7XHJcbiAgICAgIHRoaXMuY2FsbGJhY2soKTtcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZ1ZUJvb3RzdHJhcFBhZ2luYXRpb24kMTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWJvb3RzdHJhcC1wYWdpbmF0aW9uL2Rpc3QvdnVlLWJvb3RzdHJhcC1wYWdpbmF0aW9uLmVzbS5qc1xuLy8gbW9kdWxlIGlkID0gNjA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///605\n");

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_bootstrap_pagination__ = __webpack_require__(605);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(24);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(33);\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n    name: 'App-main',\n    components: {\n        pagination: __WEBPACK_IMPORTED_MODULE_0_vue_bootstrap_pagination__[\"a\" /* default */]\n    },\n    data: function data() {\n        return {\n            pagination: {\n                total: 0,\n                per_page: 12,\n                currentPage: 1,\n                last_page: 0,\n                from: 1,\n                to: 12\n            },\n            paginationOptions: {\n                offset: 4,\n                previousText: 'Prev',\n                nextText: 'Next',\n                alwaysShowPrevNext: true\n            }\n        };\n    },\n\n    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__[\"b\" /* mapGetters */])(['posts'])),\n    methods: {\n        loadData: function loadData() {\n            var options = {\n                params: {\n                    paginate: this.pagination.per_page,\n                    page: this.pagination.current_page\n                    /* additional parameters */\n                }\n            };\n        }\n    },\n    created: function created() {\n        this.$store.dispatch('GET_POSTS');\n    }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvY29tbW9ucy9CbG9nRmVlZC52dWU/OGRkZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBREE7QUFFQTtBQUNBO0FBREEsS0FGQTtBQUtBLFFBTEEsa0JBS0E7QUFDQTtBQUNBO0FBQ0Esd0JBREE7QUFFQSw0QkFGQTtBQUdBLDhCQUhBO0FBSUEsNEJBSkE7QUFLQSx1QkFMQTtBQU1BO0FBTkEsYUFEQTtBQVNBO0FBQ0EseUJBREE7QUFFQSxvQ0FGQTtBQUdBLGdDQUhBO0FBSUE7QUFKQTtBQVRBO0FBZ0JBLEtBdEJBOztBQXVCQSwyQkFDQSxrRUFDQSxPQURBLEVBREEsQ0F2QkE7QUE0QkE7QUFDQSxnQkFEQSxzQkFDQTtBQUNBO0FBQ0E7QUFDQSxzREFEQTtBQUVBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFUQSxLQTVCQTtBQXVDQSxXQXZDQSxxQkF1Q0E7QUFDQTtBQUNBO0FBekNBIiwiZmlsZSI6IjY1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxkaXYgdi1mb3I9XCJwb3N0IGluIGRpc3BsYXlQYWdlXCIgOmtleT1cInBvc3QuaWRcIj5cbiAgICAgICAgICAgIDxiLWNhcmQ+XG4gICAgICAgICAgICAgICAgPGgzPjxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdwb3N0X2RldGFpbCcsIHBhcmFtczoge2lkOiBwb3N0LmlkfSB9XCI+e3sgcG9zdC50aXRsZSB9fTwvcm91dGVyLWxpbms+PC9oMz5cbiAgICAgICAgICAgICAgICB7eyBwb3N0LmJvZHkgfX1cbiAgICAgICAgICAgIDwvYi1jYXJkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHBhZ2luYXRpb24gOnBhZ2luYXRpb249XCJwYWdpbmF0aW9uXCIgOmNhbGxiYWNrPVwibG9hZERhdGFcIiA6b3B0aW9ucz1cInBhZ2luYXRpb25PcHRpb25zXCI+PC9wYWdpbmF0aW9uPlxuXG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHBhZ2luYXRpb24gZnJvbSAndnVlLWJvb3RzdHJhcC1wYWdpbmF0aW9uJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ0FwcC1tYWluJyxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIHBhZ2luYXRpb25cbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgdG90YWw6IDAsXG4gICAgICAgICAgICAgICAgcGVyX3BhZ2U6IDEyLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlOiAxLFxuICAgICAgICAgICAgICAgIGxhc3RfcGFnZTogMCxcbiAgICAgICAgICAgICAgICBmcm9tOiAxLFxuICAgICAgICAgICAgICAgIHRvOiAxMlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhZ2luYXRpb25PcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0OiA0LFxuICAgICAgICAgICAgICAgIHByZXZpb3VzVGV4dDogJ1ByZXYnLFxuICAgICAgICAgICAgICAgIG5leHRUZXh0OiAnTmV4dCcsXG4gICAgICAgICAgICAgICAgYWx3YXlzU2hvd1ByZXZOZXh0OiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIC4uLm1hcEdldHRlcnMoW1xuICAgICAgICAgICAgJ3Bvc3RzJyxcbiAgICAgICAgXSlcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgbG9hZERhdGEoKSB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0ZTogdGhpcy5wYWdpbmF0aW9uLnBlcl9wYWdlLFxuICAgICAgICAgICAgICAgICAgICBwYWdlOiB0aGlzLnBhZ2luYXRpb24uY3VycmVudF9wYWdlLFxuICAgICAgICAgICAgLyogYWRkaXRpb25hbCBwYXJhbWV0ZXJzICovXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ0dFVF9QT1NUUycpXG4gICAgfSxcbn1cbjwvc2NyaXB0PlxuXG5cbjxzdHlsZSBzY29wZWQ+XG4vKiBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHsgKi9cbiAgICAvKiAuY2FyZCB7ICovXG4gICAgICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAgIC8qIH0gKi9cbi8qIH0gKi9cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvY29tbW9ucy9CbG9nRmVlZC52dWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///65\n");

/***/ })

})