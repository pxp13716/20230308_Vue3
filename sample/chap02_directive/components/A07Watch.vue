<template>
  <h3>A07 Watch</h3>

  <div>
    <input type="text" class="form-control" v-model="x"><br>
    <input type="text" class="form-control" v-model="y"><br>
    Total: {{total}}<br >
    <br>

    <input type="text" class="form-control" v-model="name"><br>
    <table class="table">
      <thead>
        <tr><th>NO</th><th>NAME</th><th>TEL</th><th>ADDRESS</th></tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>

    <div>Loading....</div>
  </div>  
</template>

<script>
const baseURL = 'http://sample.bmaster.kro.kr/contacts_long/search/';

export default {
  data() {
    return {
      x: 10, 
      y: 20,
      total: 0,
      name: '',
      isLoading: false,
      contactList: []
    }
  },
  methods: {

  },
}
</script>
