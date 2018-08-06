<template>
    <div>
        <b-card title="Card Category">
            <div v-for="category in categories" :key="category.id">
                <router-link :to="{name: 'post_filter', params: {id: category.id}}">{{ category.name }}</router-link>
            </div>
        </b-card>
    </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
    name: 'App-aside',
    computed: mapGetters ({
        categories: 'categories'
    }),
    created() {
        this.$store.dispatch('GET_CATEGORIES')
    }

}
</script>


<style scoped>
/* @media (min-width: 1000px) {
    .card {
        width: 300px;
    }
}
*/

/* @media (max-width: 600px) {
    .card {
        display: none;
    }
} */
</style>