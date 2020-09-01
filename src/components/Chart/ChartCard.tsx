import * as React from 'react';
import {StyleSheet, StyleProp} from 'react-native';
import {Card, CardStyle} from 'components/Card';

export type ChartCardStyle = CardStyle;
export interface ChartCardProps {
  style?: StyleProp<ChartCardStyle>;
}
export const ChartCard: React.FC<ChartCardProps> = ({style, children}) => {
  return <Card style={[styles.card, style]}>{children}</Card>;
};

const styles = StyleSheet.create({
  card: {
    flexGrow: 1,
    minHeight: 300,
  },
});
