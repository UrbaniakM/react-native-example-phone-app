import * as React from 'react';

import {ScrollView, Text} from 'react-native';

import {AppBar} from 'components/AppBar';
import {useUserNickname} from 'user';

export const ProfileLoggedIn: React.FC = () => {
  const nickname = useUserNickname();

  return (
    <>
      <AppBar title="Profile" />
      <ScrollView>
        {nickname && <Text>Hello, {nickname}! </Text>}
        <Text>
          Here, you will be able to preview your preferences and other account
          details in the future!
        </Text>
      </ScrollView>
    </>
  );
};
