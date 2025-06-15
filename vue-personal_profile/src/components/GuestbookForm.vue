<template>
  <form @submit.prevent="submitForm" class="guestbook-form">
    <h2>Guestbook</h2>

    <label for="name">Name:</label>
    <input v-model="name" type="text" id="name" required />

    <label for="reason">Reason for visiting:</label>
    <textarea v-model="reason" id="reason" required></textarea>

    <button type="submit">Sign Guestbook</button>
    <p v-if="submitted" class="thank-you">Thank you for signing the guestbook!</p>

    <div v-if="entries.length">
      <h3>Guestbook Entries:</h3>
      <ul>
        <li v-for="entry in entries" :key="entry.id">
          <strong>{{ entry.name }}</strong>: {{ entry.reason }}
          <GuestbookLogs :entryId="entry.id" />
        </li>
      </ul>
    </div>
  </form>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../supabase'
import GuestbookLogs from './GuestbookLogs.vue'

const name = ref('')
const reason = ref('')
const submitted = ref(false)
const entries = ref([])

async function submitForm() {
  const { data, error } = await supabase
    .from('guestbook')
    .insert([{ name: name.value, reason: reason.value }])

  if (!error && data && data.length) {
    entries.value.unshift(data[0])
    name.value = ''
    reason.value = ''
    submitted.value = true
  }
}

onMounted(async () => {
  const { data, error } = await supabase.from('guestbook').select('*')
  if (data) entries.value = data.reverse()
})
</script>
