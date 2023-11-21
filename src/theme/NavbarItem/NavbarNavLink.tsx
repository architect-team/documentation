import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import isInternalUrl from '@docusaurus/isInternalUrl';
import { isRegexpStringMatch } from '@docusaurus/theme-common';
import IconExternalLink from '@theme/Icon/ExternalLink';
import clsx from 'clsx';
import { HeroIconOutline } from '../../components/HeroIcons';

export default function NavbarNavLink({
  activeBasePath,
  activeBaseRegex,
  to,
  href,
  label,
  html,
  isDropdownLink,
  prependBaseUrlToHref,
  ...props
}) {
  // TODO all this seems hacky
  // {to: 'version'} should probably be forbidden, in favor of {to: '/version'}
  const toUrl = useBaseUrl(to);
  const activeBaseUrl = useBaseUrl(activeBasePath);
  const normalizedHref = useBaseUrl(href, { forcePrependBaseUrl: true });
  const isExternalLink = label && href && !isInternalUrl(href);
  // Link content is set through html XOR label
  const linkContentProps = html
    ? { dangerouslySetInnerHTML: { __html: html } }
    : {
        children: (
          <>
            {label}
            {isExternalLink && (
              <IconExternalLink {...(isDropdownLink && { width: 12, height: 12 })} />
            )}
          </>
        ),
      };

  let InlineLink = (additionalProps) => (
    <Link
      to={toUrl}
      isNavLink
      {...((activeBasePath || activeBaseRegex) && {
        isActive: (_match, location) =>
          activeBaseRegex
            ? isRegexpStringMatch(activeBaseRegex, location.pathname)
            : location.pathname.startsWith(activeBaseUrl),
      })}
      {...props}
      {...linkContentProps}
      {...additionalProps}
    />
  );

  if (href) {
    InlineLink = (additionalProps) => (
      <Link
        href={prependBaseUrlToHref ? normalizedHref : href}
        {...props}
        {...linkContentProps}
        {...additionalProps}
      />
    );
  }

  if (isDropdownLink) {
    return (
      <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
        {props.icon && (
          <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
            <HeroIconOutline
              icon={props.icon}
              className="w-6 h-6 text-gray-600 group-hover:text-reliable-green-400"
              aria-hidden="true"
            />
          </div>
        )}

        <div>
          <InlineLink className={clsx('font-semibold text-gray-900 hover:no-underline')}>
            {label}
            <span className="absolute inset-0" />
          </InlineLink>
          {props.description && <p className="mt-1 text-gray-600">{props.description}</p>}
        </div>
      </div>
    );
  }

  return <InlineLink />;
}
