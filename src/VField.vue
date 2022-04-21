<template lang="pug">
component(
  :is="generateFieldByType(option.type)",
  v-bind="option",
)
  template(
    v-for="slot, index in option.slots",
    :key="index",
    v-slot:[slot.name],
  )
    span(v-html="slot.content")
</template>

<script setup lang="ts">
import { getCurrentInstance, defineProps } from 'vue';

const globalComponents = Object.keys(
  getCurrentInstance()?.appContext.components as Record<string, any>,
);

interface Props {
  option: Record<string, any>,
}

const props = defineProps<Props>();
const generateFieldByType = (ftype: string) => {
  if (globalComponents.includes(ftype)) {
    return ftype;
  }

  throw new Error(`VField: field type "${ftype}" is not found`);
};
</script>
