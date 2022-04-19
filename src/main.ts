import { createApp } from 'vue';
import VueFields from './vue-fields';
import Demo from './Demo.vue';
import 'bootstrap-icons/font/bootstrap-icons.css'

console.log('Hello World!');

createApp(Demo)
  .use(VueFields)
  .mount('#app')
