import { createApp } from 'vue';
import VueFields from './vue-fields';
import Demo from './Demo.vue';

console.log('Hello World!');

createApp(Demo)
  .use(VueFields, {
    imageUpload: async (file: any) => {
      //upload file, then return image url
      console.log(file);
      return 'https://picsum.photos/' + (Math.floor(Math.random() * (50) ) + 150);
    },
    imageRemove: async (imageUrl: string) => {
      //remove image
      console.log('image removed: ' + imageUrl)
      return '';
    },
  })
  .mount('#app')
