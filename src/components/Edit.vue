<template>
  <q-layout>
    <div slot="header"
         class="toolbar">
      <button class="default"
              @click="clickMethod()">
        <i id="tag">keyboard_arrow_left</i>
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
          <div class="item-content row">
  
            <i style="width: 100px;font-size: 30px; color: #2095f4">radio_button_unchecked</i>
            <div class="auto"
                 style="padding-left: 10px;font-size: 18px">Refinish basement</div>
            <i style="font-size: 40px; color: darkgray;">star_border</i>
          </div>
        </div>
      </div>
  
      <div class="list">
        <div class="item">
          <div class="item-content row">
  
            <i style="font-size: 20px; color: #2095f4">description</i>
            <div class="auto"
                 style="padding-left: 10px">5/8" on ceiling 1/4" on wall</div>
            <i style="font-size: 35px; color: darkgray">chevron_right</i>
          </div>
        </div>
      </div>
  
      <div class="list">
        <div class="item">
          <div class="item-content row">
  
            <i style="font-size: 20px; color: darkgray">input</i>
            <div class="auto"
                 style="padding-left: 15px;  color: darkgray">Action</div>
            <div class="auto"
                 style="padding-left: 25px;font-size: 25px;  color: darkgray"><i>person</i></div>
            <div class="auto"
                 style="padding-left: 20px; font-size: 25px; transform: rotate(275deg);color: darkgray"><i>local_phone</i></div>
            <div class="auto"
                 style="padding-left: 40px; font-size: 25px; color: darkgray "><i>room</i></div>
            <div class="auto"
                 style="padding-left: 50px; font-size: 30px; color: darkgray"> <i>link</i></div>
          </div>
        </div>
      </div>
  
      <div class="list">
        <div class="item">
          <div class="item-content row">
            <i style="font-size: 20px; color: #2095f4">account_circle</i>
            <div class="auto"
                 style="padding-left: 10px; color: #2095f4">Me</div>
            <i style="font-size: 30px; color: #2095f4">close</i>
          </div>
        </div>
      </div>
  
      <div class="list">
        <div class="item">
          <div class="item-content row">
            <i class="ico fa fa-comments" style="font-size: 20px; color: darkgray"></i>
            <div class="auto"
                 style="padding-left: 10px; color: darkgray">Add a comment</div>
            <i style="font-size: 35px; color: darkgray">chevron_right</i>
          </div>
        </div>
      </div>
      <br>
      <br>
  
      <div class="list">
        <div class="item">
          <div class="item-content row">
            <i style="font-size: 25px; color: #2095f4">event_available</i>
            <div class="auto"
                 style="padding-left: 10px; color: #2095f4">Due</div>
            <div class="auto"
                 style="padding-left: 80px; color: #2095f4">Wed Jun 8</div>
            <i style="font-size: 30px; color: #2095f4">close</i>
          </div>
        </div>
      </div>
  
      <div class="list">
        <div class="item">
          <div class="item-content row">
            <i style="font-size: 25px; color: darkgreen">slideshow</i>
            <div class="auto"
                 style="padding-left: 10px; color: darkgreen">Start</div>
            <div class="auto"
                 style="padding-left: 80px; color: darkgreen">Tomorrow</div>
            <i style="font-size: 30px; color: darkgreen">close</i>
          </div>
        </div>
      </div>
  
      <div class="list">
        <div class="item">
          <div class="item-content row">
            <i style="font-size: 25px; color: darkgray">notifications</i>
            <div class="auto"
                 style="padding-left: 10px; color: darkgray">Add reminder...</div>
          </div>
        </div>
      </div>
  
      <div class="list">
        <div class="item">
          <div class="item-content row">
            <i style="font-size: 25px; color: darkgray">near_me</i>
            <div class="auto"
                 style="padding-left: 10px; color: darkgray">Remind me at a location</div>
            <i style="font-size: 35px; color: darkgray">chevron_right</i>
          </div>
        </div>
      </div>
  
      <div class="list">
        <div class="item">
          <div class="item-content row">
            <i class="fa fa-repeat" style="font-size: 25px; color: darkgray"></i>
            <div class="auto"
                 style="padding-left: 10px; color: darkgray">Repeat</div>
          </div>
        </div>
      </div>
  
      <div class="list">
        <div class="item">
          <div class="item-content row">
            <i style="font-size: 25px; color: darkgray">warning</i>
            <div class="auto"
                 style="padding-left: 10px; color: darkgray">Priority</div>
              <div class="auto"
                 style="padding-left: 3px"><i style="font-size: 25px; color: darkgray">remove</i>
              <i style="font-size: 25px; color: darkgray">drag_handle</i>  
             <i style="font-size: 25px; color: darkgray">menu</i> </div>   
            <i style="font-size: 30px; color: darkgray">close</i>
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
.ico {
  margin-right: 15px;
}

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
