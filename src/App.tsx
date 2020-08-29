import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {UserProvider} from './user';
import {Main} from './Main';

const App = () => {
  return (
    <SafeAreaProvider>
      <UserProvider>
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      </UserProvider>
    </SafeAreaProvider>
  );
};

export default App;
