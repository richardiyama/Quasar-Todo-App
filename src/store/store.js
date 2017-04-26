import Vue from 'vue'
import Vuex from 'vuex'
import { LocalStorage, Toast } from 'quasar'
import _ from 'lodash'

Vue.use(Vuex)

var lastCount = 0
function counter () {
  lastCount += 1
  return lastCount
}

const state = {
  id: 0,
  title: '',
  taskList: LocalStorage.get.item('tasks', []) || [],
  search: ''
}

const actions = {

  add: ({ commit }) => commit('add'),

  edit: ({ commit }, id) => commit('edit', id),

  deleteItem: ({ commit }, id) => commit('deleteItem', id)


}


const getters = {
  filteredTasks (state) {
    function filter (arrayInTaskList, Searchterm) {
      retv = []
      for (var i = 0; i < arrayInTaskList.length; i++) {
        var title = arrayInTaskList[i]['title'].toLowerCase()
        if (title.indexOf(Searchterm.toLowerCase()) !== -1) {
          retv.push(arrayInTaskList[i])
        }
      }
      return retv
    }

    if (state.search.length > 0) {
      var retv = filter(state.taskList, state.search)
      return retv
    }

    return state.taskList
  }

}

const mutations = {
  add (state) {
    if (state.title === '') {
      Toast.create('Warning!!!...You are trying to submit an empty field')
      return
    }

    var newTask = {
      id: counter(),
      title: state.title,
      status: false
    }
    state.taskList.push(newTask)
    console.log(state.taskList)
    LocalStorage.set('tasks', state.taskList)
    Toast.create('success')
    state.title = ''
  },

  edit (state, id) {
    state.taskList = LocalStorage.get.item('tasks')
    var task = _.find(state.taskList, { id: state.id })
    console.log(id)
    if (state.title === '') {
      Toast.create('Warning!!!...You are trying to submit an empty field')
      return
    }
    if (task) {
      console.log(state.title)
      task.title = state.title
      LocalStorage.set('tasks', state.taskList)
      Toast.create('success')
      state.title = ''
    }
  },

  deleteItem (state, id) {
    state.taskList = LocalStorage.get.item('tasks')
    var task = _.find(state.taskList, { id: state.id })

    state.taskList.splice(state.taskList.indexOf(task), 1)

    LocalStorage.set('tasks', state.taskList)
  }




}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

