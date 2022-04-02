import 'antd-mobile/2x/es/global';
import './index.less';
const entries = require('object.entries');

if (!Object.entries) {
  entries.shim();
}
