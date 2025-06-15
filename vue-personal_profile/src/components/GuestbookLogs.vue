<template>
  <div class="comment-section">
    <h4>Comments</h4>

    <ul>
      <li v-for="comment in comments" :key="comment.id">
        {{ comment.text }}
      </li>
    </ul>

    <form @submit.prevent="addComment">
      <input v-model="newComment" placeholder="Write a comment..." required />
      <button type="submit">Post</button>
    </form>
  </div>
</template>

<script>
import { supabase } from '../supabase';

export default {
  props: {
    entryId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      newComment: '',
      comments: []
    };
  },
  async mounted() {
    await this.fetchComments();
  },
  methods: {
    async fetchComments() {
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .eq('entry_id', this.entryId)
        .order('created_at', { ascending: true });

      if (!error) this.comments = data;
    },
    async addComment() {
      const { data, error } = await supabase
        .from('comments')
        .insert([{ entry_id: this.entryId, text: this.newComment }]);

      if (!error) {
        this.comments.push(data[0]);
        this.newComment = '';
      }
    }
  }
};
</script>

<style scoped>
.comment-section {
  margin-top: 1em;
  border-top: 1px solid #ddd;
  padding-top: 1em;
}
input {
  padding: 0.5em;
  margin-right: 0.5em;
  width: 70%;
}
button {
  padding: 0.5em;
}
</style>
