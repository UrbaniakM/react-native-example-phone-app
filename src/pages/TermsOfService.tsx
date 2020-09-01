import * as React from 'react';

import {ScrollView, View, Text, StyleSheet} from 'react-native';

import {Button} from 'react-native-elements';
import {AppBar} from 'components/AppBar';
import {useUpdateUser, User} from 'user';
import {persistIsTermsOfServiceAccepted} from 'utils/termsOfService';

export const TermsOfService: React.FC = () => {
  const updateUser = useUpdateUser();

  const handleAcceptTermsOfService = React.useCallback(() => {
    // TODO loading - block button
    persistIsTermsOfServiceAccepted(true);
    updateUser((user) => {
      const updatedUser: User = {
        ...user,
        isTermsOfServiceAccepted: true,
      };
      return updatedUser;
    });
  }, [updateUser]);

  return (
    <>
      <AppBar title="Terms and conditions" />
      <ScrollView contentContainerStyle={styles.pageContainer}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            In order to use the application you have to accept terms and
            conditions
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.
          </Text>
        </View>
        <Button
          onPress={handleAcceptTermsOfService}
          title="Accept"
          accessibilityLabel="Accept button"
          buttonStyle={styles.button}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    padding: 40,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '400',
  },
  button: {
    marginTop: 48,
  },
});
