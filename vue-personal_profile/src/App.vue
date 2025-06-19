<template>
  <div class="grid-container">
    <header class="header">
      <h1>Basic Info Page</h1>
    </header>

    <div class="flex-item item1">
      <span class="fname">Fullname:</span>
      <span class="name">Sharmaine Migriño</span>
    </div>

    <div class="flex-item item2">
      <span class="title">Education:</span><br>
      <span class="details education">BS Psychology (2015)</span><br>

      <span class="title">Course:</span><br>
      <span class="details course">Associate in Computer Technology (2024)</span><br>

      <span class="title">IT Experience:</span><br>
      <span class="details it_experience">Flutter, Java, Python</span>
    </div>

    <div class="flex-item item3">
      <span class="title">Hobbies and Interest:</span><br>
      <span class="details hobbies">Music, Art, Animation</span>
    </div>

    <div class="flex-item item4">
      <span class="title">Favorite's Gallery:</span>
      <FavoritesGallery />
    </div>

    <div class="flex-item item5">
      <span class="title">Goal in life:</span>
      <span class="details hobbies">Use tech for healthcare reform.</span>
    </div>
    
      <div class="flex-item item6">
			<!-- Item 6: Guestbook Form -->
             <GuestbookForm />
	</div>

  </div>
</template>

<script setup>
import FavoritesGallery from './components/FavoritesGallery.vue'
import GuestbookForm from './components/GuestbookForm.vue'
</script>
