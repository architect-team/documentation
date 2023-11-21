import React from 'react';
import clsx from 'clsx';
import {
  useSidebarBreadcrumbs,
  useHomePageRoute,
} from '@docusaurus/theme-common/internal';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
import HomeBreadcrumbItem from '@theme/DocBreadcrumbs/Items/Home';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

// TODO move to design system folder
function BreadcrumbsItemLink({children, href, isLast}) {
  const className = 'ml-4 text-sm font-medium text-gray-500 dark:text-gray-300';
  if (isLast) {
    return (
      <span className={clsx(className)} itemProp="name">
        {children}
      </span>
    );
  }

  return href ? (
    <Link className={clsx(className, 'hover:no-underline hover:text-gray-700 dark:hover:text-white')} href={href} itemProp="item">
      <span itemProp="name">{children}</span>
    </Link>
  ) : (
    // TODO Google search console doesn't like breadcrumb items without href.
    // The schema doesn't seem to require `id` for each `item`, although Google
    // insist to infer one, even if it's invalid. Removing `itemProp="item
    // name"` for now, since I don't know how to properly fix it.
    // See https://github.com/facebook/docusaurus/issues/7241
    <span className={className}>{children}</span>
  );
}

// TODO move to design system folder
function BreadcrumbsItem({children, active, index, addMicrodata}) {
  return (
    <li
      {...(addMicrodata && {
        itemScope: true,
        itemProp: 'itemListElement',
        itemType: 'https://schema.org/ListItem',
      })}
    >
      <div className="flex items-center">
        <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
        {children}
        <meta itemProp="position" content={String(index + 1)} />
      </div>
    </li>
  );
}

export default function DocBreadcrumbs() {
  const breadcrumbs = useSidebarBreadcrumbs();
  const homePageRoute = useHomePageRoute();
  if (!breadcrumbs) {
    return null;
  }
  return (
    <nav
      className="flex pb-6 pt-2"
      aria-label={translate({
        id: 'theme.docs.breadcrumbs.navAriaLabel',
        message: 'Breadcrumbs',
        description: 'The ARIA label for the breadcrumbs',
      })}>
      <ol
        role="list"
        className="flex items-center space-x-4"
        itemScope
        itemType="https://schema.org/BreadcrumbList">
        {homePageRoute && <HomeBreadcrumbItem />}
        {breadcrumbs.map((item, idx) => {
          const isLast = idx === breadcrumbs.length - 1;
          return (
            <BreadcrumbsItem
              key={idx}
              active={isLast}
              index={idx}
              addMicrodata={!!item.href}>
              <BreadcrumbsItemLink href={item.href} isLast={isLast}>
                {item.label}
              </BreadcrumbsItemLink>
            </BreadcrumbsItem>
          );
        })}
      </ol>
    </nav>
  );
}
