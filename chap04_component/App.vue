<template>
  <div class="card-body">
    <h1>Chap04 Component</h1>

    <div id="popup"></div>

    <A07WarnHandler></A07WarnHandler><br />
    <A06ErrorCaputurd></A06ErrorCaputurd><br />
    <A05Suspense></A05Suspense><br />
    <A04Teleport></A04Teleport><br />
    <A03Teleport></A03Teleport><br />
    <A02DynamicComp></A02DynamicComp><br />
    <A01DynamicComp></A01DynamicComp>
  </div>
</template>

<script>
import A01DynamicComp from './components/A01DynamicComp.vue'
import A02DynamicComp from './components/A02DynamicComp.vue'
import A03Teleport from './components/A03Teleport.vue'
import A04Teleport from './components/A04Teleport.vue'
import A05Suspense from './components/A05Suspense.vue'
import A06ErrorCaputurd from './components/A06ErrorCaputurd.vue'
import A07WarnHandler from './components/A07WarnHandler.vue'

export default {
  name: 'App',
  components: {
    A01DynamicComp, A02DynamicComp, A03Teleport, A04Teleport, A05Suspense,
    A06ErrorCaputurd, A07WarnHandler
  },

  data() {
    return {
      isChecked: false,
    }
  },
  errorCaptured(err, vm, info) {
    console.log('------------ Local Error 처리 --------------')
    console.log(err);
    console.log(vm);          // Error가 발생한 객체
    console.log(info);

    vm.isError = false;       // Error가 발생한 컴퍼넌트.
  },
}
</script>

<style>

</style>
