import * as React from 'react';

import {
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  View,
  Linking,
  Button as NativeButton,
} from 'react-native';
import {Button} from 'react-native-elements';
import {AppBar} from 'components/AppBar';
import {useUpdateUser, User} from 'user';

const signUpPageUrl = '';
export const ProfileNonLoggedIn: React.FC = () => {
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');
  const updateUser = useUpdateUser();

  const handleLoginButtonClick = React.useCallback(() => {
    if (password === '1234') {
      return;
    }

    updateUser((user) => {
      const updatedUser: User = {
        ...user,
        isLoggedIn: true,
        nickname: login,
      };

      return updatedUser;
    });
  }, [login, password, updateUser]);

  const handleSignUpButtonClick = () => {
    Linking.canOpenURL(signUpPageUrl).then((supported) => {
      if (supported) {
        Linking.openURL(signUpPageUrl);
      } else {
        console.log("Don't know how to open URI: " + signUpPageUrl);
      }
    });
  };

  return (
    <>
      <AppBar title="Profile" />
      <ScrollView
        contentContainerStyle={styles.scrollViewContentContainer}
        centerContent>
        <View style={styles.formContainer}>
          <Text style={styles.formItem}>Login to your account</Text>
          <TextInput
            onChangeText={setLogin}
            placeholder="Login"
            value={login}
            style={styles.formItem}
          />
          <TextInput
            onChangeText={setPassword}
            placeholder="Password"
            value={password}
            style={styles.formItem}
          />
          <Button
            onPress={handleLoginButtonClick}
            title="Login"
            accessibilityLabel="Login button"
            style={styles.formItem}
          />
          <Text style={styles.formItem}>Sign up text prompt</Text>
          <Text style={styles.formItem}>Some link</Text>
          <NativeButton
            title="Sign up page link"
            onPress={handleSignUpButtonClick}
          />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollViewContentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 32,
    maxWidth: 600,
  },
  formItem: {
    marginVertical: 16,
  },
});
