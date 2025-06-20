<template>
  <div class="comment-section">
    <h4>Signatures</h4>

    <ul>
      <li v-for="reason in reasons" :key="reason.id">
        {{ reason.reason }}
      </li>
    </ul>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../supabase'


const entry = ref([])

async function fetchEntries() {
  const { data } = await supabase.from('guestbook').select('*')
  entry.value = data
}


onMounted(() => {
  fetchEntries()
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
