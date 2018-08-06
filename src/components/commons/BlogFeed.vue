<template>
    <div>
        <div v-for="post in posts" :key="post.id">
            <b-card>
                <h3><router-link :to="{ name: 'post_detail', params: {id: post.id} }">{{ post.title }}</router-link></h3>
                {{ post.body }}
            </b-card>
        </div>
        <b-pagination size="md" :total-rows="100" v-model="currentPage" :per-page="10" @input="get_posts(currentPage)">
        </b-pagination>
    </div>
</template>

<script>
// import pagination from 'vue-bootstrap-pagination'
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
    name: 'App-main',
    // components: {
        // pagination
    // },
    data() {
        return {
            // totalPage: 100,
            limit: 1,
            currentPage: 1
        }
    },
    computed: {
        ...mapGetters([
            'posts',
        ])
    },
    methods: {
        get_posts(currentPage){
            this.$store.dispatch('GET_POSTS')
        }
    },
    mounted(currentPage) {
        this.get_posts(currentPage)
    },
}
</script>


<style scoped>
/* @media (max-width: 600px) { */
    /* .card { */
        /* width: 100%; */
    /* } */
/* } */
</style>
