import React, { Suspense } from "react";
import { ReactNode, useEffect } from "react";
import Router from 'next/router';
import { useSelector } from 'react-redux';
import { selectAuth } from 'libs/slice';
import dynamic from 'next/dynamic';

interface LayoutProps {
  children: ReactNode,
}

const DynamicNav = dynamic(() => import('components/Nav'), {
  suspense: true,
});

const Layout = ({ children }: LayoutProps) => {
  const authenticated = useSelector(selectAuth);
  const path = window.location.pathname;

  useEffect(() => {
    if (!authenticated && path !== '/auth/login') {
      Router.push('/auth/login');
    }
  }, [window.location.pathname]);

  return (
    <>
      {authenticated ? 
      <Suspense>
        <DynamicNav />
      </Suspense> : 
      <></>}
      <main>
        {authenticated || path === '/auth/login' ? children : <></>}
      </main>
    </>
  );
};

export default Layout;