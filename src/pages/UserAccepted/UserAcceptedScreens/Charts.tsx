import * as React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';
import {useSafeAreaInsets, EdgeInsets} from 'react-native-safe-area-context';
import {Chart, ChartCard} from 'components/Chart';
import {AppBar} from 'components/AppBar';

export const Charts: React.FC = () => {
  const insets = useSafeAreaInsets();
  const styles = useStyles(insets);

  return (
    <>
      <AppBar title="Charts" />
      <ScrollView contentContainerStyle={styles.container}>
        <ChartCard style={styles.chartCard}>
          <Chart
            url={
              'https://public.tableau.com/views/10_0InternationalTourism/InternationalTourism?:embed=y&:tooltip=n&:toolbar=n&:showVizHome=no&:mobile=y&:showAppBanner=n'
            }
          />
        </ChartCard>
        <ChartCard style={styles.chartCard}>
          <Chart
            url={
              'https://public.tableau.com/profile/alexander.aj.wray#!/vizhome/MarchMadnessTournamentHistory/Dashboard'
            }
          />
        </ChartCard>
        <ChartCard style={styles.chartCard}>
          <Chart
            url={
              'https://public.tableau.com/profile/alexander.aj.wray#!/vizhome/MarchMadnessTournamentHistory/Dashboard'
            }
          />
        </ChartCard>
        <Text>Other stuff</Text>
      </ScrollView>
    </>
  );
};

const useStyles = (insets: EdgeInsets) =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    },
    chartCard: {
      margin: 16,
    },
  });
