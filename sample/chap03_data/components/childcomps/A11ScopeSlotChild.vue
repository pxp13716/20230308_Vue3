<template>
  <h3>A11 Scoped Slot</h3>

  <div>
    자식 컴퍼넌트의 데이터를 부모 컴퍼넌트에서 조작.
  </div>

  <div>
    <input type="text" class="form-control" v-model.number="kor">
    <input type="text" class="form-control" v-model.number="eng">
  </div>

  <!-- slot props라 한다 -->
  <slot></slot>
  <slot name="jumsu"></slot>

</template>

<script>
export default {
  data() {
    return {
      kor: 90,
      eng: 70,
      user: {name: 'HungBu', age: 20, address: 'Busan'},
    }
  },
  methods: {
    changeKor(kor) {
      this.kor = kor;
    }
  }
}
</script>
