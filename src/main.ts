import { createApp } from 'vue';
import router from './routes';
import store from './store';
import App from './App.vue';
import VueDOMPurify from 'vue-dompurify-html';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueDOMPurify);

app.mount('#app');
