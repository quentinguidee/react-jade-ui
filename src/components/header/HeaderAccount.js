import React, { Component } from 'react'
import styles from './sass/header.sass'

export default class HeaderAccount extends Component {
  render() {
    return (
      <div
        className={
          styles.account + ' ' + (this.props.hide ? styles.accountHidden : '')
        }
      >
        <div className={styles.account__username}>{this.props.username}</div>
        <img
          className={styles.account__image}
          alt='profile'
          src={this.props.image}
        />
      </div>
    )
  }
}
