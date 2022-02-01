<template>
  <Navbar />
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';
import Navbar from './components/Navbar.vue';

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
  },
  methods: {
    ...mapActions(['loadNotes']),
  },
  mounted() {
    this.loadNotes();
  },
});
</script>
