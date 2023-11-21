import React from 'react';
import clsx from 'clsx';
import { NewsletterForm } from '@site/src/components/NewsletterForm';
export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer className={clsx('bg-onyx-900 dark')}>
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="container mx-auto py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">{logo}</div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">{links}</div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">
              Subscribe to our newsletter
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-300">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
          </div>
          <NewsletterForm />
        </div>
        <div className="mt-8 border-t border-white/10 pt-8">{copyright}</div>
      </div>
    </footer>
  );
}
