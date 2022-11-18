import { ReactNode } from "react"
import NavBar from "../nav/Nav"

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