import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import VuexPersist from 'vuex-persist'

const vuexLocalStorage = new VuexPersist ({
    storage: window.localStorage
})

import blog from './modules/blog'

export default new Vuex.Store ({
    modules: {
        blog,
    },
    plugins: [vuexLocalStorage.plugin]
})