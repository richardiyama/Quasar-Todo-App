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
         
                <br>
                <br>
    
                <input v-model="$store.state.title"
                       @keyup.enter="add"
                       required
                       class="full-width" placeholder="New Todo">
             <input type="date" v-model="$store.state.date"
                       @keyup.enter="add"
                       required
                       class="full-width">

                     <input type="time" v-model="$store.state.time"
                       @keyup.enter="add"
                       required
                       class="full-width">  
                
                <br>
                <br>
                <br>
                <br>
                <center>
                    <button class="primary2"
                            @click="add">
                        Add
                    </button>
    
                    <button class="danger2"
                            @click="clear">
                        Cancel
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
span.q-tab-label{
    color: white;
}

button.primary {
    background: #131717;
    color: #f5fbff;
}
button.danger {
    background: #b91515;
    color: #f5fbff;
}
button.primary2 {
    background: #2196f3;
    color: white;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 700;
    margin-right: 132px !important;
}
button.danger2 {
    background: #b91515;
    color: white;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 700;
    margin-left: 0 !important;
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

.full-width {
    width: 80% !important;
    height: 50px;
    padding: 1px;
    margin-left: 26px !important;
    margin-right: 0 !important;
}



</style>