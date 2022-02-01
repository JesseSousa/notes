<template>
  <div class="container mt-4">
    <h1>All notes</h1>
    <div class="list-group">
      <a
        v-for="note in notes"
        :key="note"
        class="list-group-item list-group-item-action d-flex justify-content-between"
      >
        <span class="fw-bold">
          {{ note.title }}
        </span>
        <span class="text-muted">
          {{ note.date.toLocaleString('pt-BR') }}
        </span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'vuex';

export default defineComponent({
  name: 'NoteList',
  computed: {
    ...mapState(['notes']),
  },
});
</script>

<style scoped>
a {
  cursor: pointer;
}
</style>
