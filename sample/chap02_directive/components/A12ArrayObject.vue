<template>
  <h3>A12 Array & Object</h3>

  <ul class="list-group">
    <li class="list-group-item"  v-for="(item, i) in names" :key="i">
      {{i + 1}} {{item}}
    </li>
  </ul>
  
  <hr>

  <ul class="list-group">
    <li class="list-group-item" v-for="(value, key, i) in user" :key="key">
      {{i + 1}} {{key.toUpperCase()}} - {{value}}
    </li>
  </ul>
  <br>

  <div>
    <button>ADD Array</button>
    <button>Change Array</button>
    <button>Delete Array</button>

    <button>ADD Object</button>
    <button>Change Object</button>
    <button>Delete Object</button>
  </div>  
</template>

<script>
export default {
  data(){
    return {
      names: ['NolBu', 'HungBu'],
      user: {name: 'NolBu', age: 20}
    }
  },
  methods: {
    
  }
}
</script>
