<template>
  <h3>A04 Teleport - Vue3</h3>

  <p>
    Vue is a framework and ecosystem that covers most of the common features needed in frontend development. 
    But the web is extremely diverse - the things we build on the web may vary drastically in form and scale. 
    With that in mind, Vue is designed to be flexible and incrementally adoptable. 
    Depending on your use case, Vue can be used in different ways:<br>
  </p>

   <form>
    <button     @click.prevent="showModal('one', true, 'One Modal')">ONE SHOW</button>
    <button     @click.prevent="showModal('two', true, 'Two Modal')">TWO SHOW</button>
  </form>

  <teleport   to="#popup">
    <A04TeleportChild></A04TeleportChild>
  </teleport>
</template>

<script>
import { computed } from 'vue'
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
    showModal(name, check, title) {
      this[name] = check;
      this.title = title;
    }
  },
  provide() {
    return {
      one: computed(() => this.one),
      two: computed(() => this.two),
      title: computed(() => this.title),
      showModal: this.showModal,
    }
  }
}
</script>
