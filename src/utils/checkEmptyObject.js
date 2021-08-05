export const checkEmptyObject = (targetObject) => {
  if (Object.keys(targetObject).length === 0) {
    return true;
  } else {
    return false;
  }
};
