/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Chart} from './Chart';
import {ScrollView} from 'react-native-gesture-handler';
import {ChartCard} from './ChartCard';

const chartDefault = () => (
  <Chart
    url={
      'https://public.tableau.com/views/10_0InternationalTourism/InternationalTourism?:embed=y&:tooltip=n&:toolbar=n&:showVizHome=no&:mobile=y&:showAppBanner=n'
    }
  />
);

const multipleCharts = () => (
  <ScrollView contentContainerStyle={{flexGrow: 1, padding: 32}}>
    <Chart
      url={
        'https://public.tableau.com/views/10_0InternationalTourism/InternationalTourism?:embed=y&:tooltip=n&:toolbar=n&:showVizHome=no&:mobile=y&:showAppBanner=n'
      }
    />
    <Chart
      url={
        'https://public.tableau.com/profile/alexander.aj.wray#!/vizhome/MarchMadnessTournamentHistory/Dashboard'
      }
    />
  </ScrollView>
);

const insideCard = () => (
  <ChartCard style={{maxHeight: 400, margin: 32}}>
    <Chart
      url={
        'https://public.tableau.com/views/10_0InternationalTourism/InternationalTourism?:embed=y&:tooltip=n&:toolbar=n&:showVizHome=no&:mobile=y&:showAppBanner=n'
      }
    />
  </ChartCard>
);

storiesOf('Chart', module)
  .add('default', chartDefault)
  .add('multiple charts', multipleCharts)
  .add('inside card', insideCard);
