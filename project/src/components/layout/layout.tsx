import React from 'react';
import Header from '../header/header';
import { Helmet } from 'react-helmet-async';

type LayoutProps = {
  pageTitle: string;
  className?: string;
  children: React.ReactNode;
}

function Layout({ pageTitle, className = '', children }: LayoutProps): JSX.Element {
  return (
    <div className={`page ${className}`}>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
