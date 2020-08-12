import React, { Component } from 'react'
import styles from './sass/header.sass'
import { NavLink } from 'react-router-dom'

export default class HeaderLink extends Component {
  render() {
    var component
    var icon
    var props = {
      onClick: this.props.onClick,
      className:
        styles.link +
        ' ' +
        (this.props.red ? styles.linkRed : '') +
        ' ' +
        (this.props.hide ? styles.linkHidden : ''),
      exact: true
    }

    if (this.props.icon) {
      icon = (
        <i className={'material-icons-round ' + styles.link__icon}>
          {this.props.icon}
        </i>
      )
    }

    if (this.props.to) {
      component = (
        <NavLink
          to={this.props.to}
          activeClassName={styles.linkActive}
          {...props}
          exact
        >
          {this.props.children}
          {icon}
        </NavLink>
      )
    } else {
      var external = {}

      if (this.props.isExternalLink) {
        external = {
          target: '_blank',
          rel: 'noopener noreferrer'
        }
      }

      component = (
        <a href={this.props.href} {...props} {...external}>
          {this.props.children}
          {icon}
        </a>
      )
    }

    return component
  }
}
