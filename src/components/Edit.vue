<template>
    <q-layout>
        <div slot="header"
             class="toolbar">
    
            <q-toolbar-title :padding="1">
                Edit Todo
            </q-toolbar-title>
        </div>
        <div class="layout-view">
            <br>
            <br>
            <center> <a v-link="{ path: '/' }">Back</a> </center>
            <br>
            <br>
            <br>
            <div class="floating-label">
                <input v-model="$store.state.title"
                       @keyup.enter="edit"
                       required
                       class="full-width">
                <label>Edit Todo</label>
                <br>
                <br>
                <br>
                <center>
                    <button class="primary"
                            @click="edit">
                        update
                    </button>
                    <button class="primary"
                            @click="clear">
                        cancel
                    </button>
                </center>
            </div>
        </div>
    
    </q-layout>
</template>

<script>
import _ from 'lodash'
import Quasar, { Utils, LocalStorage, Toast } from 'quasar'

export default {
    data() {
        return {
            title: this.$store.state.title
        }
    },

    methods: {
        edit(id) {

            
            this.$router.push({ path: '/' })
            this.$store.dispatch('edit',id)
        },

        clear() {

            this.$store.state.title = ""
        }
    },

}

</script>