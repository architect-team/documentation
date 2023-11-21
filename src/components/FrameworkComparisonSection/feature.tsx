import clsx from 'clsx';
import React from 'react';
import { PropsWithChildren } from 'react';

export const FrameworkFeature = (
  props: PropsWithChildren<{
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    iconClassName?: string;
  }>
) => (
  <div className="relative pl-16 mb-4 mt-8 lg:mt-12">
    <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
      <div
        className={clsx(
          'absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg',
          props.iconClassName
        )}
      >
        <props.icon className="h-6 w-6 text-white" aria-hidden="true" />
      </div>
      {props.title}
    </dt>
    <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">{props.children}</dd>
  </div>
);
