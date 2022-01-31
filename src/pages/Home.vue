<template>
  <Navbar />
  <NoteList />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '../components/Navbar.vue';
import NoteList from '../components/NoteList.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Navbar,
    NoteList,
  },
});
</script>
