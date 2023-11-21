import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {translate} from '@docusaurus/Translate';
import IconHome from '@theme/Icon/Home';

export default function HomeBreadcrumbItem() {
  const homeHref = useBaseUrl('/');

  return (
    <li>
      <div>
        <Link
          aria-label={translate({
            id: 'theme.docs.breadcrumbs.home',
            message: 'Home page',
            description: 'The ARIA label for the home page in the breadcrumbs',
          })}
          className="text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-white"
          href={homeHref}
        >
          <IconHome className="h-5 w-5 flex-shrink-0" />
        </Link>
      </div>
    </li>
  );
}
