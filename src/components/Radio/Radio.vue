<template lang="pug">
extends ../Base/InputBase.pug
block input
  .radio-wrapper
    .form-check(v-for="option in options")
        input.form-check-input(
            type='radio'
            :name='name'
            :value="option.value"
            v-model="localValue"
            :id="`${name}-${option.id}`"
        )
        label.form-check-label(
            :for="`${name}-${option.id}`"
        ) {{option.label}}
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

  /** Extra options **/
  options: Array<{
    label: string;
    value: string;
    id: string;
  }>;
}

interface Emits {
  (event: 'update:modelValue', value: string): void
}
const props = defineProps<Props>();
const emits = defineEmits<Emits>();
const localValue = useLocalValue(props, emits, null);
</script>
