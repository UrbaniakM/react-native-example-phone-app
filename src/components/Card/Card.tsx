import * as React from 'react';
import {View, StyleSheet, StyleProp, ViewStyle} from 'react-native';

export type CardStyle = ViewStyle;
export interface CardProps {
  style?: StyleProp<CardStyle>;
}
export const Card: React.FC<CardProps> = ({children, style}) => {
  return (
    <View style={[styles.border, styles.rounded, styles.contentPadding, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  border: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'grey',
  },
  rounded: {
    borderRadius: 4,
  },
  contentPadding: {
    padding: 16,
  },
});
