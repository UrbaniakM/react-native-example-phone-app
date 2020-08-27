import * as React from 'react';
import {BottomNavigation} from './components/BottomNavigation';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
};

export default App;
