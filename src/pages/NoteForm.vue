<template>
  <div class="container">
    <h2 class="text-center">New Note</h2>
    <p v-if="!isValid">Please enter valid values</p>
    <form @submit.prevent="saveNote" novalidate>
      <div class="mb-3">
        <label for="title">Title: </label>
        <input
          class="form-control"
          :class="
            wasValidated ? (titleIsValid ? 'is-valid' : 'is-invalid') : ''
          "
          type="text"
          id="title"
          v-model="title"
        />
      </div>
      <div class="mb-3">
        <label for="content">Content: </label>
        <textarea
          class="form-control"
          :class="
            wasValidated ? (contentIsValid ? 'is-valid' : 'is-invalid') : ''
          "
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
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import Navbar from '../components/Navbar.vue';

export default defineComponent({
  name: 'NoteForm',
  components: {
    Navbar,
  },
  // It uses the Composition API, since it's not possible to use provide/inject with typescript in the Options API
  setup() {
    // Form Values
    const title = ref('');
    const content = ref('');

    // Form Validation
    const titleIsValid = ref(false);
    const contentIsValid = ref(false);
    // Checks if everything is valid
    const isValid = ref(true);
    // Checks if it was validated, since I don't want it to validate until the save button is pressed
    const wasValidated = ref(false);

    const store = useStore();

    const saveNote = () => {
      wasValidated.value = true;

      // Checks one by one
      titleIsValid.value = title.value.length > 0;
      contentIsValid.value = content.value.length > 0;

      // Checks evertything
      isValid.value = titleIsValid.value && contentIsValid.value;

      // Validation
      if (!isValid.value) return;

      store.commit('addNote', {
        title: title.value,
        content: content.value,
        date: new Date(),
      });

      title.value = '';
      content.value = '';

      // Removes validation from the UI
      wasValidated.value = false;
    };

    return {
      saveNote,
      title,
      content,
      titleIsValid,
      contentIsValid,
      isValid,
      wasValidated,
    };
  },
});
</script>

<style scoped>
#content {
  min-height: 400px;
}
</style>
