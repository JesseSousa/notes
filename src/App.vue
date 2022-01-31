<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/Navbar.vue';
import NoteList from './components/NoteList.vue';
import { Note } from './types';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    NoteList,
  },
  data() {
    return {
      notes: [] as Note[],
    };
  },
  methods: {
    addNewNote(note: Note) {
      this.notes.push(note);
    },
  },
});
</script>
