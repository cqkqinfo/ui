export default async () => {
  const data = await navigator.clipboard.readText();
  return { data };
};
