import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import NoteForm from './pages/NoteForm.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/new-note',
    component: NoteForm,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
