import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//  Blog Blog Blog Blog
import Blog from '../components/blog/Blog'
import Detail from '../components/blog/Detail'
import PostCategories from '../components/blog/PostCategories'
import BlogFeed from '../components/blog/BlogFeed'
import SearchResult from '../components/blog/SearchResult'

// Admin Admin Admin
import AdminIndex from '../components/admin/AdminIndex'
import BlogFeedAdmin from '../components/admin/BlogFeedAdmin'
import DetailAdmin from '../components/admin/DetailAdmin'

import About from '../components/About'

const routes = [

    {
        path: '/', component: Blog,
        children: [
            {path: '/:id?', component: BlogFeed, name: 'blog'},
            {path: '/post/:id/', component: Detail, name: 'post_detail'},
            {path: '/about/', component: About, name: 'about'},
            {path: '/post/category/:id?/', component: PostCategories, name: 'post_categories'},
            {path: '/search-result/', component: SearchResult, name: 'search_result'},
        ]
    },

    {
        path: '/myadmin/',
        component: AdminIndex, 
        name: 'myadmin',
        children: [
            {path: '/myadmin/fuck/', component: BlogFeedAdmin},
            {path: '/myadmin/post/:id/', component: DetailAdmin, name: 'detail'},
        ]
    },
]

export default new Router ({
    mode: 'history',
    routes
})