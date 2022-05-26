import { getRunScene } from 'remax/ali';

let version = 'develop';

getRunScene().then(({ envVersion }) => (version = envVersion));

export default () => version;
