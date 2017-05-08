<template>
  <q-layout>
    <div slot="header"
         class="toolbar">
      <button class="default"
              @click="clickMethod()">
        <i id="tag"
           class="material-icons">keyboard_arrow_left</i>
      </button>
  
      <label id="Back">Back</label>
      <q-toolbar-title :padding="1"
                       id="LeftBack">
        Everything
      </q-toolbar-title>
  
      <q-search class="default"
                v-model="$store.state.search"></q-search>
      <label id="EditBack">Edit</label>
    </div>
  
    <div class="layout-view">
      <br>
      <div id="tagline5"
           class="list-label" v-show="TodayTask.filter.length > 1">Today</div>
      <div v-for="j in TodayTask"
           :key="j.id"
           class="item"
           v-show="!j.status && (NextDay(j.date) === 0)">
  
        <div class="item">
  
          <div class="list">
            <label class="item">
              <div class="item-content">
                <div class="item-primary">
                  <button @click.prevent="CompleteTask(j.id)"><i id="tagline7"
                       class="material-icons">&#xE836;</i></button>{{j.title}}
                  <span id="tagline6"><p id="taglin14">wed June 1</p></span></div>
              </div>
            </label>
          </div>
        </div>
  
      </div>
      <br>
      <div class="layout-view">
        <br>
        <div id="tagline5"
             class="list-label" v-show="!TommorrowTask.length > 0">Tomorrow</div>
        <div v-for="i in TommorrowTask"
             :key="i.id"
             class="item"
             v-show="!i.status && (NextDay(i.date) === 1)">
  
          <div class="item">
  
            <div class="list">
              <label class="item">
                <div class="item-content">
                  <div class="item-primary">
                    <button @click.prevent="CompleteTask(i.id)"><i id="tagline20"
                         class="material-icons">&#xE836;</i><i id="tagline"
                         class="material-icons">star</i></button> {{i.title}}
                    <span id="tagline6"><p id="taglin">Thur June 2, 9:00 AM<i id="taglin60" class="material-icons">notifications</i><i  id="taglin61" class="material-icons">chat</i></p></span><span id="badges">BS</span></div>
                </div>
              </label>
            </div>
          </div>
  
        </div>
        <br>
  
        <div class="layout-view">
          <br>
          <div id="tagline5"
               class="list-label" v-show="TommorrowTask.filter.length > 1">Next Seven Days</div>
          <div v-for="i in TommorrowTask"
               :key="i.id"
               class="item"
               v-show="!i.status && (NextDay(i.date) === 7)">
  
            <div class="item">
  
              <div class="list">
                <label class="item">
                  <div class="item-content">
                    <div class="item-primary">
                      <button @click.prevent="CompleteTask(i.id)"><i id="tagline9"
                           class="material-icons">&#xE836;</i></button><i id="tagline10"
                         class="material-icons">view_headline</i>{{i.title}}
                      <span id="tagline6"><p id="taglin91">{{date(i.date)}}</p></span></div>
                  </div>
                </label>
              </div>
            </div>
  
          </div>
  
          <br>
          <button @click="$router.push('/Add')"
                  class="primary1 circular">
            <i>add</i>
          </button>
  
  </q-layout>
</template>

<script>
import _ from 'lodash'
import Quasar, { Utils, Dialog, LocalStorage, Toast } from 'quasar'
import moment from 'moment'

export default {

  data() {
    return {
     toggle : this.$store.state.date
    }
  },
  computed: {


    TodayTask() {
      return this.$store.getters.filteredTasks
    },


    TommorrowTask() {
      return this.$store.getters.filteredTasks
    }
  },

  methods: {
   
     moment: function (date) {
      return moment(date);
    },
    date: function (date) {
      return moment(date).format('MMMM D, h:mm a');
    },

    NextDay : function (date){
     var a = moment(date).format('D')
     var b = moment().format('D')
     console.log(a)
     console.log(b)
     console.log(a - b)
     return (a - b)

    },
    onEdit(id) {
      console.log("edit:", id)
      this.$store.state.id = id
      var task = _.find(this.$store.state.taskList, { id: id })
      if (task) {
        this.$store.state.title = task.title
      }
      this.$router.push(`/edit/${id}`)
    },
    deleteItem(id) {

      console.log(id)

      var task = _.find(this.$store.state.taskList, { id: id })
      this.$store.state.taskList.splice(this.$store.state.taskList.indexOf(task), 1)

      this.$store.dispatch('deleteItem', id)
    },

    CompleteTask(id) {
      var taskList = LocalStorage.get.item('tasks')
      var task = _.find(this.$store.state.taskList, { id: id })
      if (task) {
        task.status = true;

      }

      //LocalStorage.set('tasks', this.$store.state.taskList)

    },



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
#tagline {
  color: #ffbc04;
  width: 2px;
  font-size: 15px;
  line-height: 0.8;
}

#tagline3 {
  color: #2196f3;
  margin: 1px;
  font-size: 30px;
}

