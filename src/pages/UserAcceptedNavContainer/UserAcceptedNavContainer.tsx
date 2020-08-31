import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from './Home';
import {Profile} from './Profile';
import {StyleSheet, Text} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

interface TabBarLabelProps {
  focused: boolean;
  color: string;
}
const label = 'Product Databases';
const TabBarLabel: React.FC<TabBarLabelProps> = ({color}) => {
  return (
    <Text
      numberOfLines={2}
      style={[styles.label, {color}, styles.labelBeside]}
      allowFontScaling>
      {label}
    </Text>
  );
};

export const UserAcceptedNavContainer: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
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
          tabBarLabel: TabBarLabel,
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

const styles = StyleSheet.create({
  label: {
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  // center label with icon
  labelBeside: {
    fontSize: 10,
    marginTop: 3,
  },
});
