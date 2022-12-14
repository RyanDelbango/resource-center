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

  useEffect(() => {
    if (!authenticated && window.location.pathname !== '/auth/login') {
      Router.push('/auth/login')
    }
  }, [window.location.pathname]);

  return (
    <>
      {authenticated ? <NavBar /> : <></>}
      <main>{children}</main>
    </>
  )
}

export default Layout