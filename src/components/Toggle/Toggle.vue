<template lang="pug">
extends ../Base/InputBase.pug
block input
  .vfield__toggle-wrapper
    .vfield__check.vfield__switch
      input.vfield__check-input(
          type='checkbox'
          v-model="localValue"
          :id="`${name}-toggle`"
      )
      label.vfield__check-label(:for="`${name}-toggle`") {{valueLabel}}
</template>
<script lang="ts" setup>
import { useLocalValue, useFieldId, useFieldClass } from '@/utilities/hooks';

interface Props {
  type: string;
  id?: string;
  name?: string;
  label?: string;
  fieldType?: string;
  modelValue?: boolean;

  isRequired?: boolean;
  className?: string;
  ariaLabel?: string;
  placeholder?: string;
  description?: string;
  readonly?: boolean;

  valueLabel: string;
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
