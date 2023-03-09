<template>
  <div id="container">
    <h3>A02 Keep Alive</h3>
    <ul>
      <li v-for="item in keys" :key="item">
        <a href="#"   @click="changeName(item)">{{item.toUpperCase()}}</a>
      </li>
    </ul>

    <keep-alive>
      <component :is="current"></component>
    </keep-alive>
  </div>
</template>

<script>
import A01BannerHome from './childComps/A01BannerHome.vue'
import A01BannerAbout from './childComps/A01BannerAbout.vue'
import A01BannerNews from './childComps/A01BannerNews.vue'
// import {shallowRef} from 'vue'

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
  /*
  data() {
    return {
      current: 'home',
      banners: {
        home: shallowRef(A01BannerHome),
        about: shallowRef(A01BannerAbout),
        news: shallowRef(A01BannerNews),
      },
      keys: ['home', 'about', 'news'],
    }
  },
  computed: {
    currentBanner() {
      return this.banners[this.current]
    }
  },
  methods: {
    changeName(name) {
      this.current = name;
    }
  }
  */
}
</script>

<style scoped>
  #container { width: 900px; }
  #container > ul { margin: 0px; padding: 0px; }
  #container > ul li { list-style-type: none; float: left; line-height: 160%; width: 300px; height: 40px;}
  #container > ul li a { display: block; text-align: center; text-decoration: none; background-color: lightgray; color: #000; border: solid 1px Black; }
  #container > div { border: 1px solid #c0c0c0; border-top: none; padding: 15px; font-size: smaller; }
</style>
