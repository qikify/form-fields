<template lang="pug">
block input
  .vfield__divider
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
import { useLocalValue, useFieldId, useFieldClass } from '@/utilities/hooks';

interface Props {
  type: string;
  dividerStyle?: string
}

const props = defineProps<Props>();

const fieldId = useFieldId();
const fieldClass = useFieldClass(props);

const checkDividerStyle = () => {
  const listStyleValid = ['dotted', 'dashed', 'solid', 'double', 'groove', 'ridge'];
  const defaultStyle = 'solid';
  const style = props.dividerStyle || defaultStyle;
  return listStyleValid.indexOf(style) === -1 ? defaultStyle : style;
}

const setDividerStyle = () => {
  document.documentElement.style.setProperty('--vfield-border-style', checkDividerStyle() || 'solid');
}

onMounted(setDividerStyle);
</script>
