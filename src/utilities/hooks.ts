import { computed } from 'vue';

/**
 * Computed modelValue
 *
 * @see: https://vanoneang.github.io/article/v-model-in-vue3.html#turn-it-into-a-composable
 */
export function useLocalValue(props: any, emit: any, defaultValue: string | any) {
  return computed({
    get: () => props.modelValue || defaultValue,
    set: (value) => {
      emit(`update:modelValue`, value);
    },
  });
}

export function useFieldId(prefix: string) {
  const p = prefix ? `${prefix}` : 'vfield';

  // Random 6 digit number
  const rand = Math.floor(100000 + Math.random() * 900000); //eslint-disable-line

  return `${p}-${rand}`;
}

export function useFieldClass(props: any) {
  return computed(() =>  props.className || '');
}
