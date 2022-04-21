<template lang="pug">
extends ../Base/InputBase.pug
block input
  VField(
    v-for="field in fields",
    :option="{...field, group: name}",
    v-model="data[field.name]"
  )
</template>
<script lang="ts" setup>
import { useLocalValue, useFieldId, useFieldClass } from '@/utilities/hooks';
import { reactive } from 'vue';
import VField from '../../VField.vue';

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

  fields: Array<object>
}

interface Emits {
  (event: 'update:modelValue', value: string): void
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();
const fieldId = useFieldId();
const fieldClass = useFieldClass(props);
const localValue = useLocalValue(props, emits, null);

const defaultData = props.fields.reduce((acc, field) => {
  if (field.defaultValue) {
    acc[field.name] = field.defaultValue;
  }

  return acc;
}, {});

const data = reactive(defaultData);
localValue.value = data;
</script>
