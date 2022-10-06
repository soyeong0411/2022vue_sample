<template>
  <HeaderView></HeaderView>
  <main-visual></main-visual>
</template>

<script>
  import HeaderView from "./components/HeaderView.vue"
  import MainVisual from './components/MainVisual.vue'
  

export default {
    components:{
      HeaderView,
      MainVisual,
      }
}
</script>

<style>
*{margin: 0;padding: 0;}
ul,li{list-style: none;}
a:link,a:visited{
  text-decoration:none;color:#333
}
</style>