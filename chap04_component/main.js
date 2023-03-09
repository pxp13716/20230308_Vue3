import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App)
app.config.unwrapInjectedRef = true;

app.config.errorHandler = function (err, vm, info) {
  console.log('------------ Global Error 처리 --------------')
  console.log(err);
  console.log(vm);          // Error가 발생한 객체
  console.log(info);
}

app.config.warnHandler = function (err, vm, info) {
  console.log('------------ Global Warn 처리 --------------')
  console.log(err);
  console.log(vm);          // Error가 발생한 객체
  console.log(info);
}
app.mount('#app')
