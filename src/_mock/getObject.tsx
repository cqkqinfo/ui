export default () =>
  new Promise<{ id: number; random: number }>((resolve, reject) =>
    setTimeout(
      () => resolve({ id: Math.random(), random: Math.random() }),
      (Math.random() * 10000) / 4,
    ),
  );
