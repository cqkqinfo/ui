export default (key: string, value: any) => {
  localStorage[key] = JSON.stringify({ value });
};
