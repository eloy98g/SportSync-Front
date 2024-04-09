const validCode = (code: string) => {
  const regex = /^[a-zA-Z0-9]{6}$/;
  if (regex.test(code)) {
    return true;
  } else {
    return false;
  }
};

export default validCode;
