<template>
  <h3>A14 Class Module</h3>

  <div class="one">{{hello}}</div>
  <div class="one">{{hello}}</div>
  <br>

  <div class="one">{{hello}}</div>
  <div class="one">{{hello}}</div>
  <input type="checkbox"  v-model="isChecked"> Check<br />
  <br>
</template>

<script>
export default {
  data() {
    return {
      hello: 'Hello World!!',
      isChecked: true,
      num: 0,
    }
  },
  computed: {
    classOne() {
      return ''
    },
  },
  mounted(){
    
  }
}
</script>


<style scoped>
    .one { color: orange; }
    .two { font-size: 24pt; }
    .three { font-weight: bold; }
</style>
