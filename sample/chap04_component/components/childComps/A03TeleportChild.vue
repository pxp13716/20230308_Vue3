<template>
  <form>
    <button>ONE SHOW</button>
    <button>TWO SHOW</button>
  </form>


    <div class="dialog">
      <h5>Home Component</h5>
      <p>
        Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. 
        It builds on top of standard HTML, CSS and JavaScript, and provides a declarative and 
        component-based programming model that helps you efficiently develop user interfaces, be it simple or complex.<br>
      </p>
      <button>HIDE</button>
    </div>



    <div class="dialog">
      <h5>News Component</h5>
      <p>
        With Options API, we define a component's logic using an object of options such as data, methods, and mounted.
        Properties defined by options are exposed on this inside functions, which points to the component instance
      </p>
      <button>HIDE</button>
    </div>

</template>

<script>
export default {
  data() {
    return { 
      one: false,
      two: false
    }
  },
  methods: {
    showModal(name, check) {
      this[name] = check
    }
  }
}
</script>

<style scoped>
  .dialog { position: fixed; top: 50px; left: 30%; width: 600px; height: 200px; z-index: 99999; border: 1px solid gray; background-color: white; padding: 10px; }  
</style>
