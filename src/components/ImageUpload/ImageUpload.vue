<template lang="pug">
extends ../Base/InputBase.pug
block input
  .image-upload__wrapper
  input.vfield__control.mb-3(
    type="file",
    :id="`${name}-image-upload`"
    @change="onChangeImage"
  )
  .img-peview__wrapper(v-if="localValue && localValue.url")
    .vfield__btn.vfield__btn--close(@click="removeImage(`${name}-image-upload`)")
      i.bi.bi-x-circle
    img.img-thumbnail(:src="localValue.url")
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

  //extra props
  valueLabel: string;
}

interface Emits {
  (event: 'update:modelValue', value: string): void
}
const props = defineProps<Props>();
const emits = defineEmits<Emits>();
const localValue = useLocalValue(props, emits, null);

const onChangeImage = (e: any) => {
  if (localValue.value && localValue.value.url) {
    URL.revokeObjectURL(localValue.value.url)
  }
  const file = e.target.files[0];
  const imageInfo = {
    file,
    url: URL.createObjectURL(file),
  };
  localValue.value = imageInfo;
}

const removeImage = (elmId: string) => {
  document.getElementById(elmId).value = null;
  localValue.value = null;
}
</script>
