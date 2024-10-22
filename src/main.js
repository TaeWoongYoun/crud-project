import { createApp } from 'vue';  // Vue 3에서는 createApp을 사용
import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app');