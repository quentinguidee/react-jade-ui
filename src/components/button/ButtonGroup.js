import React, { Component } from 'react'
import styles from './sass/button.sass'

export default class ButtonGroup extends Component {
  render() {
    return (
      <div className={`${styles.buttonGroup} ${this.props.className}`}>
        {this.props.children}
      </div>
    )
  }
}
