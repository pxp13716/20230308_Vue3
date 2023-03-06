<template>
  <h3>A02 Attribute Directive</h3>

  <div >
    <h5>1. 속성 바인딩</h5>
    <input type="text" class="form-control" v-bind:value="name">
    <input type="text" class="form-control" :value="name">
    <input type="text" :class="formCtrl" :value="name">
    <div :style="color">Hello World</div>

    <input v-bind="attrs" :value="name">
    <br>
  </div>
  <br>

  <div >
    <h5>2. 양방향 바인딩</h5>
    <input type="text" class="form-control" v-model="name">
    <input type="text" class="form-control" v-model="name">
    <input type="text" class="form-control" :value="name" v-on:input="changeName">
    Name: {{name}}
  </div>
  <br>
  
  <div class="row">
    <div class="col-6">
      <select class="form-control" v-model="direction">
        <option value="width">Width</option>
        <option value="height">Height</option>
      </select>
    </div>
    <div class="col-6">
      <input type="text" class="form-control" v-model="size">
    </div>
  </div>
  
  <img src="images/tree.jpg" v-bind:[direction]="size">

</template>

<script>
export default {
   data() {
    return {
      name: 'Nolbu',
      formCtrl: 'form-control',
      color: { background: 'lightgray', padding: '5px', color: 'white', fontWeight: 'bold'},
      attrs: {type: 'text', class: 'form-control', disabled: true},
      direction: 'width',
      size: '100'
    }
  },
  methods: {
    changeName(evt) {
      this.name = evt.target.value;
    }
  },
}
</script>