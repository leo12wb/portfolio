import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

const app = createApp(App);
app.use(BootstrapVue3);
app
  .use(router)
  .mount("#app");

//createApp(App).use(router).mount('#app')
