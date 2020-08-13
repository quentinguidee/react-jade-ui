import React, { Component } from 'react'
import styles from './sass/header.sass'
import classNames from 'classnames'

import HeaderLinks from './HeaderLinks'
import HeaderLink from './HeaderLink'
import HeaderSpacer from './HeaderSpacer'
import HeaderLogo from './HeaderLogo'
import HeaderSeparator from './HeaderSeparator'
import HeaderAccount from './HeaderAccount'
import HeaderHamburger from './HeaderHamburger'

class Header extends Component {
  render() {
    return (
      <header
        className={classNames({
          [styles.header]: true,
          [styles.headerOpened]: this.props.isOpened,
          [this.props.className]: true
        })}
      >
        {this.props.children}
      </header>
    )
  }
}

export {
  Header,
  HeaderLinks,
  HeaderLink,
  HeaderSpacer,
  HeaderLogo,
  HeaderSeparator,
  HeaderAccount,
  HeaderHamburger
}
