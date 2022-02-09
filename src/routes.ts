import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import NoteForm from './pages/NoteForm.vue';
import ReadNote from './components/ReadNote.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/new-note',
    component: NoteForm,
  },
  {
    path: '/edit-note/:id',
    component: NoteForm,
  },
  {
    path: '/read-note/:id',
    component: ReadNote,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
