import * as ToastPrimitive from '@radix-ui/react-toast';
import { type ReactNode } from 'react';
import { Icon, type IconProps } from './icon';
import {
  Close,
  Description,
  IconContainer,
  Root,
  Title,
  Viewport
} from './styles';

export interface ToastProps extends IconProps {
  title: string;
  description: string;
  showToast: boolean;
  setShowToast: (showToast: boolean) => void;
  children?: ReactNode;
}

export const Toast = ({
  title,
  description,
  isSuccess,
  showToast,
  setShowToast,
  children
}: ToastProps) => {
  return (
    <ToastPrimitive.Provider>
      {children}
      <Root open={showToast} onOpenChange={setShowToast} aria-label='toast'>
        <IconContainer>
          <Icon
            fill={isSuccess ? '#4cb782' : '#b75c4c'}
            isSuccess={isSuccess}
          />
        </IconContainer>
        <div>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </div>
        <Close aria-label='Close'>
          <span aria-hidden>×</span>
        </Close>
      </Root>
      <Viewport />
    </ToastPrimitive.Provider>
  );
};