#tagline5 {
  color: #5188ae;
  position: relative;
  margin: 1px;
  font-size: 15px;
  font-weight: bold;
  width: 150px;
  padding: 10px;
  text-align: left;
  line-height: 0;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
}

#tagline6 {
  margin: 70px;
  font-size: 9px;
  line-height: 0;
}

#taglin {
  text-align: right;
  font-size: 11px;
  color: gray;
  margin: 1px;
  width: 185px;
  line-height: 0.1;
}

#taglin60 {

  font-size: 9px;
  color: gray;
}



#taglin61 {
  font-size: 15px;
  color: gray;
}

#taglin14 {
  text-align: right;
  font-size: 11px;
  margin: 1px;
  width: 105px;
  line-height: 0;
  color: gray;
}

#taglin91 {
  text-align: right;
  font-size: 9px;
  margin: 1px;
  width: 90px;
  line-height: 0;
  color: gray;
}


#tagline4 {

  margin: 1px;
}

#tagline1 {
  color: #2196f3;
  width: 90px;
  font-size: 30px;
  left: 100px;
}

#tagline7 {
  color: #2095f4;
  width: 20px;
  font-size: 30px;
  left: 100px;
}

#tag {
  width: 1px;
  font-size: 50px;
  position: relative;

  right: 0.6em;
  margin: 0px;
}

#Back {

  font-size: 18px;
  color: #d4ebfd;
  position: relative;

  left: 0.1em;
  margin: 0px;
}

#EditBack {

  font-size: 18px;
  color: #d4ebfd;
  position: relative;

  left: 0.2em;
  margin: 0px;
}

#LeftBack {

  font-size: 17px;
  color: #d4ebfd;
  position: relative;
  right: 2.6em;
  margin: 0px;
}


#tagline20 {
  color: #67bc6a;
  width: 30px;

  font-size: 30px;
  left: 100px;
}

#tagline9 {
  color: #fec21b;
  width: 16px;
  font-size: 30px;
  left: 100px;
}

#tagline10 {
  color: #fec21b;
  width: 20px;
  font-size: 15px;
}

#tagline2 {
  color: #2196f3;
  margin: 1px;
  font-size: 30px;
}



.q-toolbar-title {
  color: #d4ebfd;
}

.q-search {
  background-color: #EBEBEB;
  position: absolute;
  left: 12em;
  margin: 0px;
}

button.q-search-icon span {
  display: none;
}


.item .item-content {
  max-width: 60%;
  margin: 0;
  padding: 0 !important;
  height: 44px;
  min-height: 0;
}

.item .item-content q-checkbox {
  width: 100%;
  margin: 0;
  height: 44px;
  min-height: 0;
}

.item .item-icons {
  width: 40%;
  margin: 0;
  float: right;
  text-align: right;
}

.item .item-icons div {
  /*width:32px;*/
  /*height: 32px;*/
  float: left;
  margin-left: 15px;
}

.item {
  color: darkslategray;
  height: 55.1px;
}

.item p i:first-child {
  font-size: 21px;
  margin: 5px;
}

.q-fab button {
  margin: 25px;
}

.q-fab {
  width: 170px;
}

button.circular {
  height: 37px;
  width: 37px;
}

button.primary1 {
  position: fixed;
  bottom: 0;
  margin: 10px;
  background: #38b93d;
  color: white;
  height: 60px;
  width: 60px;
  right: 25px;
}

#badges {

  padding: 1px;
  position: absolute;
  right: 0.1em;
  left: 19em;
  top: 0.1em;
  width: 40px;
  line-height: 2.1;
  text-align: center;
  border: 2px solid lightgray;
  height: 40px;
  -webkit-border-radius: 500px;
  -moz-border-radius: 500px;
  border-radius: 500px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;

  font-weight: bold;
  color: lightgray;
}

.list {
  text-align: center;
  margin: 6px;
  background-color: white;
}

.q-fab-icon,
.q-fab-active-icon {
  top: 9px;
  left: 8px;
}

button.circular.raised.primary {
  background: #00c853;
  color: #daf5e4;
}

button.hide-on-drawer-visible {
  background: #2196f3;
}

.toolbar {
  background: #2196f3;
  color: white;
}

.q-search-input {
  font-weight: 400;
  padding: 31px;
  width: 100%;
}

.q-search-input-container {
  width: 190px;
}

div.list-header {
  background-color: snow;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500px;
  color: black;
  width: 100px;
}

.q-search-icon {
  color: white;
  background: #2196f3;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500px;
}


.layout-view {


  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400px;
  line-height: 0.3;
  background: #f7f7f7;
  color: black;
}

label.item {
  margin-right: 1px;
  text-align: left;
  height: 44px;
  width: 312px;
  background-color: #fff;
}

div.item-primary {
  line-height: 0.6;
  margin: 2px;
  margin-left: 1px;
}
</style>