<template lang="pug">
extends ../Base/InputBase.pug
block input
  .input-group-text
    input.form-control.form-control-color(
        type='color'
        v-model="localValue"
        title='Choose your color'
    )
    input.form-control(
      type='text'
      placeholder='Type your color'
      aria-label='YourColor'
      v-model="localValue"
    )
</template>
<script lang="ts" setup>
import { useLocalValue, useFieldId, useFieldClass } from '@/utilities/hooks';

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
}

interface Emits {
  (event: 'update:modelValue', value: string): void
}
const props = defineProps<Props>();
const emits = defineEmits<Emits>();
const localValue = useLocalValue(props, emits, null);
const fieldId = useFieldId();
const fieldClass = useFieldClass(props);
</script>
