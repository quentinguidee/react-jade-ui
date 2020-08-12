import React, { Component } from 'react'
import styles from './sass/header.sass'
import { NavLink } from 'react-router-dom'

export default class HeaderLink extends Component {
  constructor(props) {
    super(props)

    this.renderIcon = this.renderIcon.bind(this)

    this.renderContent = this.renderContent.bind(this)
  }

  renderContent() {
    return (
      <React.Fragment>
        {this.props.children}
        {this.renderIcon(this.props.icon)}
      </React.Fragment>
    )
  }

  renderIcon(icon) {
    if (icon) {
      return (
        <i className={'material-icons-round ' + styles.link__icon}>{icon}</i>
      )
    }
  }

  render() {
    var component
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

    if (this.props.to) {
      component = (
        <NavLink
          to={this.props.to}
          activeClassName={styles.linkActive}
          {...props}
          exact
        >
          {this.renderContent()}
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
          {this.renderContent()}
        </a>
      )
    }

    return component
  }
}
