webpackHotUpdate(0,{

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(37)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.card {\\n    margin-top: 10px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/home/mikefromru/django_apps/blog-django-vue/project/src/src/App.vue\"],\"names\":[],\"mappings\":\";AAqCA;IACA,iBAAA;CACA\",\"file\":\"App.vue\",\"sourcesContent\":[\"<template>\\n    <div id=\\\"app\\\">\\n            <b-container>\\n                <app-header/>\\n                    <b-row>\\n                        <b-col cols-xs=\\\"6\\\" md='4'><app-aside/></b-col>\\n                        <!-- <b-col cols=\\\"12\\\" md=\\\"8\\\"><app-main/></b-col> -->\\n                        <b-col cols=\\\"12\\\" md=\\\"8\\\">\\n                            <div v-for=\\\"post in posts\\\" :key=\\\"post.id\\\">\\n            <!-- <b-card class=\\\"card\\\"> -->\\n                        <b-card>\\n                <h3><router-link :to=\\\"{ name: 'post_detail', params: {id: post.id} }\\\">{{ post.title }}</router-link></h3>\\n                {{ post.body }}\\n            </b-card>\\n        </div>\\n                        </b-col>\\n                    </b-row>\\n            </b-container>\\n        <router-view/>\\n    </div>\\n</template>\\n\\n<script>\\nimport Header from './components/commons/App-header'\\nimport Aside from './components/commons/App-aside'\\nimport Main from './components/commons/App-main'\\nexport default {\\n    name: \\\"app\\\",\\n    components: {\\n        'app-header': Header,\\n        'app-aside': Aside, \\n        'app-main': Main\\n    },\\n};\\n</script>\\n\\n<style>\\n.card {\\n    margin-top: 10px;\\n}\\n</style>\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQXBwLnZ1ZT8wMzI4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7OztBQUdBO0FBQ0Esa0NBQW1DLHVCQUF1QixHQUFHLFVBQVUsdUhBQXVILE1BQU0sV0FBVyx5akJBQXlqQiwrQkFBK0IsWUFBWSxFQUFFLEtBQUssY0FBYyx1Q0FBdUMsYUFBYSw4V0FBOFcsdUNBQXVDLDhGQUE4RixLQUFLLCtCQUErQix1QkFBdUIsR0FBRywrQkFBK0I7O0FBRTU4QyIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5jYXJkIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL21pa2Vmcm9tcnUvZGphbmdvX2FwcHMvYmxvZy1kamFuZ28tdnVlL3Byb2plY3Qvc3JjL3NyYy9BcHAudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFxQ0E7SUFDQSxpQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJBcHAudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPGRpdiBpZD1cXFwiYXBwXFxcIj5cXG4gICAgICAgICAgICA8Yi1jb250YWluZXI+XFxuICAgICAgICAgICAgICAgIDxhcHAtaGVhZGVyLz5cXG4gICAgICAgICAgICAgICAgICAgIDxiLXJvdz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgY29scy14cz1cXFwiNlxcXCIgbWQ9JzQnPjxhcHAtYXNpZGUvPjwvYi1jb2w+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8Yi1jb2wgY29scz1cXFwiMTJcXFwiIG1kPVxcXCI4XFxcIj48YXBwLW1haW4vPjwvYi1jb2w+IC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCBjb2xzPVxcXCIxMlxcXCIgbWQ9XFxcIjhcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVxcXCJwb3N0IGluIHBvc3RzXFxcIiA6a2V5PVxcXCJwb3N0LmlkXFxcIj5cXG4gICAgICAgICAgICA8IS0tIDxiLWNhcmQgY2xhc3M9XFxcImNhcmRcXFwiPiAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkPlxcbiAgICAgICAgICAgICAgICA8aDM+PHJvdXRlci1saW5rIDp0bz1cXFwieyBuYW1lOiAncG9zdF9kZXRhaWwnLCBwYXJhbXM6IHtpZDogcG9zdC5pZH0gfVxcXCI+e3sgcG9zdC50aXRsZSB9fTwvcm91dGVyLWxpbms+PC9oMz5cXG4gICAgICAgICAgICAgICAge3sgcG9zdC5ib2R5IH19XFxuICAgICAgICAgICAgPC9iLWNhcmQ+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxcbiAgICAgICAgICAgICAgICAgICAgPC9iLXJvdz5cXG4gICAgICAgICAgICA8L2ItY29udGFpbmVyPlxcbiAgICAgICAgPHJvdXRlci12aWV3Lz5cXG4gICAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL2NvbW1vbnMvQXBwLWhlYWRlcidcXG5pbXBvcnQgQXNpZGUgZnJvbSAnLi9jb21wb25lbnRzL2NvbW1vbnMvQXBwLWFzaWRlJ1xcbmltcG9ydCBNYWluIGZyb20gJy4vY29tcG9uZW50cy9jb21tb25zL0FwcC1tYWluJ1xcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgbmFtZTogXFxcImFwcFxcXCIsXFxuICAgIGNvbXBvbmVudHM6IHtcXG4gICAgICAgICdhcHAtaGVhZGVyJzogSGVhZGVyLFxcbiAgICAgICAgJ2FwcC1hc2lkZSc6IEFzaWRlLCBcXG4gICAgICAgICdhcHAtbWFpbic6IE1haW5cXG4gICAgfSxcXG59O1xcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG4uY2FyZCB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTdiYTViZDkwXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL0FwcC52dWVcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ })

})