import axios from 'axios'

const state = {
    posts: [],
    post: {},
    categories: [],
    category: [],
    search_result: [],
    user_title: ''

}

const actions = {
    SEARCH_RESULT: ({commit}, title) => {
       return axios.get('/api/posts/search/?search=' + title)
        .then(response => {
            commit('USER_TITLE', title)
            commit('SEARCH_RESULT', response.data)
        })
        .catch(error => {
            console.log('something went wrong', error)
        })
    },
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
    USER_TITLE: (state, title) => {
        state.user_title = title
    },
    SEARCH_RESULT: (state, posts) => {
        state.search_result = posts
    },
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
    user_title: state => state.user_title,
    posts: state => state.posts,
    post: state => state.post,
    categories: state => state.categories,
    category: state => state.category,
    search_result: state => state.search_result,
}

export default {
    state,
    actions,
    mutations,
    getters
}



