import * as icons from '@heroicons/react/24/outline';
import React from 'react';

export const HeroIconOutline = ({ icon, ...props }) => {
  const Icon = icons[icon];
  if (!Icon) {
    console.error('Could not find icon: ', icon);
    return undefined;
  }
  return <Icon aria-hidden="true" {...props} />;
};
