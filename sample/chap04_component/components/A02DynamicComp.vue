<template>
  <div id="container">
    <h3>A02 Keep Alive</h3>
    <ul>
      <li>
        <a href="#"></a>
      </li>
    </ul>

    <component :is="current"></component>
  </div>
</template>

<script>
import A01BannerHome from './childComps/A01BannerHome.vue'
import A01BannerAbout from './childComps/A01BannerAbout.vue'
import A01BannerNews from './childComps/A01BannerNews.vue'

export default {
  components: {A01BannerHome, A01BannerAbout, A01BannerNews},
  data() {
    return {
      current: 'A01BannerHome',
      keys: ['Home', 'About', 'News'],
    }
  },
  methods: {
    changeCurrent(name) {
      this.current = name;
    }
  }
}
</script>

<style scoped>
  #container { width: 900px; }
  #container > ul { margin: 0px; padding: 0px; }
  #container > ul li { list-style-type: none; float: left; line-height: 160%; width: 300px; height: 40px;}
  #container > ul li a { display: block; text-align: center; text-decoration: none; background-color: lightgray; color: #000; border: solid 1px Black; }
  #container > div { border: 1px solid #c0c0c0; border-top: none; padding: 15px; font-size: smaller; }
</style>
