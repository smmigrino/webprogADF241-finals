<template>
  <div>
  <form @submit.prevent="submitForm" class="guestbook-form">
    <h2>Guestbook</h2>

    <label for="name">Name:</label>
    <input v-model="name" type="text" id="name" required />

    <label for="reason">Reason for visiting:</label>
    <textarea v-model="reason" id="reason" required></textarea>

    <button type="submit">Sign Guestbook</button>
    <div v-if="submissionStatus" class="thank-you">

    </div>

  
  </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../supabase'


const name = ref('');
const reason = ref('');
const submissionStatus = ref(null);


async function submitForm() {
submissionStatus.value = "Submitting...";
    try {
      const { error } = await supabase
        .from('guestbook')
        .insert([{ name: name.value, reason: reason.value }]);
  
      if (error) {
        console.error("Error inserting comment:", error);
        submissionStatus.value = "Error submitting entry. Please try again.";
      } else {
        submissionStatus.value = "Signed successfully!";
        name.value = ''; // Clear form fields
        reason.value = '';
        emit('comment-submitted')//added
      }
    } catch (err) {
      console.error("An unexpected error occurred:", err);
      submissionStatus.value = "An unexpected error occurred. Please try again later.";
    }
}


</script>
