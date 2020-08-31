import * as React from 'react';
import {Text, View, StatusBar, StyleSheet, Image} from 'react-native';
import {useSafeAreaInsets, EdgeInsets} from 'react-native-safe-area-context';
import appLogo from '../../../public/app_logo.png';

export interface AppBarProps {
  title?: string;
}

export const AppBar: React.FC<AppBarProps> = ({title}) => {
  const insets = useSafeAreaInsets();
  const styles = useStyles(insets);

  return (
    <>
      <StatusBar hidden />
      <View style={[styles.container, styles.containerShadow]}>
        <Image style={styles.logo} source={appLogo} />
        {title && (
          <View style={styles.title}>
            <Text>{title}</Text>
          </View>
        )}
      </View>
    </>
  );
};

const useStyles = (insets: EdgeInsets) =>
  StyleSheet.create({
    container: {
      backgroundColor: '#19d9fd',
      paddingTop: Math.max(insets.top, 8),
      paddingBottom: 8,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      flexDirection: 'row',
      alignItems: 'center',
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
