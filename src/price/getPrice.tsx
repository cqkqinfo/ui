export default (num = 0, len = 2, split = false): string => {
  const float = num / 100;
  let result = (
    Math.round(float * Math.pow(10, len)) / Math.pow(10, len)
  ).toFixed(len);
  result = float !== parseFloat(result) ? float.toFixed(2).toString() : result;
  let splitResult = '';
  [...result].forEach(
    (item, index) =>
      (splitResult += `${item}${
        !((index + 1) % 3) && index + 1 !== result.length ? ',' : ''
      }`),
  );
  return split ? splitResult : result;
};
