import React, { Component } from 'react'
import styles from './sass/popup.sass'

class PopupTitle extends Component {
  render() {
    return <h4 className={styles.title}>{this.props.children}</h4>
  }
}

class PopupText extends Component {
  render() {
    return <p className={styles.text}>{this.props.children}</p>
  }
}

class PopupActions extends Component {
  render() {
    return <div className={styles.actions}>{this.props.children}</div>
  }
}

class Popup extends Component {
  render() {
    return (
      <div style={{ display: this.props.hidden ? 'none' : '' }}>
        <div className={styles.background} />
        <div className={styles.popup}>{this.props.children}</div>
      </div>
    )
  }
}

export { Popup, PopupTitle, PopupText, PopupActions }
