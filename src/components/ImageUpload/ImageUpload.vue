<template lang="pug">
extends ../Base/InputBase.pug
block input
  .vfield__image-upload-wrapper
  input.vfield__control(
    type="file",
    :id="`${name}-image-upload`"
    @change="onChangeImage"
    accept="image/*"
  )
  .vfield__img-peview-wrapper(v-if="localValue")
    .vfield__btn.vfield__btn--close(@click="removeImage(`${name}-image-upload`)")
      img(src="../../assets/icons/x-circle.svg")
    img.vfield__img-thumbnail(:src="localValue")
</template>
<script lang="ts" setup>
import { inject } from 'vue';
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
}

interface Emits {
  (event: 'update:modelValue', value: string): void
}
const props = defineProps<Props>();
const emits = defineEmits<Emits>();
const localValue = useLocalValue(props, emits, null);
const options: any = inject('vueFieldConfigs');

const onChangeImage = async (e: any) => {
  const file = e.target.files[0];
  const imageUrl = await options.imageUpload(file);
  console.log(imageUrl)
  localValue.value = imageUrl;
}

const removeImage = async (elmId: string) => {
  const inputFile = (document.getElementById(elmId) as HTMLInputElement)
  if (inputFile) {
    inputFile.value = '';
  }
  await options.imageRemove(localValue.value)
  localValue.value = '';
}
const fieldId = useFieldId();
const fieldClass = useFieldClass(props);
</script>
