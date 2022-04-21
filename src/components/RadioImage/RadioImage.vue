<template lang="pug">
extends ../Base/InputBase.pug
block input
  .vfield__radio-button-wrapper
    .vfield__radio-button(v-for="option in options")
      input.vfield__btn-check(
        type="radio"
        :name="name"
        :id="(group ? group + '-' : '') + name + '-' + option.value"
        v-model="localValue"
        :value="option.value"
      )
      label.vfield__btn(
        :for="(group ? group + '-' : '') + name + '-' + option.value"
      )
        img.vfield__img-thumbnail(
          :src="option.image"
          :class="{'vfield__btn--active': option.value === modelValue}"
        )
        .vfield__title
          span {{option.label}}
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
  group?: string;

  options: Array<{
    label: string;
    value: string;
    image: string;
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
