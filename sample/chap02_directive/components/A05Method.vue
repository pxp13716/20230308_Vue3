<template>
  <h3>A05 Method</h3>

  <div>
    <h5>1. Method</h5>

    onAdd: <br>
    <br>
    
    Name: {{name}}
    <input type="text" name="name" class="form-control" :value="name">
    Num: {{num}}
    <input type="text" name="num" class="form-control" :value="num">
  </div>
  <br>

  <div>
    <h5>2. Computed</h5>
    Computed: <br>
    Methods: <br>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      name: 'NolBu',
      num: 10
    }
  },
  methods: {
    
  }
}
</script>
