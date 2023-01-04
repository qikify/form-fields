<template lang="pug">
div
  h1 Hello World should be injected
  template(
    v-for="option in options"
    :key="option.key"
  )
    VField(
      v-if="isVisible(data, option)"
      :option="option",
      v-model="data[option.name]"
      :isDisable="isDisable(data, option)"
    )
      template(#tooltip)
        img(
          src="./assets/icons/question.svg"
          v-if="option.tooltip"
          v-tooltip="option.tooltip"
          style="width: 16px; height: 16px; margin-left: 5px;"
        )
      // template(
      //   v-for="item in option.options"
      //   v-slot:[`tooltip-${item.value}`]
      // )
      //   img(
      //       src="./assets/icons/question.svg"
      //       v-if="item.tooltip"
      //       v-tooltip="item.tooltip"
      //       style="width: 16px; height: 16px; margin-left: 5px;"
      //     )

  pre {{ data }}
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue';
import VField from './VField.vue';
import isVisible from './use/isVisible';
import { isDisable } from './use';

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
    name: 'slider',
    type: 'Slider',
    label: 'Slider',
    defaultValue: "10",
    min: "-100",
    max: "100",
    step: "1",
    disable: {
      name: 'form_type',
      value: 2,
    },
    tooltip: 'This is a tooltip of slider',
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
    name: 'image_upload',
    type: 'ImageUpload',
    heading: 'ImageUpload',
    label: 'Image Upload',
    defaultValue: "https://picsum.photos/200",
    dependency: {
      name: 'radio_image',
      value: 'value3',
    },
    tooltip: 'This is a tooltip of image upload',
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
    tooltip: 'This is a tooltip of radio',
    options: [
      {
        label: 'Option 1',
        value: 'value1',
        id: 'option-1',
        tooltip: 'This is a tooltip of option 1',
      },
      {
        label: 'Option 2',
        value: 'value2',
        id: 'option-2',
        tooltip: 'This is a tooltip of option 2',
      },
      {
        label: 'Option 3',
        value: 'value3',
        id: 'option-3',
        tooltip: 'This is a tooltip of option 3',
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
    name: 'divider',
    type: 'Divider',
    dividerStyle: 'dotted',
  },
  {
    name: 'Choices',
    type: 'Choices',
    heading: 'Choices',
    label: 'Choices',
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
    name: 'textarea',
    type: 'TextArea',
    heading: 'TextArea',
    label: 'Text Area',
    defaultValue: 'This is text area',
    rows: 3,
  },
  {
    name: 'group',
    type: 'Group',
    heading: 'Group',
    label: '<strong style="color: red">This is group</strong>',
    description: '<span style="color: blue">This is description of group</span>',
    fields: [
      {
        name: 'toggle',
        type: 'Toggle',
        heading: 'Toggle',
        label: 'Toggle',
        defaultValue: true,
        valueLabel: "this is toggle",
      },
      {
        name: 'Choices',
        type: 'Choices',
        heading: 'Choices',
        label: 'Choices',
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
        name: 'color_picker',
        type: 'ColorPicker',
        heading: 'ColorPicker',
        label: 'ColorPicker',
        defaultValue: '#ff0000',
        dependency: {
          name: "toggle",
          value: true,
        },
      },
    ],
  },
]);

const defaultData = options.value.reduce((acc: any, option) => {
  if (option.defaultValue) {
    acc[option.name] = option.defaultValue;
  }

  if (option.type === 'Group') {
    acc[option.name] = option.fields?.reduce((acc: any, field: any) => {
      if (field.defaultValue) {
        acc[field.name] = field.defaultValue;
      }

      return acc;
    }, {});
  }

  return acc;
}, {});

const data = reactive(defaultData);
</script>

<style lang="scss">
@import 'bootstrap/scss/bootstrap';
@import 'floating-vue/dist/style.css';
</style>
