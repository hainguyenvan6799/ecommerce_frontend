export const checkEmptyObject = (targetObject) => {
  // if(targetObject) {
  //   return Object.keys(targetObject).length === 0 ? true : false;
  // }
  // return true;
  if (!targetObject) {
    return false;
  }
  return Object.keys(targetObject).length === 0;
};
