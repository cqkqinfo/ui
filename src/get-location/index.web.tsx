export default () =>
  new Promise(resolve => {
    navigator.geolocation.getCurrentPosition(function({
      coords: { longitude, latitude },
    }) {
      resolve({ longitude, latitude });
    });
  });
