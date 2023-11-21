import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Layout from '@theme/Layout';
import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  CommandLineIcon,
  CubeIcon,
  CubeTransparentIcon,
  PlayIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { FrameworkComparisonSection } from '../components/FrameworkComparisonSection';
import { FrameworkFeature } from '../components/FrameworkComparisonSection/feature';
import { testimonials } from '@site/testimonials';

const codeTabs = [
  {
    label: 'Components',
    language: 'yaml',
    code: `databases:
  users:
    type: postgres:15

builds:
  backend:
    context: ./backend

deployments:
  backend:
    image: \${{ builds.backend.image }}
    environment:
      DB_DSN: \${{ databases.users.url }}

services:
  backend:
    deployment: backend
    port: 8080`,
  },
  {
    label: 'Datacenters',
    language: 'hcl',
    code: `module "k8s" {
  source = "./k8s-cluster"
  inputs = {
    name = "\${datacenter.name}-cluster"
    region = variable.region
    vpcId = "vpc-123"
  }
}

environment {
  module "namespace" {
    source = "./k8s-namespace"
    inputs = {
      name = environment.name
      kubeconfig = module.k8s.kubeconfig
    }
  }

  deployment {
    module "deployment" {
      source = "./k8s-deployment"
      inputs = merge(node.inputs, {
        namespace = module.namespace.id
        kubeconfig = module.k8s.kubeconfig
      })
    }

    outputs = {
      id = module.deployment.id
    }
  }
}`,
  },
];

