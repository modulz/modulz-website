import React from 'react';
import { ChromelessButton, ChromelessButtonProps } from '@modulz/radix';

type ButtonProps = ChromelessButtonProps & React.ComponentPropsWithRef<'a'> & { as?: any };

export const MarketingButton = React.forwardRef<HTMLButtonElement, ButtonProps>((props, forwardedRef) => (
  <ChromelessButton
    ref={forwardedRef}
    {...props}
    sx={{
      position: 'relative',
      zIndex: '1',
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'normal',
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '.05em',
      transition: 'all 100ms ease',
      fontSize: 2,
      height: 6,
      minWidth: 6,
      paddingX: 3,
      backgroundColor: 'transparent',
      color: 'blue600',
      '&::before': {
        content: "''",
        display: 'block',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        zIndex: '-1',
        backgroundColor: 'white',
        transition: 'all 50ms ease',
        boxShadow: (theme) => `inset 0 0 0 1px currentColor`,
      },
      '&::after': {
        content: "''",
        display: 'block',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '6px',
        left: '6px',
        zIndex: '-2',
        pointerEvents: 'none',
        opacity: 0.4,
        backgroundImage: (theme) => `repeating-linear-gradient(
			-45deg,
			currentColor,
			currentColor 1px,
			transparent 1px,
			transparent 6px
		)`,
      },
      '&:hover::after, &:active::after, &:focus::after': {
        // boxShadow: (theme) => `inset 0 0 0 1px currentColor`,
        opacity: 1,
      },
      '&:active': {
        transform: 'translate(1px, 1px)',
      },
      '&:active::after': {
        transform: 'translate(-6px, -6px)',
      },
      ...props.sx,
    }}
  />
));
