<template>
    <div>
        <paginate name="posts" ref="paginator" :list="this.posts" :per="2" class="paginate-list">
            <div v-for="post in paginated('posts')" :key="post.id">
                <b-card>
                    <h3><router-link :to="{ name: 'post_detail', params: {id: post.id} }">{{ post.title }}</router-link></h3>
                    {{ post.body }}
                </b-card>
            </div>
        </paginate>
        
        <paginate-links for="posts" 
        @change="PageChange"
        :show-step-links="true"
        >
        </paginate-links>

        <b-btn @click="goToFirstPage()">go to first page</b-btn>
    </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
    name: 'BlogFeed',
    data() {
        return {
            paginate: ['posts'],
            toPage: 2,
        }
    },
    computed: {
        ...mapGetters([
            'posts',
        ]),
    },
    methods: {
        goToFirstPage() {
            if(this.$refs.paginator) {
                this.$refs.paginator.goToPage(1)
            }
        },
        getPage_From_Url_For_Paginate() {
            if(this.$refs.paginator) {
                let page = this.$route.path.slice(-1)
                if (this.$route.path === '/') {
                    this.$refs.paginator.goToPage(1)
                }else{
                    this.$refs.paginator.goToPage(page)
                }
            }
        },
        PageChange(toPage, fromPage) {
            this.$router.push({path: '/' + toPage})
        },
        get_posts() {
            this.$store.dispatch('GET_POSTS')
        }
    },
    watch: {
        $route() {
            this.getPage_From_Url_For_Paginate()
            if (this.$route.path === '/1') {
                history.replaceState(null, null, '/')
            }
            if (this.$route.path === '/') {
                this.$refs.paginator.goToPage(1)
            }
        }
    },
    mounted() {
        this.getPage_From_Url_For_Paginate()
        },
    created() {
        this.get_posts()

    }  
}
</script>