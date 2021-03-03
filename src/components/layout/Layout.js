import * as React from "react"

import {Link} from 'gatsby'

import {navBar, navItem, center, contentWrapper} from './layout.module.css'

import Header from '../header/header'






// markup
const layout = ({children, pageTitle}) => {

  return (
    <main>
      <title className={center}>{pageTitle}</title>
      <div className={center}>
        <Header/>
      </div>
      <nav>
        <ul className={navBar}>
          <li className={navItem}><Link to="/">Home page</Link></li>
          <li className={navItem}><Link to="/about">About page</Link></li>
          <li className={navItem}> <Link to="/blog">Blog</Link></li>
        </ul>
      </nav>
      <div className={contentWrapper}>
        {children}
      </div>
    </main>
  )
}


export default layout