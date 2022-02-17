<template>
  <div class="container mt-4">
    <h1>All notes</h1>
    <div class="list-group">
      <a
        v-for="note in notes"
        :key="note.id"
        class="list-group-item list-group-item-action d-flex justify-content-between"
        @click="goToNotePage(note.id)"
      >
        <span class="fw-bold">
          {{ note.title }}
        </span>
        <span class="text-muted">
          {{ note.date }}
        </span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { mapState, mapActions } from 'vuex';

  export default defineComponent({
    name: 'NoteList',
    computed: {
      ...mapState(['notes']),
    },
    watch: {
      $route: {
        handler(to, from) {
          if (to.path !== from.path) {
            this.loadNotes();
            console.log('PATH CHANGED');
          }
        },
        deep: true,
      },
    },
    methods: {
      goToNotePage(noteId: string) {
        this.$router.push(`/read-note/${noteId}`);
      },
      ...mapActions(['loadNotes']),
    },
  });
</script>

<style scoped>
  a {
    cursor: pointer;
  }
</style>
