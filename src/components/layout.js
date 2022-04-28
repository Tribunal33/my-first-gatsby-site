import * as React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import {container, heading, navLinks, navLinkItem, navLinkText, siteTitle} from './layout.module.css'

const Layout = ({pageTitle, children}) => {
    const data = useStaticQuery(graphql `
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
    const siteTitleText = data.site.siteMetadata.title;
      console.log("Here is the Query Data : " + data.site.siteMetadata.title);
    return (
        <div className={container}>
            <title>{pageTitle} | {siteTitleText}</title>
            <header className={siteTitle}>{siteTitleText}</header>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText}>Home</Link>                        
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/about" className={navLinkText}>About Me</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/blog" className={navLinkText}>Blog</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                <link href="../images/icon.png" type="image/x-icon" rel="shortcut icon"></link>
                {children}
            </main>
        </div>
    )
}

export default Layout