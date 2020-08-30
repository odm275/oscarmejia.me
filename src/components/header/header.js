import React from "react"

import PropTypes from "prop-types"
import MobilePageLinks from "./MobilePageLinks"
import "./header.css"

const Header = ({ siteTitle, tagline, author, contacts }) => {

  return (
    <header
      className="head-main"
      style={{
        background: `black`
      }}
    >
      <MobilePageLinks />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
