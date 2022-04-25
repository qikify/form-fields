const isVisible = (
  data: Record<string, any>,
  option: Record<string, any>,
): boolean => {
  if (!option.dependency) {
    return true;
  }

  const dependencyName = option.dependency.name;
  const dependencyValue = option.dependency.value;

  if (data[dependencyName] !== dependencyValue) {
    return false;
  }

  return true;
};

export default isVisible;
