<template>
  <HeaderView></HeaderView>
  <main-visual></main-visual>
  <DirectBanner :data = "directData"></DirectBanner>
  <div class="container">
    <div class="row">
      <div class="col-md-6 bg-primary">test</div>
      <div class="col-md-6 bg-info" >test</div>
    </div>
  </div>
</template>

<script>
  import HeaderView from "./components/HeaderView.vue"
  import MainVisual from './components/MainVisual.vue'
  import DirectBanner from "./components/DirectBanner.vue"

  import directs from "@/data/directs.js"


export default {
    components:{
    HeaderView,
    MainVisual,
    DirectBanner,
},
  data(){
    return {
      directData:directs
    }
  }
}
</script>

<style>
*{margin: 0;padding: 0;}
ul,li{list-style: none;}
a:link,a:visited{
  text-decoration:none;color:#333
}
.container{
  width: 1280px;
  margin: 0 auto;
}
</style>