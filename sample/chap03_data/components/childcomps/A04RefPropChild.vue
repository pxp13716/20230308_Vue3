<template>
  <h5>A04 Ref Props Child Component</h5>  

  <div>
    <input type="text" class="form-control"   :value="name">
    <input type="text" class="form-control"   :value="age">
    <button>Click</button>
  </div>
  <br>

</template>

<script>
export default {
  data() {
    return {
      name: 'NolBu',
      age: 30
    }
  },
  methods: {
    changeAge(age) {
      this.age = age;
    },
    changeName() {
      
    }
  }
}
</script>
