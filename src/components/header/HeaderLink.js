import React, { Component } from 'react'
import styles from './sass/header.sass'
import { NavLink } from 'react-router-dom'

export default class HeaderLink extends Component {
  render() {
    return (
      <NavLink
        to={this.props.to}
        onClick={this.props.onClick}
        className={styles.link + ' ' + (this.props.red ? styles.linkRed : '')}
        activeClassName={styles.linkActive}
        exact
      >
        {this.props.children}
      </NavLink>
    )
  }
}
