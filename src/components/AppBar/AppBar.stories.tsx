import * as React from 'react';
import {storiesOf} from '@storybook/react-native';
import {AppBar} from './AppBar';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const appBarDefault = () => (
  <SafeAreaProvider>
    <AppBar />
  </SafeAreaProvider>
);

const appBarWithTitle = () => (
  <SafeAreaProvider>
    <AppBar title="Some title" />
  </SafeAreaProvider>
);

storiesOf('AppBar', module)
  .add('default', appBarDefault)
  .add('with title', appBarWithTitle);
