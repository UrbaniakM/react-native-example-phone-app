import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from './Home';
import {Profile} from './Profile';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {withBottomTabLabel} from './withBottomTabLabel';

const Tab = createBottomTabNavigator();

interface TabBarLabelProps {
  focused: boolean;
  color: string;
}

export const UserAcceptedNavContainer: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: withBottomTabLabel('Home'),
          tabBarIcon: ({
            color,
            size,
          }: {
            focused: boolean;
            color: string;
            size: number;
          }) => <MaterialIcon name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Information"
        component={Home}
        options={{
          tabBarLabel: withBottomTabLabel('Information'),
          tabBarIcon: ({
            color,
            size,
          }: {
            focused: boolean;
            color: string;
            size: number;
          }) => <MaterialIcon name="info-outline" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Product Databases"
        component={Home}
        options={{
          tabBarLabel: withBottomTabLabel('Product Databases'),
          tabBarIcon: ({
            color,
            size,
          }: {
            focused: boolean;
            color: string;
            size: number;
          }) => (
            <MaterialCommunityIcon name="database" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: withBottomTabLabel('Profile'),
          tabBarIcon: ({
            color,
            size,
          }: {
            focused: boolean;
            color: string;
            size: number;
          }) => <MaterialIcon name="home" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
};
