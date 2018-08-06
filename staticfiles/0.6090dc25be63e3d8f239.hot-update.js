webpackHotUpdate(0,{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(233);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n\n\nvar state = {\n    posts: [],\n    post: {},\n    categories: [],\n    category: ''\n};\n\nvar actions = {\n    GET_POST: function GET_POST(_ref, id) {\n        var commit = _ref.commit;\n\n        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/post/', id);\n    },\n\n    GET_POSTS: function GET_POSTS(_ref2) {\n        var commit = _ref2.commit;\n\n        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/posts/').then(function (response) {\n            commit('GET_POSTS', response.data);\n        }).catch(function (error) {\n            console.log('something went wrong', error);\n        });\n    }\n};\n\nvar mutations = {\n    GET_POSTS: function GET_POSTS(state, posts) {\n        state.posts = posts;\n    }\n};\n\nvar getters = {\n    posts: function posts(state) {\n        return state.posts;\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n    state: state,\n    actions: actions,\n    mutations: mutations,\n    getters: getters\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvbW9kdWxlcy9ibG9nLmpzPzY5NjYiXSwibmFtZXMiOlsic3RhdGUiLCJwb3N0cyIsInBvc3QiLCJjYXRlZ29yaWVzIiwiY2F0ZWdvcnkiLCJhY3Rpb25zIiwiR0VUX1BPU1QiLCJpZCIsImNvbW1pdCIsImF4aW9zIiwiZ2V0IiwiR0VUX1BPU1RTIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwibXV0YXRpb25zIiwiZ2V0dGVycyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxJQUFNQSxRQUFRO0FBQ1ZDLFdBQU8sRUFERztBQUVWQyxVQUFNLEVBRkk7QUFHVkMsZ0JBQVksRUFIRjtBQUlWQyxjQUFVO0FBSkEsQ0FBZDs7QUFPQSxJQUFNQyxVQUFVO0FBQ1pDLGNBQVUsd0JBQWFDLEVBQWIsRUFBb0I7QUFBQSxZQUFqQkMsTUFBaUIsUUFBakJBLE1BQWlCOztBQUMxQkMsUUFBQSw2Q0FBQUEsQ0FBTUMsR0FBTixDQUFVLFlBQVYsRUFBd0JILEVBQXhCO0FBQ0gsS0FIVzs7QUFLWkksZUFBVywwQkFBZ0I7QUFBQSxZQUFiSCxNQUFhLFNBQWJBLE1BQWE7O0FBQ3ZCQyxRQUFBLDZDQUFBQSxDQUFNQyxHQUFOLENBQVUsYUFBVixFQUNDRSxJQURELENBQ00sb0JBQVk7QUFDZEosbUJBQU8sV0FBUCxFQUFvQkssU0FBU0MsSUFBN0I7QUFDSCxTQUhELEVBSUNDLEtBSkQsQ0FJTyxpQkFBUztBQUNaQyxvQkFBUUMsR0FBUixDQUFZLHNCQUFaLEVBQW9DQyxLQUFwQztBQUNILFNBTkQ7QUFPSDtBQWJXLENBQWhCOztBQWdCQSxJQUFNQyxZQUFZO0FBQ2RSLGVBQVcsbUJBQUNYLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUN6QkQsY0FBTUMsS0FBTixHQUFjQSxLQUFkO0FBQ0g7QUFIYSxDQUFsQjs7QUFNQSxJQUFNbUIsVUFBVTtBQUNabkIsV0FBTztBQUFBLGVBQVNELE1BQU1DLEtBQWY7QUFBQTtBQURLLENBQWhCOztBQUlBLHlEQUFlO0FBQ1hELGdCQURXO0FBRVhLLG9CQUZXO0FBR1hjLHdCQUhXO0FBSVhDO0FBSlcsQ0FBZiIsImZpbGUiOiIyNzguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmNvbnN0IHN0YXRlID0ge1xuICAgIHBvc3RzOiBbXSxcbiAgICBwb3N0OiB7fSxcbiAgICBjYXRlZ29yaWVzOiBbXSxcbiAgICBjYXRlZ29yeTogJydcbn1cblxuY29uc3QgYWN0aW9ucyA9IHtcbiAgICBHRVRfUE9TVDogKHsgY29tbWl0IH0sIGlkKSA9PiB7XG4gICAgICAgIGF4aW9zLmdldCgnL2FwaS9wb3N0LycsIGlkKVxuICAgIH0sXG5cbiAgICBHRVRfUE9TVFM6ICh7IGNvbW1pdCB9KSA9PiB7XG4gICAgICAgIGF4aW9zLmdldCgnL2FwaS9wb3N0cy8nKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBjb21taXQoJ0dFVF9QT1NUUycsIHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc29tZXRoaW5nIHdlbnQgd3JvbmcnLCBlcnJvcilcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmNvbnN0IG11dGF0aW9ucyA9IHtcbiAgICBHRVRfUE9TVFM6IChzdGF0ZSwgcG9zdHMpID0+IHtcbiAgICAgICAgc3RhdGUucG9zdHMgPSBwb3N0c1xuICAgIH1cbn1cblxuY29uc3QgZ2V0dGVycyA9IHtcbiAgICBwb3N0czogc3RhdGUgPT4gc3RhdGUucG9zdHNcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHN0YXRlLFxuICAgIGFjdGlvbnMsXG4gICAgbXV0YXRpb25zLFxuICAgIGdldHRlcnNcbn1cblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZS9tb2R1bGVzL2Jsb2cuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///278\n");

/***/ })

})