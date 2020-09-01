import * as React from 'react';
import {StyleSheet} from 'react-native';
import WebView from 'react-native-webview';

export interface ChartProps {
  url: string;
}
export const Chart: React.FC<ChartProps> = ({url}) => {
  return <WebView source={{uri: url}} style={styles.webview} />;
};

const styles = StyleSheet.create({
  webview: {
    flex: 1,
  },
});
