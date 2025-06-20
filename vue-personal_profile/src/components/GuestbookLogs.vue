<template>
  <div class="comment-section">
    <h4>Signatures</h4>

    <ul>
      <li v-for="guestbook in guestbooks" :key="guestbook.id">
        {{ guestbook.guestbook }}
      </li>
    </ul>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../supabase'


const guestbooks = ref([])

async function getGuestbook() {
  const { data, error } = await supabase.from('guestbook').select('*')
  if (error) {
    console.error('Error fetching guestbook:', error)
  } else {
    guestbooks.value = data
  }
}

onMounted(() => {
  getGuestbook()
})
</script>

<style scoped>
.comment-section {
  color: #004c4c;
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
