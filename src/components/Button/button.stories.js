import React from 'react';
import Button from './index.js';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Button
      label={text('label', 'Default')}
      onClick={action('click', 'hello')}
    />
  ))
  .add('With Primary', () => (
    <Button label="Primary Button" onClick={action('click')} />
  ))
  .add('With Outline', () => (
    <Button
      label="Ouline Button"
      style={{ background: 'transparent', border: '3px solid #fecd43' }}
      onClick={action('click')}
    />
  ))
  .add('With Rounder Corners', () => (
    <Button
      label="Rounded Button"
      style={{ borderRadius: '15px' }}
      onClick={action('click')}
    />
  ))
  .add('Disabled', () => (
    <Button
      disabled={boolean('Disabled', true)}
      label="Disabled Button"
      onClick={action('click')}
    />
  ));
