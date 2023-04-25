import type { Meta, StoryFn } from '@storybook/react';
import { Test, type TestProps } from '.';

export default {
  title: 'Components/Test',
  component: Test,
  argTypes: {}
} as Meta<TestProps>;

const Template: StoryFn<TestProps> = args => {
  return <Test {...args}></Test>;
};

export const Default = Template.bind({});

Default.args = {
  subTitle: 'Component'
};
