<template>
  <div class="docu-section">
    <p>
      <a href="https://docs.google.com/document/d/1kMwc18jlZzfUcNFPojLP6aBWIdr9MQwmXa2aHdsqMWc/edit?usp=sharing" target="_blank" class="doc-link">click me</a> to view the documentation.
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// no need for `ref` here unless you're binding
</script>

<style scoped>
.docu-section {
  color: #004c4c;
  margin-top: 1em;
  border-top: 1px solid #ddd;
  padding-top: 1em;
}

.doc-link {
  color: #42b983;
  text-decoration: underline;
  font-weight: 500;
}

.doc-link:hover {
  color: #35495e;
}
</style>
