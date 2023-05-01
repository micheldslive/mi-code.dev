import { type IconBaseProps } from 'react-icons';
import { RiCheckboxCircleFill, RiErrorWarningFill } from 'react-icons/ri';

export interface IconProps {
  isSuccess?: boolean;
}

export const Icon = ({ isSuccess, ...rest }: IconProps & IconBaseProps) => {
  return (
    <>
      {isSuccess ? (
        <RiCheckboxCircleFill {...rest} />
      ) : (
        <RiErrorWarningFill {...rest} />
      )}
    </>
  );
};
