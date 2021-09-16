export default (key: string) => {
  try {
    return JSON.parse(localStorage[key] || '{}').value;
  } catch (e) {
    return null;
  }
};
