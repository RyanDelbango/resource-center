import { ReactNode, useEffect } from "react"
import Router from 'next/router'
import NavBar from "./Nav"
import { useSelector } from 'react-redux'
import { selectAuth } from '../libs/slice';

interface LayoutProps {
  children: ReactNode,
}

const Layout = ({ children }: LayoutProps) => {
  const authenticated = useSelector(selectAuth);
  const path = window.location.pathname;

  useEffect(() => {
    if (!authenticated && path !== '/auth/login') {
      Router.push('/auth/login')
    }
  }, [window.location.pathname]);

  return (
    <>
      {authenticated ? <NavBar /> : <></>}
      <main>
        {authenticated || path === '/auth/login' ? children : <></>}
      </main>
    </>
  )
}

export default Layout