export default () => {
  const [activeCodeTab, setActiveCodeTab] = React.useState(0);

  const codeBlock = codeTabs[activeCodeTab];

  return (
    <Layout>
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-slate-blue-100/20">
        <div className="absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-white dark:from-slate-blue-700 sm:h-32" />
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <a href="#" className="inline-flex space-x-6 hover:no-underline">
                  <span className="rounded-full bg-slate-blue-600/10 dark:bg-slate-blue-400 px-3 py-1 text-sm font-semibold leading-6 text-slate-blue-600 dark:text-gray-200 ring-1 ring-inset ring-slate-blue-600/10 dark:ring-white/20">
                    What's new
                  </span>
                  <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600 dark:text-gray-200">
                    <span>Just shipped v0.1.0</span>
                    <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </a>
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
                  Deploy any app, anywhere
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-200">
                  We've split infrastructure-as-code (IaC) into twin frameworks, Components &
                  Datacenters, to give developers and operators self-service and autonomy.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    to="/docs"
                    className="rounded-md bg-slate-blue-50 px-3.5 py-2.5 text-sm font-semibold text-gray-100 hover:no-underline hover:text-white shadow-sm hover:bg-slate-blue-500 dark:hover:bg-slate-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-blue-600"
                  >
                    Documentation
                  </Link>
                  <Link
                    href="https://github.com/architect-team"
                    className="text-sm font-semibold leading-6 text-gray-900 hover:no-underline dark:text-white"
                  >
                    View on GitHub <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div
              className="absolute bg-white dark:bg-slate-blue-700 inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] shadow-xl shadow-slate-blue-600/10 ring-1 ring-slate-blue-50 md:-mr-20 lg:-mr-36"
              aria-hidden="true"
            />
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-slate-blue-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <div
                  className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-slate-blue-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                  aria-hidden="true"
                />
                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                  <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-800">
                      <div className="flex bg-gray-900">
                        <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                          {codeTabs.map((tab, index) => (
                            <a
                              key={index}
                              className={clsx(
                                'border-b px-4 py-2 cursor-pointer hover:text-white border-r border-r-white/10',
                                {
                                  'border-b-white/20': index !== activeCodeTab,
                                  'bg-gray-800 border-gray-600/10 text-white':
                                    index === activeCodeTab,
                                }
                              )}
                              onClick={() => setActiveCodeTab(index)}
                            >
                              {tab.label}
                            </a>
                          ))}
                        </div>
                      </div>
                      <div className="px-4 pt-4 h-96 overflow-y-auto">
                        <CodeBlock language={codeBlock.language} className="bg-transparent dark">
                          {codeBlock.code}
                        </CodeBlock>
                      </div>
                    </div>
                  </div>
                  <div
                    className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white dark:from-slate-blue-700 sm:h-32" />
      </div>

      {/* Overview section */}
      <FrameworkComparisonSection
        frameworks={[
          {
            supertext: 'Components',
            label: 'An open model for defining cloud-native apps',
            description:
              'Create portable, extensible, cloud-native apps in a language built for developers.',
            supertextClassName: 'text-reliable-green-400',
            features: [
              <FrameworkFeature
                title="Application-centric"
                icon={CubeIcon}
                iconClassName="bg-reliable-green-300"
              >
                Components only care about the details of your application, not its infrastructure.
                Use simple terms like "database" and "service" to describe what your application
                needs.
              </FrameworkFeature>,
              <FrameworkFeature
                title="Portable"
                icon={PlayIcon}
                iconClassName="bg-reliable-green-300"
              >
                Components aren't coupled to any particular infrastructure or cloud providers,
                allowing datacenters to dictate where and how each application should be deployed.
              </FrameworkFeature>,
              <FrameworkFeature
                title="Extensible"
                icon={CommandLineIcon}
                iconClassName="bg-reliable-green-300"
              >
                Components include native dependency management just like your favorite package
                managers (NPM, Pip, etc.). Just cite another Component as a dependency and it will
                be automatically run and integrated whenever you run your own Component.
              </FrameworkFeature>,
              <Link
                to="/docs/components/overview"
                className="rounded-md bg-reliable-green-400 px-3.5 py-2.5 inline-block mt-4 text-sm font-semibold text-white hover:no-underline hover:text-white shadow-sm hover:bg-reliable-green-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-reliable-green-300"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>,
            ],
          },
          {
            supertext: 'Datacenters',
            label: (
              <>
                Hook-driven
                <br />
                infrastructure-as-code
              </>
            ),
            description:
              'Offer self-service to developers while maintaining control over your infrastructure.',
            supertextClassName: 'text-polo-blue-200',
            features: [
              <FrameworkFeature
                title="Application-agnostic"
                icon={CubeTransparentIcon}
                iconClassName="bg-polo-blue-100"
              >
                Datacenters don't care how Components are designed. Use hooks to dictate how
                databases, deployments, services, ingresses, and more should behave in each
                Datacenter.
              </FrameworkFeature>,

              <FrameworkFeature
                title="Multi-tenant"
                icon={UserGroupIcon}
                iconClassName="bg-polo-blue-100"
              >
                Datacenters include hooks allowing you to define rules for multiple environments
                running on the same datacenter. Each environment can have its own DNS zone,
                namespace, secret store, and more.
              </FrameworkFeature>,

              <FrameworkFeature
                title="Zero-trust"
                icon={ShieldCheckIcon}
                iconClassName="bg-polo-blue-100"
              >
                Architect automatically extracts relationships between APIs, databases, and more, so
                that Datacenters can issue distinct application credentials and lock down network
                traffic w/out risking developer error.
              </FrameworkFeature>,
              <Link
                to="/docs/datacenters/overview"
                className="rounded-md bg-polo-blue-200 px-3.5 py-2.5 inline-block mt-4 text-sm font-semibold text-white hover:no-underline hover:text-white shadow-sm hover:bg-polo-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-polo-blue-100"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>,
            ],
          },
        ]}
      />

      {/* What your team gets from Architect */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-innovative-pink-brand">
              Why Architect?
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              What do you get with two frameworks that you don't get from one?
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Two frameworks offers a beautiful blend of self-service and control. Separating the
              responsibilities of Devs and Ops allows both to do their job more effectively.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <UserGroupIcon
                    className="h-5 w-5 flex-none text-reliable-green-400"
                    aria-hidden="true"
                  />
                  On-demand cloud environments
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p>
                    Components' built-in dependency manager allows them to deploy and integrate
                    their dependencies, their dependencies dependencies, and so on. This recursive
                    delivery means every Component can be stood up in a fresh environment with a
                    single command.
                  </p>
                  <p className="mt-6">
                    <Link
                      to="/docs"
                      className="text-sm font-semibold leading-6 text-reliable-green-400"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <UserGroupIcon
                    className="h-5 w-5 flex-none text-reliable-green-400"
                    aria-hidden="true"
                  />
                  Zero-trust security
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">
                    Components' focus on application relationships and architecture enables them to
                    automate security within your cloud. Every consuming application can be issued
                    unique credentials, and network traffic can be locked down so only applications
                    designed to talk to each other can resolve each other.
                  </p>
                  <p className="mt-6">
                    <Link
                      to="/docs"
                      className="text-sm font-semibold leading-6 text-reliable-green-400"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <UserGroupIcon
                    className="h-5 w-5 flex-none text-reliable-green-400"
                    aria-hidden="true"
                  />
                  A customizable cloud platform
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">
                    The self-service capabilities of Components are all built on top of a flexible
                    framework giving you full control of your platform experience, Datacenters.
                    Developers are free to create new apps and environments, and every deployment
                    will conform to your cloud needs.
                  </p>
                  <p className="mt-6">
                    <Link
                      to="/docs/datacenters/overview"
                      className="text-sm font-semibold leading-6 text-reliable-green-400"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-innovative-pink-brand">
              Testimonials
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              We work with amazing people
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col border-t first:border-t-0 lg:border-t-0 lg:border-l first:border-l-0 border-gray-200 lg:px-12 first:pl-0 last:pr-0 py-12 lg:py-0">
                <div
                  className={clsx({
                    'dark:p-4 dark:bg-gray-50 dark:rounded inline-block w-fit':
                      !testimonial.logoDark,
                  })}
                >
                  <img className="h-8 self-start" src={testimonial.logo} alt="" />
                </div>
                <figure className="mt-10 flex flex-auto flex-col justify-between">
                  <blockquote className="text-lg leading-8 text-gray-900 dark:text-white">
                    <p>{testimonial.quote}</p>
                  </blockquote>
                  <figcaption className="mt-10 flex items-center gap-x-6">
                    <img
                      className="h-14 w-14 rounded-full bg-gray-50"
                      src={testimonial.img}
                      alt=""
                    />
                    <div className="text-base">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </div>
                      <div className="mt-1 text-gray-500 dark:text-gray-400">
                        {testimonial.title}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
