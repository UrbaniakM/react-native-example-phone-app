import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from './Home';
import {Profile} from './Profile';
import {StyleSheet, Text} from 'react-native';

const Tab = createBottomTabNavigator();

interface TabBarLabelProps {
  focused: boolean;
  color: string;
}
const label = 'Long screen name';
const TabBarLabel: React.FC<TabBarLabelProps> = () => {
  // const color = focused ? activeTintColor : inactiveTintColor;

  return (
    <Text
      numberOfLines={2}
      style={[
        styles.label,
        // { color },
        // horizontal ? styles.labelBeside : styles.labelBeneath,
        // labelStyle,
      ]}
      allowFontScaling>
      {label}
    </Text>
  );
};

const options = {
  tabBarLabel: TabBarLabel,
};

export const UserAcceptedNavContainer: React.FC = () => {
  return (
    <Tab.Navigator tabBarOptions={{labelStyle: styles.label}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Long screen name" component={Home} options={options} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  label: {
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
});
