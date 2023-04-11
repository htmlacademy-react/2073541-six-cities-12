import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../header/header';

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
