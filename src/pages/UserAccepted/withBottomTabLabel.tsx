import * as React from 'react';
import {StyleSheet, Text} from 'react-native';

interface ReactNavigationTabBarLabelProps {
  focused: boolean;
  color: string;
}

export type BottomTabLabel = string; // label

type TabBarLabelProps = ReactNavigationTabBarLabelProps & {
  label: BottomTabLabel;
};

const TabBarLabel: React.FC<TabBarLabelProps> = ({label, color}) => {
  return (
    <Text
      numberOfLines={2}
      style={[styles.label, {color}, styles.labelBeside]}
      allowFontScaling>
      {label}
    </Text>
  );
};

// FIXME: Rotated view placement
const styles = StyleSheet.create({
  label: {
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  // center label with icon
  labelBeside: {
    fontSize: 10,
    marginLeft: -2,
  },
});

export type WithBottomTabLabel = (
  label: BottomTabLabel,
) => (props: ReactNavigationTabBarLabelProps) => React.ReactNode;
export const withBottomTabLabel: WithBottomTabLabel = (
  label: BottomTabLabel,
) => (otherProps: ReactNavigationTabBarLabelProps) => (
  <TabBarLabel {...otherProps} label={label} />
);
