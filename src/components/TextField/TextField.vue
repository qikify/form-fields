<template lang="pug">
extends ../Base/InputBase.pug
block input
  input.vfield__control(
    type="text"
    v-model="localValue"
  )
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

export interface Emits {
  (event: 'update:modelValue', value: string): void
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();
const localValue = useLocalValue(props, emits);
const fieldId = useFieldId();
const fieldClass = useFieldClass(props);
</script>
