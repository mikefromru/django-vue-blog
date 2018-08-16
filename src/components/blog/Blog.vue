<template>
    <div id="app">
        <b-container>
            <app-header/>
                <b-row>
                    <b-col cols-xs="6" md="4"><app-aside/></b-col>
                        <b-col cols-xs><router-view/></b-col>
                </b-row>
        </b-container>
    </div>
</template>

<script>
import Vue from 'vue'
import Header from '../commons/App-header'
import Aside from '../commons/App-aside'
export default {
    name: "Blog",
    components: {
        'app-header': Header,
        'app-aside': Aside, 
    },
};

</script>
