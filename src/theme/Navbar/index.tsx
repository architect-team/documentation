import React from 'react';
import NavbarLayout from '@theme/Navbar/Layout';
import NavbarContent from '@theme/Navbar/Content';
import type { NavbarLayoutProps } from './Layout';

export default function Navbar(props: NavbarLayoutProps) {
  return (
    <NavbarLayout {...props}>
      <NavbarContent />
    </NavbarLayout>
  );
}
