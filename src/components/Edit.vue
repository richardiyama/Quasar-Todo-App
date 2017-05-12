<template>
  <q-layout>
    <div slot="header"
         class="toolbar">
      <button class="default"
              @click="clickMethod()">
        <i id="tag"
           class="material-icons">keyboard_arrow_left</i>
      </button>
  
      <label id="Back">Home</label>
      <q-toolbar-title :padding="1"
                       id="LeftBack">
        Edit Task
      </q-toolbar-title>
  
      <q-search class="default"
                v-model="$store.state.search"></q-search>
        
    
    </div>

    <router-view class="layout-view"></router-view>

    
  </q-layout>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style>
#LeftBack {
  font-size: 50px;
  width: 50px;
  color: #d4ebfd;
  position: relative;
  right: 0.9em;
  margin: 0px;
}

#Back {

  font-size: 18px;
  color: #d4ebfd;
  position: relative;

  left: 0.1em;
  margin: 0px;
}
#tag {
  width: 1px;
  font-size: 60px;
  position: relative;

  right: 0.6em;
  margin: 0px;
}
.q-toolbar-title {
  color: #d4ebfd;

}
.q-search {
  background-color: #EBEBEB;
  position: absolute;
  left: 15em;
  margin: 0px;
}
button.q-search-icon span {
  display: none;
  
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

.q-search-icon {
  color: white;
  background: #2196f3;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500px;
}



</style>
