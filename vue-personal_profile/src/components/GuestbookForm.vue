<template>
  <form @submit.prevent="submitForm" class="guestbook-form">
    <h2>Guestbook</h2>
    <label>Name:</label>
    <input v-model="name" />
    <button type="submit">Submit</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
const name = ref('')
function submitForm() {
  console.log(name.value)
}
</script>
