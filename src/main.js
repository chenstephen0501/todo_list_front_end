import './assets/main.css'
import router from './router'
import { createApp } from 'vue'
import App from './App.vue'
import "../src/assets/tailwind/tailwind.css"

createApp(App).use(router).mount('#app')
