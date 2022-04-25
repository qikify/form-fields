import { createApp } from 'vue';
import VueFields from './vue-fields';
import Demo from './Demo.vue';

console.log('Hello World!');

createApp(Demo)
  .use(VueFields, {
    imageUpload: async (file: any) => {
      //upload file, then return image url
      //eg: return 'https://picsum.photos/200'
    },
    imageRemove: async (imageUrl: string) => {
      //remove image
      return '';
    },
  })
  .mount('#app')
