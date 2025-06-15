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

          <GuestbookComment :entryId="entry.id" />

        </li>
      </ul>
    </div>
  </form>
</template>

<script>
import { supabase } from '../supabase'
import GuestbookComment from './Guestbooklogs.vue';

export default {
    components: {
        GuestbookLogs
    },
  data() {
    return {
      name: '',
      reason: '',
      submitted: false,
      entries: []
    };
  },
  async mounted() {
    const { data, error } = await supabase.from('guestbook').select('*');
    if (data) this.entries = data.reverse();
  },
  methods: {
    async submitForm() {
      const { data, error } = await supabase
        .from('guestbook')
        .insert([{ name: this.name, reason: this.reason }]);

      if (!error) {
        this.entries.unshift(data[0]);
        this.name = '';
        this.reason = '';
        this.submitted = true;
      }
    }
  }
};
</script>
