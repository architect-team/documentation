import React, { PropsWithChildren, useEffect, useState } from 'react';
import clsx from 'clsx';
import { useThemeConfig } from '@docusaurus/theme-common';
import { useHideableNavbar, useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';
import NavbarMobileSidebar from '@theme/Navbar/MobileSidebar';
import styles from './styles.module.css';

function NavbarBackdrop(props) {
  return (
    <div
      role="presentation"
      {...props}
      className={clsx('navbar-sidebar__backdrop', props.className)}
    />
  );
}

export type NavbarLayoutProps = PropsWithChildren<{
  className?: string;
}>;

export default function NavbarLayout(props: NavbarLayoutProps) {
  const {
    navbar: { hideOnScroll, style },
  } = useThemeConfig();
  const mobileSidebar = useNavbarMobileSidebar();
  const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll);
  const [isScrolledToTop, setIsScrolledToTop] = useState(true);

  useEffect(() => {
    const onScroll = (e) => {
      if (isScrolledToTop && e.target.documentElement.scrollTop > 10) {
        setIsScrolledToTop(false);
      } else if (!isScrolledToTop && e.target.documentElement.scrollTop <= 10) {
        setIsScrolledToTop(true);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

  return (
    <div
      className={clsx(
        'transition duration-700 ease-in-out sticky top-0 w-full z-10',
        hideOnScroll && [styles.navbarHideable, !isNavbarVisible && styles.navbarHidden],
        {
          'bg-transparent': isScrolledToTop,
          'bg-white dark:bg-slate-blue-700': !isScrolledToTop,
        },
        props.className
      )}
    >
      <nav
        id="navbar"
        ref={navbarRef}
        aria-label={translate({
          id: 'theme.NavBar.navAriaLabel',
          message: 'Main',
          description: 'The ARIA label for the main navigation',
        })}
        className={clsx('container mx-auto h-16 shadow-none navbar bg-transparent', {
          dark: style === 'dark',
          'navbar--primary': style === 'primary',
          'navbar-sidebar--show': mobileSidebar.shown,
        })}
      >
        {props.children}
        <NavbarBackdrop onClick={mobileSidebar.toggle} />
        <NavbarMobileSidebar />
      </nav>
    </div>
  );
}
