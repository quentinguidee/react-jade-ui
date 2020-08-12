import React, { Component } from 'react'
import styles from './sass/header.sass'

export default class HeaderLinks extends Component {
  render() {
    return <div className={styles.links}>{this.props.children}</div>
  }
}
