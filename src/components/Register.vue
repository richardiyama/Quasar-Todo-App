<template>
    <q-layout>
    
        <div slot="header"
             class="toolbar">
    
            <q-tabs>
                <q-tab icon="undo"
                       route="/"
                       exact>
                    Back
                </q-tab>
    
            </q-tabs>
        </div>
        <div class="layout-view">
            <br>
    
            <br>
            <br>
            <br>
            <div class="floating-label">
    
                <input v-model="$store.state.title"
                       @keyup.enter="add"
                       required
                       class="full-width">
                <label>Name</label>
                
            </div>
            <div class="floating-label">
    
                <input v-model="$store.state.title"
                       @keyup.enter="add"
                       required
                       class="full-width">
                <label>Email</label>
                
            </div>
            <div class="floating-label">
    
                <input type="password" v-model="$store.state.title"
                       @keyup.enter="add"
                       required
                       class="full-width">
                <label>Password</label>
                
            </div>
            <br>
                <br>
                <br>
                <center>
                    <button class="primary"
                            @click="add">
                        Register
                    </button>
    
                    <button class="primary"
                            @click="clear">
                        cancel
                    </button>
                </center>
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