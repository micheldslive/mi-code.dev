/* eslint-disable @typescript-eslint/no-misused-promises */
import { zodResolver } from '@hookform/resolvers/zod';
import Head from 'next/head';
import { useState } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import {
  Base,
  Form,
  FormGroup,
  Input,
  Label,
  Textarea,
  Toast
} from '@/src/components';
import { Api } from '@/src/libs';
import { emailSchema } from '@/src/schemas';
import { stripHtml } from '../../utils/stripHtml';
import { useRouter } from 'next/router';
import type { DefaultProps, EmailProps } from '@/src/@types';
import { useTranslation } from 'next-i18next';
import { SendButton } from '../../components/SendButton';

export type ContactProps = DefaultProps;

export const ContactTemplate = ({
  primaryColor,
  secondaryColor
}: ContactProps) => {
  const { basePath } = useRouter();
  const { t } = useTranslation();

  const [isEmailSent, setIsEmailSent] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<EmailProps>({
    resolver: zodResolver(emailSchema)
  });

  const onSubmit: SubmitHandler<EmailProps> = async data => {
    try {
      const api = new Api(basePath).getInstance();
      await api.post('/api/email', data);
      setIsEmailSent(true);
      setShowToast(true);
      reset();
    } catch (e) {
      console.error(e);
      setIsEmailSent(false);
      setShowToast(true);
    }
  };

  return (
    <Base
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
      title={t('pages.contact.title')}
      tagline={t('pages.contact.tagline')}
    >
      <Head>
        <title>{t('pages.contact.title')}</title>
        <meta content={t('pages.contact.title')} property='og:title' />
        <meta
          content={stripHtml(t('pages.contact.description'))}
          name='description'
        />
        <meta
          content={stripHtml(t('pages.contact.description'))}
          property='og:description'
        />
        <meta content='https://micode-dev.vercel.app/about' property='og:url' />
      </Head>

      <div>
        <p
          dangerouslySetInnerHTML={{ __html: t('pages.contact.description') }}
        />
        <h2>Mande um email</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label htmlFor='name'>{t('pages.contact.labels.name')}</Label>
            <Input
              placeholder={t('pages.contact.placeholders.name')}
              {...register('name')}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </FormGroup>
          <FormGroup>
            <Label htmlFor='email'>{t('pages.contact.labels.email')}</Label>
            <Input
              placeholder={t('pages.contact.placeholders.email')}
              {...register('email')}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </FormGroup>
          <FormGroup>
            <Label htmlFor='message'>{t('pages.contact.labels.message')}</Label>
            <Textarea
              placeholder={t('pages.contact.placeholders.message')}
              rows={4}
              {...register('message')}
            />
            {errors.message && <p>{errors.message.message}</p>}
          </FormGroup>
          <FormGroup>
            <SendButton type='submit'>
              {t('pages.contact.labels.button')}
            </SendButton>
          </FormGroup>
        </Form>

        <Toast
          title={
            isEmailSent
              ? t('pages.contact.toast.success.title')
              : t('pages.contact.toast.fail.title')
          }
          description={
            isEmailSent
              ? t('pages.contact.toast.success.description')
              : t('pages.contact.toast.fail.description')
          }
          isSuccess={isEmailSent}
          showToast={showToast}
          setShowToast={setShowToast}
        />
      </div>
    </Base>
  );
};
