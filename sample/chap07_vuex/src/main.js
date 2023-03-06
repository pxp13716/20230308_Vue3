import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'

const app = createApp(App)
app.config.unwrapInjectedRef = true;
app.mount('#app')
