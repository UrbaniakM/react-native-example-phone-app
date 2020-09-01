/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Text, View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {Card} from './Card';

const cardDefault = () => (
  <Card>
    <Text>Card content</Text>
  </Card>
);

const multipleCards = () => (
  <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
    <Card style={{margin: 8}}>
      <Text>Card 1</Text>
    </Card>
    <Card style={{margin: 8}}>
      <Text>Card 2</Text>
    </Card>
    <Card style={{margin: 8}}>
      <Text>Card 3</Text>
    </Card>
    <Card style={{margin: 8}}>
      <Text>Card 4</Text>
    </Card>
    <Card style={{margin: 8}}>
      <Text>Card 5</Text>
    </Card>
    <Card style={{margin: 8}}>
      <Text>Card 6</Text>
    </Card>
  </View>
);

storiesOf('Card', module)
  .add('default', cardDefault)
  .add('multiple cards', multipleCards);
