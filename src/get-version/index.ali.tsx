import { getRunScene } from 'remax/ali';

export default async () => {
  const { envVersion } = await getRunScene();
  return envVersion;
};
