<template>
  <Navbar />
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './components/Navbar.vue';
import { Note } from './types';

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
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
