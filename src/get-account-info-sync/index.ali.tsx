import { getRunScene } from 'remax/ali';

const obj = { envVersion: 'develop' };

getRunScene().then(({ envVersion }) => (obj.envVersion = envVersion));

export default () => ({ miniProgram: obj });
