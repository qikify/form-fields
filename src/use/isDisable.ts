const isDisable = (
  data: Record<string, any>,
  option: Record<string, any>,
): boolean => {
  // #1. No disable
  if (!option.disable) return false;


  // #2. Has disable
  if (option.disable === true) return true


  // There're 2 types of value
  //  - primary (1): String/Number/Boolean
  //  - object (n): Array/Object
  // There're 3 supported relationships
  //
  // |--------|---------|-------------------------
  // | Master | Servant | Checking value(s)
  // |--------|---------|-------------------------
  // |   1    |    1    | value/value_not_equal
  // |   1    |    n    | value_in/value_not_in
  // |   n    |    1    | value_has/value_not_has

  const {
    name,
    value,
    value_not_equal: valueNotEqual,
    value_in: valueIn,
    value_not_in: valueNotIn,
    value_has: valueHas,
    value_not_has: valueNotHas,
  } = option.disable;

  if (!name) {
    throw new Error(`Option ${option.name}: dependency element is undefined`);
  }

  const dependencyValue = data[name];

  // 1. Value equal
  if (value !== undefined) {
    // this will not work in case of using dependency as below
    // <?php
    //    // no 'default_value'
    //    'dependency' => [
    //      'element' => 'dependency_element',
    //      'value' => false,
    //    ],
    // ?>
    // in that case: this.data[element] === undefined !== false
    // ***Solution: if an option depends on a Boolean option, only use 'value' => true or
    //              change logic to use 'value_not_equal'
    if (dependencyValue === value) {
      return true;
    }
  }

  // 2. Value not equal
  if (valueNotEqual !== undefined) {
    if (dependencyValue !== valueNotEqual) {
      return true;
    }
  }

  // 3. Value in
  if (valueIn !== undefined) {
    const values = valueIn.split(',').map(v => v.trim());

    if (values.includes(dependencyValue)) {
      return true;
    }
  }

  // 4. Value not in
  if (valueNotIn !== undefined) {
    const values = valueNotIn.split(',').map(v => v.trim());

    if (!values.includes(dependencyValue)) {
      return true;
    }
  }

  // 5. Value has
  if (valueHas !== undefined) {
    if (!dependencyValue.isArray()) {
      throw new Error(`Option ${option.name}: dependency ${name} value must be an array`);
    }

    if (dependencyValue.includes(valueHas)) {
      return true;
    }
  }

  // 6. Value not has
  if (valueNotHas !== undefined) {
    if (!dependencyValue.isArray()) {
      throw new Error(`Option ${option.name}: dependency ${name} value must be an array`);
    }

    if (!dependencyValue.includes(valueNotHas)) {
      return true;
    }
  }

  return false;
};

export default isDisable;
