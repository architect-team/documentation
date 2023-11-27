import { XMarkIcon } from '@heroicons/react/20/solid';
import React from 'react';

export type PageBannerProps = {
  message: string | JSX.Element;
  dismissable?: boolean;
};

export const PageBanner = ({ message, dismissable }: PageBannerProps) => {
  const [isHidden, setIsHidden] = React.useState(false);

  return dismissable !== false || !isHidden ? (
    <div className="flex items-center gap-x-6 bg-slate-blue-brand px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <p className="text-sm leading-6 text-white">{message}</p>
      <div className="flex flex-1 justify-end">
        {dismissable !== false && (
          <button
            type="button"
            className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
            onClick={() => setIsHidden(true)}
          >
            <span className="sr-only">Dismiss</span>
            <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  ) : undefined;
};
