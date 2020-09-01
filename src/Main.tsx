import * as React from 'react';
import {UserAcceptedNavContainer} from './pages/UserAccepted';
import {TermsOfService} from './pages/TermsOfService';
import {useUserAcceptedTermsOfService, useUserLoading} from './user';
import {useInitializeUserData} from './utils/useInitializeData';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const AppStack = createStackNavigator();

export const Main: React.FC = () => {
  const initializeUseData = useInitializeUserData();
  const userAcceptedTermsOfService = useUserAcceptedTermsOfService();
  const isUserLoading = useUserLoading();

  React.useEffect(() => {
    initializeUseData();
  }, [initializeUseData]);

  React.useEffect(() => {
    if (!isUserLoading) {
      SplashScreen?.hide?.();
    }
  }, [isUserLoading]);

  // TODO: modify android splash screen
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {isUserLoading ? (
        <AppStack.Screen component={View} name="Loading - splash screen" />
      ) : (
        <>
          {userAcceptedTermsOfService && (
            <AppStack.Screen
              component={UserAcceptedNavContainer}
              name="Accepted tems"
            />
          )}
          {!userAcceptedTermsOfService && (
            <AppStack.Screen
              component={TermsOfService}
              name="Terms of service"
            />
          )}
        </>
      )}
    </AppStack.Navigator>
  );
};
