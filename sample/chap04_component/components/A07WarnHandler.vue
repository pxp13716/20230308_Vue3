<template>
  <h3>A07 Warn</h3>

  <A07WarnChild></A07WarnChild>
</template>

<script>
import A07WarnChild from './childComps/A07WarnChild.vue'

export default {
  components: {A07WarnChild},
  data() {
    return {
      isChecked: false
    }
  },
}
</script>
