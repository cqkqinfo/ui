import getVersion from '../get-version';

let version: any;
getVersion().then(v => (version = v));

export default () => ({
  miniProgram: {
    envVersion: version,
  },
});
