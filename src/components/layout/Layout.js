import * as React from "react"

import {Link} from 'gatsby'

import {navBar, navItem, center, contentWrapper} from './layout.module.css'

// markup
const layout = ({children, pageTitle}) => {
    return (
      <main>
        <title className={center}>{pageTitle}</title>
        <h1 className={center}>{pageTitle}</h1>
        <nav>
          <ul className={navBar}>
            <li className={navItem}><Link to="/">Home page</Link></li>
            <li className={navItem}><Link to="/about">About page</Link></li>
          </ul>
        </nav>
        <div className={contentWrapper}>
          {children}
        </div>
      </main>
    )
  }
  
export default layout