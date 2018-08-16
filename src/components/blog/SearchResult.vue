<template>
    <div>
        <p>My name is ShowFinded.vue</p>
        <div v-if="search_result.length > 0">
        <paginate name="search_result" :list="this.search_result" :per="2" class="paginate-list">
            <div v-for="post in paginated('search_result')" :key="post.id">
                <b-card>
                    <h3><router-link :to="{ name: 'post_detail', params: {id: post.id} }">{{ post.title }}</router-link></h3>
                    {{ post.body }}
                </b-card>
            </div>
        </paginate>
        <paginate-links for="search_result" :show-step-links="true"></paginate-links>
        </div>

        <div v-else>
            <b-card>
                Not found: <strong>{{ user_title }}</strong>
            </b-card>
        </div>
        
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'SearchResult',
    data() {
        return {
            paginate: ['search_result']
        }
    },
    computed: {
        ...mapGetters ([
            'search_result',
            'user_title'
        ])
    },
}
</script>
