import {getStorybookUI, configure} from '@storybook/react-native';
import {loadStories} from './storyLoader';
import SplashScreen from 'react-native-splash-screen';
import * as React from 'react';

// React Native packager resolves all imports at build-time, so it’s not possible to load modules dynamically
// so we're using react-native-storybook-loader package
configure(loadStories, module);

const StorybookUI = getStorybookUI({port: 7007, host: 'localhost'});

// RN hot module must be in a class for HMR
class StorybookUIRoot extends React.Component {
  componentDidMount() {
    SplashScreen?.hide?.();
  }
  render() {
    return <StorybookUI />;
  }
}

export default StorybookUIRoot;
