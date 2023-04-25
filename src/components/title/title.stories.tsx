import type { Meta, StoryFn } from '@storybook/react';
import { Title, type TitleProps } from '.';

export default {
  title: 'Components/Title',
  component: Title,
  argTypes: {}
} as Meta<TitleProps>;

const Template: StoryFn<TitleProps> = args => {
  return <Title {...args}></Title>;
};

export const Default = Template.bind({});

Default.args = {
  subTitle: 'Component'
};
