<template lang="pug">
extends ../Base/InputBase.pug
block input
  .radio-image-wrapper.d-flex.flex-wrap.mb-3
    .radio-button.d-inline-block.flex-column.mx-2(v-for="option in options")
      input.btn-check(
          type='radio'
          :name='name'
          :value="option.value"
          v-model="localValue"
          :id="`${name}-${option.id}`"
      )
      label.btn.btn-outline-primary(
          :for="`${name}-${option.id}`"
      ) {{option.label}}
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
const fieldId = useFieldId();
const fieldClass = useFieldClass(props);
</script>
