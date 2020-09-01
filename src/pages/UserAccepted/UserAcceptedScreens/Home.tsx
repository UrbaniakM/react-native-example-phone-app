import * as React from 'react';

import {ScrollView, Text} from 'react-native';

import {AppBar} from 'components/AppBar';

export const Home: React.FC = () => {
  return (
    <>
      <AppBar title="Home" />
      <ScrollView>
        <Text>Home</Text>
      </ScrollView>
    </>
  );
};
