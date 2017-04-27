<template>
  <q-layout>
    <div slot="header"
         class="toolbar">
      <button class="hide-on-drawer-visible"
              @click="$refs.drawer.open()">
        <i>menu</i>
      </button>
      <q-drawer class="bg-secondary"
                ref="drawer">
        <div class="list platform-delimiter">
          <div class="list-header">
            <br>
            <br>
            <br>
            <br>
            <span><i id="tagline1">dashboard</i>Dashboard</span>
            <br>
            <br>
            <br>
            <br>
          </div>
  
          <q-drawer-link to="/"> <i id="tagline3">update</i>Tasks</q-drawer-link>
          <br>
          <br>
          <q-drawer-link to="/Add"><i id="tagline2">create</i>Create Tasks</q-drawer-link>
        </div>
      </q-drawer>
      <q-toolbar-title :padding="1">
        Orb Solution Todo List
      </q-toolbar-title>
    </div>
  
    <div class="layout-view">
      <q-search class="default"
                v-model="$store.state.search"></q-search>
      <br>
      <br>
      <center>
        <div>Completed Tasks: {{Todos.filter(i => {return i.status == true}).length}}</div>
        <div>Tasks In Progress : {{Todos.filter(i => {return i.status == false}).length}}</div>
      </center>
      <br>
  
      <div v-for="i in Todos"
           :key="i.id"
           class="item"
           v-show="!i.status">
  
        <div class="item">
  
          
          <div class="list">
            <label class="item">
              <div class="item-content">
                
            <div class="item-primary"><button @click.prevent="CompleteTask(i.id)"><i class="material-icons">&#xE836;</i></button> {{i.title}}</div>
              </div>
            </label>
              </div>
        </div>
  
        <div class="item-icons item-secondary">
          <div>
            <q-fab classNames="primary"
                   icon="keyboard_arrow_left"
                   direction="left"
                   style="right: 18px; bottom: 18px;">
              <q-small-fab class="white"
                           @click.native="onEdit(i.id)"
                           icon="edit"></q-small-fab>
              <q-small-fab class="white"
                           @click.native="deleteItem(i.id)"
                           icon="delete">
              </q-small-fab>
            </q-fab>
          </div>
        </div>
 

      </div>
      


 
   <br>
   <button @click="$router.push('/Add')" class="primary1 circular">
  <i>add</i>
  </button>
 
 
      
  </q-layout>
</template>

<script>
import _ from 'lodash'
import Quasar, { Utils, Dialog, LocalStorage, Toast } from 'quasar'

export default {

  data() {
    return {

    }
  },
  computed: {


    Todos() {
      return this.$store.getters.filteredTasks
    }
  },

  methods: {
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
#tagline3 {
  color: #2196f3;
  margin: 1px;
}

#tagline1 {
  color: #2196f3;
  margin: 1px;
}


#tagline2 {
  color: #2196f3;
  margin: 1px
}

.drawer-content {
  z-index: 30;
  position: fixed;
  background: #566b78;
  top: 0;
  bottom: 0;
  width: 260px;
  font-size: 1rem;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  will-change: scroll-position, transform;
}

.drawer-content.left-side {
  left: 0;
  -webkit-transform: translateX(-260px);
  transform: translateX(-260px);
  background-color: snow;
}

.q-toolbar-title {
  background-color: #EBEBEB;
}

.q-search {
  background-color: #EBEBEB;
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
  color: black;
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
  right:  50px;
}


.list {
    text-align: center;
    border: 1px solid hsla(0, 4%, 43%, 0.16);
    margin: 6px;
    background-color: white;
}

.q-fab-icon,
.q-fab-active-icon {
  top: 9px;
  left: 8px;
}

button.circular.raised.primary {
  background: #2196f3;
  color: white;
}
button.hide-on-drawer-visible{
   background: #2196f3;
}

.toolbar {
  background: #2196f3;
  color: white;
}

.q-search-input {
  background: #2196f3;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500px;
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
  line-height: 1.5;
  background: snow;
  color: black;
}




</style>