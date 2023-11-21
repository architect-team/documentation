import { HomeIcon } from '@heroicons/react/20/solid';
import React from 'react';

type IconHomeProps = {
  className?: string;
}

export default function IconHome(props: IconHomeProps) {
  return (
    <>
      <HomeIcon className={props.className} aria-hidden="true" />
      <span className="sr-only">Home</span>
    </>
  );
}
