import Layout from '@theme/Layout';
import React from 'react';
import { TileBackground } from '../components/backgrounds/tiles';
import { HeroIconOutline } from '../components/HeroIcons';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

const DocSectionLink = (item: {
  icon?: string;
  label: string;
  description?: string;
  to?: string;
  href?: string;
}) => (
  <Link
    to={item.to}
    href={item.href}
    className="group relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-reliable-green-400 focus-within:ring-offset-2 hover:border-gray-400 hover:bg-gray-50"
  >
    <div className="w-full relative flex gap-x-6 rounded-lg p-4">
      {item.icon && (
        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
          <HeroIconOutline
            icon={item.icon}
            className="w-6 h-6 text-gray-600 group-hover:text-reliable-green-400"
            aria-hidden="true"
          />
        </div>
      )}

      <div>
        <div className={clsx('font-semibold text-gray-900 hover:no-underline')}>
          {item.label}
          <span className="absolute inset-0" />
        </div>
        {item.description && <p className="mt-1 text-gray-600">{item.description as string}</p>}
      </div>
    </div>
  </Link>
);

const DocsHomePage = () => {
  return (
    <Layout background={<TileBackground />}>
      <div className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold leading-7 text-innovative-pink-400">
            Architect Documentation
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Create your own cloud platform w/ Architect
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
            commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
          </p>
        </div>
      </div>

      <div className="pb-24 px-6 sm:pb-32 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <DocSectionLink
              label="Getting started"
              description="Learn the basics of using Architect"
              icon="AcademicCapIcon"
              to="/docs/getting-started/introduction"
            />

            <DocSectionLink
              label="Component Guides"
              description="Build Components using the latest strategies in cloud architecture"
              icon="BuildingOffice2Icon"
              to="/guides/components/architecture/full-stack-apps/"
            />

            <DocSectionLink
              label="Datacenter Guides"
              description="Learn how to incorporate your favorite cloud providers and tools into your Architect Datacenters"
              icon="CloudIcon"
              to="/guides/datacenters/starters/local/"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DocsHomePage;
