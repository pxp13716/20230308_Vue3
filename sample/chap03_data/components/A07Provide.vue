<template>
  <h3>A07 Provide</h3>

  <div>
    계층과는 상관없이 App 전체에서 공유 할 정보가 있다면 Vuex<br>
    계층 Tree 내부에서만 이용한다면 Provide / Inject<br>
    Component가 특정 계층에서만 사용한다면 Provide / Inject
  </div>
  <br>

  <div>
    Name: {{name}}<br>
    User: {{user.name}} / {{user.age}}<br>

    <button @click="changeName">Name</button>
    <button @click="changeUser">User</button><br>
    <br>
  </div>

  <A07Inject></A07Inject>
  
</template>

<script>
import A07Inject from './childcomps/A07Inject.vue'

export default {
  components: { A07Inject },
  data(){
    return {
      name: 'NolBu',
      user: { name: '흥부', age: 20}
    }
  },
  methods: {
    changeName() {
      this.name = 'HungBu';
    },
    changeUser() {
      this.user.name = 'BangJa',
      this.user.age = 100;
    }
  },
}
</script>
