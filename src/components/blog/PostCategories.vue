<template>
    <div>
        <paginate name="category" ref='paginator' :list="this.category" :per="2" class="paginate-list">
            <div v-for="post in paginated('category')" :key="post.id">
                <b-card>
                    <h3><router-link :to="{name: 'post_detail', params: {id:post.id}}">{{ post.title }}</router-link></h3>
                    {{ post.body }}
                </b-card>
            </div>
        </paginate>
        <paginate-links for="category"
        @change="PageChange"
         :show-step-links="true"
        >
        </paginate-links>
        <b-btn @click="goToFirstPage" variant='danger'>to first page</b-btn>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'PostCategories',
    data() {
        return {
            paginate: ['category'],
            path: '',
            toPage_: ''
        }
    },
    persist: ['toPage_'],
    computed: mapGetters ({
        category: 'category'
    }),
    watch: {
        '$route.params.id': function (id) {
            this.goToFirstPage()
            this.doStuff() 
        }
    },
    methods: {
        goToFirstPage() {
            if(this.$refs.paginator) {
                this.$refs.paginator.goToPage(1)
            }
        },
        PageChange(toPage, fromPage) {
            // this.$router.push({path: '/posts/category/'})
            this.toPage_ = toPage
        },
        getPage_After_Refresh() {
            if(this.$refs.paginator) {
                this.$refs.paginator.goToPage(this.toPage_)
            }
        },
        doStuff() {
            this.$store.dispatch('GET_FILTER_CATEGORY', this.$route.params.id)
        }
    },
    mounted() {
        this.getPage_After_Refresh()
    },
    created() {
        this.doStuff()
    }

}
</script>
