<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/Navbar.vue';
import NoteList from './components/NoteList.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    NoteList,
  },
});
</script>
