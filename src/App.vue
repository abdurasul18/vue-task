<template>
  <div id="app">
    <app-header></app-header>
   <div class="max-w-6xl mx-auto px-4">
      <router-view/>
   </div>
  </div>
</template>
<script>
import appHeader from '@/components/AppHeader.vue'
export default {
  components : {
    appHeader,
  }
}
</script>
<style>

</style>
