webpackHotUpdate(0,{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(233);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n\n\nvar state = {\n    posts: [],\n    post: {},\n    categories: [],\n    category: ''\n};\n\nvar actions = {\n    GET_POST: function GET_POST(_ref, id) {\n        var commit = _ref.commit;\n\n        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/post/' + id + '/').then(function (response) {\n            commit('GET_POST', response.data);\n        }).catch(function (error) {\n            console.log('something went wrong', error);\n        });\n    },\n\n    GET_POSTS: function GET_POSTS(_ref2) {\n        var commit = _ref2.commit;\n\n        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/posts/').then(function (response) {\n            commit('GET_POSTS', response.data);\n        }).catch(function (error) {\n            console.log('something went wrong', error);\n        });\n    }\n};\n\nvar mutations = {\n    GET_POSTS: function GET_POSTS(state, posts) {\n        state.posts = posts;\n    },\n    GET_POST: function GET_POST(state, post) {\n        state.post = post;\n    }\n};\n\nvar getters = {\n    posts: function posts(state) {\n        return state.posts;\n    },\n    post: function post(state) {\n        return state.post;\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n    state: state,\n    actions: actions,\n    mutations: mutations,\n    getters: getters\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvbW9kdWxlcy9ibG9nLmpzPzY5NjYiXSwibmFtZXMiOlsic3RhdGUiLCJwb3N0cyIsInBvc3QiLCJjYXRlZ29yaWVzIiwiY2F0ZWdvcnkiLCJhY3Rpb25zIiwiR0VUX1BPU1QiLCJpZCIsImNvbW1pdCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiR0VUX1BPU1RTIiwibXV0YXRpb25zIiwiZ2V0dGVycyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxJQUFNQSxRQUFRO0FBQ1ZDLFdBQU8sRUFERztBQUVWQyxVQUFNLEVBRkk7QUFHVkMsZ0JBQVksRUFIRjtBQUlWQyxjQUFVO0FBSkEsQ0FBZDs7QUFPQSxJQUFNQyxVQUFVO0FBQ1pDLGNBQVUsd0JBQWFDLEVBQWIsRUFBb0I7QUFBQSxZQUFqQkMsTUFBaUIsUUFBakJBLE1BQWlCOztBQUMxQkMsUUFBQSw2Q0FBQUEsQ0FBTUMsR0FBTixDQUFVLGVBQWVILEVBQWYsR0FBb0IsR0FBOUIsRUFDQ0ksSUFERCxDQUNNLG9CQUFZO0FBQ2RILG1CQUFPLFVBQVAsRUFBbUJJLFNBQVNDLElBQTVCO0FBQ0gsU0FIRCxFQUlDQyxLQUpELENBSU8saUJBQVM7QUFDWkMsb0JBQVFDLEdBQVIsQ0FBWSxzQkFBWixFQUFvQ0MsS0FBcEM7QUFDSCxTQU5EO0FBT0gsS0FUVzs7QUFXWkMsZUFBVywwQkFBZ0I7QUFBQSxZQUFiVixNQUFhLFNBQWJBLE1BQWE7O0FBQ3ZCQyxRQUFBLDZDQUFBQSxDQUFNQyxHQUFOLENBQVUsYUFBVixFQUNDQyxJQURELENBQ00sb0JBQVk7QUFDZEgsbUJBQU8sV0FBUCxFQUFvQkksU0FBU0MsSUFBN0I7QUFDSCxTQUhELEVBSUNDLEtBSkQsQ0FJTyxpQkFBUztBQUNaQyxvQkFBUUMsR0FBUixDQUFZLHNCQUFaLEVBQW9DQyxLQUFwQztBQUNILFNBTkQ7QUFPSDtBQW5CVyxDQUFoQjs7QUFzQkEsSUFBTUUsWUFBWTtBQUNkRCxlQUFXLG1CQUFDbEIsS0FBRCxFQUFRQyxLQUFSLEVBQWtCO0FBQ3pCRCxjQUFNQyxLQUFOLEdBQWNBLEtBQWQ7QUFDSCxLQUhhO0FBSWRLLGNBQVUsa0JBQUNOLEtBQUQsRUFBUUUsSUFBUixFQUFpQjtBQUN2QkYsY0FBTUUsSUFBTixHQUFhQSxJQUFiO0FBQ0g7QUFOYSxDQUFsQjs7QUFTQSxJQUFNa0IsVUFBVTtBQUNabkIsV0FBTztBQUFBLGVBQVNELE1BQU1DLEtBQWY7QUFBQSxLQURLO0FBRVpDLFVBQU07QUFBQSxlQUFTRixNQUFNRSxJQUFmO0FBQUE7QUFGTSxDQUFoQjs7QUFLQSx5REFBZTtBQUNYRixnQkFEVztBQUVYSyxvQkFGVztBQUdYYyx3QkFIVztBQUlYQztBQUpXLENBQWYiLCJmaWxlIjoiMjc4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jb25zdCBzdGF0ZSA9IHtcbiAgICBwb3N0czogW10sXG4gICAgcG9zdDoge30sXG4gICAgY2F0ZWdvcmllczogW10sXG4gICAgY2F0ZWdvcnk6ICcnXG59XG5cbmNvbnN0IGFjdGlvbnMgPSB7XG4gICAgR0VUX1BPU1Q6ICh7IGNvbW1pdCB9LCBpZCkgPT4ge1xuICAgICAgICBheGlvcy5nZXQoJy9hcGkvcG9zdC8nICsgaWQgKyAnLycpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbW1pdCgnR0VUX1BPU1QnLCByZXNwb25zZS5kYXRhKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NvbWV0aGluZyB3ZW50IHdyb25nJywgZXJyb3IpXG4gICAgICAgIH0pXG4gICAgfSxcblxuICAgIEdFVF9QT1NUUzogKHsgY29tbWl0IH0pID0+IHtcbiAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL3Bvc3RzLycpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbW1pdCgnR0VUX1BPU1RTJywgcmVzcG9uc2UuZGF0YSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzb21ldGhpbmcgd2VudCB3cm9uZycsIGVycm9yKVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuY29uc3QgbXV0YXRpb25zID0ge1xuICAgIEdFVF9QT1NUUzogKHN0YXRlLCBwb3N0cykgPT4ge1xuICAgICAgICBzdGF0ZS5wb3N0cyA9IHBvc3RzXG4gICAgfSxcbiAgICBHRVRfUE9TVDogKHN0YXRlLCBwb3N0KSA9PiB7XG4gICAgICAgIHN0YXRlLnBvc3QgPSBwb3N0XG4gICAgfVxufVxuXG5jb25zdCBnZXR0ZXJzID0ge1xuICAgIHBvc3RzOiBzdGF0ZSA9PiBzdGF0ZS5wb3N0cyxcbiAgICBwb3N0OiBzdGF0ZSA9PiBzdGF0ZS5wb3N0XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBzdGF0ZSxcbiAgICBhY3Rpb25zLFxuICAgIG11dGF0aW9ucyxcbiAgICBnZXR0ZXJzXG59XG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmUvbW9kdWxlcy9ibG9nLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///278\n");

/***/ })

})