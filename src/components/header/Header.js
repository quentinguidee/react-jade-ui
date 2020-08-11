import React, { Component } from 'react'
import styles from './sass/header.sass'
import HeaderLink from './HeaderLink'
import HeaderSpacer from './HeaderSpacer'

class Header extends Component {
  render() {
    return <header className={styles.header}>{this.props.children}</header>
  }
}

export { Header, HeaderLink, HeaderSpacer }
