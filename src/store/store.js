import Vue from 'vue'
import Vuex from 'vuex'
import { LocalStorage, Toast } from 'quasar'
import _ from 'lodash'
import moment from 'moment'

Vue.use(Vuex)

var lastCount = 0
function counter () {
  lastCount += 1
  return lastCount
}



function NextDay (date) {
  var a = moment(date).format('D')
  var b = moment().format('D')
  console.log(a)
  console.log(b)
  console.log(a - b)
  return (a - b)
}

const state = {
  id: 0,
  title: '',
  taskList: LocalStorage.get.item('tasks', []) || [],
  TodayTask: LocalStorage.get.item('Todaytasks', []) || [],
  TomorrowTask: LocalStorage.get.item('Tomorrowtasks', []) || [],
  NextSevenDayTask: LocalStorage.get.item('NextSevenDaytasks', []) || [],
  search: '',
  date: ''
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
  },

  todayTasks (state) {
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
      var retv = filter(state.TodayTask, state.search)
      return retv
    }

    return state.TodayTask
  },

  tomorrowTasks (state) {
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
      var retv = filter(state.TomorrowTask, state.search)
      return retv
    }

    return state.TomorrowTask
  },

  nextSevenDaysTasks (state) {
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
      var retv = filter(state.NextSevenDayTask, state.search)
      return retv
    }

    return state.NextSevenDayTask
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
      status: false,
      date: state.date
    }
    if (NextDay(state.date) === 0) {
      state.TodayTask.push(newTask)
      console.log(state.TodayTask)
      LocalStorage.set('Todaytasks', state.TodayTask)
      Toast.create('success')
      state.title = ''
    }

    else if (NextDay(state.date) === 1) {
      state.TomorrowTask.push(newTask)
      console.log(state.TodayTask)
      LocalStorage.set('Tomorrowtasks', state.TomorrowTask)
      Toast.create('success')
      state.title = ''
    }

    else if (NextDay(state.date) === 7) {
      state.NextSevenDayTask.push(newTask)
      console.log(state.TodayTask)
      LocalStorage.set('NextSevenDaytasks', state.NextSevenDayTask)
      Toast.create('success')
      state.title = ''
    }
    else {
      state.taskList.push(newTask)
      console.log(state.taskList)
      LocalStorage.set('tasks', state.taskList)
      Toast.create('success')
      state.title = ''
    }
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

