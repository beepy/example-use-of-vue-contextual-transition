import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { install } from 'vue-shared-element-transition';

import './assets/main.css'
import "vue-shared-element-transition/dist/style.css";

const app = createApp(App)

app.use(router)
app.use(install)

app.mount('#app')
