<template lang="pug">
extends ../Base/InputBase.pug
block input
  pre before
  pre {{ localValue }}
  pre after
  select.vfield__control(
    v-model="localValue"
  )
    option(value="null", disabled) {{ placeholder }}
    option(
      v-for="option in options"
      :value="option.value"
    ) {{ option.label }}
</template>
<script setup lang="ts">
import { computed, ref, watch, onMounted } from 'vue';
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

  options: Array<{
    label: string;
    value: string;
  }>;
}

export interface Emits {
  (event: 'update:modelValue', value: string): void
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();
const localValue = useLocalValue(props, emits, null);
const fieldId = useFieldId();
const fieldClass = useFieldClass(props);
</script>
