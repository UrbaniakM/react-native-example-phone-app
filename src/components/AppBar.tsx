import * as React from 'react';
import {
  Text,
  View,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';
import appLogo from '../../public/app_logo.png';

export interface AppBarProps {
  title?: string;
}

export const AppBar: React.FC<AppBarProps> = ({title}) => {
  return (
    <>
      <StatusBar hidden />
      <View style={styles.container}>
        <SafeAreaView style={styles.content}>
          <Image style={styles.logo} source={appLogo} />
          {title && (
            <View style={styles.title}>
              <Text>{title}</Text>
            </View>
          )}
        </SafeAreaView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#19d9fd',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 142,
    height: 42,
    margin: 12,
    resizeMode: 'contain',
  },
  title: {
    marginLeft: 24,
  },
});
