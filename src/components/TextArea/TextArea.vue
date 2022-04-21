<template lang="pug">
extends ../Base/InputBase.pug
block input
  textarea.vfield__control(
    v-model="localValue"
    :rows="rows || 3"
  )
</template>
<script setup lang="ts">
import {
  useLocalValue,
  useFieldId,
  useFieldClass,
} from '@/utilities/hooks';

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

  rows?: number;
}

interface Emits {
  (event: 'update:modelValue', value: string): void
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();
const localValue = useLocalValue(props, emits);
const fieldId = useFieldId();
const fieldClass = useFieldClass(props);
</script>
