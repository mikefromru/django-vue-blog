<template>
    <div>
        <b-container>
            <app-header/>
            <p>Fucking bitch</p>
            <router-view/>
        </b-container>
    </div>
</template>

<script>
import Header from '../commons/App-header'
import BlogFeedAdmin from './BlogFeedAdmin'
import { mapGetters } from 'vuex'
export default {
    name: 'AdminIndex',

    components: {
        'app-header': Header,
        'blog-feed-admin': BlogFeedAdmin,
    }
}
</script>