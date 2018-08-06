import axios from 'axios'

const state = {
    posts: [],
    post: {},
    categories: [],
    category: []
}

const actions = {
    GET_POST: ({ commit }, id) => {
        axios.get('/api/post/' + id + '/')
        .then(response => {
            commit('GET_POST', response.data)
        })
        .catch(error => {
            console.log('something went wrong', error)
        })
    },

    GET_POSTS: ({ commit }) => {
        axios.get('/api/posts/')
        .then(response => {
            commit('GET_POSTS', response.data)
        })
        .catch(error => {
            console.log('something went wrong', error)
        })
    },

    GET_CATEGORIES: ({ commit }) => {
        axios.get('/api/categories/')
        .then(response => {
            commit('GET_CATEGORIES', response.data)
        })
        .catch(error => {
            console.log('something went wrong', error)
        })
    },
    GET_FILTER_CATEGORY: ({ commit }, id) => {
        axios.get('/api/category/' + id + '/')
        .then(response => {
            commit('GET_FILTER_CATEGORY', response.data)
        })
        .catch(error => {
            console.log('something went wrong', error)
        })
    },

}

const mutations = {
    GET_POSTS: (state, posts) => {
        state.posts = posts
    },
    GET_POST: (state, post) => {
        state.post = post
    },
    GET_CATEGORIES: (state, categories) => {
        state.categories = categories
    },
    GET_FILTER_CATEGORY: (state, category) => {
        state.category = category
    },
}

const getters = {
    posts: state => state.posts,
    post: state => state.post,
    categories: state => state.categories,
    category: state => state.category,
}

export default {
    state,
    actions,
    mutations,
    getters
}



