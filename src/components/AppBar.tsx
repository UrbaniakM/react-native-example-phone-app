import * as React from 'react';
import {Text, View, StatusBar, StyleSheet, Image} from 'react-native';
import appLogo from '../../public/app_logo.png';
import {SafeAreaView} from 'react-native-safe-area-context';

export interface AppBarProps {
  title?: string;
}

export const AppBar: React.FC<AppBarProps> = ({title}) => {
  return (
    <>
      <StatusBar hidden />
      <View style={[styles.container, styles.containerShadow]}>
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
  containerShadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.33,
    shadowRadius: 2,
    elevation: 4,
    // TODO: 3rd party library (color of the shadows)
    // https://stackoverflow.com/questions/41320131/how-to-set-shadows-in-react-native-for-android#comment86368663_41457692
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
