const getTime = (n) => {
  if (n < 0 || (typeof (n) !== 'number')) {
    return 'wrong value';
  }
  let result = '';
  const k = n / 60;
  if (Math.floor(k) >= 0 && Math.floor(k) < 10) {
    result = `0${String(Math.floor(k))}:`;
  }
  if (Math.floor(k) >= 24 && Math.floor(k) < 34) {
    result = `0${String((Math.floor(k)) - 24)}:`;
  }
  if (Math.floor(k) >= 34) {
    result = `${String((Math.floor(k)) - 24)}:`;
  }
  if (Math.floor(k) >= 10 && Math.floor(k) < 24) {
    result = `${String(Math.floor(k))}:`;
  }
  const z = n % 60;
  result = (z < 10) ? `${result}0${String(z)}` : `${result}${String(z)}`;

  return result;
};

export default getTime;
