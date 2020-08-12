import React, { Component } from 'react'
import styles from './sass/button.sass'
import { Link } from 'react-router-dom'

class Button extends Component {
  render() {
    let component
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

    if (this.props.to) {
      component = (
        <Link to={this.props.to} {...props}>
          {this.props.children}
        </Link>
      )
    } else if (this.props.href) {
      component = (
        <a href={this.props.href} {...props}>
          {this.props.children}
        </a>
      )
    } else {
      component = <div {...props}>{this.props.children}</div>
    }

    return component
  }
}

export { Button }
