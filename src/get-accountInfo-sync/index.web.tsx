export default () => ({
  envVersion: /localhost/.test(window.location.host)
    ? 'develop'
    : /^(tih)/.test(window.location.host)
    ? 'trial'
    : 'release',
});
