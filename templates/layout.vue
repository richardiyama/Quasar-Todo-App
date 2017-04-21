<template>
  <q-layout>
    <div slot="header" class="toolbar">
      
      <q-toolbar-title :padding="1">
        Title
      </q-toolbar-title>
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
</style>
