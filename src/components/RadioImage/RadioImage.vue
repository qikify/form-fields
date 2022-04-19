<template lang="pug">
extends ../Base/InputBase.pug
block input
  .radio-image-wrapper.d-flex.flex-wrap.mb-3
    .radio-image.d-flex.flex-column.mx-2.btn(v-for="option in options")
      input.btn-check(
        type="radio"
        :name="name"
        :id="name + '-' + option.id"
        v-model="localValue"
        :value="option.value"
      )
      label.vfield__btn(
        :for="name + '-' + option.id"
      )
        img.img-thumbnail(
          :src="option.image"
          :class="{'border border-primary': option.value === modelValue}"
        )
        .title
          span {{option.label}}
</template>
<script lang="ts" setup>
import { useLocalValue } from '@/utilities/hooks';

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

  /** Extra options **/
  options: Array<{
    label: string;
    value: string;
    image: string;
    id: string;
  }>;
}

interface Emits {
  (event: 'update:modelValue', value: string): void
}
const props = defineProps<Props>();
const emits = defineEmits<Emits>();
const localValue = useLocalValue(props, emits, null);
</script>
