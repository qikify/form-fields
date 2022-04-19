<template lang="pug">
div
  h1 Hello World should be injected
  VField(
    v-for="option in options",
    :option="option",
    :key="option.key",
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
  {
    name: 'radio_image',
    type: 'RadioImage',
    heading: 'RadioImage',
    label: 'Radio Image',
    options: [
      {
        label: 'Option 1',
        value: 'value1',
        id: 'option-1',
        image: 'https://picsum.photos/34/34',
      },
      {
        label: 'Option 2',
        value: 'value2',
        id: 'option-2',
        image: 'https://picsum.photos/34/34',
      },
      {
        label: 'Option 3',
        value: 'value3',
        id: 'option-3',
        image: 'https://picsum.photos/34/34',
      },
    ],
  },
  {
    name: 'radio_button',
    type: 'RadioButton',
    heading: 'RadioButton',
    label: 'Radio Button',
    options: [
      {
        label: 'Option 1',
        value: 'value1',
        id: 'option-1',
      },
      {
        label: 'Option 2',
        value: 'value2',
        id: 'option-2',
      },
      {
        label: 'Option 3',
        value: 'value3',
        id: 'option-3',
      },
    ],
  },
  {
    name: 'radio',
    type: 'Radio',
    heading: 'Radio',
    label: 'Radio',
    options: [
      {
        label: 'Option 1',
        value: 'value1',
        id: 'option-1',
      },
      {
        label: 'Option 2',
        value: 'value2',
        id: 'option-2',
      },
      {
        label: 'Option 3',
        value: 'value3',
        id: 'option-3',
      },
    ],
  },
  {
    name: 'color_picker',
    type: 'ColorPicker',
    heading: 'ColorPicker',
    label: 'ColorPicker',
    defaultValue: '#ff0000',
  },
  {
    name: 'check_box',
    type: 'Checkbox',
    heading: 'CheckBox',
    label: 'Check Box',
    defaultValue: [],
    options: [
      {
        label: 'Option 1',
        value: 'value1',
        id: 'option-1',
      },
      {
        label: 'Option 2',
        value: 'value2',
        id: 'option-2',
      },
      {
        label: 'Option 3',
        value: 'value3',
        id: 'option-3',
      },
    ],
  },
  {
    name: 'toggle',
    type: 'Toggle',
    heading: 'Toggle',
    label: 'Toggle',
    defaultValue: true,
    valueLabel: "this is toggle",
  },
  {
    name: 'image_upload',
    type: 'ImageUpload',
    heading: 'ImageUpload',
    label: 'Image Upload',
  },
  {
    name: 'textarea',
    type: 'TextArea',
    heading: 'TextArea',
    label: 'Text Area',
    defaultValue: 'This is text area',
    rows: 3,
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
