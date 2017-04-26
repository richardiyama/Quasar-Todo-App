<template>
    <q-layout>
    
        <div slot="header"
             class="toolbar">
    
            <q-tabs>
                <q-tab id="tagline"icon="undo"
                       route="/"
                       exact>
                   Go Back
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
                <label id="tagline">New Todo</label>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <center>
                    <button class="primary"
                            @click="add">
                        Add
                    </button>
    
                    <button class="danger"
                            @click="clear">
                        Cancel
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
    mounted() {

    // create task store if not exist
    if (LocalStorage.has('tasks') === false) {
      LocalStorage.set('tasks', [])
    }
  }
}

</script>

<style>
.floating-label input, .floating-label textarea {
    margin-top: 1.45rem;
    background-color: white;
    
    
}
button.primary {
    background: #131717;
    color: #f5fbff;
}
button.danger {
    background: #b91515;
    color: #f5fbff;
}
input, textarea, select, button {
    text-rendering: auto;
    color: initial;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    margin: 0em 0em 0em 0em;
    font: 13.3333px Arial;
    background-color: white;
}

#tagline{ 
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 700;
    line-height: 1.5;
    color: #566b78;
  }


</style>