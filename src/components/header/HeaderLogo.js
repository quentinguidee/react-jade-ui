import React, { Component } from 'react'
import styles from './sass/header.sass'
import { NavLink } from 'react-router-dom'

export default class HeaderLogo extends Component {
  render() {
    return (
      <NavLink to='/' className={`${styles.logo} ${this.props.className}`}>
        {this.props.children}
      </NavLink>
    )
  }
}
