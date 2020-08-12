import React, { Component } from 'react'
import styles from './sass/button.sass'
import { Link } from 'react-router-dom'

import ButtonGroup from './ButtonGroup'

class Button extends Component {
  render() {
    let component
    let leftIcon
    let rightIcon
    const props = {
      className: `
        ${styles.button}
        ${this.props.className}
        ${this.props.blue ? styles.blue : ''}
        ${this.props.outline ? styles.outline : ''}
        ${this.props.disabled ? styles.disabled : ''}
        ${this.props.loading ? styles.loading : ''}
        ${this.props.big ? styles.big : ''}`,
      onClick: this.props.onClick
    }

    if (this.props.rightIcon) {
      rightIcon = (
        <i className={`${styles.icon} ${styles.iconRight} ${'material-icons'}`}>
          {this.props.rightIcon}
        </i>
      )
    }

    if (this.props.leftIcon) {
      leftIcon = (
        <i className={`${styles.icon} ${styles.iconLeft} ${'material-icons'}`}>
          {this.props.leftIcon}
        </i>
      )
    }

    if (this.props.to) {
      component = (
        <Link to={this.props.to} {...props}>
          {leftIcon}
          {this.props.children}
          {rightIcon}
        </Link>
      )
    } else if (this.props.href) {
      let external

      if (this.props.isExternalLink) {
        external = {
          target: '_blank',
          rel: 'noopener noreferrer'
        }
      }

      component = (
        <a href={this.props.href} {...props} {...external}>
          {leftIcon}
          {this.props.children}
          {rightIcon}
        </a>
      )
    } else {
      component = (
        <div {...props}>
          {leftIcon}
          {this.props.children}
          {rightIcon}
        </div>
      )
    }

    return component
  }
}

export { Button, ButtonGroup }
