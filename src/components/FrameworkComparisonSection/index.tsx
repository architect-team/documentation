import React from 'react';
import { FrameworkOverview, FrameworkOverviewProps } from './overview';
import clsx from 'clsx';

export type FrameworkComparisonSectionProps = {
  className?: string;
  frameworks: (FrameworkOverviewProps & {
    features: JSX.Element[];
  })[];
};

const StandardFrameworkComparisonSection = (props: FrameworkComparisonSectionProps) => (
  <div
    className={clsx(
      'mx-auto max-w-7xl px-6 lg:px-8 pb-24 sm:pb-32 lg:pb-40 grid grid-cols-1 md:grid-cols-2 gap-x-36',
      props.className
    )}
  >
    {props.frameworks.map((framework, index) => (
      <FrameworkOverview
        key={index}
        supertext={framework.supertext}
        label={framework.label}
        description={framework.description}
        supertextClassName={framework.supertextClassName}
      >
        {framework.features}
      </FrameworkOverview>
    ))}
  </div>
);

const SymetricalFrameworkComparisonSection = (props: FrameworkComparisonSectionProps) => {
  const features: JSX.Element[] = [];
  for (let i = 0; i < props.frameworks[0].features.length; i++) {
    for (let j = 0; j < props.frameworks.length; j++) {
      features.push(props.frameworks[j].features[i]);
    }
  }

  return (
    <div
      className={clsx(
        'mx-auto max-w-7xl px-6 lg:px-8 pb-32 lg:pb-40 grid grid-cols-2 gap-x-36',
        props.className
      )}
    >
      {props.frameworks.map((framework, index) => (
        <FrameworkOverview
          key={index}
          supertext={framework.supertext}
          label={framework.label}
          description={framework.description}
          supertextClassName={framework.supertextClassName}
        />
      ))}

      {features.map((feature, index) => (
        <div key={index}>{feature}</div>
      ))}
    </div>
  );
};

export const FrameworkComparisonSection = (props: FrameworkComparisonSectionProps) => {
  let hasSameNumberOfFeatures = true;
  for (const framework of props.frameworks) {
    if (framework.features.length !== props.frameworks[0].features.length) {
      hasSameNumberOfFeatures = false;
      break;
    }
  }

  const modifiedProps = { ...props };
  const className = `${modifiedProps.className}`;
  delete modifiedProps.className;

  return (
    <section className={className}>
      {hasSameNumberOfFeatures ? (
        <>
          <SymetricalFrameworkComparisonSection {...modifiedProps} className="hidden sm:grid" />
          <StandardFrameworkComparisonSection {...modifiedProps} className="block sm:hidden" />
        </>
      ) : (
        <StandardFrameworkComparisonSection {...modifiedProps} />
      )}
    </section>
  );
};
