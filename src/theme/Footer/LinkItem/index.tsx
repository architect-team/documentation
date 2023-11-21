import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import isInternalUrl from '@docusaurus/isInternalUrl';
import IconExternalLink from '@theme/Icon/ExternalLink';

export default function FooterLinkItem({item}) {
  const {to, href, label, prependBaseUrlToHref, ...props} = item;
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, {forcePrependBaseUrl: true});
  return (
    <Link
      className="text-sm flex leading-6 text-gray-300 hover:text-white hover:no-underline"
      {...(href
        ? {
            href: prependBaseUrlToHref ? normalizedHref : href,
          }
        : {
            to: toUrl,
          })}
      {...props}>
      {label}
      {href && !isInternalUrl(href) && <IconExternalLink className="mt-1" />}
    </Link>
  );
}
