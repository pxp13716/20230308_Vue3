<template>
  <h3>A11 Refs</h3>
  <form>
    <div class="input-group">
      <input type="text" class="form-control" name="msg">
      <button type="submit" class="btn btn-danger">ADD</button>
    </div>
  </form>
  <br>

  <div>
    Message: {{message}}
  </div>  
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello World'
    }
  },
  methods: {
    
  }
}
</script>
