<template>
    <q-layout>
    
        <div slot="header" class="toolbar">
    
            <i style="padding-left: 10px; font-size: 30px">arrow_back</i>
    
            <div class="auto" style="padding-left: 5px; line-height: 3;font-size: 20px;height: 60px">New Task</div>
            <i style="padding-left: 35px; font-size: 30px">done</i>
    
        </div>
        <div class="layout-view">
            <label class="caption" style="padding-left: 20px;color: #5188ae; height: 22px;position: relative;margin: 2px;font-size: 18px;font-weight: bold;width: 150px; padding: 10px; width:200px;text-align: left; line-height: 3;font-family: sans-serif">What is to be done?</label>
            <div class="item multiple-lines">
                <div class="item-content">
                    <div class="stacked-label">
                        <input class="auto" style="padding-left: 30px;  width: 290px">
                        <i style="font-size: 40px; color: darkgray;">mic</i>
                        <label>Stacked Label</label>
    
                    </div>
                </div>
            </div>
    
            <div class="item multiple-lines">
                <label class="caption" style="padding-left: 20px;color: #5188ae; height: 22px;position: relative;margin: 2px;font-size: 18px;font-weight: bold;width: 150px; padding: 10px; width:200px;text-align: left; line-height: 3;font-family: sans-serif">Due date</label>
                <div class="item-content">
                    <div class="stacked-label">
                        <input class="auto" style="padding-left: 30px;  width: 290px">
                        <i style="font-size: 40px; color: darkgray;">event</i>
                        <label>Stacked Label</label>
                    </div>
                </div>
            </div>
    
            <div class="item multiple-lines">
    
                <div class="item-content">
                    <div class="stacked-label">
                        <input class="auto" style="padding-left: 30px;  width: 290px">
                        <i style="font-size: 40px; color: darkgray;">access_time</i>
                        <label>Stacked Label</label>
                    </div>
                </div>
            </div>
            <div class="item multiple-lines">
                <label class="caption" style="padding-left: 20px;color: #5188ae; height: 22px;position: relative;margin: 1px;font-size: 18px;font-weight: bold;width: 150px; padding: 10px; width:200px;text-align: left; line-height: 4;font-family: sans-serif">Repeat</label>
                <div class="item-content">
                    <select v-model="selected">
                        <option disabled value="">Please select one</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                    </select>
                </div>
            </div>

             <div class="item multiple-lines">
                <label class="caption" style="padding-left: 20px;color: #5188ae; height: 22px;position: relative;margin: 1px;font-size: 18px;font-weight: bold;width: 150px; padding: 10px; width:200px;text-align: left; line-height: 4;font-family: sans-serif">Add to a list</label>
                <div class="item-content">
                    <select v-model="selected">
                        <option disabled value="">Please select one</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                    </select>
                </div>
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
button.primary {
    background: #027be3;
    text-shadow: 0 0 2px #000;
    color: #fff;
    margin: 1px;
}



button.danger {
    background: darkred;
    text-shadow: 0 0 2px #000;
    color: #fff;
}
</style>