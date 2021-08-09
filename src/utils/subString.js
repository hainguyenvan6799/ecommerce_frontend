export const customSubString = (text, expectRange) => {
  if (text.length > expectRange) {
    return `${text.substring(0, expectRange - 1)}...`;
  } else {
    return text;
  }
};

export const customId = (arg) => {
  return `${Date.now()}_${arg}`;
};
