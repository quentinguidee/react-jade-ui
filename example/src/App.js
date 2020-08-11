import React from 'react'

import { Header, HeaderLink, HeaderSpacer } from 'react-jade-ui'
import 'react-jade-ui/dist/index.css'

const App = () => {
  return (
    <Header>
      <HeaderSpacer />
      <HeaderLink>Lien 1</HeaderLink>
      <HeaderLink>Lien 2</HeaderLink>
    </Header>
  )
}

export default App
