<template>
  <div v-if="isError">
    <h5>Child Component</h5>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      isError: true,
    }
  },
  mounted() {
    throw new Error('Child에서 발생한 예외...')
  },
}
</script>
