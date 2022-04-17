import { createApp } from 'vue';
import VueFields from './vue-fields';
import Demo from './Demo.vue';

console.log('Hello World!');

createApp(Demo)
  .use(VueFields)
  .mount('#app')
