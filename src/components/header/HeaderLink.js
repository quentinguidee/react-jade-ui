import React, { Component } from 'react'
import styles from './sass/header.sass'

export default class HeaderLink extends Component {
  render() {
    return <div className={styles.link}>{this.props.children}</div>
  }
}
