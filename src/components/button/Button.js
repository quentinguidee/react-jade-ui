import React, { Component } from 'react'
import styles from './sass/button.sass'
import { Link } from 'react-router-dom'

import ButtonsGroup from './ButtonsGroup'

class Button extends Component {
  constructor(props) {
    super(props)

    this.renderLeftIcon = this.renderLeftIcon.bind(this)
    this.renderRightIcon = this.renderRightIcon.bind(this)

    this.renderContent = this.renderContent.bind(this)
  }

  renderLeftIcon(icon) {
    if (icon) {
      return (
        <i className={`${styles.icon} ${styles.iconLeft} ${'material-icons'}`}>
          {icon}
        </i>
      )
    }
  }

  renderRightIcon(icon) {
    if (icon) {
      return (
        <i className={`${styles.icon} ${styles.iconRight} ${'material-icons'}`}>
          {icon}
        </i>
      )
    }
  }

  renderContent() {
    return (
      <React.Fragment>
        {this.renderLeftIcon(this.props.leftIcon)}
        {this.props.children}
        {this.renderRightIcon(this.props.rightIcon)}
      </React.Fragment>
    )
  }

  render() {
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

    let component
    if (this.props.to) {
      component = (
        <Link to={this.props.to} {...props}>
          {this.renderContent()}
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
          {this.renderContent()}
        </a>
      )
    } else {
      component = <div {...props}>{this.renderContent()}</div>
    }

    return component
  }
}

export { Button, ButtonsGroup }
