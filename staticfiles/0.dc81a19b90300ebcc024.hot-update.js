webpackHotUpdate(0,{

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(37)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.card {\\n    margin-top: 10px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/home/mikefromru/django_apps/blog-django-vue/project/src/src/App.vue\"],\"names\":[],\"mappings\":\";AA8CA;IACA,iBAAA;CACA\",\"file\":\"App.vue\",\"sourcesContent\":[\"<template>\\n    <div id=\\\"app\\\">\\n        <b-container>\\n            <app-header/>\\n                <!-- <b-row>\\n                    <b-col cols-xs=\\\"6\\\" md='4'><app-aside/></b-col>\\n\\n                    <b-col cols-xs=\\\"12\\\" md='8'><app-main/></b-col>\\n                </b-row> -->\\n            <aside>\\n                <!-- <app-aside/> -->\\n            </aside>    \\n            <main>\\n                <div\\n                <app-main/>\\n                <div v-if=\\\"post\\\">\\n                </div>\\n                <router-view/>\\n            </main>\\n        </b-container>\\n    </div>\\n</template>\\n\\n<script>\\nimport Header from './components/commons/App-header'\\nimport Aside from './components/commons/App-aside'\\nimport Main from './components/commons/App-main'\\nimport { mapGetters } from 'vuex'\\nexport default {\\n    name: \\\"app\\\",\\n    components: {\\n        'app-header': Header,\\n        'app-aside': Aside, \\n        'app-main': Main\\n    },\\n    computed: mapGetters ({\\n        posts: 'posts',\\n        post: 'post'\\n    }),\\n    created() {\\n        this.$store.dispatch('GET_POSTS')\\n    }\\n};\\n</script>\\n\\n<style>\\n.card {\\n    margin-top: 10px;\\n}\\n</style>\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQXBwLnZ1ZT8wMzI4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7OztBQUdBO0FBQ0Esa0NBQW1DLHVCQUF1QixHQUFHLFVBQVUsdUhBQXVILE1BQU0sV0FBVyx3ekJBQXd6QixhQUFhLDhCQUE4Qix1Q0FBdUMsOEZBQThGLDhCQUE4QixzREFBc0QsbUJBQW1CLGtEQUFrRCxJQUFJLCtCQUErQix1QkFBdUIsR0FBRywrQkFBK0I7O0FBRTU2QyIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5jYXJkIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL21pa2Vmcm9tcnUvZGphbmdvX2FwcHMvYmxvZy1kamFuZ28tdnVlL3Byb2plY3Qvc3JjL3NyYy9BcHAudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUE4Q0E7SUFDQSxpQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJBcHAudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPGRpdiBpZD1cXFwiYXBwXFxcIj5cXG4gICAgICAgIDxiLWNvbnRhaW5lcj5cXG4gICAgICAgICAgICA8YXBwLWhlYWRlci8+XFxuICAgICAgICAgICAgICAgIDwhLS0gPGItcm93PlxcbiAgICAgICAgICAgICAgICAgICAgPGItY29sIGNvbHMteHM9XFxcIjZcXFwiIG1kPSc0Jz48YXBwLWFzaWRlLz48L2ItY29sPlxcblxcbiAgICAgICAgICAgICAgICAgICAgPGItY29sIGNvbHMteHM9XFxcIjEyXFxcIiBtZD0nOCc+PGFwcC1tYWluLz48L2ItY29sPlxcbiAgICAgICAgICAgICAgICA8L2Itcm93PiAtLT5cXG4gICAgICAgICAgICA8YXNpZGU+XFxuICAgICAgICAgICAgICAgIDwhLS0gPGFwcC1hc2lkZS8+IC0tPlxcbiAgICAgICAgICAgIDwvYXNpZGU+ICAgIFxcbiAgICAgICAgICAgIDxtYWluPlxcbiAgICAgICAgICAgICAgICA8ZGl2XFxuICAgICAgICAgICAgICAgIDxhcHAtbWFpbi8+XFxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cXFwicG9zdFxcXCI+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8cm91dGVyLXZpZXcvPlxcbiAgICAgICAgICAgIDwvbWFpbj5cXG4gICAgICAgIDwvYi1jb250YWluZXI+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9jb21tb25zL0FwcC1oZWFkZXInXFxuaW1wb3J0IEFzaWRlIGZyb20gJy4vY29tcG9uZW50cy9jb21tb25zL0FwcC1hc2lkZSdcXG5pbXBvcnQgTWFpbiBmcm9tICcuL2NvbXBvbmVudHMvY29tbW9ucy9BcHAtbWFpbidcXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcXG5leHBvcnQgZGVmYXVsdCB7XFxuICAgIG5hbWU6IFxcXCJhcHBcXFwiLFxcbiAgICBjb21wb25lbnRzOiB7XFxuICAgICAgICAnYXBwLWhlYWRlcic6IEhlYWRlcixcXG4gICAgICAgICdhcHAtYXNpZGUnOiBBc2lkZSwgXFxuICAgICAgICAnYXBwLW1haW4nOiBNYWluXFxuICAgIH0sXFxuICAgIGNvbXB1dGVkOiBtYXBHZXR0ZXJzICh7XFxuICAgICAgICBwb3N0czogJ3Bvc3RzJyxcXG4gICAgICAgIHBvc3Q6ICdwb3N0J1xcbiAgICB9KSxcXG4gICAgY3JlYXRlZCgpIHtcXG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdHRVRfUE9TVFMnKVxcbiAgICB9XFxufTtcXG48L3NjcmlwdD5cXG5cXG48c3R5bGU+XFxuLmNhcmQge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi03YmE1YmQ5MFwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9BcHAudnVlXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ })

})