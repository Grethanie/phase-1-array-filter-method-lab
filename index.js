const findMatching = (drivers, name) => {
  return drivers.filter((driver) => {
    return driver.toLowerCase() === name.toLowerCase();
  });
};

const fuzzyMatch = (drivers, name) => {
  return drivers.filter((driver) => {
    return (
      driver.charAt(0) === name.charAt(0) && driver.charAt(1) === name.charAt(1)
    );
  });
};

const matchName = (drivers, name) => {
  return drivers.filter((driver) => {
    return driver.name === name;
  });
};
