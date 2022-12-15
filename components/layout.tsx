import React from "react";
import { ReactNode, useEffect } from "react";
import Router from 'next/router';
import { useSelector } from 'react-redux';
import { selectAuth } from 'libs/slice';
import dynamic from 'next/dynamic';

interface LayoutProps {
  children: ReactNode,
}

const DynamicNav = dynamic(async () => {
  const Nav = await import('components/Nav');
  return Nav;
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
      {authenticated ? <DynamicNav /> : <></>}
      <main>
        {authenticated || path === '/auth/login' ? children : <></>}
      </main>
    </>
  );
};

export default Layout;