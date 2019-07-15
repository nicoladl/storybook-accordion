/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import Accordion from './Accordion';

storiesOf('Accordion', module)
  .add('with text', () => ({
    components: { Accordion },
    template: '<accordion @click="action">Hello Accordion</accordion>',
    methods: { action: action('clicked') },
  }));