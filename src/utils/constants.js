import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const STATUS_BAR_IOS = height > 800 ? '44px' : '20px';
