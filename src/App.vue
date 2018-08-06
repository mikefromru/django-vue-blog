<template>
    <div id="app">
        <b-container>
            <app-header/>
                <b-row>
                    <b-col cols-xs="6" md="4"><app-aside/></b-col>
                        <b-col><router-view/></b-col>
                </b-row>
        </b-container>
    </div>
</template>

<script>
import Vue from 'vue'
import Header from './components/commons/App-header'
import Aside from './components/commons/App-aside'
export default {
    name: "app",
    components: {
        'app-header': Header,
        'app-aside': Aside, 
    },
};

</script>

<style>
.card {
    margin-top: 10px;
}
</style>
