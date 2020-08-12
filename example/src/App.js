import React, { Component } from 'react'

import {
  Header,
  HeaderLinks,
  HeaderLink,
  HeaderSpacer,
  HeaderLogo,
  HeaderSeparator,
  HeaderAccount
} from 'react-jade-ui'
import 'react-jade-ui/dist/index.css'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

class Example extends Component {
  render() {
    return (
      <Header>
        <HeaderLogo>Logo</HeaderLogo>
        <HeaderSpacer />
        <HeaderLinks>
          <HeaderLink to='/first'>First Page</HeaderLink>
          <HeaderLink to='/second'>Second Page</HeaderLink>
          <HeaderSeparator />
          <HeaderLink href='https://github.com' red>
            Third Page
          </HeaderLink>
          <HeaderAccount username='Quentin' image='https://picsum.photos/32' />
        </HeaderLinks>
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
