<template>
    
    <q-layout>
        <div slot="header"
             class="toolbar">
    
            <i style="padding-left: 3px;font-size: 30px">check_circle</i>
    
            <div class="auto"
                 style="padding-left: 5px; line-height: 3;font-size: 20px;height: 60px">Ben Smith</div>
    
    <i style="padding-left: 35px; font-size: 30px">search</i>
        </div>
    
        <div class="layout-view">
    
            <div class="item"
                 style="padding-left: 10px;font-size: 20px; height: 60px">
                <div class="item-content row">
                    <i style="padding-left: 1px;font-size: 20px; line-height: 2; color: red">mail_outline</i>
                    <div class="auto"
                         style="padding-left: 15px;line-height: 2;font-size: 18px">Inbox</div>
    
                </div>
            </div>
            <br>
            <div class="list">
                <div class="text-header"><h6>Smart Lists</h6></div>
                <div class="item">
                    <div class="item-content row">
                       <i style="padding-left: 10px; font-size: 20px; color: #2095f4">format_align_left</i>
                       <div class="auto"
                         style="padding-left: 10px;font-size: 18px">Everything</div>
                         <div class="auto"
                         style="padding-left: 160px;font-size: 18px">10</div>
                    </div>
                      <div class="item-content row">
                       <i style="padding-left: 10px;font-size: 20px;color: red">adjust</i>
                       <div class="auto"
                         style="padding-left: 10px;font-size: 18px">Focus</div>
                         <div class="auto"
                         style="padding-left: 180px;font-size: 18px">1</div>
                    </div>
                      <div class="item-content row">
                       <i style="padding-left: 10px; font-size: 20px; color: yellow">star</i>
                       <div class="auto"
                         style="padding-left: 10px;font-size: 18px">Important</div>
                         <div class="auto"
                         style="padding-left: 150px;font-size: 18px">2</div>
                    </div>
                    <div class="item-content row">
                       <i style="padding-left: 10px;font-size: 30px; color: #2095f4">add</i>
                     <div class="auto"
                         style="padding-left: 10px;font-size: 18px; color: #2095f4">Add a smart list</div>
                           
                    </div>
                </div>
            </div>
            <div class="text-header"><h6>Lists</h6></div>
                <div class="item">
                    <div class="item-content row">
                       <i class="fa fa-building" style="padding-left: 10px; font-size: 20px; color: green"></i>
                       <div class="auto"
                         style="padding-left: 10px;font-size: 18px">Work</div>
                         <div class="auto"
                         style="padding-left: 189px;font-size: 18px">5</div>
                    </div>
                      <div class="item-content row">
                        <i style="padding-left: 4px;font-size: 30px; color: #2095f4">home</i>  
                       <div class="auto"
                         style="padding-left: 10px;font-size: 18px">Home</div>
                         <div class="auto"
                         style="padding-left: 180px;font-size: 18px">5</div>
                    </div>
                    <div class="item-content row">
                       <i style="padding-left: 4px;font-size: 30px; color: #2095f4">add</i>
                     <div class="auto"
                         style="padding-left: 10px;font-size: 18px; color: #2095f4">Add a list</div>
                           
                    </div>
        </div>

          <br>
          <button 
                  class="primary1 circular">
            <i>add</i>
          </button>
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

.toolbar {
  background: #2196f3;
  color: white;
}

.q-search-input-container {
    width: 190px;
}

.q-search {
    background-color: #EBEBEB;
    position: absolute;
    left: 12em;
    margin: 0px;
}



.text-header {
    width: 100%;
    text-align: center;
    position: relative;
    margin: -12px 0;

}
.text-header:after {
    content: '';
    width: 100%;
    position: absolute;
    left: 0;
    top: 50%;
    border-bottom: 1px solid darkgray;
    z-index: 1;
}

.text-header h6 {
    width: auto;
    display: inline-block;
    z-index: 3;
    padding: 0 15px 0 15px;
    position: relative;
    margin: 0;
    color: darkgray;
    background-color: white;
}



.list {
    text-align: left;
    border: 1px solid #e0e0e0;
    height: 200px;
}

button.primary1 {
  position: fixed;
  bottom: 0;
  margin: 10px;
  background: #38b93d;
  color: white;
  height: 60px;
  width: 60px;
  right: 25px;
}
button.circular.raised.primary {
  background: #00c853;
  color: #daf5e4;
}

button.circular {
     text-align: center;
    border-radius: 50%;
    padding: 0
}

</style>
