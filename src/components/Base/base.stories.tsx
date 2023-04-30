import type { Meta, StoryFn } from '@storybook/react';
import { Base, type BaseProps } from '.';

export default {
  title: 'Components/Base',
  component: Base
} as Meta<BaseProps>;

const Template: StoryFn<BaseProps> = args => {
  return <Base {...args}></Base>;
};

export const Default = Template.bind({});

Default.args = {
  tagline: 'Code. Sleep. Repeat.',
  title: 'About | Michel Domingos',
  primaryColor: '#fff',
  secondaryColor: '#000'
};
