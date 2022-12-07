import { ReactNode } from "react"
import NavBar from "./Nav"

interface LayoutProps {
    children: ReactNode,
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  )
}

export default Layout