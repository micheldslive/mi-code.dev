import { useKBar } from 'kbar';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useI18n } from '@/locales';
import {
  Anchor,
  Aside,
  CmdButton,
  CmdIcon,
  Header,
  Hover,
  List,
  LogoButton,
  Nav,
  NavContainer
} from './styles';
import { Themming } from '@/components';
import MiCode from '@/public/static/images/mi-code.svg';

export const pages = ['about', 'projects', 'contact'] as const;

export const Navbar = () => {
  const { asPath } = useRouter();
  const [hovered, setHovered] = useState('');
  const { query } = useKBar();
  const { scopedT } = useI18n();
  const t = scopedT('common.navbar');

  return (
    <Header>
      <LogoButton href='/'>
        <MiCode />
      </LogoButton>
      <Nav>
        <List>
          {pages.map(page => {
            const path = `/${page.toLowerCase()}`;
            const isHovered = hovered === page;

            return (
              <li key={page}>
                <Anchor href={path}>
                  <NavContainer
                    onHoverStart={() => setHovered(page)}
                    onHoverEnd={() => setHovered('')}
                    css={
                      asPath === path
                        ? {
                            color: '$primary',
                            '&::after': { opacity: 1 }
                          }
                        : {}
                    }
                  >
                    {isHovered && (
                      <Hover
                        layoutId='nav'
                        initial={{ y: 0 }}
                        animate={{
                          y: -1,
                          transition: {
                            type: 'tween',
                            repeat: 1,
                            repeatType: 'reverse'
                          }
                        }}
                        exit={{ y: 0 }}
                      />
                    )}
                    {t(page)}
                  </NavContainer>
                </Anchor>
              </li>
            );
          })}
        </List>
      </Nav>
      <Aside>
        <Themming />
        <CmdButton type='button' aria-label='Command' onClick={query.toggle}>
          <CmdIcon />
        </CmdButton>
      </Aside>
    </Header>
  );
};
