import getVersion from '../get-version';

export default async () => ({
  miniProgram: {
    envVersion: await getVersion(),
  },
});
