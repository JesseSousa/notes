import { createApp } from 'vue';
import router from './routes';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const app = createApp(App);
app.use(router);

app.mount('#app');
