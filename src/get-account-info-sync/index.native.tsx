import getVersion from '../get-version';

export default () => ({
  miniProgram: {
    envVersion: getVersion,
  },
});
