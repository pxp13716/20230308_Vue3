<template>
  <h3>A04 Ref Props</h3>  

  <div>
    <button @click="callChildMethod">Call Child Method</button>
    <button @click="callChildEvent">Call Child Event</button>
  </div>
  <br>
  <A04RefPropChild></A04RefPropChild>
</template>

<script>
import A04RefPropChild from './childcomps/A04RefPropChild.vue'
export default {
  components: { A04RefPropChild },
  data() {
    return {
      
    }
  },
  methods: {
    callChildMethod() {
      
    },
    callChildEvent() {
      
    }
  }
}
</script>
