export const getYearOfDate = date => {
  const dateObj = new Date(date);
  return `(${dateObj.getFullYear()})`;
};
