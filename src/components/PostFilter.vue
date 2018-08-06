<template>
    <div>
        <div v-for="post in category" :key="post.id">
            <b-card>
                <h3>{{ post.title }}</h3>
                {{ post.body }}
            </b-card>
        </div>
    </div>
</template>

<script>
import Aside from './commons/App-aside'
import { mapGetters } from 'vuex'
export default {
    name: 'PostFilter',
    computed: mapGetters ({
        category: 'category'
    }),
    watch: {
        '$route.params.id': function (id) {
            this.doStuff() 
        }
    },
    methods: {
        doStuff() {
            this.$store.dispatch('GET_FILTER_CATEGORY', this.$route.params.id)
        }
    },
    created() {
        this.doStuff()
    }

}
</script>
