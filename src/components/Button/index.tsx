import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.scss';

const colorTypes = {
  gray: {
    className: 'bg-gray-200 hover:bg-gray-100 focus-visible:outline-gray-400',
  },
  'reliable-green': {
    className:
      'bg-reliable-green-400 text-white hover:text-white hover:bg-reliable-green-300 focus-visible:outline-reliable-green-400',
  },
  'innovative-pink': {
    className:
      'bg-innovative-pink-400 text-white hover:bg-innovative-pink-300 focus-visible:outline-innovative-pink-400',
  },
  'polo-blue': {
    className:
      'bg-polo-blue-100 text-white hover:text-white hover:bg-polo-blue-50 focus-visible:outline-polo-blue-100',
  },
  'slate-blue': {
    className:
      'bg-slate-blue-100 text-white hover:text-white hover:bg-slate-blue-50 focus-visible:outline-polo-blue-100',
  },
};

const sizeTypes = {
  xs: {
    className: 'rounded px-2 py-1 text-xs',
  },
  sm: {
    className: 'rounded px-2 py-1 text-sm',
  },
  md: {
    className: 'rounded-md px-2.5 py-1.5 text-sm',
  },
  lg: {
    className: 'rounded-md px-3 py-2 text-sm',
  },
  xl: {
    className: 'rounded-md px-3.5 py-2.5 text-sm',
  },
};

export type ButtonProps = PropsWithChildren<{
  size?: keyof typeof sizeTypes;
  color?: keyof typeof colorTypes;
  to?: string;
  href?: string;
  className?: string;
  onClick?: () => void;
}>;

export const Button = (props: ButtonProps) => {
  const sizeType = props.size ? sizeTypes[props.size] : sizeTypes.md;
  const colorType = props.color ? colorTypes[props.color] : colorTypes.gray;

  return props.href || props.to ? (
    <Link
      className={clsx(
        colorType.className,
        sizeType.className,
        'font-semibold shadow-sm no-underline hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
        styles.button,
        props.className
      )}
      onClick={props.onClick}
      to={props.to}
      href={props.href}
    >
      {props.children}
    </Link>
  ) : (
    <button
      className={clsx(
        colorType.className,
        sizeType.className,
        'font-semibold shadow-sm no-underline hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
        styles.button,
        props.className
      )}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
