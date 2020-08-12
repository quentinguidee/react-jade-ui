import React, { Component } from 'react'

import {
  Header,
  HeaderLinks,
  HeaderLink,
  HeaderSpacer,
  HeaderLogo,
  HeaderSeparator,
  HeaderAccount,
  HeaderHamburger
} from 'react-jade-ui'
import 'react-jade-ui/dist/index.css'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

class Example extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpened: false
    }

    this.openHamburger = this.openHamburger.bind(this)
    this.closeHamburger = this.closeHamburger.bind(this)
  }

  openHamburger() {
    this.setState({ isOpened: !this.state.isOpened })
  }

  closeHamburger() {
    this.setState({ isOpened: false })
  }

  render() {
    return (
      <Header isOpened={this.state.isOpened}>
        <HeaderLogo>Logo</HeaderLogo>
        <HeaderSpacer />
        <HeaderLinks>
          <HeaderLink onClick={this.closeHamburger} to='/first'>
            First Page
          </HeaderLink>
          <HeaderLink onClick={this.closeHamburger} icon='add' to='/second'>
            Second Page
          </HeaderLink>
          <HeaderSeparator />
          <HeaderLink
            onClick={this.closeHamburger}
            href='https://github.com'
            isExternalLink
            red
          >
            Third Page
          </HeaderLink>
          <HeaderAccount username='Quentin' image='https://picsum.photos/32' />
        </HeaderLinks>
        <HeaderHamburger onClick={this.openHamburger} />
      </Header>
    )
  }
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/' component={Example}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
