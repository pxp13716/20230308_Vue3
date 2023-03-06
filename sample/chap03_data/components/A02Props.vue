<template>
  <h3>A02 Props</h3>

  <A02PropsChild></A02PropsChild>
</template>

<script>
import A02PropsChild from './childcomps/A02PropsChild.vue';
export default {
  components: { A02PropsChild },
  data() {
    return {
      address: 'Seoul',
      arr: [10, 20],
      user: {name: 'HungBu', age: 30}
    }
  },
  methods: {
    onAdd(x, y) {
      return `${x} + ${y} = ${x + y}`
    }
  }
}
</script>
