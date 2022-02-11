<template>
  <div class="container">
    <h1 v-dompurify-html="rawHtml">{{ currentNote.title }}</h1>
    <div v-html="content" v-dompurify-html="rawHtml"></div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'vuex';
import { marked } from 'marked';

export default defineComponent({
  data() {
    return {
      title: '',
      content: '',
    };
  },
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
