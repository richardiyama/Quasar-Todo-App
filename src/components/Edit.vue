<template>
  
  <q-layout>
    <div slot="header"
         class="toolbar">
      
            
        <i style="padding-left: 10px; font-size: 30px">keyboard_arrow_left</i>
      
  
      <div class="auto"
                 style="padding-left: 1px; line-height: 3;font-size: 20px;height: 60px">Home</div>
     <div class="auto"
                 style="padding-left: 10px; line-height: 3;font-size: 18px;height: 60px">Edit Tasks</div>
     <i style="padding-left: 35px; font-size: 30px">search</i>
  
    </div>
  
    <div class="layout-view">
  
      <div class="list-first">
        <div class="item">
          <div class="item-content row">
  
            <i style="font-size: 30px; color: #2095f4">radio_button_unchecked</i>
            <div class="auto"
                 style="padding-left: 10px;font-size: 18px">Refinish basement</div>
            <i style="font-size: 40px; color: darkgray;">star_border</i>
          </div>
        </div>
      </div>
  
      <div class="list-second">
        <div class="item">
          <div class="item-content row">
  
            <i style="font-size: 20px; color: #2095f4">description</i>
            <div class="auto"
                 style="padding-left: 10px">5/8" on ceiling 1/4" on wall</div>
            <i style="font-size: 35px; color: darkgray">chevron_right</i>
          </div>
        </div>
      </div>
  
      <div class="list-third">
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
  
      <div class="list-fouth">
        <div class="item">
          <div class="item-content row">
            <i style="font-size: 20px; color: #2095f4">account_circle</i>
            <div class="auto"
                 style="padding-left: 10px; color: #2095f4">Me</div>
            <i style="font-size: 30px; color: #2095f4">close</i>
          </div>
        </div>
      </div>
  
      <div class="list-fifth">
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
  
      <div class="list-sixth">
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
  
      <div class="list-seventh">
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
  
      <div class="list-eight">
        <div class="item">
          <div class="item-content row">
            <i style="font-size: 25px; color: darkgray">notifications</i>
            <div class="auto"
                 style="padding-left: 10px; color: darkgray">Add reminder...</div>
          </div>
        </div>
      </div>
  
      <div class="list-nineth">
        <div class="item">
          <div class="item-content row">
            <i style="font-size: 25px; color: darkgray">near_me</i>
            <div class="auto"
                 style="padding-left: 10px; color: darkgray">Remind me at a location</div>
            <i style="font-size: 35px; color: darkgray">chevron_right</i>
          </div>
        </div>
      </div>
  
      <div class="list-tenth">
        <div class="item">
          <div class="item-content row">
            <i class="fa fa-repeat" style="font-size: 25px; color: darkgray"></i>
            <div class="auto"
                 style="padding-left: 10px; color: darkgray">Repeat</div>
          </div>
        </div>
      </div>
  
      <div class="list-eleventh">
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



.toolbar {
  background: #2196f3;
  color: white;
}





</style>
