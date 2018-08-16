<template>
    <div>
        <p>My name is DoAdmin.vue</p>
        <div v-for="post in posts" :key="post.id">
            <router-link :to="{name: 'detail', params: {id:post.id}}">{{ post.title}}</router-link>
        </div>
    </div>
        
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'BlogFeedAdmin',
    computed: {
        ...mapGetters([
            'posts'
        ])
    }
}
</script>
