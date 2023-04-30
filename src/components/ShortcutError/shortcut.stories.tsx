import type { Meta, StoryFn } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import { ShortcutError } from '.';
import { useTranslation } from 'next-i18next';
import { useEffect } from 'react';

export default {
  title: 'Components/ShortcutError',
  component: ShortcutError
} as Meta<typeof ShortcutError>;

const Template: StoryFn<typeof ShortcutError> = () => {
  const { t } = useTranslation();

  const [args, updateArgs] = useArgs<typeof ShortcutError>();

  useEffect(() => {
    updateArgs({
      tagline: t('pages.about.tagline'),
      title: t('pages.about.title')
    });
  }, [updateArgs]);
  return <ShortcutError {...args}></ShortcutError>;
};

export const Default = Template.bind({});

Default.args = {
  primaryColor: '#fff',
  secondaryColor: '#000'
};
