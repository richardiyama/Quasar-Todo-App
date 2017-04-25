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
            <span ><i>dashboard</i>Dashboard</span>
            <br>
            <br>
  
          </div>
  
          <q-drawer-link 
                         icon="update"
                         to="/">Tasks</q-drawer-link>
          <q-drawer-link 
                         icon="create"
                         to="/Add">Create Tasks</q-drawer-link>
          <q-drawer-link 
                         icon="settings"
                         to="#">Account Settings</q-drawer-link>
          <q-drawer-link 
                         icon="exit_to_app"
                         to="#">Logout</q-drawer-link>
        </div>
      </q-drawer>
      <q-toolbar-title :padding="1">
        Orb Solution Todo List
      </q-toolbar-title>
    </div>
  
    <div class="layout-view">
      <q-search class="default"
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
           class="item"
           v-show="!i.status">
  
        <div class="item">
  
          <button @click.prevent="CompleteTask(i.id)">x</button> {{i.title}}
  
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
      search: ''

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
        var retv = filter(this.$store.state.taskList, this.search);
        return retv;
      }

      return this.$store.state.taskList
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

      LocalStorage.set('tasks', this.$store.state.taskList)

    },



  },


}

</script>
<style>
body.with-drawer-opened{
 background: -moz-linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 49%, rgba(5,193,255,1) 50%, rgba(5,193,255,1) 100%); /* ff3.6+ */
background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, rgba(255,255,255,1)), color-stop(49%, rgba(255,255,255,1)), color-stop(50%, rgba(5,193,255,1)), color-stop(100%, rgba(5,193,255,1))); /* safari4+,chrome */
background: -webkit-linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 49%, rgba(5,193,255,1) 50%, rgba(5,193,255,1) 100%); /* safari5.1+,chrome10+ */
background: -o-linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 49%, rgba(5,193,255,1) 50%, rgba(5,193,255,1) 100%); /* opera 11.10+ */
background: -ms-linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 49%, rgba(5,193,255,1) 50%, rgba(5,193,255,1) 100%); /* ie10+ */
background: linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 49%, rgba(5,193,255,1) 50%, rgba(5,193,255,1) 100%); /* w3c */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#05C1FF', endColorstr='#FFFFFF',GradientType=1 ); /* ie6-9 */
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

.q-toolbar-title {
  background-color: #FFEBEE
}

.q-search {
  background-color: #FFEBEE
}

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