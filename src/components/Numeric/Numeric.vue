<template lang="pug">
extends ../Base/Input.pug
block input
  input.form-control(
    type="number",
    v-model="localValue",
  )
</template>
<script setup lang="ts">
// import { FieldProps } from '@/utilities/inteface';
//
// interface Props extends FieldProps {
//   min?: number;
//   max?: number;
// };
//
// interface Emits extends FieldEmits:
//
// const props = defineProps<TextFieldProps>();
// const emits = defineEmits<Emits>();
//
// /**
// * Testable
// */
const setValue = (value: number, min, max) => {
  if (min && value < min) {
    return min;
  }
  if (max && value > max) {
    return max;
  }
  return value;
};
</script>
