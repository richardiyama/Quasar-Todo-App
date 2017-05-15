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
  
    <div class="layout-view">
      
        <div class="list">
          <div class="item">
            <div class="item-content">
            
                <i id="tagline7"
                   class="material-icons">radio_button_unchecked</i><span id="tagline6">Refinish basement</span>
                <i id="tagline8"
                   class="material-icons">star_border</i>
              </div>
            </div>
          </div>
        
      
  
      
        <div class="list">
          <div class="item">
            <div class="item-content">
              
                <i id="tagline10"
                   class="material-icons">description</i><span id="tagline11">5/8" on ceiling 1/4" on wall</span>
                <i id="tagline12"
                   class="material-icons">chevron_right</i>
              </div>
            </div>
          </div>
        
  
      
        <div class="list">
          <div class="item">
            <div class="item-content">
            
                <i id="tagline10"
                   class="material-icons">input</i>Action<i id="tagline13"
                   class="material-icons">person</i>
                <i id="tagline15"
                   class="material-icons">local_phone</i><i id="tagline16"
                   class="material-icons">room</i> <i id="tagline16"
                   class="material-icons">assignment</i>
              </div>
            </div>
          </div>
      

      
        <div class="list">
          <div class="item">
            <div class="item-content">
                <i id="tagline10"
                   class="material-icons">account_circle</i><span id="tagline18">Me</span>
                <i id="tagline19" class="material-icons">close</i>
              </div>
            </div>
          </div>
        
      


      
        <div class="list">
          <div class="item">
            <div class="item-content">
              <i id="tagline20"
                   class="fa fa-comments"></i>
                <span id="tagline6">Add a comment</span><i id="tagline21"
                   class="material-icons">chevron_right</i>
              </div>
            </div>
          </div>
  <br>
  <br>

        <div class="list">
          <div class="item">
            <div class="item-content">
                <i id="tagline10"
                   class="material-icons">input</i>Action<i id="tagline13"
                   class="material-icons">person</i>
                <i id="tagline15"
                   class="material-icons">local_phone</i><i id="tagline16"
                   class="material-icons">room</i> <i id="tagline16"
                   class="material-icons">assignment</i>
              </div>
            </div>
          </div>
        
        <div class="list">
          <div class="item">
            <div class="item-content">
                <i id="tagline10"
                   class="material-icons">input</i>Action<i id="tagline13"
                   class="material-icons">person</i>
                <i id="tagline15"
                   class="material-icons">local_phone</i><i id="tagline16"
                   class="material-icons">room</i> <i id="tagline16"
                   class="material-icons">assignment</i>
              </div>
            </div>
          </div>

        <div class="list">
          <div class="item">
            <div class="item-content">
                <i id="tagline10"
                   class="material-icons">input</i>Action<i id="tagline13"
                   class="material-icons">person</i>
                <i id="tagline15"
                   class="material-icons">local_phone</i><i id="tagline16"
                   class="material-icons">room</i> <i id="tagline16"
                   class="material-icons">assignment</i>
              </div>
            </div>
          </div>

      
        <div class="list">
          <div class="item">
            <div class="item-content">
                <i id="tagline10"
                   class="material-icons">input</i>Action<i id="tagline13"
                   class="material-icons">person</i>
                <i id="tagline15"
                   class="material-icons">local_phone</i><i id="tagline16"
                   class="material-icons">room</i> <i id="tagline16"
                   class="material-icons">assignment</i>
              </div>
            </div>
          </div>
        
        <div class="list">
          <div class="item">
            <div class="item-content">
                <i id="tagline10"
                   class="material-icons">input</i>Action<i id="tagline13"
                   class="material-icons">person</i>
                <i id="tagline15"
                   class="material-icons">local_phone</i><i id="tagline16"
                   class="material-icons">room</i> <i id="tagline16"
                   class="material-icons">assignment</i>
              </div>
            </div>
          </div>

      
        <div class="list">
          <div class="item">
            <div class="item-content">
                <i id="tagline10"
                   class="material-icons">input</i>Action<i id="tagline13"
                   class="material-icons">person</i>
                <i id="tagline15"
                   class="material-icons">local_phone</i><i id="tagline16"
                   class="material-icons">room</i> <i id="tagline16"
                   class="material-icons">assignment</i>
              </div>
            </div>
          </div>
    </div>
  
  </q-layout>
</template>

<script>
export default {
  data() {
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

#tagline7 {
  color: #2095f4;
  width: 27px;
  font-size: 30px;
  left: 100px;
  margin: 2px;
}

#tagline10 {
  color: #2095f4;
  width: 50px;
  font-size: 20px;
  left: 100px;
  margin: 2px;
}

#tagline20 {
  
  width: 70px;
  font-size: 20px;
  left: 100px;
  margin: 2px;
  
}

#tagline21 {

 color: #2095f4;
  width: 30px;
  font-size: 30px;
  left: 100px;
  margin: 15px;
  font-weight: lighter;
  color: lightgray
  
}

#tagline11 {
  margin: 20px;
  font-size: 15px;
  line-height: 0;
}

#tagline16 {
  margin: 20px;
  font-size: 15px;
  line-height: 0;
}

#tagline13 {
  margin: 30px;
  font-size: 15px;
  line-height: 0;
}

#tagline12 {
  color: #2095f4;
  width: 30px;
  font-size: 30px;
  left: 100px;
  margin: 15px;
  font-weight: lighter;
  color: lightgray;
}

#tagline15 {
  transform: rotate(270deg);
}

#tagline6 {
  margin: 20px;
  font-size: 20px;
  line-height: 0;
}
#tagline18 {
  margin: 3px;
  font-size: 14px;
  line-height: 0;
  color: #2095f4;
  
}

#tagline19 {
  margin: 20px;
  font-size: 30px;
  line-height: 0;
  color: #2095f4;
  
}

#tagline8 {
  color: #2095f4;
  width: 75px;
  font-size: 40px;
  left: 100px;
  margin: 11px;
  font-weight: lighter;
  color: lightgray;
}
</style>
