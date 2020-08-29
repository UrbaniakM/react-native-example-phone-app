import * as React from 'react';
import {UserAcceptedNavContainer} from './pages/UserAcceptedNavContainer';
import {TermsOfService} from './pages/TermsOfService';
import {useUserAcceptedTermsOfService} from './user';
import {useInitializeUserData} from './utils/useInitializeData';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';

const AppStack = createStackNavigator();

export const Main: React.FC = () => {
  const initializeUseData = useInitializeUserData();
  const userAcceptedTermsOfService = useUserAcceptedTermsOfService();
  React.useEffect(() => {
    initializeUseData();
  }, [initializeUseData]);

  // TODO: add splash screen
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {userAcceptedTermsOfService === null ? (
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
