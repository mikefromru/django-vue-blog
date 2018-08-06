import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../components/Home'
import About from '../components/About'
import Detail from '../components/Detail'
import PostFilter from '../components/PostFilter'
import AdminIndex from '../components/admin/AdminIndex'
import DoAdmin from '../components/admin/DoAdmin'

const routes = [

    {path: '/', component: Home, name: 'home'},
    {path: '/post/:id/', component: Detail, name: 'post_detail'},
    {path: '/about/', component: About, name: 'about'},
    {path: '/post-filter/:id/', component: PostFilter, name: 'post_filter'},

    {
        path: '/myadmin/',
        component: AdminIndex, 
        name: 'myadmin',
        children: [
            {path: 'doadmin', component: DoAdmin}
        ]
    },
]

export default new Router ({
    mode: 'history',
    routes
})