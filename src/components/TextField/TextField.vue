<template lang="pug">
extends ../Base/InputBase.pug
block input
  input.vfield__control(
    type="text",
    v-model="localValue",
    :type="fieldType",
    :disabled="isDisable"
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

const props = withDefaults(defineProps<Props>(), {
  fieldType: 'text',
});
const emits = defineEmits<Emits>();
const localValue = useLocalValue(props, emits, null);
const fieldId = useFieldId();
const fieldClass = useFieldClass(props);
</script>
