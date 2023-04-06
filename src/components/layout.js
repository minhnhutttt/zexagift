/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from '@reach/router'
import Header from "./header/header"
import Footer from "./footer/footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const location = useLocation()
  const front = location.pathname === '/cartin' || location.pathname === '/'

  return (
    <div className={`${front ? 'front' : ''}`}>
      <Header />
        <main className="main">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
