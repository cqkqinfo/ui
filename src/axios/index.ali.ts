import axios from 'axios';
import aliAdapter from 'axios-ali-adapter';

axios.defaults.adapter = aliAdapter;

export default axios;
