<template>
  <div class="container">
    <h1>{{ currentNote.title }}</h1>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'vuex';

export default defineComponent({
  computed: {
    ...mapState(['currentNote']),
  },
  methods: {
    ...mapActions(['getCurrentNote']),
  },
  mounted() {
    // Note id
    const { id } = this.$route.params;

    if (id) {
      this.getCurrentNote(id);
    }
  },
});
</script>
