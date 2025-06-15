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

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../supabase'
import { defineProps } from 'vue'

const props = defineProps({
  entryId: {
    type: Number,
    required: true
  }
})

const newComment = ref('')
const comments = ref([])

async function fetchComments() {
  const { data, error } = await supabase
    .from('comments')
    .select('*')
    .eq('entry_id', props.entryId)
    .order('created_at', { ascending: true })

  if (!error) comments.value = data
}

async function addComment() {
  const { data, error } = await supabase
    .from('comments')
    .insert([{ entry_id: props.entryId, text: newComment.value }])

  if (!error && data && data.length) {
    comments.value.push(data[0])
    newComment.value = ''
  }
}

onMounted(fetchComments)
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
