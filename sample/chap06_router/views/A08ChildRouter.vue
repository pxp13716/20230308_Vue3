<template>
  <div>
    <h3>A08 Child Router</h3>

    <div>
      <span></span>
    </div>
    <br />

    <div></div>
  </div>
</template>

<script>
import contactlist from './data/ContactList';

export default {
  data: function () {
    return {
      contacts: contactlist.contacts,
    };
  },
};
</script>

<style>
</style>