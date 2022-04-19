<template lang="pug">
extends ../Base/InputBase.pug
block input
  .checkbox-wrapper
    .form-check.form-switch
      input.form-check-input(
          type='checkbox'
          v-model="localValue"
          :id="`${name}-toggle`"
      )
      label.form-check-label(:for="`${name}-toggle`") {{valueLabel}}
</template>
<script lang="ts" setup>
import { useLocalValue } from '@/utilities/hooks';

interface Props {
  type: string;
  id?: string;
  name?: string;
  label?: string;

  // /** The type of the field to put on [input type="text|date|number"]. */
  fieldType?: string;

  /** Model for the input */
  modelValue?: string;

  isRequired?: boolean;
  className?: string;
  ariaLabel?: string;
  placeholder?: string;
  description?: string;
  readonly?: boolean;

  //extra props
  valueLabel: string;
}

interface Emits {
  (event: 'update:modelValue', value: string): void
}
const props = defineProps<Props>();
const emits = defineEmits<Emits>();
const localValue = useLocalValue(props, emits, null);
</script>
