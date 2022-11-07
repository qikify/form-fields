<template lang="pug">
component(
  :is="generateFieldByType(option.type)"
  v-bind="{...option, isDisable}"
)
  template(#tooltip)
    slot(name="tooltip")
  template(
    v-for="slot, index in option.slots",
    :key="index",
    v-slot:[slot.name],
  )
    span(v-html="slot.content")
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue';

const globalComponents = Object.keys(
  getCurrentInstance()?.appContext.components as Record<string, any>,
);

interface Props {
  option: Record<string, any>,
  isDisable?: boolean,
}

const props = withDefaults(defineProps<Props>(), { isDisable: false });
const generateFieldByType = (ftype: string) => {
  if (globalComponents.includes(ftype)) {
    return ftype;
  }

  throw new Error(`VField: field type "${ftype}" is not found`);
};
</script>
