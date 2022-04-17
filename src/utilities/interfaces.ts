/**
 * Because vue3 is not support import interface, types from other modules so this file is useless
 * now
 *
 * @see: https://vuejs.org/guide/typescript/composition-api.html#typing-component-props
 */
export interface FieldProps {
  /** The type of the field. */
  type: string;
  /** The id of the field. */
  id?: string;
  /** The name of the field. */
  name?: string;
  /** The label of the field. */
  label?: string;

  // TODO: TEXT ONLY
  // /** The type of the field to put on [input type="text|date|number"]. */
  // fieldType?: string;

  /** Model for the input */
  modelValue?: string;

  ariaLabel?: string;
  placeholder?: string;
  disabled?: boolean;
}

export interface FieldEmits {
  (event: 'update:modelValue', value: string): void
}

export interface TextFieldProps extends FieldProps {
  /** The type of the field to put on [input type="text|date|number"]. */
  fieldType?: string;
}
