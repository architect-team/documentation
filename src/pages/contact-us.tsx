import React from 'react';
import Layout from '@theme/Layout';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { TileBackground } from '../components/backgrounds/tiles';

const ContactUsPage = () => (
  <Layout background={<TileBackground />}>
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
      <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
        <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <p className="text-base font-semibold leading-7 text-innovative-pink-brand">
            Get the help you need
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Deliver faster with less risk.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-200">
            We’re here to help. Tell us how you want your team to incorporate feature management
            into your software development cycle, and an expert will be in touch as soon as
            possible.
          </p>
          <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600 dark:text-gray-200">
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Telephone</span>
                <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
              </dt>
              <dd>
                <a
                  className="hover:text-gray-900 dark:hover:text-white hover:no-underline"
                  href="tel:+1 (555) 234-5678"
                >
                  +1 (617) 564-0784
                </a>
              </dd>
            </div>
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Email</span>
                <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
              </dt>
              <dd>
                <a
                  className="hover:text-gray-900 dark:hover:text-white hover:no-underline"
                  href="mailto:hello@example.com"
                >
                  hello@architect.io
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <form action="#" method="POST" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
        <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-slate-blue-200 dark:text-reliable-green-400"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-reliable-green-brand sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-slate-blue-200 dark:text-reliable-green-400"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-reliable-green-brand sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-slate-blue-200 dark:text-reliable-green-400"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-reliable-green-brand sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold leading-6 text-slate-blue-200 dark:text-reliable-green-400"
              >
                Phone number
              </label>
              <div className="mt-2.5">
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-reliable-green-brand sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-slate-blue-200 dark:text-reliable-green-400"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-reliable-green-brand sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="rounded-md bg-innovative-pink-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-innovative-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-innovative-pink-600"
            >
              Send message
            </button>
          </div>
        </div>
      </form>
    </div>
  </Layout>
);

export default ContactUsPage;
