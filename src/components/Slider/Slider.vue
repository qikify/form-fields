<template lang="pug">
extends ../Base/InputBase.pug
block heading
  label.vfield__label(
    v-if="label",
    :for="fieldId",
  )
    span(v-html="label")
    template(v-if="isRequired")
      span.vfield__asterisk *
    span(v-html="`: ${localValue}`")
block input
  input.vfield__slider(
    type='range'
    :min="min"
    :max="max"
    :step="step"
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
  fieldType?: string;
  modelValue?: string;

  isRequired?: boolean;
  className?: string;
  ariaLabel?: string;
  placeholder?: string;
  description?: string;
  readonly?: boolean;
  min?: string;
  max?: string;
  step?: string;
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
