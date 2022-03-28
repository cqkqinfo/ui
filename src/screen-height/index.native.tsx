// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import appData from '@/appData';
import { Dimensions } from 'react-native';

const win = Dimensions.get('window');

export default win.height - appData.headerHeight;
