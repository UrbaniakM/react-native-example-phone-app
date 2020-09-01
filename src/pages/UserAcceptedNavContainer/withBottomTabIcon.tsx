import * as React from 'react';
import {IconProps} from 'react-native-vector-icons/Icon';

interface ReactNavigationTabBarIconProps {
  focused: boolean;
  color: string;
  size: number;
}

export type BottomTabIconElement = React.ComponentType<IconProps>;
export type BottomTabIconName = string;

export type WithBottomTabIcon = (
  IconElement: BottomTabIconElement,
  name: BottomTabIconName,
) => (props: ReactNavigationTabBarIconProps) => React.ReactNode;
export const withBottomTabIcon: WithBottomTabIcon = (
  IconElement: BottomTabIconElement,
  name: BottomTabIconName,
) => (otherProps: ReactNavigationTabBarIconProps) => (
  <IconElement {...otherProps} name={name} />
);
