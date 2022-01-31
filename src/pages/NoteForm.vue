<template>
  <Navbar />

  <div class="container">
    <h2 class="text-center">New Note</h2>
    <form>
      <div class="mb-3">
        <label for="title">Title: </label>
        <input class="form-control" type="text" id="title" v-model="title" />
      </div>
      <div class="mb-3">
        <label for="content">Content: </label>
        <textarea
          class="form-control"
          v-model="content"
          id="content"
        ></textarea>
      </div>
      <div class="mb-3 d-flex justify-content-end">
        <button class="btn btn-primary">Save</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '../components/Navbar.vue';

export default defineComponent({
  name: 'NoteForm',
  components: {
    Navbar,
  },
  data() {
    return {
      title: '',
      content: '',
    };
  },
});
</script>

<style scoped>
#content {
  min-height: 400px;
}
</style>
