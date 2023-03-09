<template>
  <h3>A05 Suspense - Vue3</h3>

  <suspense>
    <template #default>
      <A01BannerNews></A01BannerNews>
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </suspense>
</template>

<script>
// import A01BannerNews from './childComps/A01BannerNews.vue'
import { defineAsyncComponent } from 'vue'

const A01BannerNews = defineAsyncComponent(async() => {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return import('./childComps/A01BannerNews.vue')
});

/*
const BannerNews = defineAsyncComponent( () => {
  return new Promise(resolve => {
    setTimeout(flag => {
      if (flag) resolve(A01BannerNews);
    }, 2000, true);
  })
});
*/

export default {
  components: {A01BannerNews},
}
</script>

<style scoped>
  .dialog { position: fixed; top: 50px; left: 30%; width: 600px; height: 200px; z-index: 99999; border: 1px solid gray; background-color: white; padding: 10px; }
</style>
