<template>
  <h3>A01 Dynamic Component</h3>

  <button>HOME</button>
  <button>ABOUT</button>
  <button>PRODUCT</button>

</template>

<script>
import A01BannerHome from './childComps/A01BannerHome.vue'
import A01BannerAbout from './childComps/A01BannerAbout.vue'
import A01BannerNews from './childComps/A01BannerNews.vue'

export default {
  components: {A01BannerHome, A01BannerAbout, A01BannerNews},
  
}
</script>

<style scoped>
  .banner { width: 700px; padding: 10px; border: 2px solid #CCC; border-radius: 5px; background-color: white; font-size: smaller; }
  h5 { font-size: 150%; color: gray; }  
</style>
