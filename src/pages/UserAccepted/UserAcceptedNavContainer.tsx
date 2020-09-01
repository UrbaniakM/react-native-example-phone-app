import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Profile} from './UserAcceptedScreens';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {withBottomTabLabel} from './withBottomTabLabel';
import {withBottomTabIcon} from './withBottomTabIcon';

const Tab = createBottomTabNavigator();

export const UserAcceptedNavContainer: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: withBottomTabLabel('Home'),
          tabBarIcon: withBottomTabIcon(MaterialIcon, 'home'),
        }}
      />
      <Tab.Screen
        name="Information"
        component={Home}
        options={{
          tabBarLabel: withBottomTabLabel('Information'),
          tabBarIcon: withBottomTabIcon(MaterialIcon, 'info-outline'),
        }}
      />
      <Tab.Screen
        name="Product Databases"
        component={Home}
        options={{
          tabBarLabel: withBottomTabLabel('Product Databases'),
          tabBarIcon: withBottomTabIcon(MaterialCommunityIcon, 'database'),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: withBottomTabLabel('Profile'),
          tabBarIcon: withBottomTabIcon(MaterialCommunityIcon, 'account'),
        }}
      />
    </Tab.Navigator>
  );
};
