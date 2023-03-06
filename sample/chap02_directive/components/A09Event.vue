<template>
  <h3>A09 Event</h3>

  Num: {{num}}<br>
  <button>+1</button>
  <button>-1</button>
  <button>once</button>
  
  <button>Key</button>

  <button>Event</button>
  <button>Event</button>
  <button>Event</button>
  <br>
  <br>
  
  <div id="container">
  <div id="inner">ONE</div>
  <div id="inner">TWO</div>
  </div>
  <br>
  <br>

  <div>
      <a href="http://www.daum.net">DAUM</a> |
      <a href="http://www.naver.com">NAVER</a> |
  </div>
  <br>

  <input type="text" class="form-control"><br>
  esc: <input type="text" class="form-control"    v-model="name"/><br>
  Enter: <input type="text" class="form-control"  v-model="msg"/><br>
</template>

<script>
export default {
  data() {
    return {
      num: 0,
      name: 'Guest',
      msg: ''
    }
  },
  methods: {
    decrease: function() {
      this.num--;
    },
  }
}
</script>

<style scoped>
  #container { width: 300px; height: 150px; border: 1px solid gray; display: flex; justify-content: center; align-items: center;}
  #inner { width: 100px; height: 100px; background: orange; padding: 10px; margin: 10px; text-align: center; display: flex; justify-content: center; align-items: center;}
</style>