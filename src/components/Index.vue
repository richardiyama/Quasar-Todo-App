<template>
    <q-layout>
        <div slot="header"
             class="toolbar">
    
            <i style="padding-left: 10px; font-size: 30px">keyboard_arrow_left</i>
    
            <div class="auto"
                 style="padding-left: 1px; line-height: 3;font-size: 20px;height: 60px">Back</div>
            <div class="auto"
                 style="padding-left: 10px; line-height: 3;font-size: 18px;height: 60px">Everything</div>
            <i style="padding-left: 35px; font-size: 30px">search</i>
            <div class="auto"
                 style="padding-left: 10px; line-height: 3;font-size: 18px;height: 60px">Edit</div>
        </div>
    
        <div class="layout-view">
            <p class="caption"
               style="padding-left: 10px;color: #5188ae; height: 22px;position: relative;margin: 2px;font-size: 18px;font-weight: bold;width: 150px; padding: 10px;text-align: left; line-height: 0;font-family: sans-serif">Today</p>
            <div class="list"
                 style="height:75px">
                <div class="item">
                    <div class="item two-lines">
    
                        <i class="item-primary"
                           style="font-size: 35px; color: #2095f4">radio_button_unchecked</i>
                        <div class="item-content has-secondary">
                            <div style="font-size: 18px">Take out the trash </div>
                            <div style="font-size: 13px">Wed Jun 1<i class="fa fa-repeat"
                                   style="padding-left: 10px;font-size: 11px;transform: rotate(20deg)"></i></div>
    
                        </div>
    
                    </div>
    
                </div>
            </div>
    
            <p class="caption"
               style="padding-left: 20px;color: #5188ae; height: 22px;position: relative;margin: 2px;font-size: 18px;font-weight: bold;width: 150px; padding: 10px;text-align: left; line-height: 0;font-family: sans-serif">Tomorrow</p>
            <div class="list"
                 style="height:80px">
                <div class="item">
                    <div class="item two-lines">
    
                        <i class="item-primary"
                           style="font-size: 35px; color: #67bc6a">radio_button_unchecked</i>
                        <div class="item-content has-secondary">
                            <div style="font-size: 18px;width: 250px"><i style="color: #ffbc04;font-size: 19px;">star</i>Email pipeline result to susie</div>
                            <div style="font-size: 13px">Thu Jun 2,9:00 AM</div>
    
                        </div>
                        <div class="item-secondary bs-item-secondary">
                            BS
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="list"
                 style="height:80px">
                <div class="item">
                    <div class="item two-lines">
    
                        <i class="item-primary"
                           style="font-size: 35px; color: #67bc6a">radio_button_unchecked</i>
                        <div class="item-content has-secondary">
                            <div style="width:300px;font-size: 18px;line-height: 1"><i style="color: red;font-weight:bold;font-size: 15px;">menu</i>Respond to Felicity at Palmer</div>
                            <div style="font-size: 13px">Thu Jun 2,9:00 AM<i style="padding-left: 10px;font-size: 11px;">notifications</i><i style="padding-left: 10px;font-size: 11px;">chat</i></div>
    
                        </div>
                        <div class="item-secondary bs-item-secondary">
                            BS
                        </div>
                    </div>
                </div>
            </div>
            <div class="list"
                 style="height:75px">
                <div class="item">
                    <div class="item two-lines">
    
                        <i class="item-primary"
                           style="font-size: 35px; color: #67bc6a">radio_button_unchecked</i>
                        <div class="item-content has-secondary">
                            <div style="font-size: 18px">Prepare presentation</div>
                            <div style="font-size: 13px">Thur Jun 2<i class="fa fa-repeat"
                                   style="padding-left: 10px;font-size: 11px;transform: rotate(20deg)"></i></div>
    
                        </div>
    
                    </div>
    
                </div>
            </div>
    
            <div class="list"
                 style="height:75px">
                <div class="item">
                    <div class="item two-lines">
    
                        <i class="item-primary"
                           style="font-size: 35px; color: #2095f4">radio_button_unchecked</i>
                        <div class="item-content has-secondary">
                            <div style="font-size: 18px"><i style="color: #ffbc04;font-size: 19px;">star</i>Replace fire alarm batteries</div>
                            <div style="font-size: 13px">Thur Jun 2<i class="fa fa-repeat"
                                   style="padding-left: 10px;font-size: 11px;transform: rotate(20deg)"></i></div>
    
                        </div>
    
                    </div>
    
                </div>
            </div>
            <div class="list"
                 style="height:75px">
                <div class="item">
                    <div class="item two-lines">
    
                        <i class="item-primary"
                           style="font-size: 35px;color: #67bc6a">radio_button_unchecked</i>
                        <div class="item-content has-secondary">
                            <div style="font-size: 18px">Team incentive plan </div>
                            <div style="font-size: 13px">Thur Jun 2</div>
    
                        </div>
    
                    </div>
    
                </div>
            </div>
    
            <p class="caption"
               style="padding-left: 20px;color: #5188ae; height: 22px;position: relative;margin: 2px;font-size: 18px;font-weight: bold;width: 150px; padding: 10px; width:200px;text-align: left; line-height: 0;font-family: sans-serif">Next Seven Days</p>
            <div class="list"
                 style="height:80px">
                <div class="item">
                    <div class="item two-lines">
    
                        <i class="item-primary"
                           style="font-size: 35px; color: #67bc6a">radio_button_unchecked</i>
                        <div class="item-content has-secondary">
                            <div style="width:300px;font-size: 18px;line-height: 1"><i style="color: red;font-weight:bold;font-size: 15px;">menu</i>Send proposal</div>
                            <div style="font-size: 13px">Fri Jun 3</div>
    
                        </div>
    
                    </div>
                </div>
            </div>
    
            <div class="list"
                 style="height:80px">
                <div class="item">
                    <div class="item two-lines">
    
                        <i class="item-primary"
                           style="font-size: 35px; color: #ffbc04">radio_button_unchecked</i>
                        <div class="item-content has-secondary">
                            <div style="width:300px;font-size: 18px;line-height: 1"><i style="color: #ffbc04;font-weight:bold;font-size: 15px;">menu</i>Tasks lists</div>
                            <div style="font-size: 13px">Fri Jun 3<i class="fa fa-sticky-note"
                                   style="padding-left: 10px;font-size: 11px;"></i></div>
    
                        </div>
    
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

<style lang="stylus">

.ico {
    margin-right: 15px;
}

.toolbar {
    background: #2196f3;
    color: white;
}

.bs-item-secondary {
    margin: 12px 0 !important;
    line-height: 2 !important;
    font-size: 18px !important;
    top: 0.1em !important;
    width: 40px !important;
    height: 40px !important;
    text-align: center !important;
    border: 2px solid lightgray !important;
    -webkit-border-radius: 50% !important;
    -moz-border-radius: 50% !important;
    border-radius: 50% !important;
    font-family: sans-serif !important;
    font-weight: bold !important;
    color: lightgray !important;
}
</style>
