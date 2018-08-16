<template>
    <div>
        <b-navbar toggleable="md" type="dark" variant="info">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand><router-link :to="{name: 'blog', params: {page: 2}}">Blog</router-link></b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav>
            <b-nav-item href="#"><router-link :to="{name: 'myadmin'}">MyAdmin</router-link></b-nav-item>
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">

            <b-nav-form>
                <b-form @submit.prevent="findPost">
                    <b-input size="sm" v-model="title" class="mr-sm-2" type="text" placeholder="Search"></b-input>
                    <b-button :disabled="this.title.length < 3" size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-form>
            </b-nav-form>

            <b-nav-item-dropdown right>
                <template slot="button-content">
                <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Signout</b-dropdown-item>
            </b-nav-item-dropdown>
            </b-navbar-nav>

            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import "babel-polyfill"
import axios from 'axios'
import { mapGetters, mapState } from 'vuex'
export default {
    name: 'App-header',
    data() {
        return {
            title: '',
        }
    },
    methods: {
        async findPost() {
            await this.$store.dispatch('SEARCH_RESULT', this.title)
            this.$router.push({name: 'search_result'})
            this.title = ''
        },
    },
    computed: {
        ...mapGetters([
            'search_result',
        ]),
    },
}
</script>

<style>
#goBlog {
    cursor: pointer;
}
</style>

