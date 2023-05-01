import type { Meta, StoryFn } from '@storybook/react';
import { AboutTemplate, type AboutProps } from '.';

export default {
  title: 'Pages/About',
  component: AboutTemplate,
  argTypes: {
    imagePath: {
      table: {
        disable: true
      }
    }
  }
} as Meta<AboutProps>;

const Template: StoryFn<AboutProps> = args => {
  return <AboutTemplate {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  primaryColor: 'pink',
  secondaryColor: 'purple'
};
