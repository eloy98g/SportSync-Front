const toggleSport = (array: string[], gid: string): string[] => {
  // TODO: Api call for toggle sport
  let newArray = [];
  if (array.includes(gid)) {
    newArray = array.filter((item) => item !== gid);
  } else {
    newArray = [...array, gid];
  }
  return newArray;
};

export default toggleSport;
