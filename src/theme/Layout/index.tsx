import React from 'react';
import clsx from 'clsx';
import ErrorBoundary from '@docusaurus/ErrorBoundary';
import {
  PageMetadata,
  SkipToContentFallbackId,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import {useKeyboardNavigation} from '@docusaurus/theme-common/internal';
import SkipToContent from '@theme/SkipToContent';
import AnnouncementBar from '@theme/AnnouncementBar';
import Navbar from '@theme/Navbar';
import Footer from '@theme/Footer';
import LayoutProvider from '@theme/Layout/Provider';
import ErrorPageContent from '@theme/ErrorPageContent';
import styles from './styles.module.css';

export type LayoutProps = React.PropsWithChildren<{
  noFooter?: boolean;
  wrapperClassName?: string;
  navbarClassName?: string;
  title?: string;
  description?: string;
  background?: JSX.Element;
}>;

export default function Layout(props: LayoutProps) {
  const {
    children,
    noFooter,
    wrapperClassName,
    navbarClassName,
    // Not really layout-related, but kept for convenience/retro-compatibility
    title,
    description,
    background,
  } = props;

  useKeyboardNavigation();

  return (
    <LayoutProvider>
      {background}

      <PageMetadata title={title} description={description} />

      <SkipToContent />

      <AnnouncementBar />

      <Navbar className="bg-white dark:bg-slate-blue-700" />

      <div
        id={SkipToContentFallbackId}
        className={clsx(
          ThemeClassNames.wrapper.main,
          styles.mainWrapper,
          wrapperClassName,
        )}>
        <ErrorBoundary fallback={(params) => <ErrorPageContent {...params} />}>
          {children}
        </ErrorBoundary>
      </div>

      {!noFooter && <Footer />}
    </LayoutProvider>
  );
}
