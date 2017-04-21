<template>
    <q-layout>
        <div slot="header" class="toolbar">

            <q-toolbar-title :padding="1">
                Add Todo
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

                <input v-model="$store.state.title" @keyup.enter="add" required class="full-width">
                <label>New Todo</label>
                <br>
                <br>
                <br>
                <center>
                    <button class="primary" @click="add">
                        add
                    </button>

                    <button class="primary" @click="clear">
                        cancel
                    </button>
                </center>
            </div>
        </div>

    </q-layout>
</template>

<script>
    import _ from 'lodash'
    import Quasar, { Utils, Dialog, LocalStorage, Toast } from 'quasar'

    export default {
        methods: {

            add() {


                this.$router.push({ path: '/' })
                return this.$store.dispatch('add')
            },



            clear() {

                this.$store.state.title = ""
            }


        },
    }

</script>

<style>

</style>