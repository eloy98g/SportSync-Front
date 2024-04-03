const isValidNumber = (number: string) => {
  const regex = /^-?\d+(\.\d+)?$/;
  return regex.test(number);
};

export default isValidNumber;
