import React, { Component } from 'react'

import {
  Header,
  HeaderLink,
  HeaderSpacer,
  HeaderLogo,
  HeaderSeparator
} from 'react-jade-ui'
import 'react-jade-ui/dist/index.css'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

class Example extends Component {
  render() {
    return (
      <Header>
        <HeaderLogo>Logo</HeaderLogo>
        <HeaderSpacer />
        <HeaderLink to='/first'>First Page</HeaderLink>
        <HeaderLink to='/second'>Second Page</HeaderLink>
        <HeaderSeparator />
        <HeaderLink to='/third' red>
          Third Page
        </HeaderLink>
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
