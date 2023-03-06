<template>
  <div>
    <h3>A07 Push</h3>

    <div>
      <button   @click="back">BACK</button>
      <button   @click="forward">FORWARD</button>
      <button   @click="goHome">HOME</button>
      <button   @click="goURL('/A02Attribute')">A02Attr</button>

      <!-- 객체 형태의 데이터 전달은 name 사용 -->
      <button>A02Attr</button>
      <button>Params</button>
      <button>Query</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    back: function(){
      
    },
    forward: function() {
      
    },
    goHome: function() {
      
    },
    goURL: function() {
      
    },
  },
}
</script>