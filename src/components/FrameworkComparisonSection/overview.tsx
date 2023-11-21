import clsx from 'clsx';
import React from 'react';
import { PropsWithChildren } from 'react';

export type FrameworkOverviewProps = PropsWithChildren<{
  label: JSX.Element | string;
  description: string;
  supertext: string;
  supertextClassName?: string;
}>;

export const FrameworkOverview = (props: FrameworkOverviewProps) => (
  <div className="pt-24 sm:pt-32 lg:pt-40">
    <div>
      <h2 className={clsx('text-base font-semibold leading-7', props.supertextClassName)}>
        {props.supertext}
      </h2>
      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
        {props.label}
      </p>
      <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">
        {props.description}
      </p>
    </div>
    {props.children}
  </div>
);
