webpackHotUpdate(0,{

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(221);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Home__ = __webpack_require__(222);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_About__ = __webpack_require__(223);\n\n\n\n__WEBPACK_IMPORTED_MODULE_0_vue__[\"default\"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__[\"a\" /* default */]);\n\n\n\n\nvar routes = [{ path: '/', component: __WEBPACK_IMPORTED_MODULE_2__components_Home__[\"a\" /* default */], name: 'home' }, { path: '/about/', component: __WEBPACK_IMPORTED_MODULE_3__components_About__[\"a\" /* default */], name: 'about' }];\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__[\"a\" /* default */]({\n    mode: 'history',\n    routes: routes\n}));\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVycy9pbmRleC5qcz80MzdiIl0sIm5hbWVzIjpbIlZ1ZSIsInVzZSIsInJvdXRlcyIsInBhdGgiLCJjb21wb25lbnQiLCJuYW1lIiwibW9kZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7O0FBRUEsNENBQUFBLENBQUlDLEdBQUosQ0FBUSwyREFBUjs7QUFFQTtBQUNBOztBQUVBLElBQU1DLFNBQVMsQ0FDWCxFQUFDQyxNQUFNLEdBQVAsRUFBWUMsV0FBVyxpRUFBdkIsRUFBNkJDLE1BQU0sTUFBbkMsRUFEVyxFQUVYLEVBQUNGLE1BQU0sU0FBUCxFQUFrQkMsV0FBVyxrRUFBN0IsRUFBb0NDLE1BQU0sT0FBMUMsRUFGVyxDQUFmOztBQUtBLHlEQUFlLElBQUksMkRBQUosQ0FBWTtBQUN2QkMsVUFBTSxTQURpQjtBQUV2Qko7QUFGdUIsQ0FBWixDQUFmIiwiZmlsZSI6IjIyMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFJvdXRlciBmcm9tICd2dWUtcm91dGVyJ1xuXG5WdWUudXNlKFJvdXRlcilcblxuaW1wb3J0IEhvbWUgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lJ1xuaW1wb3J0IEFib3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQWJvdXQnXG5cbmNvbnN0IHJvdXRlcyA9IFtcbiAgICB7cGF0aDogJy8nLCBjb21wb25lbnQ6IEhvbWUsIG5hbWU6ICdob21lJ30sXG4gICAge3BhdGg6ICcvYWJvdXQvJywgY29tcG9uZW50OiBBYm91dCwgbmFtZTogJ2Fib3V0J31cbl1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFJvdXRlciAoe1xuICAgIG1vZGU6ICdoaXN0b3J5JyxcbiAgICByb3V0ZXNcbn0pXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JvdXRlcnMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///220\n");

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__(252);\n/* unused harmony namespace reexport */\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8dc7cce2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__(225);\nvar disposed = false\nvar normalizeComponent = __webpack_require__(40)\n/* script */\n\n\n/* template */\n\n/* template functional */\nvar __vue_template_functional__ = false\n/* styles */\nvar __vue_styles__ = null\n/* scopeId */\nvar __vue_scopeId__ = null\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__[\"a\" /* default */],\n  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8dc7cce2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__[\"a\" /* default */],\n  __vue_template_functional__,\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"src/components/Home.vue\"\n\n/* hot reload */\nif (true) {(function () {\n  var hotAPI = __webpack_require__(8)\n  hotAPI.install(__webpack_require__(5), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-8dc7cce2\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-8dc7cce2\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Component.exports);\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lLnZ1ZT80ZDc2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDd0s7QUFDeEs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEIiwiZmlsZSI6IjIyMi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vSG9tZS52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0hvbWUudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQgX192dWVfdGVtcGxhdGVfXyBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi04ZGM3Y2NlMlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0hvbWUudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvSG9tZS52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtOGRjN2NjZTJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi04ZGM3Y2NlMlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL0hvbWUudnVlXG4vLyBtb2R1bGUgaWQgPSAyMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///222\n");

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__commons_App_header__ = __webpack_require__(253);\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n    name: 'Home'\n    // components: {\n    // app-header\n    // }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvSG9tZS52dWU/YmZmMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBIiwiZmlsZSI6IjI1Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8cD5NeSBuYW1lIGlzIEhvbWUudnVlPC9wPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBBcHBoZWFkZXIgZnJvbSAnLi9jb21tb25zL0FwcC1oZWFkZXInXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ0hvbWUnLFxuICAgIC8vIGNvbXBvbmVudHM6IHtcbiAgICAgICAgLy8gYXBwLWhlYWRlclxuICAgIC8vIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL0hvbWUudnVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///252\n");

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var normalizeComponent = __webpack_require__(40)\n/* script */\nvar __vue_script__ = null\n/* template */\nvar __vue_template__ = null\n/* template functional */\nvar __vue_template_functional__ = false\n/* styles */\nvar __vue_styles__ = null\n/* scopeId */\nvar __vue_scopeId__ = null\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __vue_script__,\n  __vue_template__,\n  __vue_template_functional__,\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"src/components/commons/App-header.vue\"\n\n/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb25zL0FwcC1oZWFkZXIudnVlPzc2ZDkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiMjUzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IG51bGxcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IG51bGxcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvY29tbW9ucy9BcHAtaGVhZGVyLnZ1ZVwiXG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2NvbW1vbnMvQXBwLWhlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDI1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///253\n");

/***/ })

})