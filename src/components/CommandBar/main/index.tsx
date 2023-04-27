import { KBarPortal, KBarProvider } from 'kbar';
import Lottie, {
  type LottieComponentProps,
  type LottieRefCurrentProps
} from 'lottie-react';
import { useRouter } from 'next/router';
import {
  type PropsWithChildren,
  type ReactElement,
  useRef,
  useState,
  useCallback
} from 'react';
import { RiGithubLine, RiInstagramLine, RiLinkedinLine } from 'react-icons/ri';
import { RenderResults, Toast } from '@/components';
import { Animator, Positioner, Search } from './styles';

import aboutIcon from '@/public/static/icons/about.json';
import copyLinkIcon from '@/public/static/icons/copy-link.json';
import emailIcon from '@/public/static/icons/email.json';
import homeIcon from '@/public/static/icons/home.json';
import projectsIcon from '@/public/static/icons/projects.json';
import sourceIcon from '@/public/static/icons/source.json';
import { useI18n } from '@/locales';

export function CommandBar({ children }: PropsWithChildren) {
  const copyLinkRef = useRef<LottieRefCurrentProps>(null);
  const emailRef = useRef<LottieRefCurrentProps>(null);
  const sourceRef = useRef<LottieRefCurrentProps>(null);
  const homeRef = useRef<LottieRefCurrentProps>(null);
  const aboutRef = useRef<LottieRefCurrentProps>(null);
  const projectsRef = useRef<LottieRefCurrentProps>(null);

  const router = useRouter();
  const [showToast, setShowToast] = useState(false);

  const { scopedT } = useI18n();
  const t = scopedT('common.kbar');

  const copyUrl = useCallback(() => {
    void navigator.clipboard.writeText(window.location.href);
    setShowToast(true);
  }, []);

  const iconStyle = { width: 24, height: 24 };

  type ActionType = {
    id: string;
    name: string;
    shortcut: string[];
    keywords: string;
    section: string;
    perform: () => void;
    icon: ReactElement<LottieComponentProps> | ReactElement;
  };

  const actions: ActionType[] = [
    {
      id: 'home',
      name: t('actions.home'),
      shortcut: ['g', 'h'],
      keywords: 'go-home',
      section: t('sections.goto'),
      perform: () => void router.push('/'),
      icon: (
        <Lottie
          lottieRef={homeRef}
          style={iconStyle}
          animationData={homeIcon}
          loop={false}
          autoplay={false}
        />
      )
    },
    {
      id: 'about',
      name: t('actions.about'),
      shortcut: ['g', 'a'],
      keywords: 'go-about',
      section: t('sections.goto'),
      perform: () => void router.push('/about'),
      icon: (
        <Lottie
          lottieRef={aboutRef}
          style={iconStyle}
          animationData={aboutIcon}
          loop={false}
          autoplay={false}
        />
      )
    },
    {
      id: 'projects',
      name: t('actions.projects'),
      shortcut: ['g', 'p'],
      keywords: 'go-projects',
      section: t('sections.goto'),
      perform: () => void router.push('/projects'),
      icon: (
        <Lottie
          lottieRef={projectsRef}
          style={iconStyle}
          animationData={projectsIcon}
          loop={false}
          autoplay={false}
        />
      )
    },
    {
      id: 'copy',
      name: t('actions.copy'),
      shortcut: ['u'],
      keywords: 'copy-url',
      section: t('sections.general'),
      perform: copyUrl,
      icon: (
        <Lottie
          lottieRef={copyLinkRef}
          style={iconStyle}
          animationData={copyLinkIcon}
          loop={false}
          autoplay={false}
        />
      )
    },
    {
      id: 'email',
      name: t('actions.email'),
      shortcut: ['e'],
      keywords: 'send-email',
      section: t('sections.general'),
      perform: () => void router.push('/contact'),
      icon: (
        <Lottie
          lottieRef={emailRef}
          style={iconStyle}
          animationData={emailIcon}
          loop={false}
          autoplay={false}
        />
      )
    },
    {
      id: 'source',
      name: t('actions.source'),
      shortcut: ['s'],
      keywords: 'view-source',
      section: t('sections.general'),
      perform: () =>
        window.open('https://github.com/micheldslive/micode.dev', '_blank'),
      icon: (
        <Lottie
          lottieRef={sourceRef}
          style={iconStyle}
          animationData={sourceIcon}
          loop={false}
          autoplay={false}
        />
      )
    },
    {
      id: 'github',
      name: 'GitHub',
      shortcut: ['f', 'g'],
      keywords: 'go-github',
      section: t('sections.follow'),
      perform: () => window.open('https://github.com/micheldslive', '_blank'),
      icon: <RiGithubLine />
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      shortcut: ['f', 'l'],
      keywords: 'go-linkedin',
      section: t('sections.follow'),
      perform: () =>
        window.open('https://linkedin.com/in/micheldslive', '_blank'),
      icon: <RiLinkedinLine />
    },
    {
      id: 'instagram',
      name: 'Instagram',
      shortcut: ['f', 'i'],
      keywords: 'go-instagram',
      section: t('sections.follow'),
      perform: () =>
        window.open('https://www.instagram.com/micheldslive', '_blank'),
      icon: <RiInstagramLine />
    }
  ];

  return (
    <>
      <KBarProvider actions={actions}>
        <KBarPortal>
          <Positioner>
            <Animator>
              <Search placeholder='Type a command or search…' />
              <RenderResults />
            </Animator>
          </Positioner>
        </KBarPortal>

        {children}
      </KBarProvider>

      <Toast
        title={t('toast.title')}
        description={t('toast.description')}
        isSuccess
        showToast={showToast}
        setShowToast={setShowToast}
      />
    </>
  );
}
