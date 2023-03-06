<template>
  <h3>A13 Style & Class</h3>
    
  <div style="color: orange; font-size: 24pt;">{{hello}}</div>
  <div>{{hello}}</div>
  <div>{{hello}}</div>
  <br>

  <h3>Class Binding</h3>

  <div class="one">{{hello}}</div>
  <div class="one">{{hello}}</div>
  <div class="one">{{hello}}</div>
  <br>

  <div class="one">{{hello}}</div>
  <div class="one">{{hello}}</div>
  <input type="checkbox"> Check<br />
  <br>

  <input type="text" class="form-control" />  
</template>

<script>
export default {
  data() {
    return {
      hello: 'Hello World!!',
    }
  }
}
</script>

<style scoped>
  .one { color: orange; }
  .two { font-size: 24pt; }
  .three { font-weight: bold; }
  .warning {background-color: orange; color: gray; }
</style>
