<template>
  <h3>A03 Attribute Directive</h3>

  <div >
    <h5>1. 속성 바인딩</h5>
    <input type="text" class="form-control">
    <input type="text" class="form-control">
    <input type="text">
    
    <div>Hello World</div>
    <input>
  </div>
  <br>

  <div >
    <h5>2. 양방향 바인딩</h5>
    <input type="text" class="form-control">
    <input type="text" class="form-control">
    <input type="text" class="form-control">
    Name: 
  </div>
  <br>

  <div class="row">
    <div class="col-6">
      <select class="form-control">
        <option value="width">Width</option>
        <option value="height">Height</option>
      </select>
    </div>
    <div class="col-6">
      <input type="text" class="form-control">
    </div>
  </div>
  <br>
  <img src="./../assets/images/tree.jpg" alt="Tree">
</template>

<script>
export default {

}
</script>
