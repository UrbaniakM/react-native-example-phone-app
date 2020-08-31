import * as React from 'react';

import {ScrollView, Text} from 'react-native';

import {AppBar} from 'components/AppBar';

export const ProfileNonLoggedIn: React.FC = () => {
  return (
    <>
      <AppBar title="Profile" />
      <ScrollView>
        <Text>Profile</Text>
      </ScrollView>
    </>
  );
};
