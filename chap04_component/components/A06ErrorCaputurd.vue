<template>
  <h3>A06 Error</h3>
    
  <hr>

  <A06ErrorChild></A06ErrorChild>
</template>

<script>
import A06ErrorChild from './childComps/A06ErrorChild.vue'

export default {
  components: {A06ErrorChild},
  data() {
    return {
      isChecked: false
    }
  },
  errorCaptured(err, vm, info) {
    console.log('------------ Local Error 처리 --------------')
    console.log(err);
    console.log(vm);          // Error가 발생한 객체
    console.log(info);

    vm.isError = false;       // Error가 발생한 컴퍼넌트.

    return false;             // 상위 이벤트 전파를 막는다
  }
}
</script>
