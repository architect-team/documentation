import React from 'react';
import Layout from '@theme/Layout';
import { TileBackground } from '../components/backgrounds/tiles';

const WriteForUsPage = () => (
  <Layout background={<TileBackground />}>
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base font-semibold leading-7 text-innovative-pink-400">Write for us</p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
          The cloud can be a big and confusing place.
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          But it doesn't have to be
        </p>
      </div>
    </div>

    <div className="container mx-auto prose dark:prose-invert">
      <p>
        With Architect’s continuous delivery platform, any developer can create preview, staging,
        and even prod environments. And we’re dependency-aware and powered by GitOps so that every
        PR spins up a deployment that is production-grade, including the APIs, databases, and events
        it needs to run.
      </p>

      <p>
        Bottom line? We simplify the journey from conception to production with our tooling, making
        every deploy easier for developers. You can help us further simplify that journey by sharing
        your knowledge and creating cloud-focused tutorials on our site, as a part of our community.
      </p>

      <p>
        We want your help in building a valuable, technical knowledge base. So if you love working
        with cloud technologies, sharing your knowledge and insights, and being part of an active
        community of similar folks, we want to hear from you!
      </p>

      <h2>What's in it for you?</h2>

      <p>
        Beyond the feeling of satisfaction of contributing to a cloud tutorial knowledge base, there
        are, of course, some specific perks to writing for us.
      </p>

      <ul>
        <li>Earn $300 per post if you BYO topic</li>
        <li>Earn $500 per post if you choose a topic from our list of desired content</li>
        <li>Work with experienced editors to polish your prose and improve your writing</li>
        <li>
          Put your work in front of our technical audience and community and influencer network
        </li>
        <li>Cross post and stock your own blog with content, while getting paid to do so</li>
        <li>Build your brand and add valuable skills to your resume</li>
      </ul>

      <h2>If all of that sounds good, let's get started!</h2>

      <p>
        Fill out the form below to apply. We ask for information about your tech and writing
        experience, as well as links to any writing samples or blog posts that you’re proud of, your
        LinkedIn profile, and also a few ideas for the kinds of topics that you would be excited to
        write about.
      </p>

      <p>From there, you’ll want to:</p>

      <ol>
        <li>
          Wait for us to review your submission and reach out with next steps, assuming we have room
          in the program and it seems like a good match. This should take us 10 days max, and
          hopefully a lot less!
        </li>
        <li>Our editorial team will work with you to help decide on your first topic.</li>
        <li>Submit a draft, which you work with our editors to finalize.</li>
        <li>
          We get the post up on the site, add to our community knowledge base, and you get paid.
        </li>
        <li>
          From there, you’re an officially onboarded author and can keep working on additional
          topics and content!
        </li>
      </ol>

      <p>
        Don’t worry if this sounds like a lot in the beginning. We’re here to help set you up for
        success and will include tips for a successful article in your onboarding materials.
      </p>
    </div>

    <div className="mx-auto container isolate pt-8 pb-24 mt-16 sm:pb-32 sm:pt-24 border-t border-gray-900/10 dark:border-white/10">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Sign up to write for us
        </h2>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
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
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-reliable-green-brand sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="linkedin-profile"
              className="block text-sm font-semibold leading-6 text-slate-blue-200 dark:text-reliable-green-400"
            >
              LinkedIn profile (required)
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="linkedin-profile"
                id="linkedin-profile"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-reliable-green-brand sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="writing-samples"
              className="block text-sm font-semibold leading-6 text-slate-blue-200 dark:text-reliable-green-400"
            >
              Link to writing samples (required)
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="writing-samples"
                id="writing-samples"
                autoComplete="organization"
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
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-innovative-pink-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-innovative-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-innovative-pink-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </Layout>
);

export default WriteForUsPage;
