import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { install as VueContextualTransition } from 'vue-contextual-transition';

import './assets/main.css'
import "vue-contextual-transition/dist/style.css";

const app = createApp(App)

app.use(router)
app.use(VueContextualTransition)

app.mount('#app')
