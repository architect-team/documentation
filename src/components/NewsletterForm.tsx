import React from 'react';

export const NewsletterForm = () => (
  <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
    <label htmlFor="email-address" className="sr-only">
      Email address
    </label>
    <input
      type="email"
      name="email-address"
      id="email-address"
      autoComplete="email"
      required
      className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-reliable-green-brand sm:w-56 sm:text-sm sm:leading-6"
      placeholder="Enter your email"
    />
    <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
      <button
        type="submit"
        className="flex w-full items-center justify-center rounded-md bg-reliable-green-brand px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-reliable-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-reliable-green-brand"
      >
        Subscribe
      </button>
    </div>
  </form>
);
