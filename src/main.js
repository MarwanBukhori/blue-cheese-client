import { createApp } from 'vue';
import axios from 'axios';
import App from './App.vue';

const app = createApp(App);

// Add axios to the Vue prototype
app.config.globalProperties.$http = axios;

// Mount the app to the DOM
app.mount('#app');
