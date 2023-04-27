import type LinkProps from 'next/link';
import { Anchor, Title } from './styles';

export interface LinkProps {
  title: string;
  url: string;
  icon: JSX.Element;
  variant: Variants;
}

type Variants = 'instagram' | 'email' | 'github' | 'linkedin';

interface ILinkProps {
  link: LinkProps;
  index: number;
}

export const Link = ({ link, index }: ILinkProps) => {
  const target = link.url.startsWith('http') ? '_blank' : '_self';

  return (
    <Anchor type={link.variant} key={index} href={link.url} target={target}>
      <Title>{link.title}</Title>
      {link.icon}
    </Anchor>
  );
};
