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
  color: orange;
  width: 72px;
}

#tagline1 {
  color: orange;
  width: 72px;
}

#tagline2 {
  color: orange;
  width: 61px;
}

body.with-drawer-opened {
  background: -moz-linear-gradient(45deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 49%, rgba(5, 193, 255, 1) 50%, rgba(5, 193, 255, 1) 100%);
  /* ff3.6+ */
  background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, rgba(255, 255, 255, 1)), color-stop(49%, rgba(255, 255, 255, 1)), color-stop(50%, rgba(5, 193, 255, 1)), color-stop(100%, rgba(5, 193, 255, 1)));
  /* safari4+,chrome */
  background: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 49%, rgba(5, 193, 255, 1) 50%, rgba(5, 193, 255, 1) 100%);
  /* safari5.1+,chrome10+ */
  background: -o-linear-gradient(45deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 49%, rgba(5, 193, 255, 1) 50%, rgba(5, 193, 255, 1) 100%);
  /* opera 11.10+ */
  background: -ms-linear-gradient(45deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 49%, rgba(5, 193, 255, 1) 50%, rgba(5, 193, 255, 1) 100%);
  /* ie10+ */
  background: linear-gradient(45deg, rgba(235, 235, 235, 1) 11%, rgba(235, 235, 235, 1) 42%, rgba(235, 235, 235, 1) 56%, rgba(10, 10, 10, 0.62) 58%, rgb(12, 12, 12) 79%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#05C1FF', endColorstr='#FFFFFF', GradientType=1);
  /* ie6-9 */
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
  background-color: #EBEBEB;
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

.item {
  color: black;
}

.item p i:first-child {
  font-size: 21px;
  margin: 5px;
}

.q-fab button {
  margin: 16px;
}

.q-fab {
  width: 200px;
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

button.circular.raised.primary {
  background-color: #8eacbb;
}
</style>