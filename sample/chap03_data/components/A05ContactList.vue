<template>
  <h3>A05 ContactList</h3>

  <A05ContactForm></A05ContactForm>
  <A05ContactList></A05ContactList>
</template>

<script>
import A05ContactForm from './childcomps/A05ContactForm.vue'
import A05ContactList from './childcomps/A05ContactList.vue'

// const baseURL = 'https://sample.bmaster.kro.kr/contacts_long/search/'

export default {
  components: { A05ContactForm, A05ContactList },
  data() {
    return {
      
    }
  }
}
</script>
