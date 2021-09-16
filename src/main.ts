import { createApp } from 'vue'
import router from "./router";
import store from "./store";
import axios from 'axios'
import App from './App.vue'
import tinymce from '@/components/tinymce/index.vue'
const app = createApp(App)
app.use(store)
app.use(router)
app.component('tinymce',tinymce)
//代替vue2.x中的Vue.prototype.$axios
app.config.globalProperties.$axios = axios
app.mount('#app')
