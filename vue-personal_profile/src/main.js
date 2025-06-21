import { createApp } from 'vue';
import App from './App.vue';
import './assets/style.css';
import './assets/css-flexbox-grid.css';
import FavoritesGallery from './components/FavoritesGallery.vue';
import GuestbookForm from './components/GuestbookForm.vue';
import GuestbookLogs from './components/GuestbookLogs.vue';
import Documentation from './components/Documentation.vue';

const app = createApp(App)
app.component('favorites-gallery', FavoritesGallery)
app.component('guestbook-form', GuestbookForm)
app.component('guestbook-logs', GuestbookLogs)
app.component('documentation', Documentation)
app.mount('#app')
