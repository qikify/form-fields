<template lang="pug">
div
  h1 Hello World should be injected
  VField(
    v-for="option in options",
    :option="option",
    :key="option.name",
    v-model="data[option.name]"
  )

  pre {{ data }}
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue';
import VField from './VField.vue';

const name = ref('custom input say hi');
const options = ref([
  {
    name: 'form_label',
    type: 'TextField',
    heading: 'Option Title',
    defaultValue: 'Just a value',
  },
  {
    name: 'form_type',
    type: 'Dropdown',
    heading: 'Dropdown',
    placeholder: 'Select an option',
    options: [
      { label: 'Option 1', value: 1 },
      { label: 'Option 2', value: 2 },
    ],
  },
]);

const defaultData = options.value.reduce((acc, option) => {
  if (option.defaultValue) {
    acc[option.name] = option.defaultValue;
  }

  return acc;
}, {});

const data = reactive(defaultData);
</script>

<style lang="scss">
@import 'bootstrap/scss/bootstrap';
</style>
