import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Card, CardProps} from 'components/Card';

export interface ChartCardProps {
  style?: CardProps['style'];
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
