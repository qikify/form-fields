<template lang="pug">
extends ../Base/InputBase.pug
block input
  .vfield__input-group-text
    input.vfield__control.vfield__control-color(
        type='color'
        v-model="localValue"
        :title="label"
        :disabled="isDisable"
    )
    input.vfield__control(
      type='text'
      :placeholder="placeholder"
      :aria-label="label"
      v-model="localValue"
      :disabled="isDisable"
    )
</template>
<script lang="ts" setup>
import { useLocalValue, useFieldId, useFieldClass } from '@/utilities/hooks';

interface Props {
  type: string;
  id?: string;
  name?: string;
  label?: string;
  fieldType?: string;
  modelValue?: string;

  isRequired?: boolean;
  className?: string;
  ariaLabel?: string;
  placeholder?: string;
  description?: string;
  readonly?: boolean;

  isDisable?: boolean;
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
