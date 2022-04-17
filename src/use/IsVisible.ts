export const isVisible = (
  data: Record<string, any>,
  option: Record<string, any>,
): boolean => {
  if (!option.dependency) {
    return true;
  }

  const dependencyField = option.dependency.field;
  const dependencyValue = option.dependency.value;


  if (Array.isArray(dependencyValue)) {
    return dependencyValue.includes(data[dependencyField]);
  }

  if (data[dependencyField] !== dependencyValue) {
    return false;
  }

  return true;
};
