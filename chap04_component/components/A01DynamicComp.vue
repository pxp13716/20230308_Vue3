<template>
  <h3>A01 Dynamic Component</h3>

  <!-- 
    <button   @click="current='home'">HOME</button>
    <button   @click="current='about'">ABOUT</button>
    <button   @click="current='news'">PRODUCT</button> 
  -->
  <button   @click="changeCurrent('A01BannerHome')">HOME</button>
  <button   @click="changeCurrent('A01BannerAbout')">ABOUT</button>
  <button   @click="changeCurrent('A01BannerNews')">PRODUCT</button>

  <component :is="currentBanner"></component>
  
</template>

<script>
import A01BannerHome from './childComps/A01BannerHome.vue'
import A01BannerAbout from './childComps/A01BannerAbout.vue'
import A01BannerNews from './childComps/A01BannerNews.vue'

// Vue는 반응성 객체로 만들어진 구성 요소를 받았습니다. 
// 이로 인해 불필요한 성능 오버헤드가 발생할 수 있으므로 구성 요소를 'markRaw'로 표시하거나 'ref' 대신 'shallowRef'를 사용하여 피해야 합니다.
import {shallowRef} from 'vue'

export default {
  components: { A01BannerHome, A01BannerAbout, A01BannerNews },

  data() {
    return {
      current: 'A01BannerHome'
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
      }
    }
  },
  computed: {
    currentBanner() {
      return this.banners[this.current]
    }
  },
  */

  /*
  mounted() {
    const names = ['home', 'about', 'news'];
    let num = 1;
    this.interval = setInterval(() => {
      this.current = names[num % names.length];
      num++;
    }, 3000);

    setTimeout(() => {
      clearInterval(this.interval)
    }, 30000)
  },
  unmounted() {
    clearInterval(this.interval)
  }
  */
}
</script>

<style scoped>
  .banner { width: 700px; padding: 10px; border: 2px solid #CCC; border-radius: 5px; background-color: white; font-size: smaller; }
  h5 { font-size: 150%; color: gray; }  
</style>
