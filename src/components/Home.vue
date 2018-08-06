<template>
    <div>
        <b-row>
            <b-col><blog-feed/></b-col>
        </b-row>
    </div>
</template>

<script>
import BlogFeed from './commons/BlogFeed'
export default {
    name: 'Home',
        components: {
            'blog-feed': BlogFeed,
    },
}
</script>

<style scoped>


</style>
