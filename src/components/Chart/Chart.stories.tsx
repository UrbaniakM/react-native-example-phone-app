import * as React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Chart} from './Chart';
import {View} from 'react-native';

const chartDefault = () => (
  <Chart
    url={
      'https://public.tableau.com/views/10_0InternationalTourism/InternationalTourism?:embed=y&:tooltip=n&:toolbar=n&:showVizHome=no&:mobile=y&:showAppBanner=n'
    }
  />
);

// FIXME: isn't working properly (issue probably related to WebView)
const multipleCharts = () => (
  <View>
    <View>
      <Chart
        url={
          'https://public.tableau.com/views/10_0InternationalTourism/InternationalTourism?:embed=y&:tooltip=n&:toolbar=n&:showVizHome=no&:mobile=y&:showAppBanner=n'
        }
      />
    </View>
    <View>
      <Chart
        url={
          'https://public.tableau.com/profile/alexander.aj.wray#!/vizhome/MarchMadnessTournamentHistory/Dashboard'
        }
      />
    </View>
  </View>
);

storiesOf('Chart', module)
  .add('default', chartDefault)
  .add('multiple charts', multipleCharts);
