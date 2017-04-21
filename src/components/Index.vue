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
            <span class="label bg-primary"><i>dashboard</i>Dashboard</span>
            <br>
            <br>
  
          </div>
  
          <q-drawer-link class="text-primary"
                         icon="update"
                         to="/">Tasks</q-drawer-link>
          <q-drawer-link class="text-primary"
                         icon="create"
                         to="/Add">Create Tasks</q-drawer-link>
          <q-drawer-link class="text-primary"
                         icon="settings"
                         to="#">Account Settings</q-drawer-link>
          <q-drawer-link class="text-primary"
                         icon="exit_to_app"
                         to="#">Logout</q-drawer-link>
        </div>
      </q-drawer>
      <q-toolbar-title :padding="1">
        Orb Solution Todo List
      </q-toolbar-title>
    </div>
  
    <div class="layout-view">
      <q-search class="primary"
                v-model="search"></q-search>
      <br>
      <br>
      <center>
        <div>Completed Tasks: {{filteredTasks.filter(i => {return i.status == true}).length}}</div>
        <div>Tasks In Progress : {{filteredTasks.filter(i => {return i.status == false}).length}}</div>
      </center>
      <br>
     
    
      <div v-for="i in filteredTasks"
          :key="i.id"
          class="item">
  
        <div class="item-content has-secondary">
  
        
          <q-checkbox v-model="i.status"></q-checkbox>   {{i.title}}
        
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
  </q-layout>
</template>

<script>
import _ from 'lodash'
import Quasar, { Utils, Dialog, LocalStorage, Toast } from 'quasar'

export default {

  data() {
    return {
      search: '',
      taskList: LocalStorage.get.item('tasks', [])
    }
  },
  computed: {


    filteredTasks() {


      function filter(arrayInTaskList, Searchterm) {
        retv = [];
        for (var i = 0; i < arrayInTaskList.length; i++) {
          var title = arrayInTaskList[i]['title'].toLowerCase();
          if (title.indexOf(Searchterm.toLowerCase()) != -1) {
            retv.push(arrayInTaskList[i]);
          }
        }
        return retv;
      }

      if (this.search.length > 0) {
        var retv = filter(this.taskList, this.search);
        return retv;
      }

      return this.taskList
    }
  },

  methods: {
    onEdit(id) {
      console.log("edit:", id)
      this.$store.state.id = id
      var task = _.find(this.taskList, { id: id })
      if (task) {
        this.$store.state.title = task.title
      }
      this.$router.push(`/edit/${id}`)
    },
    deleteItem(id) {

      console.log(id)

      var task = _.find(this.taskList, { id: id })
      this.taskList.splice(this.taskList.indexOf(task), 1)

      this.$store.dispatch('deleteItem', id)
    },

  },


}

</script>
<style>
.item .item-content {
  max-width: 60%;
  margin: 0;
  padding: 0 !important;
}

.item .item-content q-checkbox {
  width: 100%;
  margin: 0;
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

.item p i:first-child {
  font-size: 21px;
  margin: 5px;
}

.q-fab button {
  margin: 16px;
}

button.circular {
  height: 37px;
  width: 37px;
}

.q-fab-icon,
.q-fab-active-icon {
  top: 9px;
  left: 8px;
}
</style>