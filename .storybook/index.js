import {getStorybookUI, configure} from '@storybook/react-native';
import {loadStories} from './storyLoader';

// React Native packager resolves all imports at build-time, so it’s not possible to load modules dynamically
// so we're using react-native-storybook-loader package
configure(loadStories(), module);

const StorybookUIRoot = getStorybookUI({port: 7007, host: 'localhost'});

export default StorybookUIRoot;
