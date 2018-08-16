<template>
    <div>
        <b-card>
            <h3>{{ post.title }}</h3>
            {{ post.body }}
        </b-card>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'
export default {
    name: 'Detail',
    computed: mapGetters ({
        post: 'post'
    }),
    created() {
        this.$store.dispatch('GET_POST', this.$route.params.id)
    }
}
</script>
