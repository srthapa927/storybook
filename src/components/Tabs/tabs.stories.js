import React from 'react';
import { Tabs, Tab } from './index.js';
import { storiesOf } from '@storybook/react';

storiesOf('Tabs', module).add('Default', () => (
  <Tabs>
    <Tab tab="Tab 1">
      <h1>Tab 1</h1>
    </Tab>
    <Tab tab="Tab 2">
      <h1>Tab 2</h1>
    </Tab>
    <Tab tab="Tab 3">
      <h1>Tab 3</h1>
    </Tab>
  </Tabs>
));
