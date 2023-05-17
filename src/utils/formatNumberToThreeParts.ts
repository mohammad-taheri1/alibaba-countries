export const formatNumberToThreeParts = (num: number) => {
   return new Intl.NumberFormat().format(num);
};
