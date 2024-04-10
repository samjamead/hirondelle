export const binaryString = (decimal: number | string) => {
  const parsedDecimal = parseInt(decimal.toString());
  return parsedDecimal.toString(2).padStart(8, '0');
};

export const dateStringToBinary = (date: string) => {
  const dateComponents = date
    .slice(2, 10) // get rid of the '20'
    .split('-') // split by the dashes
    .map((decimal) => {
      return binaryString(decimal);
    });

  const binaryDate = `${dateComponents[0]}-${dateComponents[1]}-${dateComponents[2]}`;

  return binaryDate;
};
