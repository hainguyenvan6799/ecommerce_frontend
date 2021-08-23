export const removeDupplicateArray = (currentArray) => {
  const jsonObject = currentArray.map(JSON.stringify);

  const uniqueSet = new Set(jsonObject);
  const uniqueArray = Array.from(uniqueSet).map(JSON.parse);

  return uniqueArray;
};
