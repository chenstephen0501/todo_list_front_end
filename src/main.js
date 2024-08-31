import './assets/main.css'
import router from './router'
import { createApp } from 'vue'
import App from './App.vue'
import '../src/assets/tailwind/tailwind.css'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import { LoadingPlugin } from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';


createApp(App)
  .use(Toast, {
    transition: "Vue-Toastification__slideBlurred",
    maxToasts: 10,
    newestOnTop: true,
    filterBeforeCreate: (toast, toasts) => {
      if (toasts.filter(
        t => t.type === toast.type
      ).length !== 0) {
        return false;
      }
      return toast;
    }
  })
  .use(router)
  .use(LoadingPlugin)
  .mount('#app')
