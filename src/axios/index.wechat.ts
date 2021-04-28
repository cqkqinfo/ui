import axios from 'axios';
import wechatAdapter from 'axios-wechat-adapter';

axios.defaults.adapter = wechatAdapter;

export default axios;
