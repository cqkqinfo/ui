export const envVersion =
  process.env.NODE_ENV === 'development' ? 'develop' : 'release';

export default envVersion;
