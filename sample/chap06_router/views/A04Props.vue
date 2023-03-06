<template>
  <div>
    <h3>A04 Props</h3>

    <div>
        Name: <br>
        No: <br>
        Person: <br>
    </div>
  </div>
</template>

<script>
import contactlist from './data/ContactList';

export default {
  data() {
    return {
      contacts: contactlist.contacts,
    }
  },
  computed: {
    
  }
}
</script>
