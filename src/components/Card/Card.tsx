import * as React from 'react';
import {View, StyleSheet, StyleProp, ViewStyle} from 'react-native';

export interface CardProps {
  style?: StyleProp<ViewStyle>;
}
export const Card: React.FC<CardProps> = ({children, style}) => {
  return (
    <View style={[styles.border, styles.rounded, style]}>
      <View style={styles.content}>{children}</View>
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
  content: {
    margin: 8,
  },
});
