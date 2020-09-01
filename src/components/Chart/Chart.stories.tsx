import * as React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Chart} from './Chart';

const chartDefault = () => (
  <Chart
    url={
      'https://public.tableau.com/views/10_0InternationalTourism/InternationalTourism?:embed=y&:tooltip=n&:toolbar=n&:showVizHome=no&:mobile=y&:showAppBanner=n'
    }
  />
);

storiesOf('Chart', module).add('default', chartDefault);
