/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

const STORYBOOK_START = true;
const appEntry = STORYBOOK_START
  ? require('./.storybook').default
  : require('./src/App').default;

AppRegistry.registerComponent(appName, () => appEntry);
