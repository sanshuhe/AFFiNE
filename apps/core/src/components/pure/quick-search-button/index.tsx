import { styled } from '@affine/component';
import { ArrowDownSmallIcon } from '@blocksuite/icons';
import {
  IconButton,
  type IconButtonProps,
} from '@toeverything/components/button';

const StyledIconButtonWithAnimate = styled(IconButton)(() => {
  return {
    svg: {
      transition: 'transform 0.15s ease-in-out',
    },
    ':hover': {
      svg: {
        transform: 'translateY(3px)',
      },
      '::after': {
        background: 'var(--affine-background-primary-color)',
      },
    },
  };
});

// fixme(himself65): need to refactor
export const QuickSearchButton = ({
  onClick,
  ...props
}: Omit<IconButtonProps, 'children'>) => {
  return (
    <StyledIconButtonWithAnimate
      data-testid="header-quickSearchButton"
      {...props}
      onClick={e => {
        onClick?.(e);
      }}
    >
      <ArrowDownSmallIcon />
    </StyledIconButtonWithAnimate>
  );
};
