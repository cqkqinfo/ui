const fs = require('fs');
const parser = require('@umijs/preset-dumi/lib/api-parser').default;

const types = {};

fs.readdirSync('./src').forEach(path => {
  if (!/(\.)|_/.test(path)) {
    const type = parser(`./src/${path}/index.tsx`, {});
    const keys = Object.keys(type);
    if (keys.length) {
      const name = path.replace(/(^\w|(-\w))/g, i =>
        i.toLocaleUpperCase().replace('-', ''),
      );
      console.log(name);
      types[name] = type[keys[0]];
      types[name] = types[name]
        .filter(
          ({ identifier }) =>
            !(
              identifier.includes('aria-') ||
              [
                'hoverClassName',
                'hoverStartTime',
                'hoverStayTime',
                'role',
                'dataset',
                'onTap',
                'onTouchStart',
                'onTouchMove',
                'onTouchEnd',
                'onTouchCancel',
                'onLongTap',
                'slot',
                'id',
              ].includes(identifier)
            ),
        )
        .map(item => ({
          default: null,
          description: null,
          required: false,
          ...item,
        }));
    }
  }
});
fs.writeFile(
  './.dumi/theme/types.json',
  JSON.stringify(types, null, '\t'),
  () => {},
);
