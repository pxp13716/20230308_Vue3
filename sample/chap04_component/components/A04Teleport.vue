<template>
  <h3>A04 Teleport - Vue3</h3>

  <p>
    Vue is a framework and ecosystem that covers most of the common features needed in frontend development. 
    But the web is extremely diverse - the things we build on the web may vary drastically in form and scale. 
    With that in mind, Vue is designed to be flexible and incrementally adoptable. 
    Depending on your use case, Vue can be used in different ways:<br>
  </p>

   <form>
    <button     @click.prevent="showModal('one', true)">ONE SHOW</button>
    <button     @click.prevent="showModal('two', true)">TWO SHOW</button>
  </form>

  <A04TeleportChild></A04TeleportChild>
</template>

<script>
import A04TeleportChild from './childComps/A04TeleportChild.vue'

export default {
  components: {A04TeleportChild},
  data() {
    return { 
      one: false,
      two: false,
      title: ''
    }
  },
  methods: {
    showModal(name, check) {
      this[name] = check
    }
  },
}
</script>
