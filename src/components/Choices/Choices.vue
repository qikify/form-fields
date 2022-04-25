<template lang="pug">
extends ../Base/InputBase.pug
block input
  .vfield__check(v-for="option in options")
    input.vfield__check-input(
      type='checkbox'
      :name="name"
      :value="option.value"
      :id="`${group ? group + '-' : ''}${name}-${option.value}`"
      v-model="localValue"
    )
    label.vfield__check-label(:for="`${group ? group + '-' : ''}${name}-${option.value}`") {{option.label}}
</template>
<script lang="ts" setup>
import { useLocalValue, useFieldId, useFieldClass } from '@/utilities/hooks';

interface Props {
  type: string;
  id?: string;
  name?: string;
  label?: string;
  fieldType?: string;
  modelValue?: any;

  isRequired?: boolean;
  className?: string;
  ariaLabel?: string;
  placeholder?: string;
  description?: string;
  readonly?: boolean;
  group?: string;

  options: Array<{
    label: string;
    value: string;
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
